const defaultTheme = require('tailwindcss/defaultTheme')

// Animated background stripes
const bgStripesPlugin = require('./plugins/bg-stripes')

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
      width: {
        100: '25rem',
        'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
      },
      // Theme-based custom grid for the `BackgroundSplit` component
      gridTemplateColumns: ({ theme }) => ({
        'background-split': `1fr 
            ${theme('width.100')} 
            calc(
              ${theme('maxWidth.7xl')} - ${theme('width.100')} - ${theme('padding.8')}
            ) 
            1fr`,
      }),
    },
  },
  plugins: [bgStripesPlugin],
}
