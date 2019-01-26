webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, TextButton, SiteFetch, Flex, Input, Label, P, Button, Icon, Span, LoadingBars, Img, TextLink, Form, TextInput, Textarea, Palette, CombinationTools, Dl, Dt, Dd, PaletteModal, ColorPicker, H4, Fieldset, Legend, ColorBlindFilter, Likes, A, Combinations, module) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
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
/* harmony import */ var _components_ColorTable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/ColorTable */ "./components/ColorTable.js");
/* harmony import */ var _utils_isHex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../utils/isHex */ "./utils/isHex.js");






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

var MainUI = function MainUI(_ref) {
  var _React$createElement;

  var palette = _ref.palette,
      setPalette = _ref.setPalette,
      availableCombos = _ref.availableCombos,
      setAvailableCombos = _ref.setAvailableCombos,
      onShowCombinations = _ref.onShowCombinations;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      paletteModalIsOpen = _useState2[0],
      togglePaletteModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      likes = _useState4[0],
      updateLikes = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(4.5),
      _useState6 = _slicedToArray(_useState5, 2),
      contrastRatio = _useState6[0],
      setContrastRatio = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("none"),
      _useState8 = _slicedToArray(_useState7, 2),
      colorFilter = _useState8[0],
      setColorFilter = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      paletteImage = _useState10[0],
      setPaletteImage = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      imageLoading = _useState12[0],
      setImageLoading = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      imageName = _useState14[0],
      setImageName = _useState14[1];

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

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(resetPinned),
      _useState16 = _slicedToArray(_useState15, 2),
      pinnedColors = _useState16[0],
      setPinnedColors = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState18 = _slicedToArray(_useState17, 2),
      borderWidth = _useState18[0],
      setBorderWidth = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(64),
      _useState20 = _slicedToArray(_useState19, 2),
      boxPadding = _useState20[0],
      setBoxPadding = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("#07c"),
      _useState22 = _slicedToArray(_useState21, 2),
      palxColor = _useState22[0],
      setPalxColor = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    color: null,
    index: null
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      currentPickerColor = _useState24[0],
      setPickerColor = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState26 = _slicedToArray(_useState25, 2),
      currentComboProp = _useState26[0],
      setCurrentComboProp = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("url"),
      _useState28 = _slicedToArray(_useState27, 2),
      activeTab = _useState28[0],
      setActiveTab = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(JSON.stringify(palette)),
      _useState30 = _slicedToArray(_useState29, 2),
      importValue = _useState30[0],
      setImportValue = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState32 = _slicedToArray(_useState31, 2),
      importError = _useState32[0],
      setImportError = _useState32[1];

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
    var _ref2 = _asyncToGenerator(
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
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRemoveLike =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
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
      return _ref3.apply(this, arguments);
    };
  }();

  var handleClearLikes =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
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
      return _ref4.apply(this, arguments);
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

  var handleKeyPress = function handleKeyPress(_ref5) {
    var key = _ref5.key;

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
    var _ref6 = _asyncToGenerator(
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
      return _ref6.apply(this, arguments);
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
    var _ref7 = _asyncToGenerator(
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
      return _ref7.apply(this, arguments);
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
    var _ref8 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      var res, _ref9, colors, url, name, username, availableCombos, newCombo;

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
              _ref9 = _context6.sent;
              colors = _ref9.colors;
              url = _ref9.url;
              name = _ref9.name;
              username = _ref9.username;
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
      return _ref8.apply(this, arguments);
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
        if (!Object(_utils_isHex__WEBPACK_IMPORTED_MODULE_26__["default"])(c)) {
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
      lineNumber: 376
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    pt: 3,
    px: 3,
    mb: 3,
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
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
      lineNumber: 392
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
      lineNumber: 402
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
      lineNumber: 413
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
      lineNumber: 423
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
      lineNumber: 433
    },
    __self: this
  }, "Json")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
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
      lineNumber: 444
    },
    __self: this
  }, "Export"), activeTab === "url" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    px: 3,
    mx: "auto",
    maxWidth: "32rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SiteFetch, {
    onSubmit: handleSiteFetch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
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
      lineNumber: 465
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
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
      lineNumber: 467
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
      lineNumber: 479
    },
    __self: this
  }, "Upload image")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, "or")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    ml: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
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
      lineNumber: 500
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {
    viewBox: "0 0 123 123",
    size: 16,
    type: "unsplash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    pl: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "Unsplash photo")))), imageLoading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoadingBars, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    ml: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, "Fetching Palette")), paletteImage && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    ml: "auto",
    onClick: handleClearPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, "Clear Image")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    maxWidth: 320,
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Img, {
    src: paletteImage.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }), paletteImage.name && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    color: "gray.5",
    fontSize: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "Photo by", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "https://unsplash.com/@".concat(paletteImage.username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, paletteImage.name), " ", "on", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextLink, {
    href: "https://unsplash.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, "Unsplash"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
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
      lineNumber: 562
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
      lineNumber: 571
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
      lineNumber: 579
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
      lineNumber: 584
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
    lineNumber: 592
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
      lineNumber: 606
    },
    __self: this
  }, "Generate"), " ")), activeTab === "colorbox" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Colorbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onAddPalette: handleColorBoxAdd,
    onReplacePalette: handleColorBoxReplace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }), activeTab === "text" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    px: 3,
    mx: "auto",
    maxWidth: "32rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: this
  }, importError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(P, {
    color: "marketing.red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, "There is something wrong with the JSON provided"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Textarea, {
    border: "1px solid",
    borderColor: "gray.8",
    p: 3,
    width: 1,
    borderRadius: 1,
    value: importValue,
    className:
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("resize:vertical;min-height:128px;"),
    onChange: function onChange(e) {
      return setImportValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    onClick: handlePaletteImport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, "Import Palette")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    mt: 3,
    px: [3, 5, 6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
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
      lineNumber: 658
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    textAlign: "center",
    my: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    fontSize: 1,
    bg: "transparent",
    mx: 2,
    onClick: handleClearPalette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }, "Clear palette"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextButton, {
    mx: 2,
    fontSize: 1,
    color: "gray.0",
    onClick: onShowCombinations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
    },
    __self: this
  }, "View all accessible combinations")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    maxWidth: "48rem",
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
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
      lineNumber: 684
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    display: "none",
    dataName: "stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
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
      lineNumber: 697
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dt, {
    fontSize: 2,
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
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
      lineNumber: 707
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
      lineNumber: 717
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dt, {
    fontSize: 2,
    width: 3 / 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
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
      lineNumber: 728
    },
    __self: this
  }, (availableCombos.length * palette.length).toLocaleString()))), paletteModalIsOpen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PaletteModal, {
    togglePaletteModal: togglePaletteModal,
    palette: palette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
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
      lineNumber: 750
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ColorPicker, {
    currentColor: currentPickerColor.color,
    onChange: handleSetEditColor,
    onRemoveColor: handleRemoveColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: this
  })))), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(currentCombination) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    width: [1],
    bg: currentCombination.parentBg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
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
      lineNumber: 770
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
      lineNumber: 775
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    maxWidth: "48rem",
    mx: "auto",
    pb: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Preview__WEBPACK_IMPORTED_MODULE_22__["default"], {
    borderWidth: borderWidth,
    boxPadding: boxPadding,
    currentCombination: currentCombination,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    bg: "white",
    color: "gray.0",
    pb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
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
      lineNumber: 794
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    px: [3, 4],
    pt: 4,
    maxWidth: "54rem",
    mx: "auto",
    style: {
      overflowX: "scroll"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H4, {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }, "Docs"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ColorTable__WEBPACK_IMPORTED_MODULE_25__["default"], {
    colors: palette,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    px: [3, 4],
    pt: 5,
    maxWidth: "48rem",
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(H4, {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: this
  }, "Settings"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Form, {
    pt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Fieldset, {
    border: "0",
    p: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Legend, {
    fontWeight: 700,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814
    },
    __self: this
  }, "Contrast Ratio"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    mx: -3,
    py: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
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
      lineNumber: 819
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828
    },
    __self: this
  }, "3 "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }, "AA large"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832
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
      lineNumber: 833
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  }, "4.5 "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843
    },
    __self: this
  }, "AA"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Flex, {
    px: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846
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
      lineNumber: 847
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontWeight: 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: this
  }, "7:1 "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857
    },
    __self: this
  }, "AAA")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ColorBlindFilter, {
    onChange: handleColorBlindFilter,
    currentValue: colorFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    fontWeight: 700,
    fontSize: 2,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869
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
      lineNumber: 872
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    fontWeight: 700,
    fontSize: 2,
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888
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
      lineNumber: 891
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Div, {
    py: 4,
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Likes, {
    likes: likes,
    onSelectLike: handleViewLike,
    onRemoveLike: handleRemoveLike,
    onClearLikes: handleClearLikes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908
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
      lineNumber: 917
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(A, {
    display: "block",
    href: "https://cloudflare.design",
    fontWeight: 700,
    fontSize: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924
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
      lineNumber: 933
    },
    __self: this
  }, "GitHub"))));
};

var Index = function Index() {
  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_utils_sortPalette__WEBPACK_IMPORTED_MODULE_19__["default"])(_utils_defaultPalette__WEBPACK_IMPORTED_MODULE_17__["default"])),
      _useState34 = _slicedToArray(_useState33, 2),
      palette = _useState34[0],
      setPalette = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return Object(_utils_getAllCombos__WEBPACK_IMPORTED_MODULE_20__["default"])(_utils_defaultPalette__WEBPACK_IMPORTED_MODULE_17__["default"], 4.5);
  }),
      _useState36 = _slicedToArray(_useState35, 2),
      availableCombos = _useState36[0],
      setAvailableCombos = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState38 = _slicedToArray(_useState37, 2),
      showCombinations = _useState38[0],
      toggleShowCombinations = _useState38[1];

  return showCombinations ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Combinations, {
    availableCombos: availableCombos,
    onHideCombinations: function onHideCombinations() {
      return toggleShowCombinations(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MainUI, {
    palette: palette,
    setPalette: setPalette,
    availableCombos: availableCombos,
    setAvailableCombos: setAvailableCombos,
    onShowCombinations: function onShowCombinations() {
      return toggleShowCombinations(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963
    },
    __self: this
  });
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
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/TextButton.js */ "./components/TextButton.js")["default"], __webpack_require__(/*! ./components/SiteFetch.js */ "./components/SiteFetch.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"], __webpack_require__(/*! ./elements/Input.js */ "./elements/Input.js")["default"], __webpack_require__(/*! ./elements/Label.js */ "./elements/Label.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/Button.js */ "./elements/Button.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/LoadingBars.js */ "./components/LoadingBars.js")["default"], __webpack_require__(/*! ./elements/Img.js */ "./elements/Img.js")["default"], __webpack_require__(/*! ./components/TextLink.js */ "./components/TextLink.js")["default"], __webpack_require__(/*! ./elements/Form.js */ "./elements/Form.js")["default"], __webpack_require__(/*! ./components/TextInput.js */ "./components/TextInput.js")["default"], __webpack_require__(/*! ./elements/Textarea.js */ "./elements/Textarea.js")["default"], __webpack_require__(/*! ./components/Palette.js */ "./components/Palette.js")["default"], __webpack_require__(/*! ./components/CombinationTools.js */ "./components/CombinationTools.js")["default"], __webpack_require__(/*! ./elements/Dl.js */ "./elements/Dl.js")["default"], __webpack_require__(/*! ./elements/Dt.js */ "./elements/Dt.js")["default"], __webpack_require__(/*! ./elements/Dd.js */ "./elements/Dd.js")["default"], __webpack_require__(/*! ./components/PaletteModal.js */ "./components/PaletteModal.js")["default"], __webpack_require__(/*! ./components/ColorPicker.js */ "./components/ColorPicker.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./elements/Fieldset.js */ "./elements/Fieldset.js")["default"], __webpack_require__(/*! ./elements/Legend.js */ "./elements/Legend.js")["default"], __webpack_require__(/*! ./components/ColorBlindFilter.js */ "./components/ColorBlindFilter.js")["default"], __webpack_require__(/*! ./components/Likes.js */ "./components/Likes.js")["default"], __webpack_require__(/*! ./elements/A.js */ "./elements/A.js")["default"], __webpack_require__(/*! ./components/Combinations.js */ "./components/Combinations.js")["default"], __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.80d91c61ec64e78ba320.hot-update.js.map