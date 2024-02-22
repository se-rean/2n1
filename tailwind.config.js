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
        primary: '#10141b',
        secondary: "#cfd6e3",
        tertiary: "#151c28",
        primaryText: '#ffbf00',
        card1: '#ffdc73',
        card2: 	'#ffcf40'
      }
    },
  },
  plugins: [],
  extend: {
    
  },
}