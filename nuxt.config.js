export default {
    head: {
        title: 'interstyle',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Interstyle LLC Landing Page' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' }
        ]
    },
    plugins: [
        '~/plugins/vuetify.js'
    ],
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
