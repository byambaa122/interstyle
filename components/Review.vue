<template>
    <v-card flat>
        <!-- Quote icon -->
        <v-icon
            color="primary"
            v-text="icon"
            size="60"
        ></v-icon>
        <!-- Body -->
        <v-card-text>
            <div class="subheading">
                <!-- Comment -->
                <div class="text-xs-center grey--text text--darken-1 font-weight-light font-italic mb-4">
                    {{ body }}
                </div>
                <!-- Name -->
                <div class="text-xs-right text-uppercase">
                    {{ name }}
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            icon: 'mdi-format-quote-open'
        }
    }
}
</script>
