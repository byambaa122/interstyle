<template>
    <div>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 md6 lg4 order-xs2 order-md1>
                    <!-- Code -->
                    <h1 class="display-1 font-weight-light">
                        {{ product.code }}
                    </h1>
                    <v-divider
                        class="my-3"
                        width="70"
                    ></v-divider>
                    <!-- Description -->
                    <p class="subheading">
                        {{ product.description }}
                    </p>
                    <!-- Category -->
                    <v-chip
                        class="mx-0"
                        color="teal"
                        text-color="white"
                        disabled
                        label
                    >
                        <b>{{ product.productCategory.name }}</b>
                    </v-chip>
                    <!-- Measure -->
                    <v-chip
                        class="mx-0"
                        color="orange"
                        text-color="white"
                        disabled
                        label
                    >
                        <b>{{ product.measure | measure }}</b>
                    </v-chip>
                    <!-- Price -->
                    <div class="headline mt-4">
                        {{ product.price | format }}
                        <span class="body-1 grey-text text--darken-1">
                            MNT
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12 md6 lg8 order-xs1 order-md2>
                    <!-- Slider -->
                    <v-responsive :aspect-ratio="16/9">
                        <v-carousel height="auto">
                            <!-- Slider item -->
                            <v-carousel-item
                                v-for="(image, i) in product.images"
                                :key="i"
                                :src="`${baseUrl}/${image}?w=800`"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-responsive>
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Suggested products -->
        <v-container grid-list-lg>
            <div class="headline text-uppercase my-5">
                Санал болгох
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in products" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        :id="item.id"
                        :code="item.code"
                        :image="item.images[0]"
                        :price="item.price"
                        class="mb-3"
                    />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { Product } from '~/components'

export default {
    components: {
        Product
    },
    validate({ query }) {
        // Must be a number
        return /^\d+$/.test(query.id)
    },
    watchQuery: [
        'id'
    ],
    data() {
        return {
            baseUrl: process.env.BASE_URL
        }
    },
    async asyncData({ app, query }) {
        // Get product
        const { product } = await app.$axios.$get(`products/${query.id}`)
        // Get paginated products
        const { products } = await app.$axios.$get(`suggest/products/${query.id}`)

        return {
            product,
            products
        }
    }
}
</script>
