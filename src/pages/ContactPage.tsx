import { useState, type FormEvent } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Link from "@mui/material/Link"
import { NavLink } from "react-router"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import SectionKicker from "../components/SectionKicker"
import { colors } from "../colors"
import { contact, contactTopics } from "../data/contact"

type FormState = {
  name: string
  email: string
  topic: string
  message: string
}

const emptyForm: FormState = {
  name: "",
  email: "",
  topic: "General question",
  message: "",
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [attempted, setAttempted] = useState(false)
  const [openedMail, setOpenedMail] = useState(false)

  const errors = {
    name: form.name.trim() === "",
    email: !isValidEmail(form.email.trim()),
    message: form.message.trim() === "",
  }
  const hasErrors = errors.name || errors.email || errors.message

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAttempted(true)
    setOpenedMail(false)

    if (hasErrors) {
      return
    }

    const subject = `BVLL contact: ${form.topic}`
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Topic: ${form.topic}`,
      "",
      form.message.trim(),
    ].join("\n")

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpenedMail(true)
  }

  return (
    <Box component="main" id="main" sx={{ bgcolor: colors.cream, pb: { xs: 5, md: 8 } }}>
      <Container maxWidth="md" sx={{ pt: { xs: 4, md: 6 } }}>
        <SectionKicker>The board</SectionKicker>
        <Typography
          component="h1"
          variant="h1"
          sx={{ color: colors.navy, mb: 2, fontSize: { xs: "2.75rem", md: "4rem" } }}
        >
          Contact us
        </Typography>
        <Typography sx={{ color: colors.ink, mb: 4, maxWidth: 640, fontSize: "1.08rem" }}>
          Questions about fees, registration, or volunteering can go to the league
          treasurer. Send a message below (opens your email app) or use TeamLinkt
          if you already have a league account.
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            p: { xs: 2, md: 3 },
            mb: 4,
            bgcolor: colors.white,
            border: `2px solid ${colors.navy}`,
          }}
        >
          <Stack spacing={2.5}>
            <TextField
              id="contact-name"
              label="Name"
              name="name"
              autoComplete="name"
              required
              fullWidth
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              error={attempted && errors.name}
              helperText={attempted && errors.name ? "Enter your name." : " "}
            />
            <TextField
              id="contact-email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
              fullWidth
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              error={attempted && errors.email}
              helperText={
                attempted && errors.email
                  ? "Enter a valid email so we can reply."
                  : " "
              }
            />
            <FormControl fullWidth>
              <InputLabel id="contact-topic-label">Topic</InputLabel>
              <Select
                labelId="contact-topic-label"
                id="contact-topic"
                label="Topic"
                value={form.topic}
                onChange={(event) => setForm({ ...form, topic: event.target.value })}
              >
                {contactTopics.map((topic) => (
                  <MenuItem key={topic} value={topic}>
                    {topic}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="contact-message"
              label="Message"
              name="message"
              required
              fullWidth
              multiline
              minRows={5}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              error={attempted && errors.message}
              helperText={attempted && errors.message ? "Write a short message." : " "}
            />
            {openedMail ? (
              <Typography role="status" sx={{ color: colors.navy }}>
                Your email app should open with a message to {contact.email}. If
                nothing happens, send the note yourself.
              </Typography>
            ) : null}
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: colors.clay,
                  color: colors.white,
                  boxShadow: "none",
                  px: 3,
                  "&:hover": { bgcolor: colors.orange, boxShadow: "none" },
                }}
              >
                Email the treasurer
              </Button>
            </Box>
          </Stack>
        </Box>

        <Stack spacing={1.5} sx={{ maxWidth: 640 }}>
          <Typography sx={{ color: colors.ink }}>
            Email directly:{" "}
            <Link href={`mailto:${contact.email}`} sx={{ color: colors.navy, fontWeight: 700 }}>
              {contact.email}
            </Link>
          </Typography>
          <Typography sx={{ color: colors.ink }}>
            TeamLinkt league contact:{" "}
            <Link
              href={contact.teamlinkt}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: colors.navy, fontWeight: 700 }}
            >
              Contact us on TeamLinkt
            </Link>
          </Typography>
          <Typography sx={{ color: colors.ink }}>
            League rules:{" "}
            <Link component={NavLink} to="/policies" sx={{ color: colors.navy, fontWeight: 700 }}>
              Policies and procedures
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default ContactPage
