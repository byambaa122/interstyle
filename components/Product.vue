<template>
    <v-card flat tile>
        <v-img
            :aspect-ratio="16/9"
            :src="imageSrc"
            contain
        ></v-img>
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
