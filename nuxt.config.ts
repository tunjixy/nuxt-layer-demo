import { fileURLToPath } from 'url'

import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))

// import { createResolver } from '@nuxt/kit'

// const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  modules: [
    // https://tailwindcss.nuxtjs.org/getting-started/setup/
    '@nuxtjs/tailwindcss',

    // https://nuxt.com/modules/icon
    'nuxt-icon',
  ],

  // css: [resolve('./assets/css/main.css')],

  css: [join(currentDir, './assets/css/main.css')],
})
