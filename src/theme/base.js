const theme = {
  breakpoints: ["768px", "1024px", "1280px"],

  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    prose: "'Lora', serif",
  },

  fontSizes: [13, 14, 15, 16, 17, 18, 19, 21, 24, 32, 48, 64, 72],

  fontWeights: {
    heading: 600,
    body: 400,
  },

  lineHeights: {
    base: 1.6875,
  },

  colors: {
    bg: {
      main: "#FFFFFF",
      filename: "hsl(240, 16%, 96%)",
      subtle: "hsl(240, 24%, 94%)",
      hover: "hsl(240, 8%, 98%)",
    },
    text: {
      dark: "#1D2E30",
      neutral: "#38484D",
      soft: "#666e70",
      subtle: "#CACDCE",
      link: "#3083a1",
      file: "#E33838",
    },
    border: {
      neutral: "#DFE1E2",
      subtle: "#EFF0F1",
      code: "#EFF0F1",
    },
  },

  space: Array.from({ length: 64 })
    .fill(0)
    .map((_, i) => i * 4),
}

theme.typography = {
  baseFontSize: 16,
  baseLineHeight: theme.lineHeights.base,
  bodyColor: theme.colors.text.neutral,
  bodyFontFamily: ["Inter", "sans-serif"],
  bodyWeight: theme.fontWeights.body,
  headerColor: theme.colors.text.dark,
  headerFontFamily: ["Inter", "sans-serif"],
  headerWeight: theme.fontWeights.heading,
  scaleRatio: 1.5,
  googleFonts: [
    { name: "Inter", styles: ["400", "500", "600", "700"] },
    { name: "Lora", styles: ["400", "400i", "500", "500i"] },
  ],
}

export default theme
