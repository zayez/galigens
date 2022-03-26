import React from "react"
import { connect } from "react-redux"
import {
  applyFilters,
  setCamera,
  setDateType,
} from "../../actions/filtersActions"
import { fetchPhotos } from "../../actions/photosActions"
import { EARTH_DAY, SOL_DAY } from "../../types/DateType"
import CustomDate from "../common/CustomDate"

const RoverFilters = ({
  rover,
  camera,
  dateType,
  onDateTypeChange,
  onCameraChange,
  onSearchClick,
}) => {
  return (
    <div className="rover-filters">
      <h3>Filters:</h3>

      <div className="fields">
        <CustomDate
          type={dateType}
          minDate={rover.landing_date}
          maxDate={rover.max_date}
          minSol={0}
          maxSol={rover.max_sol}
        />

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
                  {`${camera.full_name} (${camera.name})`}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <div className="field-label"></div>
          <div className="field-body">
            <button className="btn btn-major" onClick={onSearchClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    txtEarthDate: state.filters.txtEarthDate,
    txtSol: state.filters.txtSol,
    dateType: state.filters.dateType,
    camera: state.filters.camera,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateTypeChange: (type) => {
      dispatch(setDateType(type))
    },

    onCameraChange: (name) => {
      dispatch(setCamera(name))
    },

    onSearchClick: async () => {
      dispatch(applyFilters())
      dispatch(fetchPhotos())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoverFilters)
