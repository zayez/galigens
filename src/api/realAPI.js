const baseUrl = `https://api.nasa.gov/mars-photos/api/v1`
import credentials from "../../credentials.json"
const api_key = credentials.api_key

const getRovers = async () => {
  try {
    const url = `${baseUrl}/rovers?api_key=${api_key}`
    console.log(`[rovers] url: ${url}`)

    const res = await fetch(url)
    const data = await res.json()
    return data.rovers
  } catch (e) {
    console.log(e)
  }
}

const getPhotosByEarthDate = async ({
  rover,
  earthDate = "2022-03-08",
  page = 1,
}) => {
  const url = `${baseUrl}/rovers/${rover}/photos?earth_date=${earthDate}&page=${page}&api_key=${api_key}`
  console.log(url)
  const res = await fetch(url)
  const data = await res.json()
  return data.photos
}

const getPhotosBySol = async ({ rover, sol = 1, page = 1 }) => {
  const url = `${baseUrl}/rovers/${rover}/photos?sol=${sol}&page=${page}&api_key=${api_key}`
  console.log(url)
  const res = await fetch(url)
  const data = await res.json()
  return data.photos
}

const realAPI = {
  getRovers,
  getPhotosByEarthDate,
  getPhotosBySol,
}

export default realAPI
