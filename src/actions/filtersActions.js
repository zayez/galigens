export const SET_EARTH_DATE = "SET_EARTH_DATE"
export const SET_SOL = "SET_SOL"
export const SET_DATE_TYPE = "SET_DATE_TYPE"
export const SET_CAMERA = "SET_CAMERA"
export const SET_INITIAL_FILTERS = "SET_INITIAL_FILTERS"

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

export const setInitialFilters = ({ earthDate, sol }) => ({
  type: SET_INITIAL_FILTERS,
  payload: { earthDate, sol },
})
