import { createTheme } from "@mui/material/styles"
import { colors } from "./colors"

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue,
    },
    background: {
      default: colors.page,
    },
    text: {
      primary: colors.ink,
    },
  },
  typography: {
    fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
  },
})
