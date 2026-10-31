import { useMemo, useState } from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Link from "@mui/material/Link"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { colors } from "../colors"
import {
  AGE_BANDS,
  BIRTH_YEARS,
  MAX_LEAGUE_AGE,
  MIN_LEAGUE_AGE,
  MONTHS,
  SOURCE_URL,
  formatBand,
  getAgeBand,
  getLeagueAge,
  isEligibleLeagueAge,
} from "../data/baseballAgeChart2027"
import SectionKicker from "./SectionKicker"

function AgeChart() {
  const [month, setMonth] = useState<number | "">("")
  const [year, setYear] = useState<number | "">("")

  const result = useMemo(() => {
    if (month === "" || year === "") {
      return null
    }

    const age = getLeagueAge(month, year)
    return { age, eligible: isEligibleLeagueAge(age), band: getAgeBand(age) }
  }, [month, year])

  return (
    <Box>
      <SectionKicker>2027 baseball</SectionKicker>
      <Typography variant="h2" sx={{ color: colors.navy, mb: 1.5, fontSize: { xs: "2.4rem", md: "3.4rem" } }}>
        Find a league age
      </Typography>
      <Typography sx={{ color: colors.ink, mb: 4, maxWidth: 640, fontSize: "1.08rem" }}>
        Little League baseball uses the player’s age on August 31, 2027. Enter a
        birth month and year. The chart below is the official cutoff, rebuilt as
        a lineup card.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 220px" },
          gap: 2,
          mb: 4,
          border: `2px solid ${colors.navy}`,
        }}
      >
        <Box sx={{ p: { xs: 2, md: 3 } }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="birth-month-label">Birth month</InputLabel>
              <Select
                labelId="birth-month-label"
                id="birth-month"
                label="Birth month"
                value={month}
                onChange={(event) => setMonth(Number(event.target.value))}
              >
                {MONTHS.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="birth-year-label">Birth year</InputLabel>
              <Select
                labelId="birth-year-label"
                id="birth-year"
                label="Birth year"
                value={year}
                onChange={(event) => setYear(Number(event.target.value))}
              >
                {BIRTH_YEARS.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Box role="status" aria-live="polite" sx={{ mt: 2.5 }}>
            {result?.eligible ? (
              <Typography sx={{ color: colors.ink }}>
                Players born {formatBand(result.band)} are league age {result.age}{" "}
                for 2027 baseball.
              </Typography>
            ) : result ? (
              <Typography sx={{ color: colors.ink }}>
                That birthday is outside Little League baseball ages {MIN_LEAGUE_AGE}-
                {MAX_LEAGUE_AGE} for the 2027 season.
              </Typography>
            ) : (
              <Typography sx={{ color: colors.gray }}>
                Choose a month and year to see league age.
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: colors.navy,
            color: colors.white,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 3,
            px: 2,
            minHeight: 160,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Big Shoulders Display", sans-serif',
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: colors.sand,
              fontWeight: 700,
            }}
          >
            League age
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: '"Big Shoulders Display", sans-serif',
              fontWeight: 800,
              fontSize: result?.eligible ? "6rem" : "2.4rem",
              lineHeight: 1,
              color: colors.white,
            }}
          >
            {result?.eligible ? result.age : "-"}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 0,
          border: `1px solid ${colors.navy}`,
        }}
      >
        {AGE_BANDS.map((band, index) => {
          const active = result?.eligible && result.age === band.age
          return (
            <Box
              key={band.age}
              sx={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                gap: 1.5,
                alignItems: "center",
                px: 1.5,
                py: 1.25,
                borderBottom: `1px solid ${colors.shadow}`,
                borderRight: {
                  sm: index % 2 === 0 ? `1px solid ${colors.shadow}` : 0,
                },
                bgcolor: active ? colors.navy : colors.white,
                color: active ? colors.white : colors.navy,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Big Shoulders Display", sans-serif',
                  fontWeight: 800,
                  color: active ? colors.sand : colors.navy,
                }}
              >
                Age {band.age}
              </Typography>
              <Typography variant="body2" sx={{ color: active ? colors.white : colors.ink }}>
                {formatBand(band)}
              </Typography>
            </Box>
          )
        })}
      </Box>

      <Typography variant="body2" sx={{ color: colors.gray, mt: 2.5 }}>
        Baseball divisions only, 2027 season. Source:{" "}
        <Link href={SOURCE_URL} target="_blank" rel="noreferrer">
          Little League 2027 Baseball Age Chart
        </Link>
        .
      </Typography>
    </Box>
  )
}

export default AgeChart
