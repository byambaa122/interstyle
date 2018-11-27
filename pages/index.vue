<template>
    <div>
        <v-parallax
            src="/images/home.jpg"
            height="500"
        ></v-parallax>
        <!-- Features -->
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex v-for="(item, i) in features" :key="i" xs12 sm6 md4>
                    <Feature
                        :icon="item.icon"
                        :title="item.title"
                        :body="item.body"
                    />
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Categories -->
        <v-container
            class="pa-0 my-5"
            grid-list-sm
            fluid
        >
            <v-layout row wrap>
                <v-flex v-for="(item, i) in productCategories" :key="i" xs12 sm6 md4 lg3>
                    <Category
                        :id="item.id"
                        :name="item.name"
                        :products-count="item.productsCount"
                        :image="item.image"
                    />
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Products -->
        <v-container grid-list-lg>
            <div class="headline text-uppercase text-xs-center my-5">
                Бүтээгдэхүүн
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in products" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        :id="item.id"
                        :code="item.code"
                        :image="item.images[0]"
                        :price="item.price"
                    />
                </v-flex>
            </v-layout>
            <!-- Read more button -->
            <div class="text-xs-center text-sm-right mt-4">
                <v-btn
                    to="/products"
                    large
                    outline
                    round
                    nuxt
                >
                    Цааш үзэх
                    <v-icon
                        class="hidden-xs-only"
                        right
                    >
                        mdi-arrow-right
                    </v-icon>
                </v-btn>
            </div>
        </v-container>
        <!-- Products -->
        <v-container grid-list-lg>
            <div class="headline text-uppercase text-xs-center my-5">
                Туслах материал
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in materials" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        :id="item.id"
                        :code="item.code"
                        :image="item.images[0]"
                        :price="item.price"
                    />
                </v-flex>
            </v-layout>
            <!-- Read more button -->
            <div class="text-xs-center text-sm-right mt-5">
                <v-btn
                    to="/materials"
                    large
                    outline
                    round
                    nuxt
                >
                    Цааш үзэх
                    <v-icon
                        class="hidden-xs-only"
                        right
                    >
                        mdi-arrow-right
                    </v-icon>
                </v-btn>
            </div>
        </v-container>
        <!-- Customer comments -->
        <Slider
            :items="quotes"
            class="my-5"
        >
            <template
                slot="items"
                slot-scope="{ item }"
            >
                <v-layout
                    justify-center
                    row
                >
                    <v-flex xs12 sm10 md8 lg4>
                        <Quote
                            :name="item.name"
                            :body="item.body"
                        />
                    </v-flex>
                </v-layout>
            </template>
        </Slider>
    </div>
</template>

<script>
import {
    Category,
    Feature,
    Product,
    Quote,
    Slider
} from '~/components'

export default {
    components: {
        Category,
        Feature,
        Product,
        Quote,
        Slider
    },
    async asyncData({ app }) {
        // Get all quotes
        const { quotes } = await app.$axios.$get('quotes')
        // Get all features
        const { features } = await app.$axios.$get('features')
        // Get special products
        const { products } = await app.$axios.$get('special/products')
        // Get special materials
        const { materials } = await app.$axios.$get('special/materials')
        // Get all product categories
        const { productCategories } = await app.$axios.$get('product/categories')

        console.log(productCategories)

        return {
            quotes,
            features,
            productCategories,
            products,
            materials
        }
    }
}
</script>
