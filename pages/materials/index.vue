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
    async asyncData({ app }) {
        // Get paginated materials
        const { data, total, perPage } = await app.$axios.$get('materials')
        // Get all material categories
        const { materialCategories } = await app.$axios.$get('material/categories')

        return {
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
