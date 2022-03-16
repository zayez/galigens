import React from "react"

const GalleryItem = ({ photo }) => {
  return (
    <div className="gallery-item">
      <a href={photo.img_src}>
        <img src={photo.img_src} />
      </a>
      <span>{photo.id}</span>
    </div>
  )
}

export default GalleryItem
