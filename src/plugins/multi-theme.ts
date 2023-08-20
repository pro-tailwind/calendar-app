import plugin from "tailwindcss/plugin"
import hexRgb from "hex-rgb"

import defaultThemes from "../../themes.json"

// ------------------------------
// Helpers
// ------------------------------
type Options = {
  colorThemes?: Record<string, any>
}

function getRgbChannels(hex: string) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// Generate CSS variables
function getCssVariableDeclarations(
  input: Record<string, any>,
  path: string[] = [],
  output: Record<string, string> = {},
): Record<string, string> {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = [...path, key]
    if (typeof value !== "string") {
      getCssVariableDeclarations(value, newPath, output)
    } else {
      output[`--${newPath.join("-")}`] = getRgbChannels(value)
    }
  })
  return output
}

// Generate color extension object
function getColorUtilitiesWithCssVariableReferences(
  input: Record<string, any>,
  path: string[] = [],
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const newPath = [...path, key]
      if (typeof value !== "string") {
        return [key, getColorUtilitiesWithCssVariableReferences(value, newPath)]
      } else {
        return [key, `rgb(var(--${newPath.join("-")}) / <alpha-value>)`]
      }
    }),
  )
}

// Check for valid color themes input
function checkForValidColorThemesInput(input: Record<string, any>) {
  const isValid =
    typeof input === "object" &&
    Object.keys(input).some((key) => typeof input[key] === "object")
  if (!isValid) {
    throw new Error(
      "The Multi-Theme Plugin expects a `colorThemes` option passed to it, which contains at least one theme object.",
    )
  }
}

// ------------------------------
// Plugin definition
// ------------------------------
export default plugin.withOptions(
  function (options: Options) {
    const colorThemes = options?.colorThemes ?? defaultThemes
    checkForValidColorThemesInput(colorThemes)
    return function ({ addBase }) {
      addBase({
        ":root": getCssVariableDeclarations(
          Object.values(colorThemes)[0] as Record<string, any>,
        ),
      })
      Object.entries(colorThemes).forEach(([key, value]) => {
        addBase({
          [`[data-theme="${key}"]`]: getCssVariableDeclarations(
            value as Record<string, any>,
          ),
        })
      })
    }
  },
  function (options: Options) {
    const colorThemes = options?.colorThemes ?? defaultThemes
    checkForValidColorThemesInput(colorThemes)
    return {
      theme: {
        extend: {
          colors: getColorUtilitiesWithCssVariableReferences(
            Object.values(colorThemes)[0] as Record<string, any>,
          ),
        },
      },
    }
  },
)
