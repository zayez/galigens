import React from "react"
import { HashRouter, Route, Routes, useLocation } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { TransitionGroup } from "react-transition-group"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Rover from "../components/Rover"
import Rovers from "../components/Rovers"
import Home from "../pages/Home"
import "./app.sss"

const AnimatedApp = () => {
  const location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="animated-app"
        timeout={600}
      >
        <Routes location={location}>
          <Route path="/" exact element={<Home />} />
          <Route path="/rovers" element={<Rovers />} />
          <Route path="/rover/:id" element={<Rover />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <AnimatedApp />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
