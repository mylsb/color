webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Palette.js":
/*!*******************************!*\
  !*** ./components/Palette.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, AddColor) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/mrmrs/w/color/components/Palette.js";


var SingleColor = function SingleColor(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      isActive = _ref.isActive,
      isVisible = _ref.isVisible,
      index = _ref.index;

  var handleActiveUI = function handleActiveUI() {
    return onClick(color, index);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    m: 1,
    border: "2px solid",
    borderColor: isActive ? "black" : "transparent",
    bg: color,
    height: 24,
    width: 24,
    style: {
      cursor: "pointer",
      position: "relative",
      boxShadow: isVisible ? " 0 0 10px rgba(0,0,0,0.3)" : "none",
      transform: isVisible ? "scale(2.5)" : "none",
      transition: "transform 200ms ease-in",
      zIndex: 9999
    },
    onClick: handleActiveUI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

var Palette = function Palette(_ref2) {
  var palette = _ref2.palette,
      onClick = _ref2.onClick,
      activeColors = _ref2.activeColors,
      onAddColor = _ref2.onAddColor,
      pickerColor = _ref2.pickerColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    display: "flex",
    mx: -1,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      flexWrap: "wrap",
      justifyContent: "space-between",
      "&:after": {
        content: '""',
        flex: "auto"
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, palette.map(function (color, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleColor, {
      isActive: i === pickerColor.index,
      isVisible: activeColors.includes(color),
      key: i,
      index: i,
      color: color,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddColor, {
    onAddColor: onAddColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Palette);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/AddColor.js */ "./components/AddColor.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.de43f96d73aeef2182b5.hot-update.js.map