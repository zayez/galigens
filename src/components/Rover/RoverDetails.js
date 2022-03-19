import React from "react"

const RoverDetails = ({ rover }) => {
  return (
    <div className="rover-description">
      <h3>Rover details:</h3>
      <div className="desc">
        <table className="rover-description-table">
          <tbody>
            <tr>
              <td>Landing:</td>
              <td>{rover.landing_date}</td>
            </tr>
            <tr>
              <td>Last day:</td>
              <td>{rover.max_date}</td>
            </tr>
            <tr>
              <td>Last sol:</td>
              <td>{rover.max_sol}</td>
            </tr>
            <tr>
              <td>Total photos:</td>
              <td>{rover.total_photos}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{rover.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RoverDetails
