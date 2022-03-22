import { GET_ROVERS, SELECT_ROVER } from "../actions/roversActions"

const initialState = {
  rovers: [],
  selectedRover: null,
}

const roversReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROVERS:
      return {
        ...state,
        rovers: action.payload,
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
