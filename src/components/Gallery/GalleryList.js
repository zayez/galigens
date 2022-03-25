import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import GalleryItem from "./GalleryItem"
import "./gallery.sss"

const GalleryList = ({ photos, getMorePhotos, onPhotoClick }) => {
  return (
    <div className="gallery-wrapper">
      <TransitionGroup className="gallery-list" component="ul">
        {photos.map((photo) => (
          <CSSTransition key={photo.id} timeout={600} classNames="gallery-item">
            <GalleryItem photo={photo} key={photo.id} onClick={onPhotoClick} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="row">
        <button className="btn btn-alternate btn-full" onClick={getMorePhotos}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default GalleryList
