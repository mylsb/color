webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SiteFetch.js":
/*!*********************************!*\
  !*** ./components/SiteFetch.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Form, Input, Button, Flex, P) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_extract_skins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-skins */ "./utils/extract-skins.js");
/* harmony import */ var _utils_sortPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sortPalette */ "./utils/sortPalette.js");
/* harmony import */ var _LoadingBars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingBars */ "./components/LoadingBars.js");

var _jsxFileName = "/Users/mrmrs/w/color/components/SiteFetch.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var SiteFetch = function SiteFetch(_ref) {
  var onSubmit = _ref.onSubmit,
      props = _objectWithoutProperties(_ref, ["onSubmit"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("https://cloudflare.com"),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var handleChange = function handleChange(e) {
    return setUrl(e.target.value);
  };

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var fullUrl, res, data, cssPalette, newPalette;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setLoading(true);
              fullUrl = "https://api.cssstats.com/stats/?url=".concat(url);
              _context.next = 5;
              return fetch(fullUrl);

            case 5:
              res = _context.sent;

              if (!res.ok) {
                _context.next = 13;
                break;
              }

              _context.next = 9;
              return res.json();

            case 9:
              data = _context.sent;
              cssPalette = Object(_utils_extract_skins__WEBPACK_IMPORTED_MODULE_2__["default"])(data).colors;
              newPalette = cssPalette.filter(function (str) {
                if (str.includes("rgba")) {
                  return false;
                } else if (str.includes("hsla")) {
                  return false;
                } else if (str.includes("inherit")) {
                  return false;
                } else if (str.includes("currentColor")) {
                  return false;
                } else if (str.includes("transparent")) {
                  return false;
                } else if (str.includes("none")) {
                  return false;
                } else if (str.includes("var(")) {
                  return false;
                } else {
                  return str;
                }
              });
              onSubmit(Object(_utils_sortPalette__WEBPACK_IMPORTED_MODULE_3__["default"])(newPalette));

            case 13:
              setLoading(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    onSubmit: handleSubmit,
    display: "flex",
    width: 1,
    style: {
      overflow: "hidden"
    },
    borderRadius: 2,
    mb: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    fontSize: 2,
    fontWeight: 700,
    py: 3,
    px: 3,
    type: "url",
    border: "none",
    bg: "#eeeeee",
    borderRadius: 0,
    value: url,
    onChange: handleChange,
    style: {
      flexGrow: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    width: "auto",
    py: 3,
    px: 4,
    fontSize: 2,
    bg: "gray.3",
    color: "white",
    fontWeight: 700,
    border: "none",
    style: {
      cursor: "pointer"
    },
    disabled: isLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Go")), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingBars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
    ml: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Fetching Palette")));
};

/* harmony default export */ __webpack_exports__["default"] = (SiteFetch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/Form.js */ "./elements/Form.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Button.js */ "./elements/Button.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.1eae5195fc63d9108ace.hot-update.js.map