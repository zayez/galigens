import {
  SET_CAMERA,
  SET_DATE_TYPE,
  SET_EARTH_DATE,
  SET_INITIAL_FILTERS,
  SET_SOL,
} from "../actions/filtersActions"
import { EARTH_DAY } from "../types/DateType"

const initialState = {
  earthDate: "",
  sol: "",
  dateType: EARTH_DAY,
  camera: "",
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_FILTERS:
      const { earthDate, sol } = action.payload
      return {
        ...state,
        earthDate,
        sol,
        camera: "",
        dateType: EARTH_DAY,
      }
    case SET_EARTH_DATE:
      return {
        ...state,
        earthDate: action.payload,
      }
    case SET_SOL:
      return {
        ...state,
        sol: action.payload,
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
