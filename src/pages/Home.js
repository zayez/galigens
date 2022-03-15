import React from "react"
import { connect } from "react-redux"
import { fetchRovers } from "../reducers/rootReducer"
import { useEffect } from "react"
import Rovers from "../components/Rovers"

const Home = ({ rovers, getRovers }) => {
  getRovers()

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
    getRovers: async () => {
      dispatch(fetchRovers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
