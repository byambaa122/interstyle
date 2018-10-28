<template>
    <v-card flat>
        <!-- Slider area -->
        <v-window v-model="slide">
            <!-- Slider item -->
            <v-window-item v-for="(item, i) in items" :key="i">
                <slot name="items" :item="item"></slot>
            </v-window-item>
        </v-window>
        <!-- Delimiters -->
        <div class="text-xs-center mt-4">
            <!-- Delimiter item -->
            <v-item-group v-model="slide">
                <v-item v-for="n in items.length" :key="n">
                    <!-- Delimiter button -->
                    <v-btn
                        slot-scope="{ active, toggle }"
                        :input-value="active"
                        @click="toggle"
                        icon
                    >
                        <!-- Delimiter icon -->
                        <v-icon
                            v-text="delimiterIcon"
                            color="grey"
                        ></v-icon>
                    </v-btn>
                </v-item>
            </v-item-group>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            delimiterIcon: 'mdi-record',
            slide: 0
        }
    }
}
</script>
