import React from "react"
import { connect } from "react-redux"
import { setDateType } from "../../actions"
import { EARTH_DAY, SOL_DAY } from "../../types/DateTypes"
import CustomDate from "../common/CustomDate"

const RoverFilters = ({ rover, dateType, onDateTypeChange }) => {
  return (
    <div className="rover-filters">
      <h3>Filters:</h3>

      <div className="fields">
        <CustomDate type={dateType} rover={rover} />

        <div className="field">
          <div className="field-label">
            <label htmlFor="">Date type:</label>
          </div>
          <div className="field-body">
            <select
              name=""
              id=""
              value={dateType}
              onChange={(e) => onDateTypeChange(e.target.value)}
            >
              <option value={EARTH_DAY}>Earth day</option>
              <option value={SOL_DAY}>Sol (day on mars)</option>
            </select>
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

const mapStateToProps = (state) => {
  return {
    dateType: state.dateType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateTypeChange: (type) => {
      dispatch(setDateType(type))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoverFilters)
