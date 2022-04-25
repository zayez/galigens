import React from "react"
import { getRoverImage } from "../../utils/roverUtils"
import Gallery from "../Gallery"
import "./rover.sss"
import RoverFilters from "./Filters"

const RoverPage = ({ rover, earthDate }) => {
  return (
    <div className="rover">
      <div className="container content-main">
        <div className="rover-heading">
          <div className="rover-name">
            <h1>Selected rover: {rover.name}</h1>
          </div>
          <div className="rover-avatar">
            <div className="rover-image">
              <img src={getRoverImage(rover.name)} />
            </div>
          </div>
        </div>
        <div className="rover-page">
          <RoverFilters rover={rover} />
        </div>
        <div className="rover-gallery">
          <h2 className="sub-heading">Gallery</h2>
          <Gallery rover={rover} earthDate={earthDate} />
        </div>
      </div>
    </div>
  )
}

export default RoverPage
