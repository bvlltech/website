import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import { NavLink } from "react-router"
import { colors } from "../colors"
import { seasonPages } from "../data/seasonPages"

const tabSx = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 44,
  px: { xs: 1.5, sm: 2 },
  py: 1,
  color: colors.navy,
  fontFamily: '"Big Shoulders Display", sans-serif',
  fontWeight: 700,
  fontSize: { xs: "1rem", sm: "1.15rem" },
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  borderBottom: `2px solid transparent`,
  "&[aria-current='page']": {
    color: colors.brandBlue,
    borderBottomColor: colors.clay,
  },
  "&:hover": {
    color: colors.brandBlue,
  },
} as const

function SeasonNav() {
  return (
    <Stack
      component="nav"
      direction="row"
      aria-label="Season"
      spacing={0}
      sx={{
        flexWrap: "wrap",
        borderBottom: `2px solid ${colors.shadow}`,
        mb: 3,
      }}
    >
      {seasonPages.map((page) => (
        <Link
          key={page.slug}
          component={NavLink}
          to={`/season/${page.slug}`}
          sx={tabSx}
        >
          {page.title}
        </Link>
      ))}
    </Stack>
  )
}

export default SeasonNav
