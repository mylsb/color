webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Palette.js":
/*!*******************************!*\
  !*** ./components/Palette.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, AddColor) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/Palette.js";



var ClearFix =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "ezmqql90"
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], {
  boxSizing: 'border-box',
  '::after': {
    content: "' '",
    display: 'table',
    clear: 'both',
    overflow: 'hidden'
  }
});

var SingleColor = function SingleColor(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      isActive = _ref.isActive,
      isVisible = _ref.isVisible,
      index = _ref.index;

  var handleActiveUI = function handleActiveUI() {
    return onClick(color, index);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    border: "2px solid",
    borderColor: isActive ? "black" : "transparent",
    bg: color,
    height: 32,
    width: [1 / 16, 1 / 32],
    style: {
      float: 'left',
      cursor: "pointer",
      position: "relative",
      boxShadow: isVisible ? " 0 0 8px rgba(0,0,0,0.5)" : "none",
      transform: isVisible ? "scale(1.25)" : "none",
      zIndex: isVisible ? 4 : 1,
      transition: "transform 200ms ease-in-out"
    },
    onClick: handleActiveUI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearFix, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, palette.map(function (color, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleColor, {
      isActive: i === pickerColor.index,
      isVisible: activeColors.includes(color),
      key: i,
      index: i,
      color: color,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddColor, {
    style: {
      float: 'left'
    },
    mt: 1,
    ml: 1,
    onAddColor: onAddColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Palette);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/AddColor.js */ "./components/AddColor.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.c7a36f1e7e252a1db945.hot-update.js.map