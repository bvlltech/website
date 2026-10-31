/**
 * Bow Valley Little League palette from official logo artwork
 * (LOGO_BluesText.pdf): navy, brand blue, and neutral shadow.
 */
export const colors = {
  navy: "#002359",
  brandBlue: "#008cd1",
  shadow: "#c2bdbc",
  maroon: "#8f0000",
  red: "#a9000d",
  blue: "#008cd1",
  orange: "#db6c1e",
  clay: "#c45c26",
  sand: "#f0c4a0",
  cream: "#f3eee4",
  ink: "#3d3a36",
  gray: "#6e6a64",
  white: "#ffffff",
  page: "#f3eee4",
  dark: "#002359",
} as const

export type ColorName = keyof typeof colors

export function applyColors(target: HTMLElement = document.documentElement) {
  for (const [name, value] of Object.entries(colors)) {
    target.style.setProperty(`--color-${name}`, value)
  }
}
