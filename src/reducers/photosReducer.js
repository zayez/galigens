import { GET_MORE_PHOTOS, GET_PHOTOS } from "../actions/photosActions"

const initialState = {
  photos: [],
  page: 1,
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
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
  }
  return state
}

export default photosReducer
