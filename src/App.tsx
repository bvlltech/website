import { Route, Routes } from "react-router"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import TeamsPage from "./pages/TeamsPage"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </>
  )
}

export default App
