import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Outlet } from "react-router"
import SectionKicker from "./SectionKicker"
import SeasonNav from "./SeasonNav"
import { colors } from "../colors"

function SeasonLayout() {
  return (
    <Box component="main" id="main" sx={{ bgcolor: colors.cream, pb: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
        <SectionKicker>2027 season</SectionKicker>
        <Typography
          component="h1"
          variant="h1"
          sx={{ color: colors.navy, mb: 2, fontSize: { xs: "2.75rem", md: "4rem" } }}
        >
          Season
        </Typography>
        <SeasonNav />
        <Outlet />
      </Container>
    </Box>
  )
}

export default SeasonLayout
