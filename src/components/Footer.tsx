import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { NavLink } from "react-router"
import { colors } from "../colors"
import { socialLinks } from "../data/socialLinks"

const linkSx = {
  color: "rgb(255 255 255 / 82%)",
  fontFamily: '"Big Shoulders Display", sans-serif',
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  fontSize: "0.95rem",
  "&:hover": { color: colors.white },
  "&[aria-current='page']": { color: colors.sand },
} as const

const siteLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/season", label: "Season", end: false },
  { to: "/contact", label: "Contact", end: true },
  { to: "/policies", label: "Policies", end: true },
] as const

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.navy,
        color: colors.white,
        mt: "auto",
        borderTop: `3px solid ${colors.clay}`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 2.5, md: 2.75 },
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 2, md: 3 },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Big Shoulders Display", sans-serif',
              fontWeight: 800,
              fontSize: { xs: "1.35rem", md: "1.5rem" },
              lineHeight: 1.1,
            }}
          >
            Bow Valley Little League
          </Typography>
          <Typography sx={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.9rem" }}>
            Canmore, Banff, and the Bow Valley
          </Typography>
        </Box>

        <Stack
          component="nav"
          direction="row"
          aria-label="Footer"
          spacing={{ xs: 1.5, sm: 2.5 }}
          sx={{ flexWrap: "wrap", rowGap: 1 }}
        >
          {siteLinks.map((item) => (
            <Link
              key={item.to}
              component={NavLink}
              to={item.to}
              end={item.end}
              sx={linkSx}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            sx={linkSx}
          >
            Facebook
          </Link>
          <Link
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            sx={linkSx}
          >
            Instagram
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
