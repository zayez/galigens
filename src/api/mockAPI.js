const baseUrl = `http://localhost:3000`
const getRovers = async () => {
  const url = `${baseUrl}/rovers`
  const res = await fetch(url)
  const data = await res.json()
  return data.rovers
}

const getPhotosByEarthDate = async ({
  rover,
  earthDate = "2022-2-2",
  page = 1,
}) => {
  const photosUrl = `${baseUrl}/photos`
  const params = `earth_date=${earthDate}&page=${page}`
  const url = `${photosUrl}?${params}`

  const res = await fetch(url)
  const data = await res.json()

  return data.photos
}

const getPhotosBySol = async ({ rover, sol = 1, page = 1 }) => {
  const photosUrl = `${baseUrl}/photos`
  const params = `sol=${sol}&page=${page}`
  const url = `${photosUrl}?${params}`

  const res = await fetch(url)
  const data = await res.json()

  return data.photos
}

const mockAPI = {
  getRovers,
  getPhotosByEarthDate,
  getPhotosBySol,
}

export default mockAPI
