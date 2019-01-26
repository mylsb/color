webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TextBlock.js":
/*!*********************************!*\
  !*** ./components/TextBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Text, Span, P, Footer, Code) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/Blockquote */ "./elements/Blockquote.js");
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
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    my: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 2,
    fontWeight: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Contrast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: [5, 6, 7],
    fontWeight: 800,
    display: "block",
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 27
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
      lineNumber: 30
    },
    __self: this
  }, "a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ()"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 3,
    lineHeight: 1.5,
    display: "block",
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Every perception of color is an illusion.. ..we do not see colors as they really are. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "In our perception they alter one another."), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    display: ['none', 'inline'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "In order to use color effectively it is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "necessary to recognize that color deceives continually."), " In visual perception a color is almost never seen as it really is \u2014 as it physically is. This fact makes color the most relative medium in art."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_2__["default"], {
    borderLeft: "4px solid currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Color is my day-long obsession, joy and torment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Claude Monet")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Code, {
    border: "1px solid currentColor",
    borderRadius: 3,
    p: 3,
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "// This is a code comment", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), "/* Another type of code comment */", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), "<article>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), "\xA0\xA0<h1>A title example</h1>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "\xA0\xA0<h2>A subtitle example</h2>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "\xA0\xA0<p>And this would be some paragraph text.</p>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "</article>"));
};

/* harmony default export */ __webpack_exports__["default"] = (TextBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Text.js */ "./components/Text.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/Footer.js */ "./elements/Footer.js")["default"], __webpack_require__(/*! ./elements/Code.js */ "./elements/Code.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.2b45220d8158dec6f7e1.hot-update.js.map