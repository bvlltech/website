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
  ink: "#4c4c4c",
  gray: "#7d7d7d",
  white: "#ffffff",
  page: "#eaeaea",
  dark: "#002359",
} as const

export type ColorName = keyof typeof colors

export function applyColors(target: HTMLElement = document.documentElement) {
  for (const [name, value] of Object.entries(colors)) {
    target.style.setProperty(`--color-${name}`, value)
  }
}
