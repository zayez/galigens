import React from "react"
import { Link } from "react-router-dom"
import "./menu.sss"

const Menu = ({ orientation = "horizontal" }) => {
  const menuStyles = orientation === "vertical" ? "menu menu-vertical" : "menu"
  return (
    <ul className={menuStyles}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}

export default Menu
