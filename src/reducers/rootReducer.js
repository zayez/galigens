import api from "../api"
import { GET_ROVERS, getRovers } from "../actions"
const initState = {
  rovers: [],
  selectedRover: null,
}
export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROVERS:
      return {
        ...state,
        rovers: action.payload,
      }
  }
  return state
}

export const fetchRovers = () => async (dispatch, getState) => {
  const rovers = await api.getRovers()
  dispatch(getRovers(rovers))
}
