<template>
    <List
        :items="products"
        :categories="productCategories"
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
        const { data, total } = await app.$axios.$get('products')
        // Get all product categories
        const { productCategories } = await app.$axios.$get('product/categories')

        return {
            productCategories,
            products: {
                data,
                total
            }
        }
    }
}
</script>
