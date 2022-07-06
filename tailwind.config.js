/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      // TODO: Set custom font (and also choose it first heh)
    },
  },
  plugins: [require('./plugins/bg-stripes')],
}
