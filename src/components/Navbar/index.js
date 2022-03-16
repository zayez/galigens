import React from "react"
import { Link } from "react-router-dom"
import Menu from "../Menu"
import "./navbar.sss"

const Navbar = ({}) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link to="/">codename</Link>
        </h1>
      </div>
      <Menu />
    </nav>
  )
}

export default Navbar
