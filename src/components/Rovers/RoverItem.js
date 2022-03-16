import React from "react"
import { Link } from "react-router-dom"
import SpiritImage from "../../assets/images/rovers/spirit/spirit.jpg"
import OpportunityImage from "../../assets/images/rovers/opportunity/opportunity.jpg"
import CuriosityImage from "../../assets/images/rovers/curiosity/curiosity.jpg"
import PerseveranceImage from "../../assets/images/rovers/perseverance/perseverance.jpg"
const imageRovers = {
  spirit: SpiritImage,
  opportunity: OpportunityImage,
  curiosity: CuriosityImage,
  perseverance: PerseveranceImage,
}

const RoverItem = ({ rover }) => {
  return (
    <div className="rover-item">
      <Link to={`/rover/${rover.id}`}>
        <div className="rover-title">{rover.name}</div>
        <div className="rover-image">
          <img src={imageRovers[rover.name.toLowerCase()]} />
        </div>
      </Link>
    </div>
  )
}

export default RoverItem
