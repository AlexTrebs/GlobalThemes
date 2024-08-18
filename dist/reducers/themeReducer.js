"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ActionTypes = require("../constants/ActionTypes");
const theme = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _ActionTypes.ADD_THEME:
      return state.filter(elem => elem.key === action.name) ? null : state.push({
        key: action.name,
        value: action.theme
      });
    default:
      return state;
  }
};
var _default = exports.default = theme;