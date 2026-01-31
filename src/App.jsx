import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home/home"
import Menu from "./layouts/menu"
import Workout from "./pages/workout/workout"
import Progess from "./pages/progess/progess"
import Customer from "./pages/customers/customer"
import Report from "./pages/reports/report"
import Setting from "./pages/settings/setting"
import Dashboard from "./pages/dashboard/dashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<Menu />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/progess" element={<Progess/>} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </>
  )
}

export default App