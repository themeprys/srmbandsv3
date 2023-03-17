export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'srmbands',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap' },      
    ],
    script: [
      { type: 'text/javascript', src: 'https://kit.fontawesome.com/e7c4e5e5a4.js'},
    ]        
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {
    //   src: '~/plugins/vue-plyr',
    //   ssr: false
    // },
    // { 
    //   src: '~plugins/ga.js', 
    //   mode: 'client' 
    // },
    { 
      src: '~plugins/filterDate.js'
    },        
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo', 
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.cosmicjs.com/v3',
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch')
    }
    // standalone: false
  }
}
