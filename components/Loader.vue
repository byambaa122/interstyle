<template>
    <v-dialog
        v-model="loading"
        width="400"
        persistent
    >
        <v-card dark>
            <v-card-text>
                Ачааллаж байна
                <!-- Linear progress -->
                <v-progress-linear
                    color="white"
                    indeterminate
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'loading'
        ])
    }
}
</script>
