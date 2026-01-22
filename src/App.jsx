import { Routes, Route, Link } from "react-router-dom"
import Home from "./home"
import Detail from "./detail"
import Dashboard from "./pages/dashboard/dashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App