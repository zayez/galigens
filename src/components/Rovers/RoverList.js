import React from "react"
import RoverItem from "./RoverItem"
import "./rovers.sss"

const RoverList = ({ rovers }) => {
  return (
    <div className="rovers">
      <h1 className="heading">Choose a rover</h1>
      <ul className="rovers-list">
        {rovers.map((rover) => (
          <RoverItem rover={rover} key={rover.id} />
        ))}
      </ul>
    </div>
  )
}

export default RoverList
