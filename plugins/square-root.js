const plugin = require('tailwindcss/plugin')

const squareRootPlugin = plugin(function () {}, {
  theme: {
    extend: {
      width: {
        'sqrt-2': Math.sqrt(2) * 100 + '%',
      },
    },
  },
})

module.exports = squareRootPlugin
