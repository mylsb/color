webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Section, Header, H2, P, H3, Ul, Li, Input, Flex, Code, ColorSwatch, H4, Span, TextLink, module) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HexVis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HexVis */ "./components/HexVis.js");
/* harmony import */ var _components_ColorNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ColorNames */ "./components/ColorNames.js");
/* harmony import */ var _components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MiniColorSwatch */ "./components/MiniColorSwatch.js");
























var _jsxFileName = "/Users/mrmrs/w/color/pages/about.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var getColorName =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(hex) {
    var hexMinusHash, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hexMinusHash = hex.replace("#", "");
            _context.next = 3;
            return fetch("https://api.color.pizza/v1/".concat(hexMinusHash));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", json.colors[0].name);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getColorName(_x) {
    return _ref.apply(this, arguments);
  };
}();

var About = function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("#f16975"),
      _useState2 = _slicedToArray(_useState, 2),
      theColor = _useState2[0],
      setTheColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("#f16975"),
      _useState4 = _slicedToArray(_useState3, 2),
      colorInput = _useState4[0],
      setColorInput = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      mouseX = _useState6[0],
      setMouseX = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      colorName = _useState8[0],
      setColorName = _useState8[1];

  var updateColorName =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var colorName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getColorName(theColor);

            case 2:
              colorName = _context2.sent;
              setColorName(colorName);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function updateColorName() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    updateColorName();
  }, [theColor]);

  var handleTheColor = function handleTheColor(e) {
    var colorValue = e.target.value;
    setColorInput(colorValue);

    try {
      color__WEBPACK_IMPORTED_MODULE_3___default()(colorValue);
      setTheColor(color__WEBPACK_IMPORTED_MODULE_3___default()(colorValue).hex());
    } catch (e) {}
  };

  var handleMouseMove = function handleMouseMove(e) {
    setMouseX(e.pageX / e.target.clientWidth);
  };

  var theColorLight = color__WEBPACK_IMPORTED_MODULE_3___default()(theColor).lighten(0.3).hex();
  var theColorRGB = color__WEBPACK_IMPORTED_MODULE_3___default()(theColor).rgb().string();
  var theColorHSL = color__WEBPACK_IMPORTED_MODULE_3___default()(theColor).hsl().round().string();
  var theColorWACAGWhite = color__WEBPACK_IMPORTED_MODULE_3___default()(theColor).contrast(color__WEBPACK_IMPORTED_MODULE_3___default()("white"));
  var theColorWACAGBlack = color__WEBPACK_IMPORTED_MODULE_3___default()(theColor).contrast(color__WEBPACK_IMPORTED_MODULE_3___default()("black"));
  var theColorAccessibleWhite = theColorWACAGWhite > 4.49 ? "Accessible" : "Inaccessible";
  var theColorAccessibleBlack = theColorWACAGBlack > 4.49 ? "Accessible" : "Inaccessible";
  var theColorScaleTint = chroma_js__WEBPACK_IMPORTED_MODULE_4___default.a.scale([theColor, "#ffffff"]).mode("hsl").colors(8);
  var theColorScaleShade = chroma_js__WEBPACK_IMPORTED_MODULE_4___default.a.scale([theColor, "#000000"]).mode("hsl").colors(8);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Header, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H2, {
    mt: 0,
    fontSize: [5, 6, 9],
    fontWeight: 700,
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Thinking about color"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: [4, 5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "A documentation journey with the Product Design & Engineering teams at Cloudflare"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "The Question"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "What are all the possible things someone might want or need to know about a color?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Ul, {
    display: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "String Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Hue Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Saturation"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Alpha level"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Values", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Ul, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "LAB"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "RGB(A)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "HSL(A)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "HSV"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "uiColor"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "What will this look like?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "What will this look like as a button?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "What will this look like as a border?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "What will this look like as a background?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "What will this look like as text?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "What colors will look good with this that are also accessible?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "How should I use this color"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Is this color accessible with white?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Is this color accessible with black?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Where do we use this color?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "What's the next darkest?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "What's the next lightest?")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "The input"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "This is a hex code"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, {
    fontSize: [6, 7, 8],
    onChange: handleTheColor,
    value: colorInput,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("background-color:transparent;border:none;appearance:none;outline:none;"),
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "What is a hex code?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "In mathematics and computing, hexadecimal (also base 16, or hex) is a positional numeral system with a radix, or base, of 16. It uses sixteen distinct symbols, most often the symbols 0\u20139 to represent values zero to nine, and A,\u2009B,\u2009C,\u2009D,\u2009E,\u2009F (or alternatively a, b, c, d, e, f) to represent values ten to fifteen."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Hexadecimal numerals are widely used by computer system designers and programmers. As each hexadecimal digit represents four binary digits (bits), it allows a more human-friendly representation of binary-coded values. One hexadecimal digit represents a nibble (4 bits), which is half of an octet or byte (8 bits). For example, a single byte can have values ranging from 00000000 to 11111111 in binary form, but this may be more conveniently represented as 00 to FF in hexadecimal."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Wait what? What is a hex code? How does it relate to color?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "A color is specified according to the intensity of its red, green and blue components. The first two characters are the red channel, the second two characters are green , and the last two characters are blue."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Hex code math"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Translating a hex code into rgb"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_HexVis__WEBPACK_IMPORTED_MODULE_5__["default"], {
    hexCode: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "What does this color look like as text?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "This is one way to visualize a color"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [7, 8],
    mb: 2,
    mt: 2,
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, theColor))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    bg: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "This is another way"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [7, 8],
    mb: 2,
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, theColor))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "We probably want a way to visualize background colors that doesn't require the full screen. So we can visualize it as a swatch. Like when you go to pick out paint at the store."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColor,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "We can visualize the value of the color as text and as a background."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColor,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 0,
    fontWeight: 700,
    fontSize: 4,
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, theColor))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    onMouseMove: handleMouseMove,
    bg: "hsl(0, 0%, ".concat(mouseX * 100, "%)"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    color: "hsl(0, 0%, ".concat((1 - mouseX) * 100, "%)"),
    mb: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "\"...A color is almost never seen as it really is...\" - Josef Albers"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    color: "hsl(0, 0%, ".concat((1 - mouseX) * 100, "%)"),
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, "We can visualize the value of the color as text and as a background."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColor,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 0,
    fontWeight: 700,
    fontSize: 4,
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, theColor))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "One problem with displaying the color value with the color itself, is that sometimes the contrast is too low, impeding readability."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColorLight,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 0,
    fontWeight: 700,
    fontSize: 4,
    color: theColorLight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, theColorLight))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "As one potential solution, we can always display the color value and the text example separately."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColor,
    mr: 2,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("line-height:1;"),
    color: theColor,
    m: 0,
    fontSize: 9,
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, "Aa")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 1,
    mb: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    fontSize: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, theColor)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, "Next, we might want to know what a color will look like if used as a border."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    border: "1px solid",
    borderColor: theColor,
    px: 2,
    py: 3,
    borderRadius: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColor,
    mr: 2,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("line-height:1;"),
    color: theColor,
    m: 0,
    fontSize: 9,
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, "Aa")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 1,
    mb: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    fontSize: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, theColor)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "Naturally, we need a name for this color so that we can discuss it with fellow humans."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    alignItems: "stretch",
    mb: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    width: 3 / 4,
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, "If you've ever spent time with a group of people trying to name a color you know that it's a task to be avoided if possible. With this in mind, we find ourselves in luck because there are entire services that will name a color for us."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ColorNames__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    border: "1px solid",
    borderColor: theColor,
    px: 2,
    py: 3,
    borderRadius: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColor,
    mr: 2,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("line-height:1;"),
    color: theColor,
    m: 0,
    fontSize: 9,
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, "Aa")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 2,
    mb: 0,
    fontWeight: 700,
    fontSize: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, colorName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 0,
    mb: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    fontSize: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, theColor)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: this
  }, "Depending on the context, a hex code might not be what you want to use."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: this
  }, "If we leave it up to humans, they might use a color picker on an image (or maybe a screenshot of an image!) which opens us up to potential subtle shifts in value, leading to unintended visual inconsistencies. Luckily we have javascript, so we can compute equivalent values from a central source of truth. This allows anyone to consume the proper color value, regardless of the medium and context they are designing for."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    display: "inline-flex",
    border: "1px solid",
    borderColor: theColor,
    p: 3,
    borderRadius: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 160,
    bg: theColor,
    mr: 2,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:60px;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("line-height:1;"),
    color: theColor,
    m: 0,
    fontSize: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, "Aa")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 2,
    mb: 2,
    fontWeight: 700,
    fontSize: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }, colorName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    pb: 1,
    display: "block",
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, theColor), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    pb: 1,
    display: "block",
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }, theColorRGB), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    display: "block",
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, theColorHSL))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [5, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: this
  }, "Accessibility is important."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: [4, 6],
    fontWeight: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }, "We can automate checking if the color is acessible with both black and white and simulating how a color will be percieved by people that experience various types of color blindness."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ColorSwatch, {
    width: [1, 1 / 4, 1],
    mb: 2,
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    flexWrap: "wrap",
    px: 1,
    width: [1, 3 / 4, 1],
    mt: [2, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 1,
    my: 0,
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#achromatopsia);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Achromatopsia",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#protanopia);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Protanopia",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#protanomaly);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Protanomaly",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#deuteranopia);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Deuteranopia",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#deuteranomaly);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Deuteranomaly",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#tritanopia);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Tritanopia",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#tritanomaly);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Tritanomaly",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1 / 2, 1 / 4],
    px: 1,
    pb: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("filter:url(/static/filters.svg#achromatomaly);"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MiniColorSwatch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: "Achromatomaly",
    color: theColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 2,
    mb: 0,
    fontWeight: 700,
    fontSize: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760
    },
    __self: this
  }, colorName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    lineHeight: 1.5,
    pr: 4,
    style: {
      whiteSpace: 'nowrap'
    },
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }, theColor), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    lineHeight: 1.5,
    pr: 4,
    style: {
      whiteSpace: 'nowrap'
    },
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: this
  }, theColorRGB), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    lineHeight: 1.5,
    pr: 4,
    style: {
      whiteSpace: 'nowrap'
    },
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765
    },
    __self: this
  }, theColorHSL), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H4, {
    mb: 2,
    mt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: this
  }, "Contrast ratio"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    mt: 0,
    mb: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    fontSize: 3,
    pr: 2,
    bg: theColor,
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
    },
    __self: this
  }, theColorWACAGWhite.toFixed(2)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    mt: 0,
    mb: 3,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772
    },
    __self: this
  }, theColorAccessibleWhite)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    my: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Code, {
    fontSize: 3,
    pr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }, "With black: ", theColorWACAGBlack.toFixed(2)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    my: 0,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781
    },
    __self: this
  }, theColorAccessibleBlack)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800
    },
    __self: this
  }, "So far, we have are visualizing 16 data points from 1 piece of input."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    mx: -3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 1 / 2,
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [5, 6, 7],
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819
    },
    __self: this
  }, "Adding white to a color creates a tint"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, theColorScaleTint.map(function (color) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
      px: 3,
      py: 3,
      bg: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 825
      },
      __self: this
    }, color);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    mt: 3,
    display: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }, theColorScaleTint.map(function (color) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
      mr: 2,
      width: "30px",
      className:
      /*#__PURE__*/
      Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:30px;"),
      borderRadius: "50%",
      bg: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    mt: 3,
    display: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844
    },
    __self: this
  }, theColorScaleTint.map(function (color) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
      mr: 2,
      width: "30px",
      className:
      /*#__PURE__*/
      Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("height:10px;"),
      borderRadius: "20px",
      bg: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: 1 / 2,
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [5, 6, 7],
    mb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859
    },
    __self: this
  }, "Adding black to a color creates a shade"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863
    },
    __self: this
  }, theColorScaleShade.map(function (color) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
      px: 3,
      py: 3,
      bg: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 865
      },
      __self: this
    }, color);
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Section, {
    height: "80vh",
    color: "gray.0",
    px: 5,
    py: 6,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "gray.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H3, {
    fontSize: [6, 7, 8],
    mb: 2,
    mt: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885
    },
    __self: this
  }, "Resources"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889
    },
    __self: this
  }, "Excellent interactive sites and articles if you want to spend more time exploring the vast world of Color Theory."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontWeight: 700,
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894
    },
    __self: this
  }, "Read"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "https://www.amazon.com/Interaction-Color-Anniversary-Josef-Albers/dp/0300179359/ref=sr_1_1?ie=UTF8&qid=1512473341&sr=8-1&keywords=interaction+of+color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898
    },
    __self: this
  }, "Interaction of Color (Book)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "https://en.wikipedia.org/wiki/X11_color_names",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903
    },
    __self: this
  }, "History of x11 color names")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "http://hextodecimal.com/index.php?hex=f1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908
    },
    __self: this
  }, "Hex to Decimal"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "http://printingcode.runemadsen.com/lecture-color/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912
    },
    __self: this
  }, "Computational Color by Rune Madsen")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916
    },
    __self: this
  }, "Interact"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "http://color.method.ac/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918
    },
    __self: this
  }, "Color by Method of Action")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "http://yupnet.org/interactionofcolor/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923
    },
    __self: this
  }, "Interaction of Color (iPad App)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    fontWeight: 700,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926
    },
    __self: this
  }, "Watch"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "https://www.youtube.com/watch?v=HmStJQzclHc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928
    },
    __self: this
  }, "Alex Sexton: Peachpuffs and Lemonchiffons")))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/Section.js */ "./elements/Section.js")["default"], __webpack_require__(/*! ./elements/Header.js */ "./elements/Header.js")["default"], __webpack_require__(/*! ./elements/H2.js */ "./elements/H2.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/H3.js */ "./elements/H3.js")["default"], __webpack_require__(/*! ./elements/Ul.js */ "./elements/Ul.js")["default"], __webpack_require__(/*! ./elements/Li.js */ "./elements/Li.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Code.js */ "./elements/Code.js")["default"], __webpack_require__(/*! ./components/ColorSwatch.js */ "./components/ColorSwatch.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/TextLink.js */ "./components/TextLink.js")["default"], __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.be919a266108be5fcc5b.hot-update.js.map