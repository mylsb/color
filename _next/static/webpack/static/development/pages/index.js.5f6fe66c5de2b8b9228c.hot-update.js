webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Colorbox.js":
/*!********************************!*\
  !*** ./components/Colorbox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Header, H4, A, Span, Flex, Label, Input, Select, ButtonPrimary) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_colorbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/colorbox */ "./utils/colorbox.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/Colorbox.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var CURVES = [{
  label: "Quad - EaseIn",
  value: "easeInQuad"
}, {
  label: "Quad - EaseOut",
  value: "easeOutQuad"
}, {
  label: "Quad - EaseInOut",
  value: "easeInOutQuad"
}, {
  label: "Quart - EaseIn",
  value: "easeInQuart"
}, {
  label: "Quart - EaseOut",
  value: "easeOutQuart"
}, {
  label: "Quart - EaseInOut",
  value: "easeInOutQuart"
}, {
  label: "Sine - EaseIn",
  value: "easeInSine"
}, {
  label: "Sine - EaseOut",
  value: "easeOutSine"
}, {
  label: "Sine - EaseInOut",
  value: "easeInOutSine"
}, {
  label: "Cubic - EaseIn",
  value: "easeInCubic"
}, {
  label: "Cubic - EaseOut",
  value: "easeOutCubic"
}, {
  label: "Cubic - EaseInOut",
  value: "easeInOutCubic"
}, {
  label: "Expo - EaseIn",
  value: "easeInExpo"
}, {
  label: "Expo - EaseOut",
  value: "easeOutExpo"
}, {
  label: "Expo - EaseInOut",
  value: "easeInOutExpo"
}, {
  label: "Quint - EaseIn",
  value: "easeInQuint"
}, {
  label: "Quint - EaseOut",
  value: "easeOutQuint"
}, {
  label: "Quint - EaseInOut",
  value: "easeInOutQuint"
}, {
  label: "Circ - EaseIn",
  value: "easeInCirc"
}, {
  label: "Circ - EaseOut",
  value: "easeOutCirc"
}, {
  label: "Circ - EaseInOut",
  value: "easeInOutCirc"
}, {
  label: "Back - EaseIn",
  value: "easeInBack"
}, {
  label: "Back - EaseOut",
  value: "easeOutBack"
}, {
  label: "Back - EaseInOut",
  value: "easeInOutBack"
}, {
  label: "Linear",
  value: "linear"
}];

var generateSpecs = function generateSpecs(_ref) {
  var steps = _ref.steps,
      hueStart = _ref.hueStart,
      hueEnd = _ref.hueEnd,
      hueCurve = _ref.hueCurve,
      satStart = _ref.satStart,
      satEnd = _ref.satEnd,
      satCurve = _ref.satCurve,
      satRate = _ref.satRate,
      lumStart = _ref.lumStart,
      lumEnd = _ref.lumEnd,
      lumCurve = _ref.lumCurve;
  return {
    specs: {
      steps: steps,
      hue_start: hueStart,
      hue_end: hueEnd,
      hue_curve: hueCurve,
      sat_start: satStart,
      sat_end: satEnd,
      sat_curve: satCurve,
      sat_rate: satRate,
      lum_start: lumStart,
      lum_end: lumEnd,
      lum_curve: lumCurve,
      modifier: 10
    }
  };
};

var Colorbox = function Colorbox(_ref2) {
  var onAddPalette = _ref2.onAddPalette,
      onReplacePalette = _ref2.onReplacePalette,
      props = _objectWithoutProperties(_ref2, ["onAddPalette", "onReplacePalette"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    steps: 11,
    hueStart: 34,
    hueEnd: 230,
    hueCurve: "easeInExpo",
    satStart: 4,
    satEnd: 90,
    satCurve: "easeOutQuad",
    satRate: 130,
    lumStart: 100,
    lumEnd: 53,
    lumCurve: "easeOutQuad"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      palette = _useState4[0],
      setPalette = _useState4[1];

  var handleInput = function handleInput(e) {
    var target = e.target;
    var name = target.name;
    var rawValue = target.value;
    var numValue = parseInt(rawValue);
    var finalValue = isNaN(numValue) ? rawValue : numValue;
    setForm(function (prev) {
      return _objectSpread({}, prev, _defineProperty({}, name, finalValue));
    });
  };

  var handleAddToPalette = function handleAddToPalette() {
    var paletteHexes = palette.map(function (p) {
      return p.hex;
    });
    onAddPalette(paletteHexes);
  };

  var handleReplacePalette = function handleReplacePalette() {
    var paletteHexes = palette.map(function (p) {
      return p.hex;
    });
    onReplacePalette(paletteHexes);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var specs = generateSpecs(form);
    var palette = Object(_utils_colorbox__WEBPACK_IMPORTED_MODULE_1__["default"])(specs);
    setPalette(palette);
  }, [form]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    mx: "auto",
    maxWidth: "64rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
    href: "https://colorbox.io",
    title: "ColorBox by Lyft Design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "ColorBox", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 1,
    fontWeight: 400,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "by Lyft Design")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 3,
    px: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    fontWeight: 700,
    mr: 2,
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Steps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "steps",
    type: "range",
    number: "1",
    value: form.steps,
    onChange: handleInput,
    width: 1,
    min: "3",
    max: "128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    fontSize: 2,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, form.steps)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    flexWrap: ["wrap", "nowrap"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    fontSize: 2,
    px: 4,
    mb: [3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    mb: 2,
    display: "block",
    fontWeight: 700,
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Hue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "hueStart",
    type: "range",
    value: form.hueStart,
    onChange: handleInput,
    number: "1",
    min: "0",
    max: "359",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    pl: 2,
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, form.hueStart)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "hueEnd",
    type: "range",
    number: "1",
    value: form.hueEnd,
    onChange: handleInput,
    min: "0",
    max: "359",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    fontSize: 2,
    pl: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, form.hueEnd)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Curve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    width: 1,
    name: "hueCurve",
    value: form.hueCurve,
    onChange: handleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, CURVES.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: c.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, c.label);
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    fontSize: 2,
    px: 4,
    mb: [3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    fontSize: 1,
    fontWeight: 700,
    display: "block",
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Saturation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "satStart",
    type: "range",
    number: "1",
    value: form.satStart,
    onChange: handleInput,
    min: "0",
    max: "100",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    textAlign: "right",
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, form.satStart)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "satEnd",
    type: "range",
    number: "1",
    value: form.satEnd,
    onChange: handleInput,
    min: "0",
    max: "100",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    fontSize: 2,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, form.satEnd)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Curve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    width: 1,
    name: "satCurve",
    value: form.hueCurve,
    onChange: handleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, CURVES.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: c.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, c.label);
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    fontSize: 2,
    px: 4,
    mb: [3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    fontSize: 1,
    fontWeight: 700,
    mb: 2,
    display: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "Luminosity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    name: "lumStart",
    type: "range",
    width: 1,
    number: "1",
    value: form.lumStart,
    onChange: handleInput,
    min: "0",
    max: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, form.lumStart)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    width: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    width: 1,
    name: "lumEnd",
    type: "range",
    number: "1",
    value: form.lumEnd,
    onChange: handleInput,
    min: "0",
    max: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    width: 48,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, form.lumEnd)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Curve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    width: 1,
    name: "lumCurve",
    value: form.lumCurve,
    onChange: handleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, CURVES.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: c.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, c.label);
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    mt: 3,
    px: [3, 5, 6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, palette.map(function (p, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
      key: i,
      height: 32,
      bg: p.hex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    textAlign: "center",
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonPrimary, {
    mt: 2,
    borderRadius: 1,
    iconSize: 12,
    fontSize: 1,
    py: 1,
    button: "plus",
    bg: "black",
    color: "white",
    type: "button",
    onClick: handleAddToPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Add to palette"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonPrimary, {
    mt: 2,
    ml: 2,
    borderRadius: 1,
    iconSize: 12,
    fontSize: 1,
    py: 1,
    button: "plus",
    bg: "black",
    color: "white",
    type: "button",
    onClick: handleReplacePalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Replace Palette")));
};

/* harmony default export */ __webpack_exports__["default"] = (Colorbox);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/Header.js */ "./elements/Header.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./elements/A.js */ "./elements/A.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Select.js */ "./elements/Select.js")["default"], __webpack_require__(/*! ./components/ButtonPrimary.js */ "./components/ButtonPrimary.js")["default"]))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, TextButton, SiteFetch, Flex, Input, Label, P, Button, Icon, Span, LoadingBars, Img, TextLink, Form, TextInput, Textarea, Palette, A, CombinationTools, Dl, Dt, Dd, PaletteModal, ColorPicker, H4, Fieldset, Legend, ColorBlindFilter, Likes, module) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb-keyval */ "./node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var palx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! palx */ "./node_modules/palx/dist/index.js");
/* harmony import */ var palx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(palx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_useHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useHistory */ "./utils/useHistory.js");
/* harmony import */ var _utils_useInterval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useInterval */ "./utils/useInterval.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_findKey__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/findKey */ "./node_modules/lodash/findKey.js");
/* harmony import */ var lodash_findKey__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_findKey__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _utils_defaultPalette__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/defaultPalette */ "./utils/defaultPalette.js");
/* harmony import */ var _utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/generateRandomPalette */ "./utils/generateRandomPalette.js");
/* harmony import */ var _utils_sortPalette__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/sortPalette */ "./utils/sortPalette.js");
/* harmony import */ var _utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/getAllCombos */ "./utils/getAllCombos.js");
/* harmony import */ var _utils_getContrastScore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/getContrastScore */ "./utils/getContrastScore.js");
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Preview */ "./components/Preview.js");
/* harmony import */ var _components_PlayerControls__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/PlayerControls */ "./components/PlayerControls.js");
/* harmony import */ var _components_Colorbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/Colorbox */ "./components/Colorbox.js");
/* harmony import */ var _utils_isHex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../utils/isHex */ "./utils/isHex.js");






var _jsxFileName = "/Users/mrmrs/w/color/pages/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

























var resetPinned = {
  color: false,
  bg: false,
  borderColor: false,
  parentBg: false
};
var debouncedUpdateCombos = lodash_debounce__WEBPACK_IMPORTED_MODULE_15___default()(function (updatedPalette, contrastRatio, setAvailableCombos) {
  var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(updatedPalette, contrastRatio);
  setAvailableCombos(availableCombos);
}, 500);

var Index = function Index() {
  var _React$createElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_utils_sortPalette__WEBPACK_IMPORTED_MODULE_19__["default"])(_utils_defaultPalette__WEBPACK_IMPORTED_MODULE_17__["default"])),
      _useState2 = _slicedToArray(_useState, 2),
      palette = _useState2[0],
      setPalette = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(_utils_defaultPalette__WEBPACK_IMPORTED_MODULE_17__["default"], 4.5);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      availableCombos = _useState4[0],
      setAvailableCombos = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      paletteModalIsOpen = _useState6[0],
      togglePaletteModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      likes = _useState8[0],
      updateLikes = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(4.5),
      _useState10 = _slicedToArray(_useState9, 2),
      contrastRatio = _useState10[0],
      setContrastRatio = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("none"),
      _useState12 = _slicedToArray(_useState11, 2),
      colorFilter = _useState12[0],
      setColorFilter = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState14 = _slicedToArray(_useState13, 2),
      paletteImage = _useState14[0],
      setPaletteImage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState16 = _slicedToArray(_useState15, 2),
      imageLoading = _useState16[0],
      setImageLoading = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState18 = _slicedToArray(_useState17, 2),
      imageName = _useState18[0],
      setImageName = _useState18[1];

  var _useHistory = Object(_utils_useHistory__WEBPACK_IMPORTED_MODULE_6__["default"])({}),
      _useHistory2 = _slicedToArray(_useHistory, 2),
      currentState = _useHistory2[0],
      _useHistory2$ = _useHistory2[1],
      set = _useHistory2$.set,
      undo = _useHistory2$.undo,
      redo = _useHistory2$.redo,
      canRedo = _useHistory2$.canRedo,
      canUndo = _useHistory2$.canUndo;

  var currentCombination = currentState.present;

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(resetPinned),
      _useState20 = _slicedToArray(_useState19, 2),
      pinnedColors = _useState20[0],
      setPinnedColors = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState22 = _slicedToArray(_useState21, 2),
      borderWidth = _useState22[0],
      setBorderWidth = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(64),
      _useState24 = _slicedToArray(_useState23, 2),
      boxPadding = _useState24[0],
      setBoxPadding = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("#07c"),
      _useState26 = _slicedToArray(_useState25, 2),
      palxColor = _useState26[0],
      setPalxColor = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    color: null,
    index: null
  }),
      _useState28 = _slicedToArray(_useState27, 2),
      currentPickerColor = _useState28[0],
      setPickerColor = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState30 = _slicedToArray(_useState29, 2),
      currentComboProp = _useState30[0],
      setCurrentComboProp = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("url"),
      _useState32 = _slicedToArray(_useState31, 2),
      activeTab = _useState32[0],
      setActiveTab = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(JSON.stringify(palette)),
      _useState34 = _slicedToArray(_useState33, 2),
      importValue = _useState34[0],
      setImportValue = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState36 = _slicedToArray(_useState35, 2),
      importError = _useState36[0],
      setImportError = _useState36[1];

  var _useInterval = Object(_utils_useInterval__WEBPACK_IMPORTED_MODULE_7__["default"])({
    duration: 3000,
    startImmediate: true,
    callback: function callback() {
      var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(palette, pinnedColors, currentCombination, availableCombos);
      set(newCombo);
    }
  }),
      start = _useInterval.start,
      stop = _useInterval.stop,
      isRunning = _useInterval.isRunning;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["get"])("likes").then(function (likes) {
      likes && updateLikes(likes);
    });
    var starterCombination = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(palette, pinnedColors, currentCombination, availableCombos);
    set(starterCombination);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("keydown", handleKeyPress);
    return function () {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  var handleAutoCycling = function handleAutoCycling() {
    isRunning ? stop() : start();
  };

  var handleLike =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var currentLikes, deDuped;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return likes;

            case 2:
              currentLikes = _context.sent;
              deDuped = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_10___default()(_toConsumableArray(currentLikes).concat([currentCombination]), lodash_isEqual__WEBPACK_IMPORTED_MODULE_11___default.a);
              updateLikes(deDuped);
              _context.next = 7;
              return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["set"])("likes", deDuped);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function handleLike() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleRemoveLike =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(index) {
      var newLikes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newLikes = likes.filter(function (_, i) {
                return index !== i;
              });
              updateLikes(newLikes);
              _context2.next = 4;
              return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["set"])("likes", newLikes);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function handleRemoveLike(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleClearLikes =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              updateLikes([]);
              _context3.next = 3;
              return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_3__["set"])("likes", []);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function handleClearLikes() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleNext = function handleNext() {
    if (canRedo) {
      return redo();
    }

    isRunning && stop();
    var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(palette, pinnedColors, currentCombination, availableCombos);
    set(newCombo);
  };

  var handlePrevious = function handlePrevious() {
    if (canUndo) {
      stop();
      undo();
    }
  };

  var handleViewLike = function handleViewLike(index) {
    isRunning && stop();
    set(likes[index]);
  };

  var handleRemoveColor = function handleRemoveColor(color) {
    var alteredPalette = palette.filter(function (c) {
      return c !== color;
    });
    setPalette(alteredPalette);
    setPickerColor({
      color: null,
      index: null
    });
  };

  var handleAddColor = function handleAddColor() {
    var newPalette = _toConsumableArray(palette).concat(["#000000"]);

    setPalette(newPalette);
    setPickerColor({
      color: "#000000",
      index: newPalette.length - 1
    });
  };

  var handleKeyPress = function handleKeyPress(_ref4) {
    var key = _ref4.key;

    switch (key) {
      case "ArrowUp":
        handleLike();
        break;

      case "ArrowRight":
        handleNext();
        break;

      case "ArrowLeft":
        handlePrevious();
        break;
    }
  };

  var handleColorBlindFilter = function handleColorBlindFilter(e) {
    return setColorFilter(e.target.value);
  };

  var handleSiteFetch =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(palette) {
      var availableCombos, newCombo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setPalette(palette);
              setPinnedColors(resetPinned);
              availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, contrastRatio);
              setAvailableCombos(availableCombos);
              newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(palette, resetPinned, null, availableCombos);
              set(newCombo);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function handleSiteFetch(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleClearPalette = function handleClearPalette() {
    var clearedPalette = ["#000000", "#FFFFFF", "#2c7cb0", "#757575"];
    setPalette(clearedPalette);
    var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(clearedPalette, contrastRatio);
    setAvailableCombos(availableCombos);
    var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(clearedPalette, resetPinned, null, availableCombos);
    set(newCombo);
    setImageName(new Date());
    setPaletteImage("");
  };

  var handlePinColor = function handlePinColor(key) {
    return function () {
      setPinnedColors(function (prevState) {
        return _objectSpread({}, prevState, _defineProperty({}, key, !prevState[key]));
      });
    };
  };

  var handleImageUpload =
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(e) {
      var res, palette, availableCombos, newCombo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setImageLoading(true);
              setPaletteImage({
                url: URL.createObjectURL(e.target.files[0]),
                name: null,
                username: null
              });
              _context5.next = 4;
              return fetch("https://image-palette.now.sh", {
                method: "POST",
                body: e.target.files[0]
              });

            case 4:
              res = _context5.sent;
              _context5.next = 7;
              return res.json();

            case 7:
              palette = _context5.sent;
              setImageLoading(false);
              setPalette(palette);
              setPinnedColors(resetPinned);
              availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, contrastRatio);
              setAvailableCombos(availableCombos);
              newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(palette, resetPinned, null, availableCombos);
              set(newCombo);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function handleImageUpload(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleBorderWidthChange = function handleBorderWidthChange(e) {
    return setBorderWidth(parseInt(e.target.value));
  };

  var handleBoxPaddingChange = function handleBoxPaddingChange(e) {
    return setBoxPadding(parseInt(e.target.value));
  };

  var handleFetchFromUnsplash =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      var res, _ref8, colors, url, name, username, availableCombos, newCombo;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setImageLoading(true);
              _context6.next = 3;
              return fetch("https://unsplash-palette.now.sh");

            case 3:
              res = _context6.sent;
              _context6.next = 6;
              return res.json();

            case 6:
              _ref8 = _context6.sent;
              colors = _ref8.colors;
              url = _ref8.url;
              name = _ref8.name;
              username = _ref8.username;
              setImageLoading(false);
              setPalette(colors);
              setPinnedColors(resetPinned);
              availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(colors, contrastRatio);
              setAvailableCombos(availableCombos);
              newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(palette, resetPinned, null, availableCombos);
              set(newCombo);
              setPaletteImage({
                url: url,
                name: name,
                username: username
              });

            case 19:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function handleFetchFromUnsplash() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handlePalxColor = function handlePalxColor(e) {
    setPalxColor(e.target.value);
  };

  var handleUsePalx = function handleUsePalx() {
    var newPaletteObj = palx__WEBPACK_IMPORTED_MODULE_4___default()(palxColor);
    var newPalette = lodash_reduce__WEBPACK_IMPORTED_MODULE_13___default()(newPaletteObj, function (acc, curr) {
      return lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(curr) ? _toConsumableArray(acc).concat(_toConsumableArray(curr)) : acc;
    }, []);
    setPalette(newPalette);
    setPinnedColors(resetPinned);
    var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(newPalette, contrastRatio);
    setAvailableCombos(availableCombos);
    var newCombo = Object(_utils_generateRandomPalette__WEBPACK_IMPORTED_MODULE_18__["default"])(newPalette, resetPinned, null, availableCombos);
    set(newCombo);
  };

  var handlePaletteColorClick = function handlePaletteColorClick(color, index) {
    var comboColorProp = lodash_findKey__WEBPACK_IMPORTED_MODULE_14___default()(currentCombination, function (c) {
      return c === color;
    });

    if (comboColorProp) {
      stop();
      setCurrentComboProp(comboColorProp);
    }

    setPickerColor({
      color: color,
      index: index
    });
  };

  var handleSetEditColor = function handleSetEditColor(color) {
    isRunning && stop();
    setPickerColor({
      color: color,
      index: currentPickerColor.index
    });

    var updatedPalette = _toConsumableArray(palette);

    updatedPalette[currentPickerColor.index] = color;
    setPalette(updatedPalette);

    if (currentComboProp) {
      set(_objectSpread({}, currentCombination, _defineProperty({}, currentComboProp, color)));
    }

    debouncedUpdateCombos(updatedPalette, contrastRatio, setAvailableCombos);
  };

  var handleContrastRatioChange = function handleContrastRatioChange(e) {
    var newContrastRatio = lodash_toNumber__WEBPACK_IMPORTED_MODULE_12___default()(e.target.value);
    setContrastRatio(newContrastRatio);
    var availableCombos = Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(palette, newContrastRatio);
    setAvailableCombos(availableCombos);
  };

  var handleActiveTab = function handleActiveTab(value) {
    return function () {
      return setActiveTab(value);
    };
  };

  var handleColorClick = function handleColorClick(color, key) {
    isRunning && stop();
    setCurrentComboProp(key);
    var paletteIndex = palette.findIndex(function (p) {
      return p === color;
    });
    setPickerColor({
      color: color,
      index: paletteIndex
    });
  };

  var colorParentBgContrastValue = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_21__["default"])(currentCombination.color, currentCombination.parentBg);
  var controlColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color;

  var handleColorBoxAdd = function handleColorBoxAdd(newPalette) {
    setPalette(function (prev) {
      return _toConsumableArray(prev).concat(_toConsumableArray(newPalette));
    });
  };

  var handleColorBoxReplace = function handleColorBoxReplace(newPalette) {
    setPalette(newPalette);
  };

  var handlePaletteImport = function handlePaletteImport() {
    try {
      var newPalette = JSON.parse(importValue);
      newPalette.map(function (c) {
        if (!Object(_utils_isHex__WEBPACK_IMPORTED_MODULE_25__["default"])(c)) {
          throw Error("Invalid Hex code provided");
        }
      });
      setPalette(newPalette);
    } catch (error) {
      setImportError(true);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    bg: "white",
    display: "flex",
    flexWrap: "wrap",
    width: 1,
    position: "relative",
    style: {
      overflow: "hidden",
      filter: colorFilter === "none" ? "none" : "url(/static/filters.svg#".concat(colorFilter, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    pt: 3,
    px: 3,
    mb: 3,
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    onClick: handleActiveTab("url"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "url" ? "blue.4" : "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "URL"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    onClick: handleActiveTab("palx"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "palx" ? "blue.4" : "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, "Palx"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    onClick: handleActiveTab("colorbox"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "colorbox" ? "blue.4" : "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "ColorBox"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    onClick: handleActiveTab("image"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "image" ? "blue.4" : "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Image"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    onClick: handleActiveTab("text"),
    bg: "transparent",
    mr: 3,
    fontWeight: 700,
    fontSize: 2,
    color: activeTab === "text" ? "blue.4" : "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, "Text")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    display: ["none", "block"],
    position: "absolute",
    top: 0,
    right: 0,
    fontWeight: 700,
    fontSize: 2,
    p: 3,
    onClick: function onClick() {
      return togglePaletteModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "Export palette"), activeTab === "url" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    px: 3,
    mx: "auto",
    maxWidth: "32rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SiteFetch, {
    onSubmit: handleSiteFetch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  })), activeTab === "image" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    maxWidth: "32rem",
    mx: "auto",
    mt: 3,
    mb: 2,
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    id: "imageUpload",
    border: "1px solid rgba(0,0,0,.1)",
    py: 3,
    width: 1,
    pl: 3,
    key: imageName,
    type: "file",
    accept: ".png, .jpg, .jpeg",
    onChange: handleImageUpload,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      display: "none"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    display: "block",
    color: "gray.0",
    bg: "gray.8",
    fontSize: 2,
    borderRadius: 2,
    py: 2,
    px: 3,
    width: "auto",
    fontWeight: 700,
    textAlign: "center",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      whiteSpace: "nowrap",
      cursor: "pointer"
    }),
    htmlFor: "imageUpload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, "Upload image")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, "or")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    ml: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    color: "white",
    bg: "gray.3",
    fontSize: 2,
    borderRadius: 2,
    py: 2,
    px: 3,
    ml: "auto",
    display: "flex",
    width: "auto",
    border: "none",
    fontWeight: 700,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }),
    onClick: handleFetchFromUnsplash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {
    viewBox: "0 0 123 123",
    size: 16,
    type: "unsplash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    pl: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, "Unsplash photo")))), imageLoading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoadingBars, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    ml: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, "Fetching Palette")), paletteImage && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    ml: "auto",
    onClick: handleClearPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, "Clear Image")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    p: 2,
    border: "1px solid rgba(0,0,0,.1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Img, {
    src: paletteImage.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }), paletteImage.name && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    color: "gray.5",
    fontSize: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, "Photo by", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "https://unsplash.com/@".concat(paletteImage.username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, paletteImage.name), " ", "on", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "https://unsplash.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }, "Unsplash"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    fontWeight: 700,
    mt: 3,
    mb: 2,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, activeTab === "palx" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, {
    maxWidth: "32rem",
    mx: "auto",
    mb: 4,
    px: 3,
    borderRadius: 2,
    style: {
      overflow: "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    overflow: "hidden",
    borderRadius: 2,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      overflow: "hidden"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextInput, {
    width: 48,
    fontSize: 2,
    py: 3,
    readOnly: true,
    border: 0,
    bg: palxColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextInput, (_React$createElement = {
    type: "text",
    value: palxColor,
    onChange: handlePalxColor,
    fontSize: 2,
    fontWeight: 700,
    py: 3,
    px: 3,
    width: [3 / 4]
  }, _defineProperty(_React$createElement, "type", "url"), _defineProperty(_React$createElement, "border", "0"), _defineProperty(_React$createElement, "bg", "gray.8"), _defineProperty(_React$createElement, "borderRadius", 0), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 589
  }), _defineProperty(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    py: 3,
    width: 1 / 4,
    bg: "gray.3",
    fontSize: 2,
    color: "white",
    fontWeight: 700,
    border: "none",
    style: {
      cursor: "pointer",
      minWidth: 128
    },
    onClick: handleUsePalx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, "Generate"), " ")), activeTab === "colorbox" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Colorbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onAddPalette: handleColorBoxAdd,
    onReplacePalette: handleColorBoxReplace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }), activeTab === "text" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    px: 3,
    mx: "auto",
    maxWidth: "32rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }, importError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    color: "marketing.red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }, "There is something wrong with the JSON provided"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Textarea, {
    border: "1px solid",
    borderColor: "black",
    width: 1,
    value: importValue,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("resize:vertical;min-height:100px;"),
    onChange: function onChange(e) {
      return setImportValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: handlePaletteImport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }, "Import Palette")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    mt: 3,
    px: [3, 5, 6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Palette, {
    palette: palette,
    pickerColor: currentPickerColor,
    activeColors: Object.values(currentCombination),
    onClick: handlePaletteColorClick,
    onAddColor: handleAddColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    textAlign: "center",
    my: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    fontSize: 1,
    bg: "transparent",
    mx: 2,
    onClick: handleClearPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, "Clear palette"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(A, {
    href: "/combinations",
    mx: 2,
    fontSize: 1,
    color: "gray.0",
    pageData: {
      combinations: availableCombos
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }, "View all accessible combinations")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    maxWidth: "48rem",
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CombinationTools, {
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPrevious: handlePrevious,
    onNext: handleNext,
    onPinColor: handlePinColor,
    onLike: handleLike,
    onAutoCycling: handleAutoCycling,
    isRunning: isRunning,
    onColorClick: handleColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    display: "none",
    dataName: "stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dl, {
    color: controlColor,
    display: "flex",
    maxWidth: "24rem",
    width: 1,
    mb: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dt, {
    fontSize: 2,
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }, "Accessible Combinations"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dd, {
    fontSize: 2,
    width: 1 / 4,
    fontWeight: 800,
    ml: 0,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  }, availableCombos.length)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dl, {
    color: controlColor,
    display: "flex",
    maxWidth: "24rem",
    width: 1,
    mb: 0,
    pb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dt, {
    fontSize: 2,
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, "Combos with Parent Bg"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dd, {
    fontSize: 2,
    width: 1 / 4,
    fontWeight: 800,
    ml: 0,
    textAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: this
  }, (availableCombos.length * palette.length).toLocaleString()))), paletteModalIsOpen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PaletteModal, {
    togglePaletteModal: togglePaletteModal,
    palette: palette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: this
  }))), currentPickerColor.color && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onOutsideClick: function onOutsideClick() {
      setPickerColor({
        color: null,
        index: null
      });
      setCurrentComboProp(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ColorPicker, {
    currentColor: currentPickerColor.color,
    onChange: handleSetEditColor,
    onRemoveColor: handleRemoveColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: this
  })))), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(currentCombination) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1],
    bg: currentCombination.parentBg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    borderTop: "1px solid",
    borderColor: controlColor,
    style: {
      opacity: 0.2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PlayerControls__WEBPACK_IMPORTED_MODULE_23__["default"], {
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPrevious: handlePrevious,
    onNext: handleNext,
    onPinColor: handlePinColor,
    onLike: handleLike,
    onAutoCycling: handleAutoCycling,
    isRunning: isRunning,
    onColorClick: handleColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    maxWidth: "48rem",
    mx: "auto",
    pb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Preview__WEBPACK_IMPORTED_MODULE_22__["default"], {
    borderWidth: borderWidth,
    boxPadding: boxPadding,
    currentCombination: currentCombination,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    bg: "white",
    color: "gray.0",
    pb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    mb: 4,
    borderTop: "1px solid",
    borderColor: controlColor,
    style: {
      opacity: 0.175
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    px: [3, 4],
    maxWidth: "48rem",
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H4, {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: this
  }, "Settings"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, {
    pt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Fieldset, {
    border: "0",
    p: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Legend, {
    fontWeight: 700,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797
    },
    __self: this
  }, "Contrast Ratio"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    mx: -3,
    py: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    type: "radio",
    name: "contrastRatio",
    value: 3,
    onChange: handleContrastRatioChange,
    checked: contrastRatio === 3,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: this
  }, "3 "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
    },
    __self: this
  }, "AA large"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    type: "radio",
    name: "contrastRatio",
    value: 4.5,
    onChange: handleContrastRatioChange,
    checked: contrastRatio === 4.5,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825
    },
    __self: this
  }, "4.5 "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826
    },
    __self: this
  }, "AA"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    type: "radio",
    name: "contrastRatio",
    value: 7,
    onChange: handleContrastRatioChange,
    checked: contrastRatio === 7,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839
    },
    __self: this
  }, "7:1 "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840
    },
    __self: this
  }, "AAA")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ColorBlindFilter, {
    onChange: handleColorBlindFilter,
    currentValue: colorFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    fontWeight: 700,
    fontSize: 2,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852
    },
    __self: this
  }, "Border width"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    value: borderWidth,
    onChange: handleBorderWidthChange,
    type: "number",
    py: 2,
    px: 2,
    fontSize: 2,
    fontWeight: 600,
    borderRadius: 2,
    border: "1px solid " + _theme__WEBPACK_IMPORTED_MODULE_16__["default"].colors.gray[8],
    min: 0,
    max: 32,
    step: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    fontWeight: 700,
    fontSize: 2,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871
    },
    __self: this
  }, "Box Padding"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    value: boxPadding,
    onChange: handleBoxPaddingChange,
    type: "number",
    py: 2,
    px: 2,
    fontSize: 2,
    fontWeight: 600,
    borderRadius: 2,
    border: "1px solid " + _theme__WEBPACK_IMPORTED_MODULE_16__["default"].colors.gray[8],
    min: 0,
    max: 32,
    step: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    py: 4,
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Likes, {
    likes: likes,
    onSelectLike: handleViewLike,
    onRemoveLike: handleRemoveLike,
    onClearLikes: handleClearLikes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    bg: "white",
    display: "flex",
    py: 3,
    px: 3,
    borderTop: "1px solid rgba(0,0,0,.1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(A, {
    display: "block",
    href: "https://cloudflare.design",
    fontWeight: 700,
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907
    },
    __self: this
  }, "Cloudflare Design"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(A, {
    href: "https://github.com/cloudflare-design",
    ml: "auto",
    fontSize: 2,
    color: "blue.4",
    display: "block",
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916
    },
    __self: this
  }, "GitHub"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/TextButton.js */ "./components/TextButton.js")["default"], __webpack_require__(/*! ./components/SiteFetch.js */ "./components/SiteFetch.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/Button.js */ "./elements/Button.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/LoadingBars.js */ "./components/LoadingBars.js")["default"], __webpack_require__(/*! ./elements/Img.js */ "./elements/Img.js")["default"], __webpack_require__(/*! ./components/TextLink.js */ "./components/TextLink.js")["default"], __webpack_require__(/*! ./elements/Form.js */ "./elements/Form.js")["default"], __webpack_require__(/*! ./components/TextInput.js */ "./components/TextInput.js")["default"], __webpack_require__(/*! ./elements/Textarea.js */ "./elements/Textarea.js")["default"], __webpack_require__(/*! ./components/Palette.js */ "./components/Palette.js")["default"], __webpack_require__(/*! ./elements/A.js */ "./elements/A.js")["default"], __webpack_require__(/*! ./components/CombinationTools.js */ "./components/CombinationTools.js")["default"], __webpack_require__(/*! ./elements/Dl.js */ "./elements/Dl.js")["default"], __webpack_require__(/*! ./elements/Dt.js */ "./elements/Dt.js")["default"], __webpack_require__(/*! ./elements/Dd.js */ "./elements/Dd.js")["default"], __webpack_require__(/*! ./components/PaletteModal.js */ "./components/PaletteModal.js")["default"], __webpack_require__(/*! ./components/ColorPicker.js */ "./components/ColorPicker.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./elements/Fieldset.js */ "./elements/Fieldset.js")["default"], __webpack_require__(/*! ./elements/Legend.js */ "./elements/Legend.js")["default"], __webpack_require__(/*! ./components/ColorBlindFilter.js */ "./components/ColorBlindFilter.js")["default"], __webpack_require__(/*! ./components/Likes.js */ "./components/Likes.js")["default"], __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5f6fe66c5de2b8b9228c.hot-update.js.map