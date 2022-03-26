import React from "react"
import { getRoverImage } from "../../helpers/roverUtils"
import Gallery from "../Gallery"
import "./rover.sss"
import "../../styles/components/forms.sss"
import RoverFilters from "./RoverFilters"

const RoverPage = ({ rover, earthDate }) => {
  if (rover) {
    return (
      <div className="rover">
        <div className="container content-main">
          <div className="rover-heading">
            <div className="rover-name">
              <h2>{rover.name} rover</h2>
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
            <h3>Rover gallery</h3>
            <Gallery rover={rover} earthDate={earthDate} />
          </div>
        </div>
      </div>
    )
  } else {
    return <div className="">Loading</div>
  }
}

export default RoverPage
