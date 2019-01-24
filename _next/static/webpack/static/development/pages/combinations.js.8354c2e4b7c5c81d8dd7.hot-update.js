webpackHotUpdate("static/development/pages/combinations.js",{

/***/ "./pages/combinations.js":
/*!*******************************!*\
  !*** ./pages/combinations.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Container, Div, TextBlock, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/react */ "./node_modules/unistore/react.js");
/* harmony import */ var unistore_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mrmrs/w/color/pages/combinations.js";




var Combinations = function Combinations(_ref) {
  var pageData = _ref.pageData;
  console.log();
  return lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(pageData) ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, pageData.combinations.map(function (combo, i) {
    var currentCombination = {
      bg: combo[0],
      color: combo[1],
      borderColor: combo[1]
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextBlock, {
      key: i,
      boxPadding: 64,
      currentCombination: currentCombination,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(unistore_react__WEBPACK_IMPORTED_MODULE_1__["connect"])("pageData")(Combinations));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/combinations")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./components/Container.js */ "./components/Container.js")["default"], __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/TextBlock.js */ "./components/TextBlock.js")["default"], __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=combinations.js.8354c2e4b7c5c81d8dd7.hot-update.js.map