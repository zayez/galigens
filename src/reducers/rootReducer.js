import api from "../api"
import {
  GET_ROVERS,
  getRovers,
  SELECT_ROVER,
  SET_EARTH_DATE,
  GET_PHOTOS,
  getPhotos,
} from "../actions"
const initState = {
  rovers: [],
  selectedRover: null,
  earthDate: null,
  page: 1,
}
export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROVERS:
      return {
        ...state,
        rovers: action.payload,
        page: 1,
        photos: [],
      }
    case SELECT_ROVER:
      return {
        ...state,
        selectedRover: state.rovers.find((r) => r.id === action.payload),
        page: 1,
        photos: [],
      }
    case SET_EARTH_DATE:
      return {
        ...state,
        earthDate: action.payload,
        page: 1,
        photos: [],
      }
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        page: state.page + 1,
      }
  }
  return state
}

export const fetchRovers = () => async (dispatch, getState) => {
  const rovers = await api.getRovers()
  dispatch(getRovers(rovers))
}

export const fetchPhotos = () => async (dispatch, getState) => {
  const state = getState()
  const { selectedRover, earthDate, page } = state
  const photos = await api.getPhotos({
    rover: selectedRover.name.toLowerCase(),
    earthDate,
    page,
  })
  dispatch(getPhotos(photos))
}
