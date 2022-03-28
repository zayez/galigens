import React from "react"
import CustomDate from "../../common/CustomDate"

const MainFilter = ({ rover, dateType }) => {
  return (
    <div className="main-filter">
      <CustomDate
        type={dateType}
        minDate={rover.landing_date}
        maxDate={rover.max_date}
        minSol={0}
        maxSol={rover.max_sol}
      />
    </div>
  )
}

export default MainFilter
