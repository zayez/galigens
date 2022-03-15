export const GET_ROVERS = "SET_ROVERS"

export const getRovers = (rovers) => ({
  type: GET_ROVERS,
  payload: rovers,
})
