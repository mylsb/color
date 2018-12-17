webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PaletteModal.js":
/*!************************************!*\
  !*** ./components/PaletteModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Flex, Button, P, Textarea) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/kebabCase */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-beautify */ "./node_modules/js-beautify/js/index.js");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/mrmrs/w/color/components/PaletteModal.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PaletteModal = function PaletteModal(_ref) {
  var palette = _ref.palette,
      togglePaletteModal = _ref.togglePaletteModal,
      isOpen = _ref.isOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("json"),
      _useState4 = _slicedToArray(_useState3, 2),
      activeTab = _useState4[0],
      setActiveTab = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchColorData(palette);
  }, []);

  var handleActiveTab = function handleActiveTab(tabName) {
    return function () {
      return setActiveTab(tabName);
    };
  };

  var fetchColorData =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(palette) {
      var paletteString, res, _ref3, colors, newData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              paletteString = palette.map(function (p) {
                return p.substr(1);
              }).join(",");
              _context.next = 3;
              return fetch("https://api.color.pizza/v1/".concat(paletteString));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              _ref3 = _context.sent;
              colors = _ref3.colors;
              newData = colors.map(function (c) {
                return {
                  name: c.name,
                  hex: c.requestedHex
                };
              });
              setData(newData);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function fetchColorData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var formatAsJson = function formatAsJson() {
    return JSON.stringify(data, null, "  ");
  };

  var formatAsCSS = function formatAsCSS() {
    return ":root {\n  ".concat(data.map(function (d) {
      return "--".concat(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4___default()(d.name), ": ").concat(d.hex, ";\n");
    }).join("").trim(), "\n}");
  };

  var formatAsSass = function formatAsSass() {
    return data.map(function (d) {
      return "$".concat(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4___default()(d.name), ": ").concat(d.hex, ";\n");
    }).join("").trim();
  };

  var formatAsJS = function formatAsJS() {
    return "{\n  ".concat(data.map(function (d) {
      return "".concat(lodash_camelCase__WEBPACK_IMPORTED_MODULE_5___default()(d.name), ": \"").concat(d.hex, "\"");
    }).join(",").trim(), "\n}");
  };

  var handleSelectAll = function handleSelectAll(e) {
    e.target.select();
  };

  return isOpen ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    position: "fixed",
    width: 1,
    height: "100vh",
    px: 6,
    py: 4,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      backgroundColor: "rgba(0,0,0,0.4)",
      top: 0,
      left: 0,
      zIndex: 5
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onOutsideClick: function onOutsideClick() {
      return togglePaletteModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    position: "absolute",
    bg: "white",
    flexWrap: "wrap",
    p: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: function onClick() {
      return togglePaletteModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Close"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: handleActiveTab("json"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "JSON"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: handleActiveTab("css"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "CSS variables"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: handleActiveTab("sass"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Sass variables"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    onClick: handleActiveTab("js"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "JS theme file")), activeTab === "json" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "JSON format"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Textarea, {
    width: 1,
    border: "1px solid black",
    style: {
      minHeight: '16rem'
    },
    onClick: handleSelectAll,
    readOnly: true,
    value: formatAsJson(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), activeTab === "css" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "CSS format"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Textarea, {
    onClick: handleSelectAll,
    readOnly: true,
    value:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(js_beautify__WEBPACK_IMPORTED_MODULE_6__["css"])(formatAsCSS()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), activeTab === "sass" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Sass format"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Textarea, {
    onClick: handleSelectAll,
    readOnly: true,
    value:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(js_beautify__WEBPACK_IMPORTED_MODULE_6__["css"])(formatAsSass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), activeTab === "js" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "JS format"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Textarea, {
    onClick: handleSelectAll,
    readOnly: true,
    value: Object(js_beautify__WEBPACK_IMPORTED_MODULE_6__["js"])(formatAsJS()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (PaletteModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Button.js */ "./elements/Button.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/Textarea.js */ "./elements/Textarea.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.54e9c343d87dcfabe7d5.hot-update.js.map