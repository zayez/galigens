import api from "../api"
import {
  GET_ROVERS,
  getRovers,
  SELECT_ROVER,
  SET_EARTH_DATE,
  GET_PHOTOS,
  getPhotos,
  SET_DATE_TYPE,
  SET_SOL,
} from "../actions"
import { EARTH_DAY } from "../types/DateType"

const initState = {
  rovers: [],
  selectedRover: null,
  earthDate: "",
  sol: "",
  page: 1,
  dateType: EARTH_DAY,
}

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROVERS:
      return {
        ...state,
        rovers: action.payload,
        page: 1,
        photos: [],
        earthDate: "",
        sol: "",
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
    case SET_SOL:
      return {
        ...state,
        sol: action.payload,
        page: 1,
        photos: [],
      }
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        page: state.page + 1,
      }
    case SET_DATE_TYPE:
      return {
        ...state,
        dateType: action.payload,
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
  const { selectedRover, earthDate, sol, page, dateType } = state
  const rover = selectedRover.name.toLowerCase()

  const photos =
    dateType === EARTH_DAY
      ? await api.getPhotosByEarthDate({
          rover,
          earthDate,
          page,
        })
      : await api.getPhotosBySol({
          rover,
          sol,
          page,
        })
  dispatch(getPhotos(photos))
}
