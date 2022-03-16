import React from "react"
import RoverList from "./RoverList"
import EmptyList from "../common/EmptyList"

const Rovers = ({ rovers }) => {
  if (rovers.length > 0) {
    return <RoverList rovers={rovers} />
  } else {
    return <EmptyList />
  }
}

export default Rovers
