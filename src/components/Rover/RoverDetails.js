import React from "react"
import { toLocaleDate } from "../../utils/dateUtils"

const RoverDetails = ({ rover }) => {
  return (
    <div className="rover-description">
      <table className="rover-description-table">
        <tbody>
          <tr>
            <td>Landing date</td>
            <td>{toLocaleDate(rover.landingDate)}</td>
          </tr>
          <tr>
            <td>Last report</td>
            <td>{toLocaleDate(rover.maxDate)}</td>
          </tr>
          <tr>
            <td>Mission clock</td>
            <td>{rover.maxSol} sols</td>
          </tr>
          <tr>
            <td>Raw photos</td>
            <td>{rover.totalPhotos}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{rover.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RoverDetails
