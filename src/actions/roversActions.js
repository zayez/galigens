import api from "../api"
import { setFilters } from "./filtersActions"

export const GET_ROVERS = "GET_ROVERS_REQUEST"
export const GET_ROVERS_SUCCESS = "GET_ROVERS_SUCCESS"
export const SELECT_ROVER = "SELECT_ROVER"

const getRovers = () => ({
  type: GET_ROVERS,
})

const getRoversSuccess = (rovers) => ({
  type: GET_ROVERS_SUCCESS,
  payload: rovers,
})

export const selectRover = (name) => ({
  type: SELECT_ROVER,
  payload: name,
})

export const fetchRovers = () => async (dispatch, getState) => {
  dispatch(getRovers())
  dispatch(setFilters({}))
  const rawRovers = await api.getRovers()
  const rovers = rawRovers.sort(
    (a, b) => b.landingDate.getTime() - a.landingDate.getTime()
  )
  dispatch(getRoversSuccess(rovers))
}
