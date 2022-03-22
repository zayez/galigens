import React from "react"
import GalleryItem from "./GalleryItem"
import "./gallery.sss"

const GalleryList = ({ photos, getMorePhotos }) => {
  return (
    <div className="gallery-wrapper">
      <ul className="gallery-list">
        {photos.map((photo) => (
          <GalleryItem photo={photo} key={photo.id} />
        ))}
      </ul>
      <button onClick={getMorePhotos}>Load more</button>
    </div>
  )
}

export default GalleryList
