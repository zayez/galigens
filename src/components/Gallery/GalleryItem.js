import React from "react"

const GalleryItem = ({ photo, onClick }) => {
  return (
    <div className="gallery-item">
      <a href={photo.img_src} onClick={onClick}>
        <img src={photo.img_src} />
      </a>
      {/* <span>{photo.id}</span> */}
    </div>
  )
}

export default GalleryItem
