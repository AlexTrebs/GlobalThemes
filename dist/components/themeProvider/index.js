"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = themeProviderWrapper;
exports.history = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reactRedux = require("react-redux");
var _connectedReactRouter = require("connected-react-router");
var _currentThemeReducer = _interopRequireDefault(require("../../reducers/currentThemeReducer"));
var _modeReducer = _interopRequireDefault(require("../../reducers/modeReducer"));
var _themeReducer = _interopRequireDefault(require("../../reducers/themeReducer"));
var _MyThemeProvider = _interopRequireDefault(require("./MyThemeProvider"));
var _history = require("history");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const history = exports.history = (0, _history.createBrowserHistory)();
function themeProviderWrapper(_ref) {
  let {
    children
  } = _ref;
  const rootReducer = history => ({
    currentTheme: _currentThemeReducer.default,
    mode: _modeReducer.default,
    theme: _themeReducer.default,
    router: (0, _connectedReactRouter.connectRouter)(history)
  });
  const store = (0, _toolkit.configureStore)({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat((0, _connectedReactRouter.routerMiddleware)(history))
  });
  return /*#__PURE__*/React.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(_MyThemeProvider.default, {
    children: children
  }));
}