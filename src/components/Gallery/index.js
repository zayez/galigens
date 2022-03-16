import React, { useEffect } from "react"
import { connect } from "react-redux"
import EmptyList from "../../components/common/EmptyList"
// import { useSearchParams } from "react-router-dom"
import { fetchPhotos } from "../../reducers/rootReducer"
import GalleryList from "./GalleryList"

const Gallery = ({ photos, earthDate, getPhotos }) => {
  // const [searchParams] = useSearchParams()
  // const earthDate = searchParams.get("earth_date")
  useEffect(() => {
    getPhotos()
  }, [])
  useEffect(() => {}, [photos])

  if (photos.length > 0) {
    return (
      <div className="gallery">
        <GalleryList photos={photos} getPhotos={getPhotos} />
      </div>
    )
  } else {
    return <EmptyList />
  }
}

const mapStateToProps = (state) => {
  return {
    earthDate: state.earthDate,
    photos: state.photos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: async () => {
      dispatch(fetchPhotos())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
