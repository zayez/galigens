const express = require("express")
const path = require("path")
const cors = require("cors")
const roversData = require("./fixtures/rovers-data.json")
const photosData = require("./fixtures/rover-photos-data-local.json")

const app = express()
const port = 3000
const API_TIME_DELAY = 100

app.get("/", cors(), (req, res) => {
  res.send("Hello!")
})

app.use(express.static(path.resolve("./public")))

app.get("/rovers", cors(), async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, API_TIME_DELAY))
  const rovers = roversData.rovers
  res.json({ rovers })
})

app.get("/rovers/:roverName/photos", cors(), async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, API_TIME_DELAY))
  const LIMIT = 10
  const rover = req.params.roverName

  const earthDate = req.query.earth_date
  const sol = req.query.sol
  const camera = req.query.camera
  const page = Number(req.query.page)
  const params = { earthDate, sol, camera, page }

  const photos = photosData.photos.slice((page - 1) * LIMIT, LIMIT * page)

  res.json({ photos, params })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
