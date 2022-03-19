import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { selectRover } from "../../actions"
import RoverPage from "./RoverPage"

const Rover = ({ selectedRover, setRover }) => {
  const { id } = useParams()
  setRover(Number(id))

  useEffect(() => {}, [selectedRover])

  return <RoverPage rover={selectedRover} />
}

const mapStateToProps = (state) => {
  return {
    rovers: state.rovers,
    selectedRover: state.selectedRover,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRover: (id) => {
      dispatch(selectRover(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rover)
