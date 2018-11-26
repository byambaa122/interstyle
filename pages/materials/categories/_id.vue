<template>
    <List 
        :items="materials"
        :categories="materialCategories"
        is-material
    />
</template>

<script>
import { List } from '~/components'

export default {
  components: {
    List
  },
  async asyncData({ app, params }) {
    // Get paginated materials
    const { data, total } = await app.$axios.$get('materials', {
      params: {
        id: params.id
      }
    })
    // Get all material categories
    const { materialCategories } = await app.$axios.$get('material/categories')

    return {
      materialCategories,
      materials: {
        data,
        total
      }
    }
  }
}
</script>
