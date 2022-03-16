import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Rovers from "../components/Rovers"
import Rover from "../components/Rover"
import Header from "../components/Header"
import Footer from "../components/Footer"

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rovers" element={<Rovers />} />
          <Route path="/rover/:id" element={<Rover />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
