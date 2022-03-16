import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { selectRover } from "../../actions"
import RoverDetails from "./RoverDetails"

const Rover = ({ selectedRover, setRover }) => {
  const { id } = useParams()
  setRover(Number(id))

  useEffect(() => {}, [selectedRover])

  return <RoverDetails rover={selectedRover} />
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
