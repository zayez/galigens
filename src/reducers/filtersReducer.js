import {
  APPLY_FILTERS,
  SET_CAMERA,
  SET_DATE_TYPE,
  SET_EARTH_DATE,
  SET_FILTERS,
  SET_SOL,
} from "../actions/filtersActions"
import { EARTH_DAY } from "../types/DateType"

const initialState = {
  earthDate: "",
  txtEarthDate: "",
  sol: "",
  txtSol: "",
  dateType: EARTH_DAY,
  camera: "",
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      const { earthDate, sol, camera, dateType } = action.payload
      return {
        ...state,
        earthDate,
        sol,
        camera,
        dateType,
        txtEarthDate: earthDate,
        txtSol: sol,
      }
    case APPLY_FILTERS:
      return {
        ...state,
        earthDate: state.txtEarthDate,
        sol: state.txtSol,
      }
    case SET_EARTH_DATE:
      return {
        ...state,
        txtEarthDate: action.payload,
      }
    case SET_SOL:
      return {
        ...state,
        txtSol: action.payload,
      }
    case SET_DATE_TYPE:
      return {
        ...state,
        dateType: action.payload,
      }
    case SET_CAMERA:
      return {
        ...state,
        camera: action.payload,
      }
  }
  return state
}

export default filtersReducer
