export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  telemetry: false,
  devtools: { enabled: true },
  devServer: {
    host: '0',
  },
  image: {
    dir: 'assets/img',
    format: ['jpg'],
  },
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
  },
  ignore: ['**/src-tauri/**'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'mobileNuxt',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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
