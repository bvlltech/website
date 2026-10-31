import { Navigate, Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SeasonLayout from "./components/SeasonLayout"
import { defaultSeasonPath } from "./data/seasonPages"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import PoliciesPage from "./pages/PoliciesPage"
import SeasonEmbedPage from "./pages/season/SeasonEmbedPage"

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/teams" element={<Navigate to={defaultSeasonPath} replace />} />
        <Route path="/season" element={<SeasonLayout />}>
          <Route index element={<Navigate to="schedule" replace />} />
          <Route path=":section" element={<SeasonEmbedPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
