import React from "react"
import GalleryItem from "./GalleryItem"
import "./gallery.sss"

const GalleryList = ({ photos, getPhotos }) => {
  return (
    <div className="gallery-wrapper">
      <ul className="gallery-list">
        {photos.map((photo) => (
          <GalleryItem photo={photo} key={photo.id} />
        ))}
      </ul>
      <button onClick={getPhotos}>Load more</button>
    </div>
  )
}

export default GalleryList
