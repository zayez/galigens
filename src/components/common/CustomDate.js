import React from "react"
import { connect } from "react-redux"
import { setEarthDate, setSol } from "../../actions/filtersActions"
import { EARTH_DAY } from "../../types/DateType"

const CustomDate = ({
  rover,
  type,
  txtEarthDate,
  txtSol,
  onEarthDateChange,
  onSolChange,
}) => {
  return type === EARTH_DAY ? (
    <EarthDate rover={rover} setDate={onEarthDateChange} date={txtEarthDate} />
  ) : (
    <SolDate rover={rover} setSol={onSolChange} sol={txtSol} />
  )
}

const mapStateToProps = (state) => {
  return {
    txtEarthDate: state.filters.txtEarthDate,
    txtSol: state.filters.txtSol,
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
