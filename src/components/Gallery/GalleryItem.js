import React from "react"

const GalleryItem = ({ photo, onClick }) => {
  return (
    <div className="gallery-item">
      <a href={photo.imgSrc} onClick={onClick}>
        <img src={photo.imgSrc} />
      </a>
      {/* <span>{photo.id}</span> */}
    </div>
  )
}

export default GalleryItem
