import React from "react"

const RoverDetails = ({ rover }) => {
  const minDate = new Date(rover.landing_date)
  const maxDate = new Date(rover.max_date)
  return (
    <div className="rover-description">
      <table className="rover-description-table">
        <tbody>
          <tr>
            <td>Landing date:</td>
            <td>
              {minDate.toLocaleDateString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </td>
          </tr>
          <tr>
            <td>Last report:</td>
            <td>
              {maxDate.toLocaleDateString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </td>
          </tr>
          <tr>
            <td>Mission clock:</td>
            <td>{rover.max_sol} sols</td>
          </tr>
          <tr>
            <td>Raw photos:</td>
            <td>{rover.total_photos}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{rover.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RoverDetails
