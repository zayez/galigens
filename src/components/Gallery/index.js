import React, { useEffect } from "react"
import { connect } from "react-redux"
import EmptyList from "../../components/common/EmptyList"
import { fetchPhotos, fetchMorePhotos } from "../../actions/photosActions"
// import { useSearchParams } from "react-router-dom"

import { EARTH_DAY } from "../../types/DateType"
import GalleryList from "./GalleryList"

const Gallery = ({
  photos,
  earthDate,
  sol,
  dateType,
  getPhotos,
  getMorePhotos,
}) => {
  // const [searchParams] = useSearchParams()
  // const earthDate = searchParams.get("earth_date")
  useEffect(() => {
    if (dateType === EARTH_DAY) {
      if (earthDate !== "") getPhotos()
    } else {
      if (sol !== "") getPhotos()
    }
  }, [])
  useEffect(() => {}, [photos])

  if (photos.length > 0) {
    return (
      <div className="gallery">
        <GalleryList photos={photos} getMorePhotos={getMorePhotos} />
      </div>
    )
  } else {
    return <EmptyList />
  }
}

const mapStateToProps = (state) => {
  return {
    earthDate: state.filters.earthDate,
    sol: state.filters.sol,
    camera: state.filters.camera,
    dateType: state.filters.dateType,
    photos: state.photos.photos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: async () => {
      dispatch(fetchPhotos())
    },
    getMorePhotos: async () => {
      dispatch(fetchMorePhotos())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
