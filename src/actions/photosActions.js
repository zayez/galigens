import { resolvePath } from "react-router-dom"
import api from "../api"
export const GET_PHOTOS = "GET_PHOTOS"
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS"
export const RESET_PHOTOS = "RESET_PHOTOS"
export const GET_MORE_PHOTOS = "GET_MORE_PHOTOS"
export const GET_MORE_PHOTOS_SUCCESS = "GET_MORE_PHOTOS_SUCCESS"
export const OPEN_PHOTO = "OPEN_PHOTO"
export const CLOSE_PHOTO = "CLOSE_PHOTO"

export const openPhoto = (photo) => ({
  type: OPEN_PHOTO,
  payload: photo,
})

export const closePhoto = () => ({
  type: CLOSE_PHOTO,
})

const getPhotos = () => ({
  type: GET_PHOTOS,
})

const getPhotosSuccess = (photos) => ({
  type: GET_PHOTOS_SUCCESS,
  payload: photos,
})

export const resetPhotos = () => ({
  type: RESET_PHOTOS,
})

const getMorePhotos = () => ({
  type: GET_MORE_PHOTOS,
})

const getMorePhotosSuccess = (photos) => ({
  type: GET_MORE_PHOTOS_SUCCESS,
  payload: photos,
})

export const fetchPhotos = () => async (dispatch, getState) => {
  dispatch(getPhotos())
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

  const imagesLoader = photos.reduce(imageLoaderReducer, [])
  await Promise.all(imagesLoader)

  dispatch(getPhotosSuccess(photos))
}

export const fetchMorePhotos = () => async (dispatch, getState) => {
  dispatch(getMorePhotos())
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

  const imagesLoader = photos.reduce(imageLoaderReducer, [])
  await Promise.all(imagesLoader)

  dispatch(getMorePhotosSuccess(photos))
}

const imageLoaderReducer = (prev, cur) => {
  let image
  let p = new Promise((resolve, reject) => {
    image = new Image()
    image.src = cur.img_src
    image.addEventListener("load", () => {
      resolve(true)
    })
  })
  return [...prev, p]
}
