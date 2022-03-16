const express = require("express")
const path = require("path")
const cors = require("cors")
const roversData = require("./fixtures/rovers-data.json")
const photosData = require("./fixtures/rover-photos-data-local.json")

const app = express()
const port = 3000

app.get("/", cors(), (req, res) => {
  res.send("Hello!")
})

app.use(express.static(path.resolve("./public")))

app.get("/rovers", cors(), (req, res) => {
  const rovers = roversData.rovers
  res.json({ rovers })
})

app.get("/photos", cors(), (req, res) => {
  const LIMIT = 5
  const page = Number(req.query.page)

  const photos = photosData.photos.slice((page - 1) * LIMIT, LIMIT * page)

  res.json({ photos })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
