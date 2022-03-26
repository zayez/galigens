import { EARTH_DAY } from "../types/DateType"

export const SET_EARTH_DATE = "SET_EARTH_DATE"
export const SET_SOL = "SET_SOL"
export const SET_DATE_TYPE = "SET_DATE_TYPE"
export const SET_CAMERA = "SET_CAMERA"
export const SET_FILTERS = "SET_FILTERS"
export const APPLY_FILTERS = "APPLY_FILTERS"

export const setEarthDate = (date) => ({
  type: SET_EARTH_DATE,
  payload: date,
})

export const setSol = (sol) => ({
  type: SET_SOL,
  payload: sol,
})

export const setDateType = (type) => ({
  type: SET_DATE_TYPE,
  payload: type,
})

export const setCamera = (name) => ({
  type: SET_CAMERA,
  payload: name,
})

export const setFilters = ({
  earthDate = "",
  sol = "",
  camera = "",
  dateType = EARTH_DAY,
}) => ({
  type: SET_FILTERS,
  payload: { earthDate, sol, camera, dateType },
})

export const applyFilters = () => ({
  type: APPLY_FILTERS,
})
