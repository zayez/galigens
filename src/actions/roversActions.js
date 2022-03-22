import api from "../api"

export const GET_ROVERS = "GET_ROVERS"
export const SELECT_ROVER = "SELECT_ROVER"

const getRovers = (rovers) => ({
  type: GET_ROVERS,
  payload: rovers,
})

export const selectRover = (id) => ({
  type: SELECT_ROVER,
  payload: id,
})

export const fetchRovers = () => async (dispatch, getState) => {
  const rawRovers = await api.getRovers()
  dispatch(getRovers(rawRovers))
}
