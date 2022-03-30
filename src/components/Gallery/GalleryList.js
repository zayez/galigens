import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import GalleryItem from "./GalleryItem"
import "./gallery.sss"
import Loader from "../Loader"
import { SPINNER_TYPE } from "../../types/LoaderType"

const GalleryList = ({
  photos,
  getMorePhotos,
  onPhotoClick,
  isLoadingMore,
  hasMore,
}) => {
  const loadMore = <LoadMore getMorePhotos={getMorePhotos} />
  const loader = <Loader type={SPINNER_TYPE} size="small" />
  const component = hasMore ? (isLoadingMore ? loader : loadMore) : null

  return (
    <div className="gallery-wrapper">
      <TransitionGroup
        className="gallery-list"
        component="ul"
        appear={true}
        enter={true}
        exit={false}
      >
        {photos.map((photo) => (
          <CSSTransition key={photo.id} timeout={500} classNames="gallery-item">
            <GalleryItem photo={photo} key={photo.id} onClick={onPhotoClick} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {component}
    </div>
  )
}

const LoadMore = ({ getMorePhotos }) => {
  return (
    <div className="row">
      <button
        className="btn btn-sm btn-alternate btn-full"
        onClick={getMorePhotos}
      >
        Load more
      </button>
    </div>
  )
}

export default GalleryList
