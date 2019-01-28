webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ColorTable.js":
/*!**********************************!*\
  !*** ./components/ColorTable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Span) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var elements_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elements/Table */ "./elements/Table.js");
/* harmony import */ var elements_Thead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elements/Thead */ "./elements/Thead.js");
/* harmony import */ var elements_Tbody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elements/Tbody */ "./elements/Tbody.js");
/* harmony import */ var elements_Tr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! elements/Tr */ "./elements/Tr.js");
/* harmony import */ var components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TableHeaderCell */ "./components/TableHeaderCell.js");
/* harmony import */ var _ColorTableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColorTableRow */ "./components/ColorTableRow.js");
/* harmony import */ var _ContrastModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContrastModal */ "./components/ContrastModal.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/ColorTable.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ColorTable = function ColorTable(_ref) {
  var colors = _ref.colors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedColor = _useState2[0],
      setColor = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContrastModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleClose: setColor,
    color: selectedColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Table__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Thead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Tr__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    display: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Swatch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Hue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Hex"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "HSL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "RGB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    px: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Contrast w/ Black"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableHeaderCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    px: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "White"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Tbody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, colors.sort().map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorTableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: setColor,
      key: c,
      color: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.6ec6bdfcabd14345e3ff.hot-update.js.map