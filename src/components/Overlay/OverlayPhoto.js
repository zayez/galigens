import React from "react"

const OverlayPhoto = ({ photoSrc }) => {
  const src = photoSrc ? photoSrc : ""
  return (
    <div className="overlay-frame">
      <a
        href={src}
        className="overlay-photo-link"
        onClick={(e) => e.preventDefault()}
      >
        <img id="overlay-image" src={src} className="overlay-frame-image" />
      </a>
    </div>
  )
}
export default OverlayPhoto
