"use strict";
(self["webpackChunkgaligens"] = self["webpackChunkgaligens"] || []).push([[971],{

/***/ 1971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_DateType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1984);


var baseUrl = "http://localhost:3000";


var getRovers = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var url, res, data;
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
            return _context.abrupt("return", data.rovers);

          case 8:
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
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref2) {
    var roverName, earthDate, sol, camera, _ref2$page, page, _ref2$dateType, dateType, basePhotosUrl, dateParam, params, photosUrl, res, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            roverName = _ref2.roverName, earthDate = _ref2.earthDate, sol = _ref2.sol, camera = _ref2.camera, _ref2$page = _ref2.page, page = _ref2$page === void 0 ? 1 : _ref2$page, _ref2$dateType = _ref2.dateType, dateType = _ref2$dateType === void 0 ? _types_DateType__WEBPACK_IMPORTED_MODULE_2__/* .EARTH_DAY */ .m : _ref2$dateType;
            basePhotosUrl = "".concat(baseUrl, "/rovers/").concat(roverName);
            dateParam = dateType === _types_DateType__WEBPACK_IMPORTED_MODULE_2__/* .EARTH_DAY */ .m ? "earth_date=".concat(earthDate) : "sol=".concat(sol);
            params = camera ? "&camera=".concat(camera) : "";
            photosUrl = "".concat(basePhotosUrl, "/photos?").concat(dateParam).concat(params, "&page=").concat(page);
            console.log(photosUrl);
            _context2.next = 8;
            return fetch(photosUrl);

          case 8:
            res = _context2.sent;
            _context2.next = 11;
            return res.json();

          case 11:
            data = _context2.sent;
            return _context2.abrupt("return", data.photos);

          case 13:
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