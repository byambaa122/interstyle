<template>
    <div>
        <v-container>
            <v-layout row>
                <v-flex xs12 sm6 class="pt-5">
                    <div class="display-2 font-weight-light mt-5">
                        Find roommates who <br> aren't assholes
                    </div>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-img
                        height="450"
                        src="/images/family.png"
                        position="right center"
                        contain
                    ></v-img>
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Make yourself at home -->
        <!-- Immerse yourself in creating your dream home. With our new Service, you can be sure that it will be perfect. -->
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
                <v-flex v-for="(item, i) in categories" :key="i" xs12 sm6 md4 lg3>
                    <Card
                        :title="item.title"
                        :image="item.image"
                        :url="item.url"
                    />
                </v-flex>
            </v-layout>
        </v-container>
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
            <div class="headline text-xs-center text-uppercase my-5">
                Онцлох бүтээгдэхүүн
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in products" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        class="mb-3"
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
import Card from '~/components/Card'
import Slider from '~/components/Slider'
import Product from '~/components/Product'
import Feature from '~/components/Feature'
import Review from '~/components/Review'

export default {
    components: {
        Card,
        Slider,
        Product,
        Feature,
        Review
    },
    data() {
        return {
            categories: [
                {
                    title: 'Буйдан',
                    image: '/images/products/1.jpg',
                    url: '#'
                },
                {
                    title: 'Унтлагын ор',
                    image: '/images/products/2.jpg',
                },
                {
                    title: 'Давхар ор',
                    image: '/images/products/3.jpg',
                },
                {
                    title: 'Ажлын ширээ',
                    image: '/images/products/4.jpg',
                },
                {
                    title: 'Хүүхдийн ширээ',
                    image: '/images/products/5.jpg',
                },
                {
                    title: 'Хоолны ширээ, сандал',
                    image: '/images/products/1.jpg',
                },
                {
                    title: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                },
                {
                    title: 'Гал тогоо',
                    image: '/images/products/3.jpg',
                }
            ],
            products: [
                {
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                }
            ],
            features: [
                {
                    icon: 'mdi-trending-down',
                    title: 'Хямд үнэ',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim porta libero vel bibendum.'
                },
                {
                    icon: 'mdi-thumb-up',
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
            ]
        }
    }
}
</script>
