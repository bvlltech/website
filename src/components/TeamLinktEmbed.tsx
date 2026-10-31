import Box from "@mui/material/Box"

type ResponsiveHeight = string | number | Record<string, string | number>

type TeamLinktEmbedProps = {
  id: string
  title: string
  src: string
  /** Pixel height, CSS length, or responsive values. Defaults to viewport minus header. */
  height?: ResponsiveHeight
}

const defaultHeight: ResponsiveHeight = {
  xs: "calc(100dvh - 128px)",
  md: "calc(100dvh - 168px)",
}

function TeamLinktEmbed({ id, title, src, height = defaultHeight }: TeamLinktEmbedProps) {
  return (
    <Box
      component="iframe"
      id={id}
      title={title}
      src={src}
      frameBorder={0}
      sx={{
        width: "100%",
        height,
        minHeight: 720,
        border: 0,
        display: "block",
      }}
    />
  )
}

export default TeamLinktEmbed
