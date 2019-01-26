webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TextBlock.js":
/*!*********************************!*\
  !*** ./components/TextBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Text, Span) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mrmrs/w/color/components/TextBlock.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var TextBlock = function TextBlock(_ref) {
  var currentCombination = _ref.currentCombination,
      borderWidth = _ref.borderWidth,
      boxPadding = _ref.boxPadding,
      props = _objectWithoutProperties(_ref, ["currentCombination", "borderWidth", "boxPadding"]);

  var contrast = color__WEBPACK_IMPORTED_MODULE_1___default()(currentCombination.bg).contrast(color__WEBPACK_IMPORTED_MODULE_1___default()(currentCombination.color)).toFixed(2);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, _extends({
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    p: boxPadding,
    color: currentCombination.color,
    bg: currentCombination.bg,
    textAlign: "left"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    my: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 2,
    fontWeight: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Contrast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: [5, 6, 7],
    fontWeight: 800,
    display: "block",
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, contrast), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontWeight: 800,
    fontSize: [4, 4, 6],
    style: {
      letterSpacing: '-.075em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontWeight: 600,
    fontSize: [3, 3, 5],
    display: "block",
    lineHeight: 1.5,
    style: {
      letterSpacing: '-.1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ()"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 3,
    lineHeight: 1.5,
    display: "block",
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Every perception of color is an illusion.. ..we do not see colors as they really are. In our perception they alter one another. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    display: ['none', 'inline'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "In order to use color effectively it is necessary to recognize that color deceives continually. In visual perception a color is almost never seen as it really is \u2014 as it physically is. This fact makes color the most relative medium in art."))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Text.js */ "./components/Text.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.3942dafca8355ee4e68b.hot-update.js.map