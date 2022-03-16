import React from "react"
import Navbar from "../Navbar"
import "./header.sss"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapped">
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
