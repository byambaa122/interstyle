<template>
    <div>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 md6 lg4>
                    <!-- Code -->
                    <h1 class="display-1 font-weight-light">
                        {{ material.code }}
                    </h1>
                    <v-divider
                        class="my-3"
                        width="70"
                    ></v-divider>
                    <!-- Description -->
                    <p class="subheading">
                        {{ material.description }}
                    </p>
                    <!-- Category -->
                    <v-chip
                        class="mx-0"
                        color="teal"
                        text-color="white"
                        disabled
                        label
                    >
                        <b>{{ material.materialCategory.name }}</b>
                    </v-chip>
                    <!-- Price -->
                    <div class="headline mt-4">
                        {{ material.price | format }}
                        <span class="body-1 grey-text text--darken-1">
                            MNT
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12 md6 lg8>
                    <!-- Slider -->
                    <v-responsive :aspect-ratio="16/9">
                        <v-carousel height="auto">
                            <!-- Slider item -->
                            <v-carousel-item
                                v-for="(image, i) in material.images"
                                :key="i"
                                :src="`${baseUrl}/${image}`"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-responsive>
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Suggested materials -->
        <v-container grid-list-lg>
            <div class="headline text-uppercase my-5">
                Санал болгох
            </div>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in materials" :key="i" xs12 sm6 md4 lg3>
                    <Product
                        :id="item.id"
                        :code="item.code"
                        :image="item.images[0]"
                        :price="item.price"
                        class="mb-3"
                        is-material
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
    data() {
        return {
            baseUrl: process.env.BASE_URL
        }
    },
    async asyncData({ app, params }) {
        // Get material
        const { material } = await app.$axios.$get(`materials/${params.id}`)
        // Get paginated materials
        const { materials } = await app.$axios.$get(`suggest/materials/${params.id}`)

        return {
            material,
            materials
        }
    }
}
</script>
