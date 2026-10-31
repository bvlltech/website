export type SeasonPageConfig = {
  slug: string
  title: string
  embedId: string
  embedTitle: string
  src: string
}

export const seasonPages: SeasonPageConfig[] = [
  {
    slug: "schedule",
    title: "Schedule",
    embedId: "Schedule",
    embedTitle: "Schedule",
    src: "https://leagues.teamlinkt.com/bowvalleylittleleague/Schedule?iframe",
  },
  {
    slug: "scores",
    title: "Scores",
    embedId: "Scores",
    embedTitle: "Scores",
    src: "https://leagues.teamlinkt.com/bowvalleylittleleague/Scores?iframe",
  },
  {
    slug: "standings",
    title: "Standings",
    embedId: "Standings",
    embedTitle: "Standings",
    src: "https://leagues.teamlinkt.com/bowvalleylittleleague/Standings?iframe",
  },
  {
    slug: "stats",
    title: "Stats",
    embedId: "Statistics",
    embedTitle: "Stats",
    src: "https://leagues.teamlinkt.com/bowvalleylittleleague/Statistics?iframe",
  },
]

export const defaultSeasonPath = `/season/${seasonPages[0].slug}`
