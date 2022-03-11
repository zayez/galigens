import React from "react"
import RoverList from "./RoverList"

import api from "../../api"
const { getRovers } = api

const rovers = await getRovers()

const Rovers = () => {
  return (
    <div className="rovers">
      <RoverList rovers={rovers} />
    </div>
  )
}

export default Rovers
