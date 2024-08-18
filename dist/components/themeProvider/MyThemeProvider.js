"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MyThemeProvider;
var _react = _interopRequireDefault(require("react"));
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _GlobalStyles = _interopRequireDefault(require("@mui/material/GlobalStyles"));
var _styles = require("@mui/material/styles");
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _actions = require("../../actions");
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function MyThemeProvider(_ref) {
  let {
    children
  } = _ref;
  const prefersDarkMode = (0, _useMediaQuery.default)("(prefers-color-scheme: dark)");
  const dispatch = (0, _reactRedux.useDispatch)();
  if ((0, _reactRedux.useSelector)().mode.theme === "dark" === !prefersDarkMode) dispatch((0, _actions.toggleThemeMode)());
  const _theme = (0, _styles.createTheme)({
    ...(0, _reactRedux.useSelector)().currentTheme,
    ...(0, _reactRedux.useSelector)().componentThemes
  });
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _theme
  }, /*#__PURE__*/_react.default.createElement(_GlobalStyles.default, {
    styles: {}
  }), /*#__PURE__*/_react.default.createElement(_CssBaseline.default, {
    enableColorScheme: true
  }), children);
}
MyThemeProvider.propTypes = {
  children: _propTypes.default.any.isRequired
};