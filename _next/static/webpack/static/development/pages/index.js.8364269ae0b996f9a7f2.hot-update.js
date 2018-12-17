webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Likes.js":
/*!*****************************!*\
  !*** ./components/Likes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, H4, Flex, TextButton, LikesModal) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mrmrs/w/color/components/Likes.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Likes = function Likes(_ref) {
  var likes = _ref.likes,
      onSelectLike = _ref.onSelectLike,
      onRemoveLike = _ref.onRemoveLike;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      toggleModal = _useState2[1];

  var handleViewLike = function handleViewLike(i) {
    return function () {
      return onSelectLike(i);
    };
  };

  var handleRemoveLike = function handleRemoveLike(i) {
    return function () {
      return onRemoveLike(i);
    };
  };

  var handleDisplayModal = function handleDisplayModal() {
    toggleModal(true);
  };

  return likes.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H4, {
    mt: 5,
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Likes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, likes.map(function (like, i) {
    var colors = Object.values(like);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
      key: i,
      mb: 1,
      style: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
      width: 1,
      onClick: handleViewLike(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, colors.map(function (color, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
        width: 1 / 4,
        borderRight: "4px solid white",
        key: i,
        py: 3,
        bg: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      });
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextButton, {
      px: 2,
      onClick: handleRemoveLike(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Remove"));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    display: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextButton, {
    mt: 2,
    width: 1,
    color: "gray.1",
    onClick: handleDisplayModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Export Likes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LikesModal, {
    isOpen: modalOpen,
    likes: likes,
    toggleModal: toggleModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Likes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./components/TextButton.js */ "./components/TextButton.js")["default"], __webpack_require__(/*! ./components/LikesModal.js */ "./components/LikesModal.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.8364269ae0b996f9a7f2.hot-update.js.map