<template>
    <List 
        :items="products"
        :categories="productCategories"
        @paginate="fetchData"
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
        // Get paginated products
        const { data, total, perPage } = await app.$axios.$get('products', {
            params: {
                id: query.id
            }
        })
        // Get all product categories
        const { productCategories } = await app.$axios.$get('product/categories')

        return {
            id: query.id,
            productCategories,
            products: {
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
            const { data, total, perPage } = await this.$axios.$get('products', {
                params: {
                    id: this.id,
                    page
                }
            })

            // Stop loader
            this.$store.commit('done')
            // Set products
            this.products = {
                data,
                perPage,
                total
            }
        }
    }
}
</script>
