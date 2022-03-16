import React from "react"
import "./menu.sss"

const Menu = ({ orientation = "horizontal" }) => {
  const menuStyles = orientation === "vertical" ? "menu menu-vertical" : "menu"
  return (
    <ul className={menuStyles}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Rovers</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  )
}

export default Menu
