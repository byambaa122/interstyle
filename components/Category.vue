<template>
    <v-hover>
        <v-card
            :to="url(id)"
            :class="{ 'active': hover }"
            slot-scope="{ hover }"
            nuxt
            flat
            tile
        >
            <!-- Image -->
            <v-img
                :src="`${baseUrl}/${image}?w=500`"
                :aspect-ratio="16/9"
                :gradient="gradient"
            >
                <v-layout
                    class="white--text pa-4"
                    fill-height
                    column
                >
                    <!-- Spacer -->
                    <v-spacer></v-spacer>
                    <v-flex shrink>
                        <v-layout fill-height row>
                            <v-flex>
                                <!-- Description -->
                                <div class="subheading grey--text text--lighten-2 font-weight-light">
                                    {{ productsCount }} тавилга
                                </div>
                                <!-- Name -->
                                <div class="headline font-weight-bold">
                                    {{ name }}
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-img>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        productsCount: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            baseUrl: process.env.BASE_URL,
            gradient: 'to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.6) 100%'
        }
    },
    methods: {
        url(id) {
            return `/products/categories/${id}`
        }
    }
}
</script>
