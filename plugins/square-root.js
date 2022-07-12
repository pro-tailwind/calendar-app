const plugin = require('tailwindcss/plugin')

const diagonalPlugin = plugin(function () {}, {
  theme: {
    extend: {
      width: {
        'sqrt-2': Math.sqrt(2) * 100 + '%',
      },
    },
  },
})

module.exports = diagonalPlugin
