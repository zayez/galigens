import {
  GET_ROVERS,
  GET_ROVERS_SUCCESS,
  SELECT_ROVER,
} from "../actions/roversActions"

const initialState = {
  rovers: [],
  selectedRover: null,
  isLoading: true,
}

const roversReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROVERS:
      return {
        ...state,
        isLoading: true,
        rovers: [],
        selectedRover: null,
      }

    case GET_ROVERS_SUCCESS:
      return {
        ...state,
        rovers: action.payload,
        isLoading: false,
      }

    case SELECT_ROVER:
      const selectedRover = state.rovers.find((r) => r.id === action.payload)
      return {
        ...state,
        selectedRover,
      }
  }
  return state
}

export default roversReducer
