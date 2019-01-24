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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ComboColor = function ComboColor(_ref) {
  var name = _ref.name,
      comboProperty = _ref.comboProperty,
      currentCombination = _ref.currentCombination,
      pinnedColors = _ref.pinnedColors,
      onPinColor = _ref.onPinColor,
      onClick = _ref.onClick;
  var contrastScore = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_3__["default"])(currentCombination[comboProperty], "#ffffff");
  var lockColor = contrastScore < 4.5 ? color__WEBPACK_IMPORTED_MODULE_2___default()(currentCombination[comboProperty]).darken(0.75).hex() : color__WEBPACK_IMPORTED_MODULE_2___default()(currentCombination[comboProperty]).lighten(1.5).hex();
  var outlineColor = contrastScore < 1.5 ? color__WEBPACK_IMPORTED_MODULE_2___default()(currentCombination[comboProperty]).lighten(0.125).hex() : color__WEBPACK_IMPORTED_MODULE_2___default()(currentCombination[comboProperty]).darken(0.125).hex();

  var onColorClick = function onColorClick() {
    return onClick(currentCombination[comboProperty], comboProperty);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    py: 2,
    alignItems: "center",
    display: "flex",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      position: "relative"
    }),
    bg: "white",
    style: {
      outline: '1px solid ' + outlineColor
    },
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
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    type: "lock",
    color: "black",
    size: 16,
    mx: "auto",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      opacity: pinnedColors[comboProperty] ? 1 : .125,
      ":hover": {
        opacity: 1
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), ">", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    bg: currentCombination[comboProperty],
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      cursor: "pointer"
    }),
    onClick: onColorClick,
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontSize: 1,
    display: ['block', 'inline-block'],
    fontWeight: 500,
    pr: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, name));
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
      onColorClick = _ref2.onColorClick,
      props = _objectWithoutProperties(_ref2, ["currentCombination", "pinnedColors", "onPrevious", "onNext", "onPinColor", "onLike", "onAutoCycling", "isRunning", "onColorClick"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, _extends({
    fontSize: 1,
    justifyContent: "center",
    mb: 2
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Parent Bg",
    comboProperty: "parentBg",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
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
      lineNumber: 93
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
      lineNumber: 102
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
      lineNumber: 111
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CombinationTools);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.7f0bcec28a6e31dec77b.hot-update.js.map