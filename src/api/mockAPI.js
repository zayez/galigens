const baseUrl = `http://localhost:3000`
import { EARTH_DAY } from "../types/DateType"
import { formatDate } from "../utils/dateUtils"
import { mapPhoto, mapRover } from "./mappings"

const getRovers = async () => {
  const url = `${baseUrl}/rovers`
  const res = await fetch(url)
  const data = await res.json()
  const rawRovers = data.rovers
  const newRovers = rawRovers.map(mapRover)

  return newRovers
}

const getPhotos = async ({
  roverName,
  earthDate,
  sol,
  camera,
  page = 1,
  dateType = EARTH_DAY,
}) => {
  const date = formatDate(earthDate)
  const basePhotosUrl = `${baseUrl}/rovers/${roverName}`
  const dateParam = dateType === EARTH_DAY ? `earth_date=${date}` : `sol=${sol}`
  const params = camera ? `&camera=${camera}` : ""
  const photosUrl = `${basePhotosUrl}/photos?${dateParam}${params}&page=${page}`

  const res = await fetch(photosUrl)
  const data = await res.json()
  const rawPhotos = data.photos
  const newPhotos = rawPhotos.map(mapPhoto)

  return newPhotos
}

const mockAPI = {
  getRovers,
  getPhotos,
}

export default mockAPI
