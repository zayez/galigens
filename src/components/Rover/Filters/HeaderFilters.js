import React from "react"
import { EARTH_DAY, SOL_DAY } from "../../../types/DateType"
import CustomDate from "../../common/CustomDate"

const HeaderFilters = ({
  rover,
  camera,
  dateType,
  onDateTypeChange,
  onCameraChange,
}) => {
  const minDate = new Date(rover.landingDate).toISOString().split("T")[0]
  const maxDate = new Date(rover.maxDate).toISOString().split("T")[0]

  return (
    <div className="header-filters">
      <CustomDate
        type={dateType}
        minDate={minDate}
        maxDate={maxDate}
        minSol={0}
        maxSol={rover.maxSol}
      />

      <div className="filter">
        <div className="filter-label">
          <label>Date type:</label>
        </div>
        <div className="filter-body">
          <select
            name=""
            id=""
            value={dateType}
            onChange={(e) => onDateTypeChange(e.target.value)}
          >
            <option value={EARTH_DAY}>Earth day</option>
            <option value={SOL_DAY}>Sol</option>
          </select>
        </div>
      </div>

      <div className="filter">
        <div className="filter-label">
          <label>Camera:</label>
        </div>
        <div className="filter-body">
          <select
            name=""
            id=""
            value={camera}
            onChange={(e) => onCameraChange(e.target.value)}
          >
            <option key="0" value="">
              All
            </option>
            {rover.cameras.map((camera) => (
              <option value={camera.name} key={camera.id}>
                {`${camera.fullname}`}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default HeaderFilters
