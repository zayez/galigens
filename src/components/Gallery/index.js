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
import Loader from "../Loader"
import { SPINNER_TYPE } from "../../types/LoaderType"

const Gallery = ({
  selectedRover,
  photos,
  isLoading,
  isLoadingMore,
  hasMore,
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
  }, [earthDate, sol, selectedRover])

  return (
    <GalleryWrapped
      photos={photos}
      isLoading={isLoading}
      isLoadingMore={isLoadingMore}
      hasMore={hasMore}
      openedPhoto={openedPhoto}
      getMorePhotos={getMorePhotos}
      onPhotoClick={onPhotoClick}
    />
  )
}

const GalleryWrapped = ({
  photos,
  isLoading,
  isLoadingMore,
  hasMore,
  openedPhoto,
  getMorePhotos,
  onPhotoClick,
}) => {
  if (isLoading) {
    return (
      <div className="">
        <Loader type={SPINNER_TYPE} size="large" />
      </div>
    )
  }

  if (photos) {
    if (photos.length > 0) {
      return (
        <div className="gallery">
          <Overlay>
            <OverlayPhoto photoSrc={openedPhoto} />
          </Overlay>

          <GalleryList
            photos={photos}
            isLoadingMore={isLoadingMore}
            hasMore={hasMore}
            getMorePhotos={getMorePhotos}
            onPhotoClick={onPhotoClick}
          />
        </div>
      )
    } else {
      return <EmptyList />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    earthDate: state.filters.earthDate,
    sol: state.filters.sol,
    camera: state.filters.camera,
    dateType: state.filters.dateType,
    photos: state.photos.photos,
    isLoading: state.photos.isLoading,
    isLoadingMore: state.photos.isLoadingMore,
    hasMore: state.photos.hasMore,
    openedPhoto: state.photos.openedPhoto,
    selectedRover: state.rovers.selectedRover,
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
