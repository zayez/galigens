const baseUrl = `http://localhost:3000`
import { EARTH_DAY } from "../types/DateType"

const getRovers = async () => {
  const url = `${baseUrl}/rovers`
  const res = await fetch(url)
  const data = await res.json()
  return data.rovers
}

const getPhotos = async ({
  roverName,
  earthDate,
  sol,
  camera,
  page = 1,
  dateType = EARTH_DAY,
}) => {
  const basePhotosUrl = `${baseUrl}/rovers/${roverName}`
  const dateParam =
    dateType === EARTH_DAY ? `earth_date=${earthDate}` : `sol=${sol}`
  const params = camera ? `&camera=${camera}` : ""
  const photosUrl = `${basePhotosUrl}/photos?${dateParam}${params}&page=${page}`

  const res = await fetch(photosUrl)
  const data = await res.json()
  return data.photos
}

const mockAPI = {
  getRovers,
  getPhotos,
}

export default mockAPI
