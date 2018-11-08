<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <!-- Categories -->
            <v-flex xs12 sm5 md4 lg3>
                <v-card
                    v-sticky="options"
                    flat
                    tile
                >
                    <v-list>
                        <template v-for="(category, i) in categories">
                            <v-list-tile
                                :to="url(category.id)"
                                :key="i"
                                avatar
                                nuxt
                            >
                                <!-- Icon -->
                                <v-list-tile-avatar>
                                    <v-icon v-text="category.icon"></v-icon>
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
                    <v-flex v-for="(item, i) in items" :key="i" xs12 md6 lg4>
                        <Product
                            class="mb-3"
                            :name="item.name"
                            :category="item.category"
                            :image-src="item.image"
                            :price="item.price"
                            :size="item.size"
                            :material="material"
                        />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <!-- Pagination -->
        <div class="text-xs-center my-5">
            <v-pagination
                :length="15"
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
            type: Array,
            default() {
                return []
            }
        },
        categories: {
            type: Array,
            default() {
                return []
            }
        },
        material: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            options: {
                zIndex: 2,
                stickyTop: 100,
                disabled: false
            }
        }
    },
    components: {
        Product
    },
    methods: {
        url(id) {
            const baseUrl = `/categories/${id}`

            return this.material
                ? `/materials/${baseUrl}`
                : `/products/${baseUrl}`
        }
    }
}
</script>
