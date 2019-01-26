webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/IconOutlineBlock.js":
/*!****************************************!*\
  !*** ./components/IconOutlineBlock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Icon) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var _utils_getContrastScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getContrastScore */ "./utils/getContrastScore.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/IconOutlineBlock.js";




var IconSolid =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e4p84oy0"
})(styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["width"], styled_system__WEBPACK_IMPORTED_MODULE_3__["height"], styled_system__WEBPACK_IMPORTED_MODULE_3__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_3__["position"], styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"], {
  boxSizing: "border-box",
  transition: "all .25s ease-in"
});
IconSolid.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
  borderRadius: "100%"
};
var IconOutline =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e4p84oy1"
})(styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["width"], styled_system__WEBPACK_IMPORTED_MODULE_3__["height"], styled_system__WEBPACK_IMPORTED_MODULE_3__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_3__["position"], styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"], {
  boxSizing: "border-box",
  transition: "all .25s ease-in"
});
IconOutline.defaultProps = {
  border: "1px solid currentColor",
  borderRadius: "100%",
  height: 32,
  width: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

var IconOutlineBlock = function IconOutlineBlock(_ref) {
  var currentCombination = _ref.currentCombination,
      borderWidth = _ref.borderWidth;
  var colorParentBgContrastValue = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_2__["default"])(currentCombination.color, currentCombination.parentBg);
  var iconOutlineColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    mt: 5,
    mb: 5,
    px: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    display: "grid",
    style: {
      justifyItems: "center",
      gridTemplateColumns: "repeat(auto-fill, minmax(24px,48px))",
      rowGap: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "remove",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretDown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "pop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "cost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "creditCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "exclamationOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "exclamation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "expand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "forward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "gear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "generalInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "refresh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "reorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "resizeHorizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "okSign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "activation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "validator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "safeOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "safe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "warningOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "stopOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "stop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "lock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "quotes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "wrench",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "refresh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "reorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "resizeHorizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "okSign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "activation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "validator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "safeOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "safe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "warningOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "stopOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "stop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "lock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "quotes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "wrench",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconOutlineBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.6e711b5d910c45ef6609.hot-update.js.map