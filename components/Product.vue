<template>
    <v-card
        :to="url(id)"
        tile
        flat
        nuxt
    >
        <!-- Image -->
        <v-img
            :aspect-ratio="16/9"
            :src="`${baseUrl}/${image}?w=400`"
        ></v-img>
        <v-container
            class="pa-0"
            fluid
        >
            <v-layout
                fill-height
                align-center
                row
            >
                <v-flex>
                    <div class="my-2">
                        <div class="grey--text text--darken-1 font-weight-light">
                            Код
                        </div>
                        <div class="subheading font-weight-medium">
                            {{ code }}
                        </div>
                    </div>
                </v-flex>
                <v-flex>
                    <!-- Price -->
                    <div class="title font-weight-regular text-xs-right">
                        {{ price | format }}
                        <!-- Currency symbol -->
                        <span class="caption grey--text text--darken-1">
                            MNT
                        </span>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: [String, Number],
            required: true
        },
        isMaterial: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            baseUrl: process.env.BASE_URL
        }
    },
    methods: {
        url(id) {
            return this.isMaterial
                ? `/materials/${id}`
                : `/products/${id}`
        }
    }
}
</script>
