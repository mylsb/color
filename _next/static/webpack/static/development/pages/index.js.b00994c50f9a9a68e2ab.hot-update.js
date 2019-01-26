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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Progress =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])("progress", {
  target: "e1qom6130"
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], {
  overflow: 'hidden',
  webkitAppearance: 'none',
  appearance: 'none',
  '&[value]::-webkit-progress-bar': {
    backgroundColor: undefined.props.barBG
  },
  '&[value]::-webkit-progress-value': {
    backgroundColor: undefined.props.valueBG
  },
  verticalAlign: 'top'
}, _objectSpread({}, props));
Progress.defaultProps = {
  width: 1,
  height: 8,
  max: 100,
  value: 64,
  barBG: 'theme.colors.gray[4]',
  valueBG: 'theme.colors.blue[4]'
};
/* harmony default export */ __webpack_exports__["default"] = (Progress);

/***/ })

})
//# sourceMappingURL=index.js.b00994c50f9a9a68e2ab.hot-update.js.map