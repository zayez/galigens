import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"

import { selectRover } from "../../actions/roversActions"
import { setInitialFilters } from "../../actions/filtersActions"
import RoverPage from "./RoverPage"

const Rover = ({ selectedRover, setRover, initializeFilters }) => {
  const { id } = useParams()

  useEffect(() => {
    setRover(Number(id))
  }, [])

  useEffect(() => {
    if (selectedRover) {
      initializeFilters(selectedRover)
    }
  }, [selectedRover])

  return <RoverPage rover={selectedRover} />
}

const mapStateToProps = (state) => {
  return {
    rovers: state.rovers.rovers,
    selectedRover: state.rovers.selectedRover,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRover: (id) => {
      dispatch(selectRover(id))
    },

    initializeFilters: (rover) => {
      dispatch(
        setInitialFilters({ earthDate: rover.max_date, sol: rover.max_sol })
      )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rover)
