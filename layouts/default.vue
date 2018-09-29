<template>
    <v-app>
        <div class="header">
            <v-container>
                <v-toolbar color="grey lighten-5" height="55" flat>
                    <v-img height="40" max-width="148" src="images/logo-small.png" contain></v-img>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn v-for="item in items" :key="item.text" flat>{{ item.text }}</v-btn>
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
            items: [
                {
                    text: 'Нүүр'
                },
                {
                    text: 'Бүтээгдэхүүн'
                },
                {
                    text: 'Дэлгүүр'
                },
                {
                    text: 'Холбоо барих'
                }
            ]
        }
    }
}
</script>
