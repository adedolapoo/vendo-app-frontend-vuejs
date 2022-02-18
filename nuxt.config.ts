import { defineNuxtConfig} from '@nuxt/bridge';
import webpack from 'webpack';

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  bridge: {
    meta: true,
    nitro: true,
  },

  loading: {
    color: 'green'
  },

  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    appTitle: 'Vendo App'
  },
  privateRuntimeConfig: {

  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NPC Attestation Payment Portal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/tailwindcss',{
      viewer: false
    }],
    ['@nuxtjs/toast',{
      position: 'top-center',
      duration: 3000
    }],
    ['@pinia/nuxt', { disableVuex: true }],
    '@vueuse/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios',{
      baseURL: process.env.API_BASE_URL,
    }],
    ['@nuxtjs/auth-next',{
      redirect: {
        callback: '/callback',
        logout: '/login',
        login: '/login'
      },
      strategies: {
        local: {
          endpoints: {
            login: { url: 'auth/login', method: 'post', propertyName: 'data.token' },
            //user: { url: 'auth/me', method: 'get', propertyName: 'data' },
            user: false,
            logout: false
          },
          tokenRequired: true,
          tokenType: 'bearer',
          globalToken: true,
          tokenName: 'Authorization'
        }
      }
    } ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'pinia',
    ],
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      }),
    ],
  },
});
