import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public/Home"
import Login from "./pages/public/Login"
import Register from "./pages/public/Register"
import PropertyDetails from "./pages/public/PropertyDetails"
import OwnerDashboard from "./pages/owner/OwnerDashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/ownerdashboard" element={<OwnerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
