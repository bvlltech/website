import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { NavLink } from "react-router"
import AgeChart from "../components/AgeChart"
import LeaguePhoto from "../components/LeaguePhoto"
import SectionKicker from "../components/SectionKicker"
import { colors } from "../colors"
import { aboutPhoto, galleryPhotos, heroPhoto } from "../data/leaguePhotos"

const keyDates = [
  { date: "TBD", event: "Spring registration opens" },
  { date: "TBD", event: "Player evaluations" },
  { date: "TBD", event: "Opening day" },
  { date: "TBD", event: "Photo day" },
]

const newsItems = [
  {
    title: "2027 registration",
    date: "Coming soon",
    summary: "Fees, divisions, and the TeamLinkt sign-up link will be posted here when the form opens.",
  },
  {
    title: "Coaches and volunteers",
    date: "Always needed",
    summary: "The Blues run on parents and neighbours. Coaching experience is welcome, not required.",
  },
  {
    title: "Game-day fields",
    date: "In season",
    summary: "Weather holds, postponements, and diamond status will land here during the season.",
  },
]

function HomePage() {
  const [featured, ...restPhotos] = galleryPhotos

  return (
    <Box component="main" id="main">
      <Box
        sx={{
          position: "relative",
          color: colors.white,
          overflow: "hidden",
          height: { xs: "min(560px, 72vh)", sm: "min(680px, 76vh)", md: "min(820px, 80vh)" },
        }}
      >
        <Box
          component="img"
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fetchPriority="high"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: heroPhoto.objectPosition,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgb(0 35 89 / 18%) 0%, rgb(0 35 89 / 28%) 40%, rgb(0 35 89 / 78%) 100%)",
            pointerEvents: "none",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: { xs: "flex-end", md: "center" },
            pb: { xs: 10, sm: 11, md: 0 },
          }}
        >
          <Box sx={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <SectionKicker color={colors.white}>Canmore · Banff · Bow Valley</SectionKicker>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.75rem", sm: "3.75rem", md: "4.5rem" },
                lineHeight: 1.05,
                color: colors.white,
                mb: 0,
              }}
            >
              Play ball under the peaks.
            </Typography>
            <Typography
              sx={{
                color: "rgb(255 255 255 / 90%)",
                mt: 1,
                maxWidth: 520,
                lineHeight: 1.55,
                fontSize: { xs: "1.05rem", md: "1.15rem" },
              }}
            >
              Little League baseball for kids in the Bow Valley. Dirt on the
              jersey, mountains in the outfield.
            </Typography>
          </Box>
        </Container>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderTop: "1px solid rgb(255 255 255 / 22%)",
            bgcolor: "rgb(0 35 89 / 88%)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 3 }}
              sx={{
                py: { xs: 2, md: 2.25 },
                alignItems: { xs: "stretch", sm: "center" },
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "rgb(255 255 255 / 88%)",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  maxWidth: 420,
                }}
              >
                2027 player registration opens through TeamLinkt when the season
                form is live.
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ flexShrink: 0 }}>
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    bgcolor: colors.white,
                    color: colors.navy,
                    px: 2.5,
                    boxShadow: "none",
                    whiteSpace: "nowrap",
                    "&:hover": { bgcolor: colors.sand, color: colors.navy, boxShadow: "none" },
                  }}
                >
                  Registration
                </Button>
                <Button
                  component={NavLink}
                  to="/season/schedule"
                  variant="outlined"
                  sx={{
                    borderColor: "rgb(255 255 255 / 55%)",
                    color: colors.white,
                    px: 2.5,
                    boxShadow: "none",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      borderColor: colors.white,
                      bgcolor: "rgb(255 255 255 / 10%)",
                      boxShadow: "none",
                    },
                  }}
                >
                  Season
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Box sx={{ bgcolor: colors.navy, color: colors.white, py: 2 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 4 }}
            sx={{
              fontFamily: '"Big Shoulders Display", sans-serif',
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "1.05rem",
            }}
          >
            <Box>T-ball through seniors</Box>
            <Box sx={{ color: colors.clay }}>·</Box>
            <Box>Volunteer-run</Box>
            <Box sx={{ color: colors.clay }}>·</Box>
            <Box>2027 season</Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.cream, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionKicker>The league</SectionKicker>
              <Typography variant="h2" sx={{ color: colors.navy, mb: 2, fontSize: { xs: "2.4rem", md: "3.4rem" } }}>
                Blues baseball, Bow Valley kids.
              </Typography>
              <Typography sx={{ color: colors.ink, mb: 2, fontSize: "1.08rem" }}>
                Families from Canmore, Banff, and nearby towns share one league,
                one set of diamonds, and a lot of borrowed gloves. Players grow
                from first swings in T-ball through majors in a volunteer-run
                club that still feels like a neighbourhood.
              </Typography>
              <Typography sx={{ color: colors.ink, mb: 2, fontSize: "1.08rem" }}>
                Skill, respect, and showing up for teammates. That is the work.
                The mountains are just the backdrop.
              </Typography>
              <Link
                component={NavLink}
                to="/policies"
                underline="none"
                sx={{
                  color: colors.navy,
                  fontFamily: '"Big Shoulders Display", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderBottom: `2px solid ${colors.clay}`,
                }}
              >
                Policies and procedures
              </Link>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  transform: { md: "rotate(-1.5deg)" },
                  boxShadow: "12px 16px 0 rgb(0 35 89 / 90%)",
                }}
              >
                <LeaguePhoto
                  src={aboutPhoto.src}
                  alt={aboutPhoto.alt}
                  aspectRatio="4 / 3"
                  objectPosition={aboutPhoto.objectPosition}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.white, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <AgeChart />
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.navy, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionKicker color={colors.sand}>Bulletin</SectionKicker>
          <Typography
            variant="h2"
            sx={{ color: colors.white, mb: 4, fontSize: { xs: "2.4rem", md: "3.4rem" } }}
          >
            From the board
          </Typography>
          <Stack spacing={0}>
            {newsItems.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
                  gap: { xs: 0.5, sm: 3 },
                  py: 2.5,
                  borderTop: `1px solid rgb(255 255 255 / 16%)`,
                  borderBottom: index === newsItems.length - 1 ? `1px solid rgb(255 255 255 / 16%)` : 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Big Shoulders Display", sans-serif',
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: colors.sand,
                    pt: 0.4,
                  }}
                >
                  {item.date}
                </Typography>
                <Box>
                  <Typography variant="h3" sx={{ color: colors.white, fontSize: "1.7rem", mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "rgb(255 255 255 / 78%)" }}>{item.summary}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.cream, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionKicker>On the dirt</SectionKicker>
          <Typography
            variant="h2"
            sx={{ color: colors.navy, mb: 1, fontSize: { xs: "2.4rem", md: "3.4rem" } }}
          >
            From the diamond
          </Typography>
          <Typography sx={{ color: colors.ink, mb: 4, maxWidth: 560 }}>
            Real Blues innings: dugouts, bats on the fence, and the peaks behind
            center field.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr 1fr" },
            }}
          >
            <Box sx={{ gridRow: { md: "span 2" } }}>
              <LeaguePhoto
                src={featured.src}
                alt={featured.alt}
                aspectRatio="3 / 4"
                objectPosition={featured.objectPosition}
              />
            </Box>
            {restPhotos.map((photo) => (
              <LeaguePhoto
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                aspectRatio="4 / 3"
                objectPosition={photo.objectPosition}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.white, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionKicker>The calendar</SectionKicker>
              <Typography variant="h2" sx={{ color: colors.navy, mb: 3, fontSize: { xs: "2.4rem", md: "3.2rem" } }}>
                Key dates
              </Typography>
              <Box sx={{ borderTop: `2px solid ${colors.navy}` }}>
                {keyDates.map((row) => (
                  <Box
                    key={row.event}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "104px 1fr" },
                      gap: 1,
                      py: 1.75,
                      borderBottom: `1px solid ${colors.shadow}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Big Shoulders Display", sans-serif',
                        fontWeight: 800,
                        color: colors.clay,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {row.date}
                    </Typography>
                    <Typography sx={{ color: colors.ink }}>{row.event}</Typography>
                  </Box>
                ))}
              </Box>
              <Link
                component={NavLink}
                to="/season/schedule"
                underline="none"
                sx={{
                  display: "inline-block",
                  mt: 2.5,
                  color: colors.navy,
                  fontFamily: '"Big Shoulders Display", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  borderBottom: `2px solid ${colors.clay}`,
                }}
              >
                See the schedule
              </Link>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionKicker>Community</SectionKicker>
              <Typography variant="h2" sx={{ color: colors.navy, mb: 2, fontSize: { xs: "2.4rem", md: "3.2rem" } }}>
                Sponsors
              </Typography>
              <Typography sx={{ color: colors.ink, mb: 2, fontSize: "1.08rem" }}>
                Local partners keep the diamonds playable and the kids in Blues
                gear. If your business wants a place on this wall, talk to the
                board this winter.
              </Typography>
              <Typography sx={{ color: colors.gray }}>
                Sponsor marks will land here as the 2027 book closes.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default HomePage
