webpackHotUpdate("static/development/pages/index.js",{

/***/ "./elements/Progress.js":
/*!******************************!*\
  !*** ./elements/Progress.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var Progress =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])("progress", {
  target: "e1qom6130"
}).apply(void 0, [styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], {
  overflow: 'hidden',
  webkitAppearance: 'none',
  appearance: 'none',
  '&[value]::-webkit-progress-bar': {
    backgroundColor: props.barBG
  },
  '&[value]::-webkit-progress-value': {
    backgroundColor: props.valueBG
  },
  verticalAlign: 'top'
}].concat(_toConsumableArray(props)));
Progress.defaultProps = {
  width: 1,
  height: 8,
  max: 100,
  value: 64,
  valueBg: 'theme.colors.gray[4]',
  valueProgress: 'theme.colors.blue[4]'
};
/* harmony default export */ __webpack_exports__["default"] = (Progress);

/***/ })

})
//# sourceMappingURL=index.js.3b533196aa2230ed228f.hot-update.js.map