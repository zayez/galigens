import React from "react"
import CustomDate from "../../common/CustomDate"

const MainFilter = ({ rover, dateType }) => {
  return (
    <div className="main-filter">
      <CustomDate
        type={dateType}
        minDate={rover.landingDate}
        maxDate={rover.maxDate}
        minSol={0}
        maxSol={rover.maxSol}
      />
    </div>
  )
}

export default MainFilter
