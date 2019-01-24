webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ColorTableRow.js":
/*!*************************************!*\
  !*** ./components/ColorTableRow.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var elements_Tr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elements/Tr */ "./elements/Tr.js");
/* harmony import */ var elements_Div__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! elements/Div */ "./elements/Div.js");
/* harmony import */ var components_Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Flex */ "./components/Flex.js");
/* harmony import */ var elements_P__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! elements/P */ "./elements/P.js");
/* harmony import */ var components_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/TableCell */ "./components/TableCell.js");
/* harmony import */ var elements_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! elements/Code */ "./elements/Code.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/ColorTableRow.js";










var getHue = function getHue(colorObj) {
  var hueVal = colorObj.get("hsl.h");

  if (lodash_isNaN__WEBPACK_IMPORTED_MODULE_2___default()(hueVal)) {
    return "Gray";
  }

  var names = ["Red", // 0
  "Orange", // 30
  "Yellow", // 60
  "Lime", // 90
  "Green", // 120
  "Teal", // 150
  "Cyan", // 180
  "Blue", // 210
  "Indigo", // 240
  "Violet", // 270
  "Fuschia", // 300
  "Pink", // 330
  "Red" // 360
  ];
  var hueIndex = Math.round((hueVal - 2) / 30);
  return names[hueIndex];
};

var useColorData = function useColorData(color) {
  var colorObj = chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(color);
  var hue = getHue(colorObj);
  return {
    hex: colorObj.hex(),
    hsl: colorObj.css("hsl"),
    rgb: colorObj.css(),
    hue: hue
  };
};

var Swatch = function Swatch(_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Flex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Div__WEBPACK_IMPORTED_MODULE_4__["default"], {
    borderColor: color,
    border: "1px solid",
    p: "4px",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Div__WEBPACK_IMPORTED_MODULE_4__["default"], {
    height: "100%",
    py: 2,
    bg: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_P__WEBPACK_IMPORTED_MODULE_6__["default"], {
    my: 0,
    fontWeight: 2,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Aa"));
};

var ColorTableRow = function ColorTableRow(_ref2) {
  var color = _ref2.color,
      onClick = _ref2.onClick;
  var colorData = useColorData(color);
  chroma_js__WEBPACK_IMPORTED_MODULE_1___default.a.contrast('black', colorData.hex).toFixed(2);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Tr__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: 2,
    fontWeight: 600,
    px: 2,
    color: colorData.hex,
    bg: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: 2,
    fontWeight: 600,
    px: 2,
    color: colorData.hex,
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    py: 2,
    px: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Swatch, {
    color: colorData.hex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, colorData.hue), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Code__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, colorData.hex)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Code__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, colorData.hsl)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_Code__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, colorData.rgb)));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorTableRow);

/***/ })

})
//# sourceMappingURL=index.js.57762bf1563e49de464c.hot-update.js.map