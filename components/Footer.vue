<template>
    <v-footer
        height="auto"
        class="pa-3"
        absolute
        app
    >
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 md6 lg4>
                    <!-- Logo -->
                    <v-img
                        height="80"
                        src="/images/logo.png"
                        position="left center"
                        contain
                    ></v-img>
                    <!-- Logo -->
                    <div class="grey--text my-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim porta libero vel bibendum. Fusce porttitor facilisis porta.
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            socialAccounts: [
                {
                    icon: 'mdi-facebook',
                    url: '#'
                },
                {
                    icon: 'mdi-twitter',
                    url: '#'
                }
            ]
        }
    }
}
</script>
