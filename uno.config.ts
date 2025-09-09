import { defineConfig, presetAttributify, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [presetWind4(), presetAttributify()],
  theme: {
    colors: {
      brand: {
        primary: '#16213E',
        DEFAULT: '#1A1A2E',
      },
      brandHover: '#8B5CF6',
    },
  },
})
