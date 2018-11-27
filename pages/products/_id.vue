<template>
    <div>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 md6 lg4>
                    <h1 class="display-1 font-weight-light">
                        LB0214
                    </h1>
                    <v-divider
                        class="my-3"
                        width="70"
                    ></v-divider>
                    <p class="subheading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat magna imperdiet, in auctor.
                    </p>
                    <v-layout row>
                        <v-flex>
                            <v-text-field
                                label="Урт"
                                value="1200"
                                hint="мм"
                                persistent-hint
                                outline
                            ></v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                label="Өргөн"
                                value="600"
                                hint="мм"
                                persistent-hint
                                outline
                            ></v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                label="Өндөр"
                                value="650"
                                hint="мм"
                                persistent-hint
                                outline
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <div class="headline mt-2">
                        299,000
                        <span class="body-1 grey-text text--darken-1">
                            MNT
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12 md6 lg8>
                    <v-responsive :aspect-ratio="16/9">
                        <v-carousel
                            height="auto"
                            hide-delimiters
                        >
                            <v-carousel-item
                                v-for="(image, i) in product.images"
                                :key="i"
                                :src="image"
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
                <v-flex v-for="(item, i) in suggests" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        class="mb-3"
                        :id="item.id"
                        :code="item.code"
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
    price: '',
    images: [
        '/images/products/1.jpg',
        '/images/products/2.jpg'
    ]
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
                    code: 'LB0214',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                }
            ]
        }
    }
}
</script>
