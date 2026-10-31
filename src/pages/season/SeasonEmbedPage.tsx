import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Navigate, useParams } from "react-router"
import TeamLinktEmbed from "../../components/TeamLinktEmbed"
import { colors } from "../../colors"
import { seasonPages } from "../../data/seasonPages"

const embedFrameSx = {
  border: `2px solid ${colors.navy}`,
  bgcolor: colors.white,
  overflow: "hidden",
} as const

function SeasonEmbedPage() {
  const { section } = useParams()
  const page = seasonPages.find((item) => item.slug === section)

  if (!page) {
    return <Navigate to="/season/schedule" replace />
  }

  return (
    <Box component="section" aria-labelledby="season-section-title">
      <Typography
        component="h2"
        id="season-section-title"
        variant="h3"
        sx={{ color: colors.navy, mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" } }}
      >
        {page.title}
      </Typography>
      <Box sx={embedFrameSx}>
        <TeamLinktEmbed id={page.embedId} title={page.embedTitle} src={page.src} />
      </Box>
    </Box>
  )
}

export default SeasonEmbedPage
