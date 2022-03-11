import roversData from "../../test/fixtures/rovers-data.json"
const getRovers = async () => {
  return roversData.rovers
}

const mockAPI = {
  getRovers,
}

export default mockAPI
