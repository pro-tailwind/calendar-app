const defaultTheme = require('tailwindcss/defaultTheme')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Tailwind config
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{pages,components}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
