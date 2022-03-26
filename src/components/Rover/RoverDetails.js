import React from "react"

const RoverDetails = ({ rover }) => {
  const minDate = new Date(rover.landing_date)
  const maxDate = new Date(rover.max_date)
  return (
    <div className="rover-description">
      <h3>Rover details:</h3>
      <div className="desc">
        <table className="rover-description-table">
          <tbody>
            <tr>
              <td>Landing:</td>
              <td>
                {minDate.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </td>
            </tr>
            <tr>
              <td>Last day:</td>
              <td>
                {maxDate.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </td>
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
