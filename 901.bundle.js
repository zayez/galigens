"use strict";
(self["webpackChunkgaligens"] = self["webpackChunkgaligens"] || []).push([[901,616],{

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

/***/ }),

/***/ 1901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_realAPI)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./credentials.json
const credentials_namespaceObject = JSON.parse('{"c":"iTt4t9tWvE9TMIQcMwFaCYnzA8gMJCp3caeHsZPj"}');
// EXTERNAL MODULE: ./src/types/DateType.js
var DateType = __webpack_require__(1984);
// EXTERNAL MODULE: ./src/utils/dateUtils.js
var dateUtils = __webpack_require__(2845);
// EXTERNAL MODULE: ./src/api/mappings.js
var mappings = __webpack_require__(3616);
;// CONCATENATED MODULE: ./src/api/realAPI.js


var baseUrl = "https://api.nasa.gov/mars-photos/api/v1";

var api_key = credentials_namespaceObject.c;




var getRovers = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var url, res, data, rawRovers, newRovers;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = "".concat(baseUrl, "/rovers?api_key=").concat(api_key);
            _context.next = 4;
            return fetch(url);

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            rawRovers = data.rovers;
            newRovers = rawRovers.map(mappings.mapRover);
            return _context.abrupt("return", newRovers);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function getRovers() {
    return _ref.apply(this, arguments);
  };
}();

var getPhotos = /*#__PURE__*/function () {
  var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(_ref2) {
    var roverName, earthDate, sol, camera, _ref2$page, page, _ref2$dateType, dateType, date, basePhotosUrl, dateParam, params, photosUrl, res, data, rawPhotos, newPhotos;

    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            roverName = _ref2.roverName, earthDate = _ref2.earthDate, sol = _ref2.sol, camera = _ref2.camera, _ref2$page = _ref2.page, page = _ref2$page === void 0 ? 1 : _ref2$page, _ref2$dateType = _ref2.dateType, dateType = _ref2$dateType === void 0 ? DateType/* EARTH_DAY */.m : _ref2$dateType;
            date = (0,dateUtils/* formatDate */.p)(earthDate);
            basePhotosUrl = "".concat(baseUrl, "/rovers/").concat(roverName);
            dateParam = dateType === DateType/* EARTH_DAY */.m ? "earth_date=".concat(date) : "sol=".concat(sol);
            params = camera !== "" ? "&camera=".concat(camera) : "";
            photosUrl = "".concat(basePhotosUrl, "/photos?").concat(dateParam).concat(params, "&page=").concat(page, "&api_key=").concat(api_key);
            _context2.next = 8;
            return fetch(photosUrl);

          case 8:
            res = _context2.sent;
            _context2.next = 11;
            return res.json();

          case 11:
            data = _context2.sent;
            rawPhotos = data.photos;
            newPhotos = rawPhotos.map(mappings.mapPhoto);
            return _context2.abrupt("return", newPhotos);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPhotos(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var realAPI = {
  getRovers: getRovers,
  getPhotos: getPhotos
};
/* harmony default export */ const api_realAPI = (realAPI);

/***/ })

}]);