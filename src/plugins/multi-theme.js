const plugin = require("tailwindcss/plugin")
const hexRgb = require("hex-rgb")

// ------------------------------
// Helper functions
// ------------------------------

// RGB conversion
function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// CSS vars generator
function getCssVarsDeclarations(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = path.concat(key)
    if (typeof value !== "string") {
      getCssVarsDeclarations(value, newPath, output)
    } else {
      output[`--${newPath.join("-")}`] = getRgbChannels(value)
    }
  })
  return output
}

// Color utilities generator
function getColorUtilitiesWithCssVarsReference(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = path.concat(key)
    if (typeof value !== "string") {
      getColorUtilitiesWithCssVarsReference(value, newPath, output)
    } else {
      output[newPath.join("-")] = `rgb(var(--${newPath.join(
        "-",
      )}) / <alpha-value>)`
    }
  })
  return output
}

// ------------------------------
// Plugin definition
// ------------------------------

const multiThemePlugin = plugin.withOptions(
  function (options) {
    const themes = options?.themes
    if (!themes)
      throw new Error(
        "Please pass a `themes` object as an option when registering the multiTheme plugin.",
      )
    return function ({ addBase }) {
      addBase({
        ":root": getCssVarsDeclarations(Object.values(themes)[0]),
      })

      Object.entries(themes).forEach(([key, value]) => {
        addBase({
          [`[data-theme="${key}"]`]: getCssVarsDeclarations(value),
        })
      })
    }
  },
  function (options) {
    const { themes } = options
    return {
      theme: {
        extend: {
          colors: getColorUtilitiesWithCssVarsReference(
            Object.values(themes)[0],
          ),
        },
      },
    }
  },
)

module.exports = multiThemePlugin
