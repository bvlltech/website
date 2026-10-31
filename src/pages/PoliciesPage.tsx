import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import SectionKicker from "../components/SectionKicker"
import { colors } from "../colors"
import { district3PoliciesManual } from "../data/policies"

function PoliciesPage() {
  return (
    <Box component="main" id="main" sx={{ bgcolor: colors.cream, pb: { xs: 5, md: 8 } }}>
      <Container maxWidth="md" sx={{ pt: { xs: 4, md: 6 } }}>
        <SectionKicker>Little League Alberta</SectionKicker>
        <Typography
          component="h1"
          variant="h1"
          sx={{ color: colors.navy, mb: 2, fontSize: { xs: "2.4rem", md: "3.6rem" } }}
        >
          Policies and procedures
        </Typography>
        <Typography sx={{ color: colors.ink, mb: 4, fontSize: "1.08rem" }}>
          How Bow Valley Little League runs the season, keeps players safe, and
          follows District #3.
        </Typography>

        <Box
          component="article"
          sx={{
            p: { xs: 2.5, md: 4 },
            bgcolor: colors.white,
            border: `2px solid ${colors.navy}`,
            borderTop: `6px solid ${colors.clay}`,
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{ color: colors.navy, mb: 2, fontSize: { xs: "1.6rem", md: "2rem" } }}
          >
            Policy adoption statement
          </Typography>
          <Typography sx={{ color: colors.ink, mb: 2, fontSize: "1.08rem" }}>
            As a member in good standing with Little League Alberta District #3,
            Bow Valley Little League fully adopts and adheres to the District #3
            Policies Manual. These policies govern our league operations, safety
            procedures, and player development guidelines.
          </Typography>
          <Typography sx={{ color: colors.ink, mb: 3, fontSize: "1.08rem" }}>
            The full {district3PoliciesManual.title} is available as a PDF.
          </Typography>
          <Button
            component="a"
            href={district3PoliciesManual.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              bgcolor: colors.navy,
              color: colors.white,
              boxShadow: "none",
              px: 3,
              "&:hover": { bgcolor: colors.brandBlue, boxShadow: "none" },
            }}
          >
            Open District #3 Policies Manual
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default PoliciesPage
