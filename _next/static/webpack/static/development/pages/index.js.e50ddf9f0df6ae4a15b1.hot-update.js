webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Combinations.js":
/*!************************************!*\
  !*** ./components/Combinations.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Flex, ButtonIcon, H4, MiniTextBlock, ButtonOutline) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "/Users/mrmrs/w/color/components/Combinations.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Combinations = function Combinations(_ref) {
  var availableCombos = _ref.availableCombos,
      onHideCombinations = _ref.onHideCombinations;
  var pagedCombinations = lodash_chunk__WEBPACK_IMPORTED_MODULE_2___default()(availableCombos, 100);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      viewableArrayCount = _useState2[0],
      setViewableArrayCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pagedCombinations[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      inViewCombinations = _useState4[0],
      setInViewCombinations = _useState4[1];

  var combinationsLeftToView = viewableArrayCount < pagedCombinations.length - 1;

  var handleLoadMore = function handleLoadMore() {
    var newCount = viewableArrayCount + 1;
    setViewableArrayCount(newCount);
    setInViewCombinations(function (prev) {
      return _toConsumableArray(prev).concat(_toConsumableArray(pagedCombinations[newCount]));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    position: "relative",
    display: "block",
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    py: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonIcon, {
    onClick: onHideCombinations,
    icon: "left",
    ml: 3,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("backface-visibility:hidden;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H4, {
    my: 0,
    width: 1,
    display: "block",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, availableCombos.length, " Accessible Combinations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonIcon, {
    onClick: onHideCombinations,
    icon: "remove",
    mr: 3,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("backface-visibility:hidden;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, inViewCombinations.map(function (combo, i) {
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
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MiniTextBlock, {
      key: i,
      currentCombination: currentCombination,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }));
  }), combinationsLeftToView && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    py: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonOutline, {
    color: "gray.0",
    borderColor: "gray.0",
    type: "button",
    onClick: handleLoadMore,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Load more combos"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Combinations);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./components/ButtonIcon.js */ "./components/ButtonIcon.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./components/MiniTextBlock.js */ "./components/MiniTextBlock.js")["default"], __webpack_require__(/*! ./components/ButtonOutline.js */ "./components/ButtonOutline.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.e50ddf9f0df6ae4a15b1.hot-update.js.map