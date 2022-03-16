import React from "react"
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import Rovers from "../components/Rovers"
import Rover from "../components/Rover"

const App = () => {
  return (
    <div className="app">
      <Router>
        <header className="header">
          <h1>
            <Link to="/">home</Link>
          </h1>
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rovers" element={<Rovers />} />
          <Route path="/rover/:id" element={<Rover />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
