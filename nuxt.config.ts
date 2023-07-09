import { fileURLToPath } from 'url'
// https://www.npmjs.com/package/vite-svg-loader
import svgLoader from 'vite-svg-loader'

import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://tailwindcss.nuxtjs.org/getting-started/setup/
    '@nuxtjs/tailwindcss',
  ],

  css: [join(currentDir, './assets/css/tailwind.css')],

  vite: {
    plugins: [
      svgLoader({
        svgo: true,
        svgoConfig: {
          plugins: [],
        },
      }),
    ],
  },
})
