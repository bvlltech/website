import atBat from "../assets/at-bat.webp"
import batsOnFence from "../assets/bats-on-fence.webp"
import batterReady from "../assets/batter-ready.webp"
import dugoutBench from "../assets/dugout-bench.webp"
import pitcherDelivery from "../assets/pitcher-delivery.webp"
import playersWatching from "../assets/players-watching.webp"
import teamHuddle from "../assets/team-huddle.webp"

export type LeaguePhotoItem = {
  src: string
  alt: string
  objectPosition?: string
}

export const heroPhoto: LeaguePhotoItem = {
  src: pitcherDelivery,
  alt: "A pitcher throwing on a Bow Valley diamond with the mountains behind the outfield",
  objectPosition: "center 58%",
}

export const aboutPhoto: LeaguePhotoItem = {
  src: teamHuddle,
  alt: "Bow Valley Blues players and coaches in a huddle on the grass with the mountains behind them",
  objectPosition: "center 40%",
}

export const galleryPhotos: LeaguePhotoItem[] = [
  {
    src: dugoutBench,
    alt: "Bow Valley Blues players in the dugout with the Three Sisters behind the fence",
    objectPosition: "center 28%",
  },
  {
    src: batterReady,
    alt: "A Blues batter waiting on a pitch at a Bow Valley diamond",
    objectPosition: "70% 42%",
  },
  {
    src: atBat,
    alt: "Batter, catcher, and umpire at home plate during a Bow Valley Little League game",
    objectPosition: "center 40%",
  },
  {
    src: batsOnFence,
    alt: "Baseball bats leaning against the backstop fence",
    objectPosition: "center 55%",
  },
  {
    src: playersWatching,
    alt: "Blues players in jersey numbers 2, 7, 12, 10, and 1 watching from the fence",
    objectPosition: "center 45%",
  },
]
