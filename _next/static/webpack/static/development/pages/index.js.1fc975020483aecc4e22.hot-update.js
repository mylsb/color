webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Combinations.js":
/*!************************************!*\
  !*** ./components/Combinations.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, MiniTextBlock, Button) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/mrmrs/w/color/components/Combinations.js";


var Combinations = function Combinations(_ref) {
  var availableCombos = _ref.availableCombos,
      onHideCombinations = _ref.onHideCombinations;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    display: "flex",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
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
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MiniTextBlock, {
      key: i,
      currentCombination: currentCombination,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      onClick: onHideCombinations,
      className:
      /*#__PURE__*/
      Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("position:fixed;top:0;right:0;backface-visibility:hidden;"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Close"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Combinations);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/MiniTextBlock.js */ "./components/MiniTextBlock.js")["default"], __webpack_require__(/*! ./elements/Button.js */ "./elements/Button.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.1fc975020483aecc4e22.hot-update.js.map