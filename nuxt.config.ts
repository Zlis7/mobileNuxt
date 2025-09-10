export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'mobileNuxt',
      charset: 'utf-8',
    },
  },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    'nuxt-vuefire',
    '@nuxt/image',
    '@vee-validate/nuxt',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vuefire: {
    config: {
      apiKey: '...',
      authDomain: '...',
      projectId: '...',
      appId: '...',
    },
  },
})
