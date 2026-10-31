import Box from "@mui/material/Box"

type LeaguePhotoProps = {
  src: string
  alt: string
  aspectRatio?: string
  objectPosition?: string
  loading?: "lazy" | "eager"
  fetchPriority?: "high" | "low" | "auto"
}

function LeaguePhoto({
  src,
  alt,
  aspectRatio = "4 / 3",
  objectPosition = "center",
  loading = "lazy",
  fetchPriority,
}: LeaguePhotoProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      sx={{
        width: "100%",
        height: "100%",
        aspectRatio,
        objectFit: "cover",
        objectPosition,
        display: "block",
        borderRadius: "2px",
      }}
    />
  )
}

export default LeaguePhoto
