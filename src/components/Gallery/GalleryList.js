import React from "react"
import GalleryItem from "./GalleryItem"
import "./gallery.sss"

const GalleryList = ({ photos, getMorePhotos, onPhotoClick }) => {
  return (
    <div className="gallery-wrapper">
      <ul className="gallery-list">
        {photos.map((photo) => (
          <GalleryItem photo={photo} key={photo.id} onClick={onPhotoClick} />
        ))}
      </ul>
      <div className="row">
        <button className="btn btn-alternate btn-full" onClick={getMorePhotos}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default GalleryList
