"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    message = _ref.message,
    overlayStyles = _ref.overlayStyles,
    modalStyles = _ref.modalStyles,
    buttonStyles = _ref.buttonStyles,
    _ref$buttonVariant = _ref.buttonVariant,
    buttonVariant = _ref$buttonVariant === void 0 ? "contained" : _ref$buttonVariant,
    _ref$buttonText = _ref.buttonText,
    buttonText = _ref$buttonText === void 0 ? "Close" : _ref$buttonText;
  if (!isOpen) return null;
  var defaultOverlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 100
  };
  var defaultModalStyles = {
    backgroundColor: "white",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "4px",
    gap: "20px"
  };
  var defaultButtonStyles = {
    maxWidth: "70px"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
      sx: _objectSpread(_objectSpread({}, defaultOverlayStyles), overlayStyles),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
        sx: _objectSpread(_objectSpread({}, defaultModalStyles), modalStyles),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          gutterBottom: true,
          variant: "body1",
          children: message
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          onClick: onClose,
          variant: buttonVariant,
          sx: _objectSpread(_objectSpread({}, defaultButtonStyles), buttonStyles),
          children: buttonText
        })]
      })
    })
  });
}
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  message: _propTypes["default"].string,
  overlayStyles: _propTypes["default"].object,
  modalStyles: _propTypes["default"].object,
  buttonStyles: _propTypes["default"].object,
  buttonVariant: _propTypes["default"].string,
  buttonText: _propTypes["default"].string
};
var _default = exports["default"] = Modal;
