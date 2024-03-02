/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        prmBG: 'var(--color-primary)',
        secBG: 'var(--color-secondary)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondaryText)',
        tertiary: 'var(--color-tertiary)',
        primaryText: 'var(--color-primaryText)',
        secondaryText: 'var(--color-secondaryText)',
        tertiaryText: 'var(--color-tertiaryText)',
        card1: 'var(--color-card1)',
        card2: 	'var(--color-card2)',
        navText: 'var(--color-navText)',
        timelineText: 'var(--color-timelineText)',
      }
    },
  },
  plugins: [],
  extend: {
    
  },
}