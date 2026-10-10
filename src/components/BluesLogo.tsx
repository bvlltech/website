import Box from "@mui/material/Box"
import bluesLogo from "../assets/logo-blues-text.svg"

type BluesLogoProps = {
  height?: number
}

function BluesLogo({ height = 56 }: BluesLogoProps) {
  return (
    <Box
      component="img"
      src={bluesLogo}
      alt="Bow Valley Blues"
      sx={{
        height,
        width: "auto",
        display: "block",
        flexShrink: 0,
      }}
    />
  )
}

export default BluesLogo
