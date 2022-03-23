import React from "react"
import { connect } from "react-redux"
import { closePhoto } from "../../actions/photosActions"
import "./overlay.sss"

const Overlay = ({ hasOpenedPhoto, onOverlayClick, children }) => {
  const overlayState = hasOpenedPhoto ? "overlay-show" : "overlay-hidden"
  return (
    <div
      id="overlay"
      className={`overlay ${overlayState}`}
      onClick={onOverlayClick}
    >
      {children}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    hasOpenedPhoto: state.photos.hasOpenedPhoto,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOverlayClick: (e) => {
      if (e.target.id !== "overlay-image") {
        dispatch(closePhoto())
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay)
