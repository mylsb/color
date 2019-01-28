webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PlayerControls.js":
/*!**************************************!*\
  !*** ./components/PlayerControls.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Flex, ButtonIcon) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getContrastScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getContrastScore */ "./utils/getContrastScore.js");
var _jsxFileName = "/Users/sammdc/w/color/components/PlayerControls.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var PlayerControls = function PlayerControls(_ref) {
  var currentCombination = _ref.currentCombination,
      pinnedColors = _ref.pinnedColors,
      onPrevious = _ref.onPrevious,
      onNext = _ref.onNext,
      onPinColor = _ref.onPinColor,
      onLike = _ref.onLike,
      onAutoCycling = _ref.onAutoCycling,
      isRunning = _ref.isRunning,
      onColorClick = _ref.onColorClick,
      props = _objectWithoutProperties(_ref, ["currentCombination", "pinnedColors", "onPrevious", "onNext", "onPinColor", "onLike", "onAutoCycling", "isRunning", "onColorClick"]);

  var colorParentBgContrastValue = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_1__["default"])(currentCombination.color, currentCombination.parentBg);
  var controlColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, _extends({
    fontSize: 1,
    justifyContent: "center",
    py: 3
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    alignItems: "center",
    onClick: onPrevious,
    icon: "previous",
    bg: "transparent",
    color: controlColor,
    "aria-label": "previous combination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    alignItems: "center",
    onClick: onAutoCycling,
    button: null,
    color: controlColor,
    icon: isRunning ? "pause" : "play",
    iconSize: 16,
    "aria-label": "play/pause",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    alignItems: "center",
    onClick: onLike,
    icon: "like",
    bg: "transparent",
    color: controlColor,
    iconSize: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, {
    alignItems: "center",
    onClick: onNext,
    icon: "next",
    align: "right",
    children: "",
    bg: "transparent",
    color: controlColor,
    "aria-label": "next combination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerControls);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./components/ButtonIcon.js */ "./components/ButtonIcon.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.70b0eb15ed0125164054.hot-update.js.map