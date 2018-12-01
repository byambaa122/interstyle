<template>
    <List 
        :items="materials"
        :categories="materialCategories"
        @paginate="fetchData"
        is-material
    />
</template>

<script>
import { List } from '~/components'

export default {
    components: {
        List
    },
    validate({ query }) {
        // Must be a number
        return /^\d+$/.test(query.id)
    },
    watchQuery: [
        'id'
    ],
    async asyncData({ app, query }) {
        // Get paginated materials
        const { data, total, perPage } = await app.$axios.$get('materials', {
            params: {
                id: query.id
            }
        })
        // Get all material categories
        const { materialCategories } = await app.$axios.$get('material/categories')

        return {
            id: query.id,
            materialCategories,
            materials: {
                data,
                perPage,
                total
            }
        }
    },
    methods: {
        async fetchData(page) {
            // Start loader
            this.$store.commit('loading')
            const { data, total, perPage } = await this.$axios.$get('materials', {
                params: {
                    id: this.id,
                    page
                }
            })

            // Stop loader
            this.$store.commit('done')
            // Set materials
            this.materials = {
                data,
                perPage,
                total
            }
        }
    }
}
</script>
