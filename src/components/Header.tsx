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
  display: "inline-block",
  color: colors.white,
  fontSize: 16,
  fontWeight: 600,
  textDecoration: "none",
  px: 1.5,
  py: 1,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 4,
    height: 3,
    borderRadius: 1,
    bgcolor: colors.white,
    transform: "scaleX(0)",
    transformOrigin: "left center",
    transition: "transform 0.28s ease-out",
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
        bgcolor: colors.dark,
        color: colors.white,
      }}
    >
      <Toolbar
        component="header"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: 1, md: 2 },
          px: { xs: 2, md: 3 },
          py: { xs: 1.5, md: 1.25 },
          minHeight: { xs: "auto", md: 96 },
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
            gap: { xs: 1.25, md: 2 },
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
          spacing={1}
          sx={{
            ml: { xs: 0, md: "auto" },
            width: { xs: "100%", md: "auto" },
            order: { xs: 2, md: 0 },
          }}
        >
          <Link component={NavLink} to="/" end sx={navLinkSx}>
            Home
          </Link>
          <Link component={NavLink} to="/teams" sx={navLinkSx}>
            Teams
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
            variant="outlined"
            fullWidth
            sx={{
              borderWidth: 2,
              borderColor: colors.white,
              borderRadius: "8px",
              bgcolor: colors.white,
              color: colors.dark,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.06em",
              py: 1,
              px: 2,
              transition:
                "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
              "&:hover": {
                bgcolor: "transparent",
                color: colors.white,
                borderColor: colors.white,
                borderWidth: 2,
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgb(0 0 0 / 35%)",
              },
              "&:active": {
                transform: "translateY(0)",
                boxShadow: "0 4px 10px rgb(0 0 0 / 25%)",
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
