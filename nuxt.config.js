import 'dotenv/config'

export default {
    head: {
        title: 'interstyle',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Интерстиль ХХК танилцуулга веб хуудас' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' }
        ]
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv'
    ],
    plugins: [
        '~/plugins/axios.js',
        '~/plugins/vuetify.js'
    ],
    axios: {
        baseURL: `${process.env.BASE_URL}/api`
    },
    css: [
        '@mdi/font/css/materialdesignicons.css',
        '~/assets/style/app.styl'
    ],
    loading: {
        color: '#525177'
    },
    build: {
        extractCSS: true,
        /*
        ** Run ESLint on save
        */
        extend(config, { isDev }) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
