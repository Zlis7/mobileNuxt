export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    'nuxt-vuefire',
    '@nuxt/image',
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