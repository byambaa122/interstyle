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
            :src="imageSrc"
            contain
        ></v-img>
        <!-- Product name -->
        <div class="subheading mt-2">
            {{ name }}
        </div>
        <!-- Product price -->
        <div class="subheading grey--text text--darken-1">
            {{ price }}
            <!-- Currency symbol -->
            <span class="caption">
                MNT
            </span>
        </div>
    </v-card>
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
        imageSrc: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        material: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        url(id) {
            return this.material
                ? `/materials/${id}`
                : `/products/${id}`
        }
    }
}
</script>
