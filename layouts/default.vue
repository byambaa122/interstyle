<template>
    <v-app v-scroll="onScroll">
        <!-- Logo -->
        <v-img
            height="70"
            max-height="70"
            src="/images/logo-small.png"
            class="my-4"
            contain
        ></v-img>
        <!-- Header -->
        <div class="header">
            <v-container>
                <v-toolbar
                    color="white"
                    height="55"
                    flat
                >
                    <!-- Spacer -->
                    <v-spacer></v-spacer>
                    <!-- Menu -->
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn
                            v-for="item in items"
                            :key="item.text"
                            :to="item.to"
                            flat
                            nuxt
                        >
                            {{ item.text }}
                        </v-btn>
                        <!-- Contact us button -->
                        <v-btn
                            @click="scrollTo(9999)"
                            flat
                        >
                            Холбоо барих
                        </v-btn>
                    </v-toolbar-items>
                    <!-- Spacer -->
                    <v-spacer></v-spacer>
                </v-toolbar>
            </v-container>
        </div>
        <!-- Page component -->
        <v-content>
            <nuxt />
        </v-content>
        <!-- Scroll to top button -->
        <v-fab-transition>
            <v-btn
                v-show="offsetTop > 300"
                color="primary"
                @click="scrollTo(0)"
                dark
                fixed
                bottom
                right
                fab
            >
                <v-icon>
                    mdi-chevron-up
                </v-icon>
            </v-btn>
        </v-fab-transition>
        <!-- Footer -->
        <v-footer
            height="auto"
            class="pa-3"
            absolute
            app
        >
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md7 lg8>
                        <!-- Logo -->
                        <v-img
                            height="70"
                            src="/images/logo-small.png"
                            position="left center"
                            contain
                        ></v-img>
                        <!-- Address -->
                        <div class="subheading grey--text text--darken-1 my-4">
                            Монгол улс, Улаанбаатар хот 14180, Сүхбаатар дүүрэг <br class="hidden-sm-and-down"> 11-р хороо, Интерстиль ХХК байр
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 md5 lg4>
                        <v-list
                            class="grey lighten-4 text-xs-right"
                            two-line
                        >
                            <v-list-tile avatar>
                                <!-- Icon -->
                                <v-list-tile-avatar>
                                    <v-icon>
                                        mdi-email
                                    </v-icon>
                                </v-list-tile-avatar>
                                <!-- E-mail address -->
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        contact@interstyle.mn
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Work
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile avatar>
                                <!-- Icon -->
                                <v-list-tile-avatar>
                                    <v-icon>
                                        mdi-phone
                                    </v-icon>
                                </v-list-tile-avatar>
                                <!-- Phone number -->
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        (11) 352839, (976) 99178192
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Mobile
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
                <v-divider class="my-4"></v-divider>
                <!-- Social accounts -->
                <div class="text-xs-center">
                    <v-btn
                        color="grey darken-1"
                        v-for="(item, i) in socialAccounts"
                        :key="i"
                        :url="item.url"
                        flat
                        large
                        icon
                    >
                        <v-icon>
                            {{ item.icon }}
                        </v-icon>
                    </v-btn>
                </div>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            offsetTop: 0,
            items: [
                {
                    text: 'Нүүр',
                    to: '/'
                },
                {
                    text: 'Бүтээгдэхүүн',
                    to: '/products'
                },
                {
                    text: 'Туслах материал',
                    to: '/materials'
                }
            ],
            socialAccounts: [
                {
                    icon: 'mdi-facebook',
                    url: '#'
                },
                {
                    icon: 'mdi-twitter',
                    url: '#'
                },
                {
                    icon: 'mdi-linkedin',
                    url: '#'
                }
            ]
        }
    },
    methods: {
        onScroll(e) {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        },
        scrollTo(target) {
            this.$vuetify.goTo(target)
        }
    }
}
</script>
