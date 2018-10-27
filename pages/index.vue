<template>
    <div>
        <!-- Features -->
        <v-container>
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
        <!-- Products -->
        <v-container grid-list-lg>
            <div class="page-title">
                Онцлох бүтээгдэхүүн
            </div>
            <v-layout>
                <v-flex v-for="(item, i) in products" xs12 sm6 md4 lg3>
                    <Product
                        :name="item.name"
                        :image-src="item.image"
                        :price="item.price"
                    />
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Customer comments -->
        <Slider
            :items="reviews"
            class="my-5"
        >
            <template slot="items" slot-scope="{ item }">
                <v-layout row justify-center>
                    <v-flex xs12 sm10 md8 lg4>
                        <Review
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
import Slider from '~/components/Slider'
import Product from '~/components/Product'
import Feature from '~/components/Feature'
import Review from '~/components/Review'

export default {
    components: {
        Slider,
        Product,
        Feature,
        Review
    },
    data() {
        return {
            features: [
                {
                    icon: 'mdi-trending-down',
                    title: 'Хямд үнэ',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim porta libero vel bibendum.'
                },
                {
                    icon: 'mdi-heart',
                    title: 'Сэтгэл ханамж',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim porta libero vel bibendum.'
                },
                {
                    icon: 'mdi-truck-fast',
                    title: 'Хүргэлт',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim porta libero vel bibendum.'
                }
            ],
            reviews: [
                {
                    name: 'А. Болд',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim porta libero vel bibendum. Fusce porttitor facilisis porta.'
                },
                {
                    name: 'Ж. Биндэръяа',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim porta libero vel bibendum. Fusce porttitor facilisis porta.'
                }
            ],
            products: [
                {
                    name: 'Ширээ',
                    image: '/images/products/1.jpg',
                    price: 'MNT 125,000'
                },
                {
                    name: 'Түшлэгтэй сандал',
                    image: '/images/products/2.jpg',
                    price: 'MNT 125,000'
                },
                {
                    name: 'Өргөн ор',
                    image: '/images/products/3.jpg',
                    price: 'MNT 125,000'
                },
                {
                    name: 'Өлгүүр',
                    image: '/images/products/4.jpg',
                    price: 'MNT 125,000'
                }
            ]
        }
    }
}
</script>
