import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { colors } from "../colors"

type ImagePlaceholderProps = {
  label: string
  aspectRatio?: string
  minHeight?: number
}

function ImagePlaceholder({
  label,
  aspectRatio = "16 / 9",
  minHeight,
}: ImagePlaceholderProps) {
  return (
    <Box
      sx={{
        aspectRatio,
        minHeight,
        border: `2px dashed ${colors.shadow}`,
        borderRadius: 2,
        bgcolor: "rgb(255 255 255 / 65%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: colors.gray, fontWeight: 600, maxWidth: 280 }}
      >
        {label}
      </Typography>
    </Box>
  )
}

export default ImagePlaceholder
