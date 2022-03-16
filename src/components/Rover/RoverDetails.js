import React from "react"
import { connect } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { setEarthDate } from "../../actions"
import Gallery from "../Gallery"

const RoverDetails = ({ rover, earthDate, setDate }) => {
  // const navigate = useNavigate()
  // const goToPhotos = () => navigate("?earth_date=2022-3-10")
  if (rover) {
    return (
      <div className="rover-details">
        <ul className="rover-details-list">
          <li>Name: {rover.name}</li>
          <li>Landing: {rover.landing_date}</li>
          <li>Max date: {rover.max_date}</li>
          <li>Total photos: {rover.total_photos}</li>
        </ul>
        <div className="avatar"></div>
        <div className="inputs">
          <input
            type="date"
            min={rover.landing_date}
            max={rover.max_date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          {/* <button onClick={goToPhotos}>Photos</button> */}
        </div>
        <Gallery rover={rover} earthDate={earthDate} />
      </div>
    )
  } else {
    return <div className="">Loading</div>
  }
}

const mapStateToProps = (state) => {
  return {
    earthDate: state.earthDate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDate: (date) => {
      dispatch(setEarthDate(date))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoverDetails)
