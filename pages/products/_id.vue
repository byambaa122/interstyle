<template>
    <div>
        <v-container grid-list-lg>
            
        </v-container>
        <!-- Suggested products -->
        <v-container grid-list-lg>
            <div class="headline text-uppercase my-5">
                Санал болгох
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in suggests" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        class="mb-3"
                        :id="item.id"
                        :name="item.name"
                        :image-src="item.image"
                        :price="item.price"
                    />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Product from '~/components/Product'

const defaultProduct = {
    id: '',
    name: '',
    price: ''
}

export default {
    components: {
        Product
    },
    data() {
        return {
            product: defaultProduct,
            suggests: [
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
            ]
        }
    }
}
</script>
