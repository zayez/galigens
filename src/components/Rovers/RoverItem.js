import React from "react"
import { Link, useNavigate } from "react-router-dom"
import SpiritImage from "../../assets/images/rovers/spirit/spirit.jpg"
import OpportunityImage from "../../assets/images/rovers/opportunity/opportunity.jpg"
import CuriosityImage from "../../assets/images/rovers/curiosity/curiosity.jpg"
import PerseveranceImage from "../../assets/images/rovers/perseverance/perseverance.jpg"
import RoverDetails from "../Rover/RoverDetails"
const imageRovers = {
  spirit: SpiritImage,
  opportunity: OpportunityImage,
  curiosity: CuriosityImage,
  perseverance: PerseveranceImage,
}

const RoverItem = ({ rover }) => {
  const navigate = useNavigate()
  const navigateToRover = () => navigate(`/rover/${rover.id}`)
  return (
    <div className="rover-item" onClick={navigateToRover}>
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <h3>
              <Link to={`/rover/${rover.id}`}>{rover.name}</Link>
            </h3>
          </div>
          <div className="card-body">
            <RoverDetails rover={rover} />
          </div>
        </div>
        <div className="card-image">
          <Link to={`/rover/${rover.id}`}>
            <img src={imageRovers[rover.name.toLowerCase()]} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoverItem
