webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Combinations.js":
/*!************************************!*\
  !*** ./components/Combinations.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Flex, ButtonIcon, H4, MiniTextBlock) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "/Users/mrmrs/w/color/components/Combinations.js";


var Combinations = function Combinations(_ref) {
  var availableCombos = _ref.availableCombos,
      onHideCombinations = _ref.onHideCombinations;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    position: "relative",
    display: "block",
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    py: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonIcon, {
    onClick: onHideCombinations,
    icon: "left",
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("backface-visibility:hidden;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H4, {
    my: 0,
    width: 1,
    display: "block",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, availableCombos.length, " Accessible Combinations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonIcon, {
    onClick: onHideCombinations,
    icon: "remove",
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("backface-visibility:hidden;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, availableCombos.map(function (combo, i) {
    var currentCombination = {
      bg: combo[0],
      color: combo[1],
      borderColor: combo[1]
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
      width: [1, 1 / 2, 1 / 4],
      key: i,
      className:
      /*#__PURE__*/
      Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("position:relative;"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MiniTextBlock, {
      key: i,
      currentCombination: currentCombination,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Combinations);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./components/ButtonIcon.js */ "./components/ButtonIcon.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./components/MiniTextBlock.js */ "./components/MiniTextBlock.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.47256994bdc818a5b862.hot-update.js.map