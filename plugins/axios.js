import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ $axios }) => {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

  });

  $axios.setHeader('Content-Type', 'application/json')

  $axios.setHeader('Vary', 'Accept-Encoding')

  $axios.setHeader('cache-control', 'no-cache')

})
