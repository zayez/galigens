import React from "react"
import { connect } from "react-redux"
import { setEarthDate, setSol } from "../../actions"
import { EARTH_DAY } from "../../types/DateType"

const CustomDate = ({
  rover,
  type,
  earthDate,
  sol,
  onEarthDateChange,
  onSolChange,
}) => {
  return type === EARTH_DAY ? (
    <EarthDate rover={rover} setDate={onEarthDateChange} date={earthDate} />
  ) : (
    <SolDate rover={rover} setSol={onSolChange} sol={sol} />
  )
}

const mapStateToProps = (state) => {
  return {
    earthDate: state.earthDate,
    sol: state.sol,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEarthDateChange: (date) => {
      dispatch(setEarthDate(date))
    },

    onSolChange: (sol) => {
      dispatch(setSol(sol))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDate)

const SolDate = ({ rover, setSol, sol }) => {
  return (
    <div className="field">
      <div className="field-label">
        <label>Sol:</label>
      </div>
      <div className="field-body">
        <input
          type="number"
          max={rover.max_sol}
          min={1}
          value={sol}
          onChange={(e) => setSol(e.target.value)}
        />
      </div>
    </div>
  )
}

const EarthDate = ({ rover, setDate, date }) => {
  return (
    <div className="field">
      <div className="field-label">
        <label>Earth date:</label>
      </div>
      <div className="field-body">
        <input
          type="date"
          value={date}
          min={rover.landing_date}
          max={rover.max_date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>
  )
}
