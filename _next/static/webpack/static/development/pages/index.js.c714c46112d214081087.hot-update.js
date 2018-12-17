webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ColorPicker.js":
/*!***********************************!*\
  !*** ./components/ColorPicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Flex, TextInput, P, Span, Label, Input, TextButton) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);















var _jsxFileName = "/Users/mrmrs/w/color/components/ColorPicker.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var getHex = function getHex(val) {
  try {
    return color__WEBPACK_IMPORTED_MODULE_2___default()(val).hex();
  } catch (e) {
    return null;
  }
};

var getRGB = function getRGB(val) {
  try {
    return color__WEBPACK_IMPORTED_MODULE_2___default()(val).rgb().object();
  } catch (e) {
    return {};
  }
};

var getHSL = function getHSL(val) {
  try {
    return color__WEBPACK_IMPORTED_MODULE_2___default()(val).hsl().object();
  } catch (e) {
    return {};
  }
};

var getColorValues = function getColorValues(val) {
  var hex = getHex(val);
  var rgb = getRGB(val);
  var hsl = getHSL(val);
  return {
    hex: hex,
    rgb: rgb,
    hsl: hsl
  };
};

var ColorPicker = function ColorPicker(_ref) {
  var currentColor = _ref.currentColor,
      onChange = _ref.onChange,
      onRemoveColor = _ref.onRemoveColor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return getColorValues(currentColor);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      colorValues = _useState2[0],
      setColorValues = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var next = color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor);
    var newState = {
      hex: next.hex(),
      rgb: next.rgb().object(),
      hsl: next.hsl().object()
    };
    setColorValues(newState);
  }, [currentColor]);

  var handleHexChange = function handleHexChange(e) {
    var val = e.target.value;
    setColorValues(function (prevValue) {
      return _objectSpread({}, prevValue, {
        hex: val
      });
    });

    try {
      var next = color__WEBPACK_IMPORTED_MODULE_2___default()(val).hex();
      onChange(next);
    } catch (e) {
      return;
    }
  };

  var handleRGBChange = function handleRGBChange(e) {
    var val = e.target.value;
    var name = e.target.name;

    var rgbValue = _objectSpread({}, colorValues.rgb, _defineProperty({}, name, val));

    setColorValues(function (prevValue) {
      return _objectSpread({}, prevValue, {
        rgb: rgbValue
      });
    });

    try {
      var next = color__WEBPACK_IMPORTED_MODULE_2___default()(rgbValue).hex();
      onChange(next);
    } catch (e) {
      return;
    }
  };

  var handleHSLChange = function handleHSLChange(e) {
    var val = e.target.value;
    var name = e.target.name;

    var hslValue = _objectSpread({}, colorValues.hsl, _defineProperty({}, name, val));

    setColorValues(function (prevValue) {
      return _objectSpread({}, prevValue, {
        hsl: hslValue
      });
    });

    try {
      var next = color__WEBPACK_IMPORTED_MODULE_2___default()(hslValue).hex();
      onChange(next);
    } catch (e) {
      return;
    }
  };

  var getContrastRatio = function getContrastRatio(currentColor, otherColor) {
    return color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).contrast(color__WEBPACK_IMPORTED_MODULE_2___default()(otherColor)).toFixed(2);
  };

  var contrastForBlack = function contrastForBlack(currentColor) {
    return getContrastRatio(currentColor, "black");
  };

  var contrastForWhite = function contrastForWhite(currentColor) {
    return getContrastRatio(currentColor, "white");
  };

  var showContrastLevel = function showContrastLevel(ratio) {
    if (ratio < 3) {
      return "Fail";
    } else if (ratio > 3 && ratio < 4.5) {
      return "AA large";
    } else if (ratio >= 4.5 && ratio < 7) {
      return "AA";
    } else if (ratio >= 7) {
      return "AAA";
    }

    return "";
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    px: 4,
    py: 4,
    color: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "rbga(0,0,0,.75)" : "rgba(255,255,255,.85)",
    bg: currentColor,
    mt: 3,
    display: "flex",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    color: "inherit",
    bg: "transparent",
    border: 0,
    fontSize: 4,
    fontWeight: 800,
    value: colorValues.hex,
    onChange: handleHexChange,
    px: 0,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
    ml: "auto",
    mr: 3,
    display: "inline-block",
    fontSize: 1,
    px: 2,
    py: 1,
    borderRadius: 9999,
    my: 0,
    bg: "black",
    color: currentColor,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none",
      whiteSpace: 'nowrap'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, contrastForBlack(currentColor), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, showContrastLevel(contrastForBlack(currentColor)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
    display: "inline-block",
    fontSize: 1,
    px: 2,
    py: 1,
    borderRadius: 9999,
    m: 0,
    bg: "white",
    color: currentColor,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none",
      whiteSpace: 'nowrap'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, contrastForWhite(currentColor)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, showContrastLevel(contrastForWhite(currentColor))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    color: "inherit",
    fontWeight: 700,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    type: "number",
    border: 0,
    color: "inherit",
    bg: "transparent",
    width: "auto",
    min: "0",
    max: "255",
    fontSize: 3,
    name: "r",
    value: Math.floor(colorValues.rgb.r),
    onChange: handleRGBChange,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "r",
    type: "range",
    min: "0",
    max: "255",
    step: "1",
    value: colorValues.rgb.r,
    onChange: handleRGBChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    fontWeight: 700,
    color: "inherit",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    name: "g",
    type: "number",
    color: "inherit",
    fontSize: 3,
    bg: "transparent",
    border: 0,
    width: "auto",
    min: "0",
    max: "255",
    value: Math.floor(colorValues.rgb.g),
    onChange: handleRGBChange,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 2 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "g",
    type: "range",
    width: 1,
    min: "0",
    max: "255",
    step: "1",
    value: colorValues.rgb.g,
    onChange: handleRGBChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    color: "inherit",
    fontWeight: 700,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    name: "b",
    type: "number",
    border: 0,
    fontSize: 3,
    bg: "transparent",
    width: "auto",
    color: "inherit",
    min: "0",
    max: "255",
    value: Math.floor(colorValues.rgb.b),
    onChange: handleRGBChange,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "b",
    type: "range",
    min: "0",
    max: "255",
    step: "1",
    width: 64,
    value: colorValues.rgb.b,
    onChange: handleRGBChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    flexWrap: "wrap",
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 3,
    justifyContent: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    fontWeight: 700,
    color: "inherit",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "Hue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    name: "h",
    type: "number",
    bg: "transparent",
    color: "inherit",
    border: 0,
    fontSize: 3,
    width: "auto",
    min: "0",
    max: "360",
    onChange: handleHSLChange,
    value: Math.floor(colorValues.hsl.h),
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 2 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    width: 1,
    display: "block",
    name: "h",
    type: "range",
    min: "0",
    max: "360",
    step: "1",
    value: colorValues.hsl.h,
    onChange: handleHSLChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    fontWeight: 700,
    color: "inherit",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "Saturation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    name: "s",
    type: "number",
    width: "auto",
    bg: "transparent",
    color: "inherit",
    border: 0,
    fontSize: 3,
    min: "0",
    max: "100",
    onChange: handleHSLChange,
    value: Math.floor(colorValues.hsl.s),
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 2 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "s",
    type: "range",
    width: 1,
    min: "0",
    max: "100",
    step: "1",
    value: colorValues.hsl.s,
    onChange: handleHSLChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    fontWeight: 700,
    color: "inherit",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "Lightness"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    name: "l",
    type: "number",
    width: "auto",
    bg: "transparent",
    color: "inherit",
    border: 0,
    fontSize: 3,
    min: "0",
    max: "100",
    value: Math.floor(colorValues.hsl.l),
    onChange: handleHSLChange,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 2 / 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "l",
    type: "range",
    width: 1,
    min: "0",
    max: "100",
    step: "1",
    value: colorValues.hsl.l,
    onChange: handleHSLChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    textAlign: "center",
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton, {
    bg: "transparent",
    color: "inherit",
    onClick: function onClick() {
      return onRemoveColor(currentColor);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, "Remove")));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ColorPicker));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./components/TextInput.js */ "./components/TextInput.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./components/TextButton.js */ "./components/TextButton.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.c714c46112d214081087.hot-update.js.map