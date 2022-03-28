import React from "react"
import { Link } from "react-router-dom"
import Menu from "./Menu"
import "./navbar.sss"

const Navbar = ({}) => {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <h1 className="logo">
          <Link to="/">Galigens</Link>
        </h1>
      </div>
      <Menu />
    </nav>
  )
}

export default Navbar
