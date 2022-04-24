import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { getRoverImage } from "../../utils/roverUtils"
import RoverDetails from "../Rover/RoverDetails"

const RoverItem = ({ rover }) => {
  const roverLink = `/rover/${rover.name.toLowerCase()}`
  const roverImage = getRoverImage(rover.name)
  const navigate = useNavigate()
  const navigateToRover = () => navigate(roverLink)
  return (
    <div className="rover-item" onClick={navigateToRover}>
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <h3 className="rover-title">
              <Link to={roverLink}>{rover.name}</Link>
            </h3>
          </div>
          <div className="card-body">
            <RoverDetails rover={rover} />
          </div>
        </div>
        <div className="card-image">
          <Link to={roverLink}>
            <img src={roverImage} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoverItem
