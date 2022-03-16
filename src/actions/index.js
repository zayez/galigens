export const GET_ROVERS = "GET_ROVERS"
export const SELECT_ROVER = "SELECT_ROVER"
export const SET_EARTH_DATE = "SET_EARTH_DATE"
export const GET_PHOTOS = "GET_PHOTOS"

export const getRovers = (rovers) => ({
  type: GET_ROVERS,
  payload: rovers,
})

export const selectRover = (id) => ({
  type: SELECT_ROVER,
  payload: id,
})

export const setEarthDate = (date) => ({
  type: SET_EARTH_DATE,
  payload: date,
})

export const getPhotos = (photos) => ({
  type: GET_PHOTOS,
  payload: photos,
})
