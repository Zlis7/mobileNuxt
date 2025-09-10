import { defineConfig, presetAttributify, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [presetWind4(), presetAttributify()],
  theme: {
    colors: {
      brand: {
        primary: '#16213E',
        DEFAULT: '#1A1A2E',
        special: '#8B5CF6',
      },
      brandRed: '#FF0000',
      brandWhite: '#EFEFEF',
      brandYellow: '#FAFF00',
      brandBlue: '#002AFF',
      brandGreen: '#00FF12',
      brandPurple: '#E200FF',
      brandGray: '#C4C4C4',

    },
  },
})
