import {
  CLOSE_PHOTO,
  GET_MORE_PHOTOS,
  GET_PHOTOS,
  OPEN_PHOTO,
} from "../actions/photosActions"

const initialState = {
  photos: [],
  page: 1,
  hasOpenedPhoto: true,
  openedPhoto: "",
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload],
        page: 2,
        hasOpenedPhoto: false,
      }
    case GET_MORE_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        page: state.page + 1,
      }
    case OPEN_PHOTO:
      return {
        ...state,
        openedPhoto: action.payload,
        hasOpenedPhoto: true,
      }
    case CLOSE_PHOTO:
      return {
        ...state,
        hasOpenedPhoto: false,
        openedPhoto: "",
      }
  }
  return state
}

export default photosReducer
