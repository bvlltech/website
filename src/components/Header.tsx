import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import { NavLink } from "react-router"
import { colors } from "../colors"
import BluesLogo from "./BluesLogo"

const navLinkSx = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  minHeight: 44,
  color: colors.white,
  fontFamily: '"Big Shoulders Display", sans-serif',
  fontSize: 20,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textDecoration: "none",
  px: 1.5,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 8,
    height: 2,
    bgcolor: colors.clay,
    transform: "scaleX(0)",
    transformOrigin: "left center",
    transition: "transform 0.22s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
  "&[aria-current='page']::after": {
    transform: "scaleX(1)",
  },
} as const

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: colors.navy,
        color: colors.white,
        borderBottom: `3px solid ${colors.clay}`,
      }}
    >
      <Toolbar
        component="header"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: 1, md: 2 },
          px: { xs: 2, md: 3 },
          py: { xs: 1.5, md: 1.25 },
          minHeight: { xs: "auto", md: 88 },
        }}
      >
        <Link
          component={NavLink}
          to="/"
          end
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: colors.white,
            flexShrink: 0,
            minWidth: 0,
          }}
        >
          <BluesLogo height={48} />
        </Link>

        <Stack
          component="nav"
          direction="row"
          aria-label="Primary"
          spacing={0.5}
          sx={{
            ml: { xs: 0, md: "auto" },
            width: { xs: "100%", md: "auto" },
            order: { xs: 2, md: 0 },
          }}
        >
          <Link component={NavLink} to="/" end sx={navLinkSx}>
            Home
          </Link>
          <Link component={NavLink} to="/season" end={false} sx={navLinkSx}>
            Season
          </Link>
          <Link component={NavLink} to="/contact" sx={navLinkSx}>
            Contact
          </Link>
        </Stack>

        <Box
          sx={{
            ml: { xs: 0, md: 1 },
            width: { xs: "100%", md: "auto" },
            order: { xs: 3, md: 0 },
          }}
        >
          <Button
            type="button"
            variant="contained"
            fullWidth
            sx={{
              bgcolor: colors.clay,
              color: colors.white,
              borderRadius: "2px",
              boxShadow: "none",
              px: 2.5,
              "&:hover": {
                bgcolor: colors.orange,
                boxShadow: "none",
              },
              "@media (min-width: 900px)": {
                width: "auto",
              },
            }}
          >
            Registration
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
