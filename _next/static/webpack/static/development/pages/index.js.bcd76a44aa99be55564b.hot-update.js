webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CombinationTools.js":
/*!****************************************!*\
  !*** ./components/CombinationTools.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Icon, Span, Flex) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getContrastScore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getContrastScore */ "./utils/getContrastScore.js");




var _jsxFileName = "/Users/mrmrs/w/color/components/CombinationTools.js";




var ComboColor = function ComboColor(_ref) {
  var name = _ref.name,
      comboProperty = _ref.comboProperty,
      currentCombination = _ref.currentCombination,
      pinnedColors = _ref.pinnedColors,
      onPinColor = _ref.onPinColor,
      onClick = _ref.onClick;
  var contrastScore = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_3__["default"])(currentCombination[comboProperty], "#ffffff");
  var lockColor = contrastScore < 4.5 ? color__WEBPACK_IMPORTED_MODULE_2___default()(currentCombination[comboProperty]).darken(0.75) : color__WEBPACK_IMPORTED_MODULE_2___default()(currentCombination[comboProperty]).lighten(1.5);
  var outlineColor = contrastScore < 1.5 ? color__WEBPACK_IMPORTED_MODULE_2___default()(currentCombination[comboProperty]).darken(0.125) : "white";

  var onColorClick = function onColorClick() {
    return onClick(currentCombination[comboProperty], comboProperty);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    alignItems: "center",
    display: "flex",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      position: "relative"
    }),
    bg: currentCombination[comboProperty],
    color: lockColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: 1,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      cursor: "pointer",
      ":hover > svg": {
        opacity: 1
      }
    }),
    onClick: onPinColor(comboProperty),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    type: "lock",
    color: lockColor,
    size: 16,
    mx: "auto",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      opacity: pinnedColors[comboProperty] ? 1 : .25,
      ":hover": {
        opacity: 1
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    color: lockColor,
    display: "block",
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, name, ":"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontSize: 2,
    color: lockColor,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      cursor: "pointer"
    }),
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, currentCombination[comboProperty])));
};

var CombinationTools = function CombinationTools(_ref2) {
  var currentCombination = _ref2.currentCombination,
      pinnedColors = _ref2.pinnedColors,
      onPrevious = _ref2.onPrevious,
      onNext = _ref2.onNext,
      onPinColor = _ref2.onPinColor,
      onLike = _ref2.onLike,
      onAutoCycling = _ref2.onAutoCycling,
      isRunning = _ref2.isRunning,
      onColorClick = _ref2.onColorClick;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    fontSize: 1,
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Parent Bg",
    comboProperty: "parentBg",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Color",
    comboProperty: "color",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Bg",
    comboProperty: "bg",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Border",
    comboProperty: "borderColor",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CombinationTools);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.bcd76a44aa99be55564b.hot-update.js.map