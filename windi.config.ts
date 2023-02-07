import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  attributify: {
    prefix: 'tw-'
  },
  prefix: 'tw-',
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: "376px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1336px",
        "2xl": "1920px",
      },
      colors: {
        'red-main': '#d70018'
      },
      fontSize: {
        xxs: ['0.5rem', { lineHeight: '.625rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1rem' }],
        base: ['1rem', { lineHeight: '1.25rem' }],
        lg: ['1.125rem', { lineHeight: '1.5rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '3.25': ['0.8125rem', { lineHeight: '1.5' }],
      },
    }
  }
})
