import React, { useEffect } from "react"
import { connect } from "react-redux"
import EmptyList from "../../components/common/EmptyList"
import Overlay from "../Overlay"
import {
  fetchPhotos,
  fetchMorePhotos,
  openPhoto,
} from "../../actions/photosActions"

import { EARTH_DAY } from "../../types/DateType"
import GalleryList from "./GalleryList"
import OverlayPhoto from "../Overlay/OverlayPhoto"

const Gallery = ({
  photos,
  earthDate,
  sol,
  dateType,
  getPhotos,
  getMorePhotos,
  openedPhoto,
  onPhotoClick,
}) => {
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
        <Overlay>
          <OverlayPhoto photoSrc={openedPhoto} />
        </Overlay>
        <GalleryList
          photos={photos}
          getMorePhotos={getMorePhotos}
          onPhotoClick={onPhotoClick}
        />
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
    openedPhoto: state.photos.openedPhoto,
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

    onPhotoClick: (e) => {
      e.preventDefault()
      const photo = e.target.src
      dispatch(openPhoto(photo))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
