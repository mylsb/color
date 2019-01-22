webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/MiniColorSwatch.js":
/*!***************************************!*\
  !*** ./components/MiniColorSwatch.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Flex, Div, P) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/mrmrs/w/color/components/MiniColorSwatch.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var MiniColorSwatch = function MiniColorSwatch(_ref) {
  var _React$createElement;

  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, (_React$createElement = {
    display: "inline-flex",
    border: "1px solid",
    borderColor: color,
    p: 2
  }, _defineProperty(_React$createElement, "p", 1), _defineProperty(_React$createElement, "borderRadius", "5px"), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 5
  }), _defineProperty(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 32,
    bg: color,
    borderRadius: "3px",
    mr: 2,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:16px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("line-height:1;"),
    color: color,
    m: 0,
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.children));
};

MiniColorSwatch.defaultProps = {
  children: 'Aa'
};
/* harmony default export */ __webpack_exports__["default"] = (MiniColorSwatch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"]))

/***/ })

})
//# sourceMappingURL=about.js.5c0b4ca24aeae7b1fe6f.hot-update.js.map