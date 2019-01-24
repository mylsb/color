webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ButtonPrimary.js":
/*!*************************************!*\
  !*** ./components/ButtonPrimary.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Icon, Span) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/ButtonPrimary.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Button =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])("button", {
  target: "ed5f84x0"
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], {
  boxSizing: "border-box",
  fontFamily: "inherit",
  overflow: "visible",
  textTransform: "none",
  webkitAppearance: "button",
  transition: "background-color .25s ease-in",
  ":hover": {
    backgroundColor: "rgba(255,255,255,1)",
    cursor: "pointer"
  }
});
Button.defaultProps = {
  bg: "rgba(255,255,255,.7)",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "100%",
  lineHeight: 1,
  m: 0,
  textAlign: "center"
};

var ButtonPrimary = function ButtonPrimary(_ref) {
  var button = _ref.button,
      iconSize = _ref.iconSize,
      props = _objectWithoutProperties(_ref, ["button", "iconSize"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), props.align === "left" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: iconSize,
    type: button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    px: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, props.children), props.align === "right" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    type: button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
};

ButtonPrimary.defaultProps = {
  borderRadius: 2,
  border: "1px solid transparent",
  py: 2,
  px: 3,
  fontSize: 2,
  button: "left",
  children: "Click",
  align: "left",
  iconSize: 16,
  display: 'inline-flex',
  alignItems: 'center'
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonPrimary);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.68ce22b3d8545d0f8a9a.hot-update.js.map