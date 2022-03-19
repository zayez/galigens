import React from "react"

const RoverFilters = ({ rover, setDate }) => {
  return (
    <div className="rover-filters">
      <h3>Filters:</h3>

      <div className="fields">
        <div className="field">
          <div className="field-label">
            <label>Earth date:</label>
          </div>
          <div className="field-body">
            <input
              type="date"
              min={rover.landing_date}
              max={rover.max_date}
              onChange={(e) => setDate(e.target.value)}
            />
            {/* <button onClick={goToPhotos}>Photos</button> */}
          </div>
        </div>

        <div className="field">
          <div className="field-label">
            <label>Sol:</label>
          </div>
          <div className="field-body">
            <input type="number" />
          </div>
        </div>

        <div className="field">
          <div className="field-label">
            <label htmlFor="">Camera:</label>
          </div>
          <div className="field-body">
            <select name="" id="">
              <option value="1"></option>
              <option value="2"></option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoverFilters
