/** Official Little League Baseball league-age chart for the 2027 season. */
export const SEASON_YEAR = 2027
export const MIN_LEAGUE_AGE = 4
export const MAX_LEAGUE_AGE = 16
export const SOURCE_URL =
  "https://www.littleleague.org/downloads/2027-baseball-age-chart/"

export const MONTHS = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
] as const

export const BIRTH_YEARS = Array.from(
  { length: MAX_LEAGUE_AGE - MIN_LEAGUE_AGE + 2 },
  (_, index) => SEASON_YEAR - MIN_LEAGUE_AGE - index,
)

export type AgeBand = {
  age: number
  start: Date
  end: Date
}

export function getLeagueAge(month: number, year: number): number {
  return month >= 9 ? SEASON_YEAR - 1 - year : SEASON_YEAR - year
}

export function getAgeBand(age: number): AgeBand {
  const endYear = SEASON_YEAR - age
  return {
    age,
    start: new Date(endYear - 1, 8, 1),
    end: new Date(endYear, 7, 31),
  }
}

export const AGE_BANDS: AgeBand[] = Array.from(
  { length: MAX_LEAGUE_AGE - MIN_LEAGUE_AGE + 1 },
  (_, index) => getAgeBand(MIN_LEAGUE_AGE + index),
)

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  month: "long",
  day: "numeric",
  year: "numeric",
})

export function formatDate(date: Date): string {
  return dateFormatter.format(date)
}

export function formatBand(band: AgeBand): string {
  return `${formatDate(band.start)} to ${formatDate(band.end)}`
}

export function isEligibleLeagueAge(age: number): boolean {
  return age >= MIN_LEAGUE_AGE && age <= MAX_LEAGUE_AGE
}
