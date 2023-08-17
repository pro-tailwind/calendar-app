import { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

// Multi-theme strategy
import colorThemes from "./themes.json"
import multiThemePlugin from "./src/plugins/multi-theme"

// Animated background stripes
import bgStripesPlugin from "./src/plugins/bg-stripes"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Tailwind config
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const config = {
  content: ["./src/{app,pages,components}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      width: {
        100: "25rem",
        "square-diagonal": (Math.sqrt(2) * 100).toFixed(2) + "%",
      },
      // Theme-based custom grid for the `BackgroundSplit` component
      gridTemplateColumns: ({ theme }) => ({
        "background-split": `1fr 
            ${theme("width.100")} 
            calc(
              ${theme("maxWidth.7xl")} - ${theme("width.100")} - ${theme(
                "padding.8",
              )}
            ) 
            1fr`,
      }),
      animation: {
        subtle: "subtle 20s ease-in-out infinite",
      },
      keyframes: {
        subtle: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-5%) translateY(5%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [bgStripesPlugin, multiThemePlugin({ themes: colorThemes })],
} satisfies Config

export default config
