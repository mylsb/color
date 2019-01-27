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
  var boxPadding = _ref.boxPadding,
      currentCombination = _ref.currentCombination,
      borderWidth = _ref.borderWidth;
  var colorParentBgContrastValue = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_2__["default"])(currentCombination.color, currentCombination.parentBg);
  var iconOutlineColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    mt: 5,
    mb: 5,
    px: boxPadding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    display: "grid",
    style: {
      justifyContent: 'space-around',
      justifyItems: "center",
      gridTemplateColumns: "repeat(auto-fill, minmax(32px,64px))",
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
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "remove",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretDown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "caretUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "pop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "cost",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "creditCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "exclamationOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "exclamation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "expand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "forward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "gear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "generalInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: currentCombination.color,
    type: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "refresh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "reorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "resizeHorizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "okSign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "activation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "validator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "safeOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "safe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "warningOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "stopOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "stop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "lock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "quotes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    size: 16,
    color: iconOutlineColor,
    type: "wrench",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconOutlineBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.1ad2c9c1bf722dc8bb37.hot-update.js.map