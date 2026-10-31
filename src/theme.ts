import { createTheme } from "@mui/material/styles"
import { colors } from "./colors"

const bodyFont = '"Atkinson Hyperlegible", system-ui, sans-serif'
const displayFont = '"Big Shoulders Display", "Arial Narrow", sans-serif'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.brandBlue,
    },
    secondary: {
      main: colors.clay,
    },
    background: {
      default: colors.cream,
      paper: colors.white,
    },
    text: {
      primary: colors.ink,
      secondary: colors.gray,
    },
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: displayFont, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 },
    h2: { fontFamily: displayFont, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.08 },
    h3: { fontFamily: displayFont, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1 },
    h4: { fontFamily: displayFont, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.05 },
    h5: { fontFamily: displayFont, fontWeight: 700, lineHeight: 1.15 },
    h6: { fontFamily: displayFont, fontWeight: 700, lineHeight: 1.2 },
    button: {
      fontFamily: displayFont,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.cream,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          minHeight: 44,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: `2px solid ${colors.clay}`,
            outlineOffset: 3,
          },
        },
      },
    },
  },
})
