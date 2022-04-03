"use strict";
(self["webpackChunkgaligens"] = self["webpackChunkgaligens"] || []).push([[971,616],{

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

/***/ 1971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_DateType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1984);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2845);
/* harmony import */ var _mappings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3616);


var baseUrl = "http://localhost:3000";




var getRovers = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var url, res, data, rawRovers, newRovers;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(baseUrl, "/rovers");
            _context.next = 3;
            return fetch(url);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            rawRovers = data.rovers;
            newRovers = rawRovers.map(_mappings__WEBPACK_IMPORTED_MODULE_3__.mapRover);
            return _context.abrupt("return", newRovers);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRovers() {
    return _ref.apply(this, arguments);
  };
}();

var getPhotos = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref2) {
    var roverName, earthDate, sol, camera, _ref2$page, page, _ref2$dateType, dateType, date, basePhotosUrl, dateParam, params, photosUrl, res, data, rawPhotos, newPhotos;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            roverName = _ref2.roverName, earthDate = _ref2.earthDate, sol = _ref2.sol, camera = _ref2.camera, _ref2$page = _ref2.page, page = _ref2$page === void 0 ? 1 : _ref2$page, _ref2$dateType = _ref2.dateType, dateType = _ref2$dateType === void 0 ? _types_DateType__WEBPACK_IMPORTED_MODULE_4__/* .EARTH_DAY */ .m : _ref2$dateType;
            date = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__/* .formatDate */ .p)(earthDate);
            basePhotosUrl = "".concat(baseUrl, "/rovers/").concat(roverName);
            dateParam = dateType === _types_DateType__WEBPACK_IMPORTED_MODULE_4__/* .EARTH_DAY */ .m ? "earth_date=".concat(date) : "sol=".concat(sol);
            params = camera ? "&camera=".concat(camera) : "";
            photosUrl = "".concat(basePhotosUrl, "/photos?").concat(dateParam).concat(params, "&page=").concat(page);
            _context2.next = 8;
            return fetch(photosUrl);

          case 8:
            res = _context2.sent;
            _context2.next = 11;
            return res.json();

          case 11:
            data = _context2.sent;
            rawPhotos = data.photos;
            newPhotos = rawPhotos.map(_mappings__WEBPACK_IMPORTED_MODULE_3__.mapPhoto);
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

var mockAPI = {
  getRovers: getRovers,
  getPhotos: getPhotos
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mockAPI);

/***/ })

}]);