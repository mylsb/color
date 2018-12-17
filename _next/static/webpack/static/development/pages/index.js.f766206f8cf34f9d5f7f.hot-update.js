webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ColorPicker.js":
/*!***********************************!*\
  !*** ./components/ColorPicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Flex, P, Span, TextInput, Label, Input, TextButton) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
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
    if (ratio > 3 && ratio < 4.5) {
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
    pt: 4,
    pb: 5,
    color: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "rbga(0,0,0,.75)" : "rgba(255,255,255,.85)",
    bg: currentColor,
    mt: 3,
    display: "flex",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
    fontSize: 2,
    px: 3,
    py: 1,
    borderRadius: 9999,
    fontWeight: 4,
    m: 0,
    bg: "black",
    color: currentColor,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, contrastForBlack(currentColor), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, showContrastLevel(contrastForBlack(currentColor))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
    fontSize: 2,
    px: 3,
    py: 1,
    borderRadius: 9999,
    m: 0,
    bg: "white",
    color: currentColor,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, contrastForWhite(currentColor)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, showContrastLevel(contrastForWhite(currentColor)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    width: 1,
    color: "inherit",
    bg: "transparent",
    border: 0,
    fontSize: 5,
    fontWeight: 800,
    value: colorValues.hex,
    onChange: handleHexChange,
    px: 0,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 5,
    flexWrap: "wrap",
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "r",
    type: "range",
    min: "0",
    max: "255",
    step: "1",
    width: 64,
    value: colorValues.rgb.r,
    onChange: handleRGBChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 5,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
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
      lineNumber: 226
    },
    __self: this
  }, "G"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
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
      lineNumber: 229
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "g",
    type: "range",
    width: 64,
    min: "0",
    max: "255",
    step: "1",
    value: colorValues.rgb.g,
    onChange: handleRGBChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 5,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
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
      lineNumber: 257
    },
    __self: this
  }, "B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
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
      lineNumber: 260
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
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
      lineNumber: 275
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 5,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
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
      lineNumber: 289
    },
    __self: this
  }, "H"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    name: "h",
    type: "number",
    width: "auto",
    bg: "transparent",
    color: "inherit",
    border: 0,
    fontSize: 3,
    min: "0",
    max: "360",
    onChange: handleHSLChange,
    value: Math.floor(colorValues.hsl.h),
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "h",
    type: "range",
    width: 64,
    min: "0",
    max: "360",
    step: "1",
    value: colorValues.hsl.h,
    onChange: handleHSLChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1 / 5,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
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
      lineNumber: 320
    },
    __self: this
  }, "S"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
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
      lineNumber: 323
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "s",
    type: "range",
    width: 64,
    min: "0",
    max: "100",
    step: "1",
    value: colorValues.hsl.s,
    onChange: handleHSLChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    flexWrap: "wrap",
    width: 1 / 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
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
      lineNumber: 351
    },
    __self: this
  }, "L"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
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
      lineNumber: 354
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "l",
    type: "range",
    width: 64,
    min: "0",
    max: "100",
    step: "1",
    value: colorValues.hsl.l,
    onChange: handleHSLChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    textAlign: "center",
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton, {
    bg: "transparent",
    color: currentColor,
    onClick: function onClick() {
      return onRemoveColor(currentColor);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "Remove")));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ColorPicker));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/TextInput.js */ "./components/TextInput.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./components/TextButton.js */ "./components/TextButton.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.f766206f8cf34f9d5f7f.hot-update.js.map