import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Rovers from "../components/Rovers"
import Rover from "../components/Rover"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rovers" element={<Rovers />} />
        <Route path="/rover/:id" element={<Rover />} />
      </Routes>
    </Router>
  )
}

export default App
