import React from "react"
import { connect } from "react-redux"
import {
  applyFilters,
  setCamera,
  setDateType,
} from "../../../actions/filtersActions"
import { fetchPhotos } from "../../../actions/photosActions"
import HeaderFilters from "./HeaderFilters"
import MainFilter from "./MainFilter"
import "./filters.sss"

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
      <form onSubmit={onSearchClick}>
        <div className="panel">
          <HeaderFilters
            rover={rover}
            camera={camera}
            dateType={dateType}
            onDateTypeChange={onDateTypeChange}
            onCameraChange={onCameraChange}
          />
          <div className="submit-container">
            <button className="btn btn-major" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
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

    onSearchClick: async (e) => {
      e.preventDefault()
      dispatch(applyFilters())
      dispatch(fetchPhotos())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoverFilters)
