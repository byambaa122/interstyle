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
    async asyncData({ app }) {
        // Get paginated products
        const { data, total, perPage } = await app.$axios.$get('products')
        // Get all product categories
        const { productCategories } = await app.$axios.$get('product/categories')

        return {
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
