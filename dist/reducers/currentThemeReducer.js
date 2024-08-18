"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ActionTypes = require("../constants/ActionTypes");
const currentTheme = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _ActionTypes.SET_CURRENT_THEME:
      return state.key === action.name && state.theme === action.theme ? state : {
        key: action.name,
        value: action.theme
      };
    case _ActionTypes.GET_CURRENT_THEME:
      return state;
    default:
      return state;
  }
};
var _default = exports.default = currentTheme;