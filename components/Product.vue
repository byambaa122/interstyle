<template>
    <v-card flat tile>
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
        <div class="subheading font-weight-light grey--text text--darken-1">
            {{ price }}
            <!-- Currency symbol -->
            <span class="caption font-weight-light">
                MNT
            </span>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
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
        }
    }
}
</script>
