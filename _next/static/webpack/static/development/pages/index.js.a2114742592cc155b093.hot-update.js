webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FormBlock.js":
/*!*********************************!*\
  !*** ./components/FormBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Flex, TextInput, SingleComponent, Div, Progress, Badge, Form, Label, BadgeOutline, RadioButton) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getContrastScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getContrastScore */ "./utils/getContrastScore.js");

var _jsxFileName = "/Users/mrmrs/w/color/components/FormBlock.js";



var FormBlock = function FormBlock(_ref) {
  var borderWidth = _ref.borderWidth,
      currentCombination = _ref.currentCombination;
  var colorParentBgContrastValue = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_2__["default"])(currentCombination.color, currentCombination.parentBg);
  var outlineBg = colorParentBgContrastValue < 4.5 ? currentCombination.bg : "transparent";
  var radioColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    mt: 2,
    px: [3, 4],
    display: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    py: 3,
    px: 4,
    mr: 1,
    border: "1px solid",
    borderRadius: 1,
    color: currentCombination.bg,
    bg: currentCombination.color,
    borderColor: currentCombination.borderColor,
    defaultValue: "email@example.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleComponent, {
    py: 3,
    px: 4,
    border: "1px solid",
    borderRadius: 1,
    color: currentCombination.color,
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    children: "Click Here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    mt: 4,
    textAlign: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    px: 3,
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    mb: 2,
    mr: 2,
    width: "auto",
    bg: currentCombination.bg,
    color: currentCombination.color,
    border: "0",
    value: "623 Oak Rd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    width: "auto",
    bg: currentCombination.bg,
    color: currentCombination.color,
    border: "0",
    value: "Chicago, IL, 98812",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Progress, {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      '&[value]::-webkit-progress-bar': {
        backgroundColor: currentCombination.bg
      },
      '&[value]::-webkit-progress-value': {
        backgroundColor: currentCombination.color
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    display: "flex",
    alignItems: "center",
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleComponent, {
    py: 2,
    px: 4,
    mr: 3,
    borderRadius: 1,
    color: currentCombination.color,
    bg: currentCombination.bg,
    children: "Primary Click",
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Badge, {
    bg: currentCombination.bg,
    color: currentCombination.color,
    mr: 3,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    mt: 3,
    bg: outlineBg,
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    color: currentCombination.color,
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    display: "block",
    fontWeight: 600,
    mb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Label 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    borderRadius: 1,
    mb: 2,
    bg: "transparent",
    color: "inherit",
    borderColor: "currentColor",
    value: "Example value 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleComponent, {
    py: 2,
    px: 4,
    mr: 3,
    border: "1px solid",
    borderRadius: 1,
    color: currentCombination.color,
    bg: "transparent",
    borderColor: currentCombination.color,
    children: "Secondary Click",
    width: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BadgeOutline, {
    borderColor: currentCombination.color,
    color: currentCombination.color,
    width: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    display: "flex",
    alignItems: "center",
    borderRadius: 2,
    pl: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioButton, {
    name: "group 1",
    color: currentCombination.color,
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Yes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioButton, {
    name: "group 1",
    color: currentCombination.color,
    checked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "No"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./components/TextInput.js */ "./components/TextInput.js")["default"], __webpack_require__(/*! ./components/SingleComponent.js */ "./components/SingleComponent.js")["default"], __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/Progress.js */ "./elements/Progress.js")["default"], __webpack_require__(/*! ./components/Badge.js */ "./components/Badge.js")["default"], __webpack_require__(/*! ./elements/Form.js */ "./elements/Form.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./components/BadgeOutline.js */ "./components/BadgeOutline.js")["default"], __webpack_require__(/*! ./components/RadioButton.js */ "./components/RadioButton.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.a2114742592cc155b093.hot-update.js.map