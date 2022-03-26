import React, { useEffect } from "react"
import RoverList from "./RoverList"
import EmptyList from "../common/EmptyList"
import { fetchRovers } from "../../actions/roversActions"
import { connect } from "react-redux"
import Loader from "../Loader"
import { SPINNER_TYPE } from "../../types/LoaderType"

const Rovers = ({ rovers, isLoading, getRovers }) => {
  useEffect(() => {
    getRovers()
  }, [])

  useEffect(() => {}, [rovers])

  return (
    <div className="container content-main">
      <RoversWrapped rovers={rovers} isLoading={isLoading} />
    </div>
  )
}

const RoversWrapped = ({ isLoading, rovers }) => {
  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <Loader type={SPINNER_TYPE} size="large" />
      </div>
    )
  } else {
    if (rovers.length > 0) {
      return <RoverList rovers={rovers} />
    } else {
      return <EmptyList />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    rovers: state.rovers.rovers,
    isLoading: state.rovers.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRovers: () => {
      dispatch(fetchRovers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rovers)
