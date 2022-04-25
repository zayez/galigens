import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"

import { selectRover } from "../../actions/roversActions"
import { setFilters } from "../../actions/filtersActions"
import RoverPage from "./RoverPage"
import Loader from "../Loader"

const Rover = ({
  selectedRover,
  earthDate,
  isLoading,
  setRover,
  initializeFilters,
}) => {
  const { name } = useParams()

  useEffect(() => {
    setRover(name)
  }, [])

  useEffect(() => {
    if (selectedRover) {
      initializeFilters(selectedRover)
    }
  }, [selectedRover])

  return (
    <RoverWrapped
      rover={selectedRover}
      earthDate={earthDate}
      isLoading={isLoading}
    />
  )
}

const RoverWrapped = ({ rover, earthDate, isLoading }) => {
  if (isLoading || rover === null) {
    return (
      <div className="loader-wrapper">
        <Loader size="large" />
      </div>
    )
  }

  return <RoverPage rover={rover} earthDate={earthDate} />
}

const mapStateToProps = (state) => {
  return {
    rovers: state.rovers.rovers,
    selectedRover: state.rovers.selectedRover,
    earthdate: state.filters.earthDate,
    isLoading: state.filters.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRover: (id) => {
      dispatch(selectRover(id))
    },

    initializeFilters: (rover) => {
      dispatch(setFilters({ earthDate: rover.maxDate, sol: rover.maxSol }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rover)
