require('dotenv').config()

const config = {
  mode: 'spa',
  vue: {
    config: {
      productionTip: false,
      devtools: (process.env.NODE_ENV !== 'production')
    }
  },
  generate: {
    devtools: (process.env.NODE_ENV !== 'production')
  },
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    BASE_URL: process.env.BASE_URL
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2d97ff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuelidate', ssr: true },
    { src: '~/plugins/vue-uuid', ssr: false },


  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/auth',


  ],
  router: {
    middleware: ['auth']
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/api/auth", method: "post", propertyName: "token" },
          logout: false,
          user: false
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    },
    redirect: {
      login: "/dashboard",
      logout: "/login",
      home: "/dashboard",
    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#5d92f4",
          secondary: "#5d92f4",
          secondary2: "#ffb70f",
          accent: "#3ED0BC",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["handsontable", "vue-handsontable"],
    devtools: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
      if (ctx.isClient) {
        config.devtool = '#source-map'
      }
    }
  },
  transition: {
    name: "page",
    mode: "out-in",
    beforeEnter(el) {
      //console.log("Before enter...")
    }
  }
};

export default config;

console.log('Nuxt config', config);
