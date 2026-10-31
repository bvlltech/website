import Typography from "@mui/material/Typography"
import { colors } from "../colors"

type SectionKickerProps = {
  children: string
  color?: string
}

function SectionKicker({ children, color = colors.clay }: SectionKickerProps) {
  return (
    <Typography
      component="p"
      sx={{
        fontFamily: '"Big Shoulders Display", sans-serif',
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color,
        mb: 1.5,
        fontSize: "0.95rem",
      }}
    >
      {children}
    </Typography>
  )
}

export default SectionKicker
