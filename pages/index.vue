<template>
    <div>
        <!-- <v-img
            src="/images/attachment.png"
            position="right bottom"
            height="500"
            contain
        ></v-img> -->
        <v-parallax
            src="/images/home.jpg"
            height="500"
        ></v-parallax>
        <!-- Features -->
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex v-for="(item, i) in features" :key="i" xs12 sm6 md4>
                    <FeatureItem
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
                    <Category
                        :id="item.id"
                        :title="item.title"
                        :products-count="17"
                        :image="item.image"
                    />
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Products -->
        <v-container grid-list-lg>
            <div class="headline text-uppercase my-5">
                Бүтээгдэхүүн
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in products" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        class="mb-3"
                        :id="item.id"
                        :name="item.name"
                        :image-src="item.image"
                        :price="item.price"
                    />
                </v-flex>
            </v-layout>
            <!-- Read more button -->
            <div class="text-xs-center text-sm-right mt-4">
                <v-btn
                    to="/products"
                    nuxt
                    large
                    outline
                    round
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
            <div class="headline text-uppercase my-5">
                Туслах материал
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in materials" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        class="mb-3"
                        :id="item.id"
                        :name="item.name"
                        :image-src="item.image"
                        :price="item.price"
                    />
                </v-flex>
            </v-layout>
            <!-- Read more button -->
            <div class="text-xs-center text-sm-right mt-4">
                <v-btn
                    to="/materials"
                    nuxt
                    large
                    outline
                    round
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
            :items="reviews"
            class="my-5"
        >
            <template slot="items" slot-scope="{ item }">
                <v-layout row justify-center>
                    <v-flex xs12 sm10 md8 lg4>
                        <CustomerReview
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
import Product from '~/components/Product'
import Category from '~/components/Category'
import CustomerReview from '~/components/CustomerReview'
import FeatureItem from '~/components/FeatureItem'
import Slider from '~/components/Slider'

export default {
    components: {
        Product,
        FeatureItem,
        Category,
        CustomerReview,
        Slider,
    },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    title: 'Буйдан',
                    image: '/images/products/1.jpg'
                },
                {
                    id: 1,
                    title: 'Унтлагын ор',
                    image: '/images/products/2.jpg'
                },
                {
                    id: 1,
                    title: 'Давхар ор',
                    image: '/images/products/3.jpg'
                },
                {
                    id: 1,
                    title: 'Ажлын ширээ',
                    image: '/images/products/4.jpg'
                },
                {
                    id: 1,
                    title: 'Хүүхдийн ширээ',
                    image: '/images/products/5.jpg'
                },
                {
                    id: 1,
                    title: 'Хоолны ширээ, сандал',
                    image: '/images/products/1.jpg'
                },
                {
                    id: 1,
                    title: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg'
                },
                {
                    id: 1,
                    title: 'Гал тогоо',
                    image: '/images/products/3.jpg'
                }
            ],
            products: [
                {
                    id: 1,
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                }
            ],
            materials: [
                {
                    id: 1,
                    name: 'Хавтан',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Нарсан хавтан',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хаалганы нугас',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'ДСП хавтан',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хавтан',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Нарсан хавтан',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хаалганы нугас',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'ДСП хавтан',
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
