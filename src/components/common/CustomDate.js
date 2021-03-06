import React from "react"
import { connect } from "react-redux"
import { setEarthDate, setSol } from "../../actions/filtersActions"
import { isValidNumericKey } from "../../utils/keyboardUtils"
import { EARTH_DAY } from "../../types/DateType"
import { formatDate } from "../../utils/dateUtils"

const CustomDate = ({
  minDate,
  maxDate,
  minSol,
  maxSol,
  type,
  txtEarthDate,
  txtSol,
  onEarthDateChange,
  onSolChange,
}) => {
  return type === EARTH_DAY ? (
    <EarthDate
      date={txtEarthDate}
      min={minDate}
      max={maxDate}
      setDate={onEarthDateChange}
    />
  ) : (
    <SolDate sol={txtSol} min={minSol} max={maxSol} setSol={onSolChange} />
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

const SolDate = ({ sol, min, max, setSol }) => {
  return (
    <div className="filter">
      <div className="filter-label">
        <label>Sol:</label>
      </div>
      <div className="filter-body">
        <input
          type="number"
          min={min}
          max={max}
          value={sol}
          onAuxClick={(e) => e.preventDefault()}
          onKeyDown={(e) => isValidNumericKey(e)}
          onChange={(e) => {
            const value = e.target.value
            if (!(value < min || value > max)) {
              setSol(value)
            }
          }}
        />
      </div>
    </div>
  )
}

const EarthDate = ({ date, min, max, setDate }) => {
  const dateSanitized = formatDate(new Date(date))

  return (
    <div className="filter">
      <div className="filter-label">
        <label>Date:</label>
      </div>
      <div className="filter-body">
        <input
          type="date"
          value={dateSanitized}
          min={min}
          max={max}
          onChange={(e) => {
            const value = e.target.value
            if (!(value < min || value > max)) {
              setDate(value)
            }
          }}
        />
      </div>
    </div>
  )
}
