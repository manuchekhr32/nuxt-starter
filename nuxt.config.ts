// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [eslintPlugin()],
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
})
