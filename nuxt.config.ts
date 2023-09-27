// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/main.scss'],
  modules: ['@pinia/nuxt', '@nuxt/content']
})
