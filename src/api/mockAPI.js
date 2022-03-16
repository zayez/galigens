const baseUrl = `http://localhost:3000`
const getRovers = async () => {
  const url = `${baseUrl}/rovers`
  const res = await fetch(url)
  const data = await res.json()
  return data.rovers
}

const getPhotos = async ({ rover, earthDate = "2022-2-2", page = 1 }) => {
  // const photosUrl = `${baseUrl}/rovers/${rover}/photos`
  const photosUrl = `${baseUrl}/photos`
  const params = `earth_date=${earthDate}&page=${page}`
  const url = `${photosUrl}?${params}`

  const res = await fetch(url)
  const data = await res.json()

  return data.photos
}

const mockAPI = {
  getRovers,
  getPhotos,
}

export default mockAPI
