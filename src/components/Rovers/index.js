import React from "react"
import RoverList from "./RoverList"
import EmptyList from "../common/EmptyList"

const Rovers = ({ rovers }) => {
  if (rovers.length > 0) {
    return (
      <div className="rovers">
        <RoverList rovers={rovers} />
      </div>
    )
  } else {
    return <EmptyList />
  }
}

export default Rovers
