<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <!-- Categories -->
            <v-flex xs12 sm5 md4 lg3>
                <v-card
                    flat
                    tile
                >
                    <v-list>
                        <template v-for="(category, i) in categories">
                            <v-list-tile
                                :to="url(category.id)"
                                :key="i"
                                avatar
                                exact
                                nuxt
                            >
                                <!-- Icon -->
                                <v-list-tile-avatar>
                                    <v-icon>
                                        {{ category.icon }}
                                    </v-icon>
                                </v-list-tile-avatar>
                                <!-- Name -->
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{ category.name }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <!-- Divider -->
                            <v-divider v-if="i !== categories.length - 1"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
            <!-- Products -->
            <v-flex xs12 sm7 md8 lg9>
                <v-layout row wrap>
                    <v-flex v-for="(item, i) in items.data" :key="i" xs12 md6 lg4>
                        <Product
                            :id="item.id"
                            :code="item.code"
                            :image="item.images[0]"
                            :price="item.price"
                            :is-material="isMaterial"
                            class="mb-3"
                        />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <!-- Pagination -->
        <div class="text-xs-center my-5">
            <v-pagination
                :length="pages"
                :total-visible="7"
                v-model="page"
                circle
            ></v-pagination>
        </div>
    </v-container>
</template>

<script>
import Product from '~/components/Product'

export default {
    props: {
        items: {
            type: Object,
            default() {
                return {}
            }
        },
        categories: {
            type: Array,
            default() {
                return []
            }
        },
        isMaterial: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Product
    },
    data() {
        return {
            page: 1
        }
    },
    watch: {
        page(value) {
            this.$emit('paginate', value)
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.items.total / this.items.perPage)
        }
    },
    methods: {
        url(id) {
            return this.isMaterial
                ? `/materials/categories/${id}`
                : `/products/categories/${id}`
        }
    }
}
</script>
