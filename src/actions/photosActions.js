import api from "../api"
export const GET_PHOTOS = "GET_PHOTOS"
export const GET_MORE_PHOTOS = "GET_MORE_PHOTOS"
export const OPEN_PHOTO = "OPEN_PHOTO"
export const CLOSE_PHOTO = "CLOSE_PHOTO"

export const openPhoto = (photo) => ({
  type: OPEN_PHOTO,
  payload: photo,
})

export const closePhoto = () => ({
  type: CLOSE_PHOTO,
})

const getPhotos = (photos) => ({
  type: GET_PHOTOS,
  payload: photos,
})

const getMorePhotos = (photos) => ({
  type: GET_MORE_PHOTOS,
  payload: photos,
})

export const fetchPhotos = () => async (dispatch, getState) => {
  const state = getState()
  const { selectedRover } = state.rovers
  const { earthDate, sol, camera, dateType } = state.filters

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
  const { selectedRover } = state.rovers
  const { earthDate, sol, camera, dateType } = state.filters
  const { page } = state.photos
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
