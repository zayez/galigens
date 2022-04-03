"use strict";
(self["webpackChunkgaligens"] = self["webpackChunkgaligens"] || []).push([[616],{

/***/ 3616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapPhoto": () => (/* binding */ mapPhoto),
/* harmony export */   "mapRover": () => (/* binding */ mapRover)
/* harmony export */ });
var mapRover = function mapRover(rover) {
  if (!rover) return;
  var newRover = {
    id: rover.id,
    name: rover.name,
    landingDate: new Date(rover.landing_date),
    launchDate: new Date(rover.launch_date),
    status: rover.status,
    maxSol: rover.max_sol,
    maxDate: new Date(rover.max_date),
    totalPhotos: rover.total_photos,
    cameras: rover.cameras ? rover.cameras.map(mapCamera) : []
  };
  return newRover;
};
var mapPhoto = function mapPhoto(photo) {
  if (!photo) return;
  var newPhoto = {
    id: photo.id,
    sol: photo.sol,
    camera: mapCamera(photo.camera),
    imgSrc: photo.img_src,
    earthDate: new Date(photo.earth_date),
    rover: mapRoverPhoto(photo.rover)
  };
  return newPhoto;
};

var mapCamera = function mapCamera(camera) {
  if (!camera) return;
  var newCamera = {
    id: camera.id,
    name: camera.name,
    roverId: camera.rover_id,
    fullname: camera.full_name
  };
  return newCamera;
};

var mapRoverPhoto = function mapRoverPhoto(rover) {
  if (!rover) return;
  var newRover = {
    id: rover.id,
    name: rover.name,
    landingDate: new Date(rover.landing_date),
    launchDate: new Date(rover.launch_date),
    status: rover.status
  };
  return newRover;
};

/***/ })

}]);