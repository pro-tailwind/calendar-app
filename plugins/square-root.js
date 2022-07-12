const plugin = require('tailwindcss/plugin')

const squareDiagonalWidthPlugin = plugin(function () {}, {
  theme: {
    extend: {
      width: {
        'square-diagonal': Math.sqrt(2) * 100 + '%',
      },
    },
  },
})

module.exports = squareDiagonalWidthPlugin
