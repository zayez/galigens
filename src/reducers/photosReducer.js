import {
  CLOSE_PHOTO,
  GET_MORE_PHOTOS,
  GET_MORE_PHOTOS_SUCCESS,
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  OPEN_PHOTO,
  RESET_PHOTOS,
} from "../actions/photosActions"

const initialState = {
  photos: [],
  page: 1,
  hasOpenedPhoto: true,
  isLoading: false,
  isLoadingMore: false,
  openedPhoto: "",
  hasMore: false,
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PHOTOS:
      return {
        photos: [],
        page: 1,
        hasOpenedPhoto: false,
      }
    case GET_PHOTOS:
      return {
        ...state,
        isLoading: true,
        isLoadingMore: false,
      }
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...action.payload],
        isLoading: false,
        isLoadingMore: false,
        hasMore: action.payload
          ? action.payload.length > 1
            ? true
            : false
          : false,
        page: 2,
        hasOpenedPhoto: false,
      }
    case GET_MORE_PHOTOS:
      return {
        ...state,
        isLoadingMore: true,
      }
    case GET_MORE_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        hasMore: action.payload
          ? action.payload.length > 1
            ? true
            : false
          : false,
        isLoadingMore: false,
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
      }
  }
  return state
}

export default photosReducer
