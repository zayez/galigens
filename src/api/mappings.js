export const mapRover = (rover) => {
  if (!rover) return

  const newRover = {
    id: rover.id,
    name: rover.name,
    landingDate: new Date(rover.landing_date),
    launchDate: new Date(rover.launch_date),
    status: rover.status,
    maxSol: rover.max_sol,
    maxDate: new Date(rover.max_date),
    totalPhotos: rover.total_photos,
    cameras: rover.cameras ? rover.cameras.map(mapCamera) : [],
  }
  return newRover
}

export const mapPhoto = (photo) => {
  if (!photo) return

  const newPhoto = {
    id: photo.id,
    sol: photo.sol,
    camera: mapCamera(photo.camera),
    imgSrc: photo.img_src,
    earthDate: new Date(photo.earth_date),
    rover: mapRoverPhoto(photo.rover),
  }

  return newPhoto
}

const mapCamera = (camera) => {
  if (!camera) return

  const newCamera = {
    id: camera.id,
    name: camera.name,
    roverId: camera.rover_id,
    fullname: camera.full_name,
  }
  return newCamera
}

const mapRoverPhoto = (rover) => {
  if (!rover) return

  const newRover = {
    id: rover.id,
    name: rover.name,
    landingDate: new Date(rover.landing_date),
    launchDate: new Date(rover.launch_date),
    status: rover.status,
  }

  return newRover
}
