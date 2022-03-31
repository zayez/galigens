const baseUrl = `https://api.nasa.gov/mars-photos/api/v1`
import credentials from "../../credentials.json"
const api_key = credentials.api_key
import { EARTH_DAY } from "../types/DateType"

const getRovers = async () => {
  try {
    const url = `${baseUrl}/rovers?api_key=${api_key}`

    const res = await fetch(url)
    const data = await res.json()
    return data.rovers
  } catch (e) {
    console.log(e)
  }
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
  const params = camera !== "" ? `&camera=${camera}` : ""
  const photosUrl = `${basePhotosUrl}/photos?${dateParam}${params}&page=${page}&api_key=${api_key}`

  const res = await fetch(photosUrl)
  const data = await res.json()
  return data.photos
}

const realAPI = {
  getRovers,
  getPhotos,
}

export default realAPI
