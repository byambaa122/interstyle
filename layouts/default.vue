<template>
    <v-app>
        <div class="header">
            <v-container>
                <v-toolbar color="grey lighten-5" height="55" flat>
                    <v-img height="40" max-width="148" src="images/logo-small.png" contain></v-img>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn flat>Нүүр</v-btn>
                        <v-btn flat>Дэлгүүр</v-btn>
                        <v-btn flat>Бүтээгдэхүүн</v-btn>
                        <v-btn flat>Холбоо барих</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
            </v-container>
        </div>
        <v-content>
            <nuxt />
        </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>
