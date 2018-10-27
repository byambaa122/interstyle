<template>
    <!-- Header -->
    <div class="header">
        <v-container>
            <!-- Toolbar -->
            <v-toolbar
                color="white"
                height="55"
                flat
            >
                <!-- Logo -->
                <v-img
                    height="40"
                    max-width="148"
                    src="/images/logo-small.png"
                    contain
                ></v-img>
                <!-- Spacer -->
                <v-spacer></v-spacer>
                <!-- Menu -->
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn v-for="item in items" :key="item.text" flat>
                        {{ item.text }}
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-container>
    </div>
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
                    text: 'Туслах материал'
                },
                {
                    text: 'Холбоо барих'
                }
            ]
        }
    }
}
</script>
