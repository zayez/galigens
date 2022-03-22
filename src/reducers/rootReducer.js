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
  SET_CAMERA,
  GET_MORE_PHOTOS,
  getMorePhotos,
} from "../actions"
import { EARTH_DAY } from "../types/DateType"

const initState = {
  rovers: [],
  selectedRover: null,
  earthDate: "",
  sol: "",
  page: 1,
  dateType: EARTH_DAY,
  camera: "",
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
        camera: "",
      }
    case SELECT_ROVER:
      const selectedRover = state.rovers.find((r) => r.id === action.payload)
      return {
        ...state,
        selectedRover,
        earthDate: selectedRover.max_date,
        sol: selectedRover.max_sol,
        page: 1,
        photos: [],
      }
    case SET_EARTH_DATE:
      return {
        ...state,
        earthDate: action.payload,
        page: 1,
      }
    case SET_SOL:
      return {
        ...state,
        sol: action.payload,
        page: 1,
      }
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload],
        page: 2,
      }
    case GET_MORE_PHOTOS:
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
    case SET_CAMERA:
      return {
        ...state,
        camera: action.payload,
        page: 1,
      }
  }
  return state
}

export const fetchRovers = () => async (dispatch, getState) => {
  const rawRovers = await api.getRovers()
  // const rovers = rawRovers.map((rover) => {
  //   const newRover = rover
  //   rover.cameras = Cameras.filter((camera) => {
  //     return rover.cameras.some((r) => r.name === camera.abbr)
  //   })
  //   return newRover
  // })

  dispatch(getRovers(rawRovers))
}

export const fetchPhotos = () => async (dispatch, getState) => {
  const state = getState()
  const { selectedRover, earthDate, sol, camera, dateType } = state
  const roverName = selectedRover.name.toLowerCase()
  const photos = await api.getPhotos({
    roverName,
    earthDate,
    sol,
    camera,
    dateType,
  })

  dispatch(getPhotos(photos))
}

export const fetchMorePhotos = () => async (dispatch, getState) => {
  const state = getState()
  const { selectedRover, earthDate, sol, camera, page, dateType } = state
  const roverName = selectedRover.name.toLowerCase()
  const photos = await api.getPhotos({
    roverName,
    earthDate,
    sol,
    camera,
    dateType,
    page,
  })

  dispatch(getMorePhotos(photos))
}
