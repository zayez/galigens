import React from "react"
import { connect } from "react-redux"
import { fetchRovers } from "../reducers/rootReducer"
import Rovers from "../components/Rovers"
import { useEffect } from "react"

const Home = ({ rovers = null, getRovers }) => {
  useEffect(() => {
    getRovers()
  }, [])
  useEffect(() => {}, [rovers])
  return (
    <div className="home">
      <Rovers rovers={rovers} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    rovers: state.rovers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRovers: () => {
      dispatch(fetchRovers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
