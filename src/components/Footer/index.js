import React from "react"
import Menu from "../Menu"
import "./footer.sss"

const Footer = ({ orientation = "horizontal" }) => {
  const navStyles = orientation === "vertical" ? "menu menu-vertical" : "menu"
  return (
    <div className="footer">
      <div className="container">
        <Menu orientation="vertical" />
      </div>
    </div>
  )
}

export default Footer
