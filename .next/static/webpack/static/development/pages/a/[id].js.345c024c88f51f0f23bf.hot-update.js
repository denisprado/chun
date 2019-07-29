webpackHotUpdate("static/development/pages/a/[id].js",{

/***/ "./pages/a/AlbumData.js":
/*!******************************!*\
  !*** ./pages/a/AlbumData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AlbumItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlbumItem */ "./pages/a/AlbumItem.js");
var _jsxFileName = "/home/denis/Sites/chun/pages/a/AlbumData.js";




var AlbumData = function AlbumData(_ref) {
  var albumData = _ref.albumData;
  return lodash__WEBPACK_IMPORTED_MODULE_1___default()(albumData.Files).map(function (photo) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlbumItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: photo.id,
      albumItem: photo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }).value();
};

/* harmony default export */ __webpack_exports__["default"] = (AlbumData);

/***/ })

})
//# sourceMappingURL=[id].js.345c024c88f51f0f23bf.hot-update.js.map