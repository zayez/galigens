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
      <h2>
        <Link to={`/rover/${rover.id}`}>{rover.name}</Link>
      </h2>
      <img src={imageRovers[rover.name.toLowerCase()]} />
    </div>
  )
}

export default RoverItem
