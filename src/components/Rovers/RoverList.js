import React from "react"
import RoverItem from "./RoverItem"
import "./style.sss"

const RoverList = ({ rovers }) => {
  return (
    <ul className="rovers-list">
      {rovers.map((rover) => (
        <RoverItem rover={rover} key={rover.id} />
      ))}
    </ul>
  )
}

export default RoverList
