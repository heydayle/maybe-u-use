export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  telemetry: false,
  head: {
    title: 'Maybe u need',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/index.scss',
    'vuetify/dist/vuetify.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mixins-plugin.js',
    '~plugins/component-global'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/router',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  axios: {
    baseURL: 'http://localhost:4000',
  },
  vuetify: {
    customVariables: ['~/styles/variable.scss']
  },
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        'dist',
      ],
    },
  },
}
