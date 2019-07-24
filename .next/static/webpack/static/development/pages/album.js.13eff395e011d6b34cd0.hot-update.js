webpackHotUpdate("static\\development\\pages\\album.js",{

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\denis\\Documents\\chun\\components\\Menu\\index.js";




function Menu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('http://localhost:3333/pages?id_ne=1');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                setPages(data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4042915514",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, pages ? pages.map(function (page) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: page.id,
      href: "/p/[id]",
      as: "/p/".concat(page.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "jsx-4042915514",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, page.title));
  }) : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "jsx-4042915514",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "contato")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/album",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "jsx-4042915514",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "album"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4042915514",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVuaXNcXERvY3VtZW50c1xcY2h1blxcY29tcG9uZW50c1xcTWVudVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQiIsImZpbGUiOiJDOlxcVXNlcnNcXGRlbmlzXFxEb2N1bWVudHNcXGNodW5cXGNvbXBvbmVudHNcXE1lbnVcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBNZW51KCkge1xyXG4gIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL3BhZ2VzP2lkX25lPTEnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFBhZ2VzKGRhdGEpXHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIHtwYWdlcyA/IHBhZ2VzLm1hcChwYWdlID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17cGFnZS5pZH0gaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cGFnZS5pZH1gfT5cclxuICAgICAgICAgICAgPGE+e3BhZ2UudGl0bGV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgIDxhPmNvbnRhdG88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWxidW1cIj5cclxuICAgICAgICAgIDxhPmFsYnVtPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXX0= */\n/*@ sourceURL=C:\\Users\\denis\\Documents\\chun\\components\\Menu\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=album.js.13eff395e011d6b34cd0.hot-update.js.map