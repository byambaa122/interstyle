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
  async asyncData({ app, params }) {
    // Get paginated products
    const { data, total } = await app.$axios.$get('products', {
      params: {
        id: params.id
      }
    })
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
