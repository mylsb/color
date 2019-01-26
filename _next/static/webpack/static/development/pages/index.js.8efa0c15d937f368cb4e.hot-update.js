webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ColorPicker.js":
/*!***********************************!*\
  !*** ./components/ColorPicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Input, Article, Div, Flex, TextInput, P, Span, Label, TextButton) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./theme.js");
















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

var RangeSlider = function RangeSlider(_ref) {
  var name = _ref.name,
      min = _ref.min,
      max = _ref.max,
      onChange = _ref.onChange,
      value = _ref.value,
      thumbColor = _ref.thumbColor,
      trackColor = _ref.trackColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: name,
    type: "range",
    min: min,
    max: max,
    step: "1",
    value: value,
    onChange: onChange,
    width: 1,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      appearance: "none",
      borderRadius: "999px",
      height: "6px",
      outline: "none",
      backgroundColor: trackColor,
      "&::-webkit-slider-thumb": {
        backgroundColor: thumbColor,
        appearance: "none",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        cursor: "pointer"
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  });
};

var ColorPicker = function ColorPicker(_ref2) {
  var _React$createElement;

  var currentColor = _ref2.currentColor,
      onChange = _ref2.onChange,
      onRemoveColor = _ref2.onRemoveColor;

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

  var getColor = function getColor(currentColor) {
    return color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.85)";
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Article, {
    px: 4,
    py: 4,
    color: getColor(currentColor),
    bg: currentColor,
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "48rem",
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
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
      lineNumber: 195
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
      whiteSpace: "nowrap"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, contrastForBlack(currentColor), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
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
      whiteSpace: "nowrap"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, contrastForWhite(currentColor), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, showContrastLevel(contrastForWhite(currentColor))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: [1, 1 / 2],
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    fontSize: [1, 2],
    display: "block",
    width: 1,
    color: "inherit",
    fontWeight: 700,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    flexWrap: "wrap",
    width: 1,
    mb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RangeSlider, {
    name: "r",
    min: "0",
    max: "255",
    value: colorValues.rgb.r,
    onChange: handleRGBChange,
    trackColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#000" : "#fff",
    thumbColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#fff" : "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 64,
    justifyContent: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    px: 0,
    py: 0,
    type: "number",
    border: 0,
    color: "inherit",
    bg: "transparent",
    textAlign: "right",
    width: 1,
    min: "0",
    max: "255",
    fontSize: [2, 3],
    name: "r",
    value: Math.floor(colorValues.rgb.r),
    onChange: handleRGBChange,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    flexWrap: "wrap",
    mb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    width: 1,
    fontSize: [1, 2],
    fontWeight: 700,
    color: "inherit",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RangeSlider, {
    name: "g",
    min: "0",
    max: "255",
    value: colorValues.rgb.g,
    onChange: handleRGBChange,
    trackColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#000" : "#fff",
    thumbColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#fff" : "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 4,
    justifyContent: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    px: 0,
    py: 0,
    name: "g",
    type: "number",
    color: "inherit",
    fontSize: [2, 3],
    bg: "transparent",
    border: 0,
    width: 1,
    textAlign: "right",
    min: "0",
    max: "255",
    value: Math.floor(colorValues.rgb.g),
    onChange: handleRGBChange,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    fontSize: [1, 2],
    width: 1,
    color: "inherit",
    fontWeight: 700,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RangeSlider, {
    name: "b",
    min: "0",
    max: "255",
    value: colorValues.rgb.b,
    onChange: handleRGBChange,
    trackColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#000" : "#fff",
    thumbColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#fff" : "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 4,
    justifyContent: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    px: 0,
    py: 0,
    name: "b",
    type: "number",
    border: 0,
    fontSize: [2, 3],
    bg: "transparent",
    textAlign: "right",
    width: 1,
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
      lineNumber: 344
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: [1, 1 / 2],
    flexWrap: "wrap",
    mt: [3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    flexWrap: "wrap",
    mb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, (_React$createElement = {
    width: 1,
    fontSize: [1, 2]
  }, _defineProperty(_React$createElement, "width", 1), _defineProperty(_React$createElement, "fontWeight", 700), _defineProperty(_React$createElement, "color", "inherit"), _defineProperty(_React$createElement, "className", Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
    transition: "none"
  })), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 366
  }), _defineProperty(_React$createElement, "__self", this), _React$createElement), "Hue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RangeSlider, {
    name: "h",
    min: "0",
    max: "360",
    value: colorValues.hsl.h,
    onChange: handleHSLChange,
    trackColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#000" : "#fff",
    thumbColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#fff" : "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 4,
    justifyContent: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    px: 0,
    py: 0,
    name: "h",
    type: "number",
    bg: "transparent",
    color: "inherit",
    border: 0,
    fontSize: [2, 3],
    width: 1,
    textAlign: "right",
    min: "0",
    max: "360",
    onChange: handleHSLChange,
    value: Math.floor(colorValues.hsl.h),
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    flexWrap: "wrap",
    mb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    width: 1,
    fontSize: [1, 2],
    fontWeight: 700,
    color: "inherit",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "Saturation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RangeSlider, {
    name: "s",
    min: "0",
    max: "360",
    value: colorValues.hsl.s,
    onChange: handleHSLChange,
    trackColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#000" : "#fff",
    thumbColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#fff" : "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    px: 0,
    py: 0,
    name: "s",
    type: "number",
    width: 1,
    textAlign: "right",
    bg: "transparent",
    color: "inherit",
    border: 0,
    fontSize: [2, 3],
    min: "0",
    max: "100",
    onChange: handleHSLChange,
    value: Math.floor(colorValues.hsl.s),
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    width: 1,
    fontSize: [1, 2],
    fontWeight: 700,
    color: "inherit",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, "Lightness"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RangeSlider, {
    name: "l",
    min: "0",
    max: "100",
    value: colorValues.hsl.l,
    onChange: handleHSLChange,
    trackColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#000" : "#fff",
    thumbColor: color__WEBPACK_IMPORTED_MODULE_2___default()(currentColor).isLight() ? "#fff" : "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 1 / 4,
    justifyContent: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    px: 0,
    py: 0,
    name: "l",
    type: "number",
    width: 1,
    bg: "transparent",
    color: "inherit",
    border: 0,
    textAlign: "right",
    fontSize: [2, 3],
    min: "0",
    max: "100",
    value: Math.floor(colorValues.hsl.l),
    onChange: handleHSLChange,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      transition: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    textAlign: "center",
    mt: 3,
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
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
      lineNumber: 491
    },
    __self: this
  }, "Remove"))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ColorPicker));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Article.js */ "./elements/Article.js")["default"], __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./components/TextInput.js */ "./components/TextInput.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./components/TextButton.js */ "./components/TextButton.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.8efa0c15d937f368cb4e.hot-update.js.map