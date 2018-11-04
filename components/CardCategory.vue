<template>
    <v-hover>
        <v-card
            :to="url"
            :nuxt="!!url"
            :class="{ 'active': hover }"
            slot-scope="{ hover }"
            flat
            tile
        >
            <!-- Image -->
            <v-img
                :src="image"
                :aspect-ratio="16/9"
                :gradient="gradient"
            >
                </v-expand-transition>
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
                                    17 тавилга
                                </div>
                                <!-- Title -->
                                <div class="headline font-weight-bold">
                                    {{ title }}
                                </div>
                            </v-flex>
                            <v-flex>
                                <v-layout
                                    fill-height
                                    align-center
                                    justify-end
                                    row
                                >
                                    <!-- Direction icon -->
                                    <v-avatar :color="color">
                                        <v-icon
                                            v-text="icon"
                                            color="primary"
                                        ></v-icon>
                                    </v-avatar>
                                </v-layout>
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
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        url: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            gradient: 'to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.6) 100%',
            color: 'rgba(255, 255, 255, 0.2)',
            icon: 'mdi-arrow-right'
        }
    }
}
</script>
