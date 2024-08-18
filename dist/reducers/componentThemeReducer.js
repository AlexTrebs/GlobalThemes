"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ActionTypes = require("../constants/ActionTypes");
const componentTheme = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _ActionTypes.ADD_COMPONENT_THEMES:
      return {
        ...state,
        ...action.componentThemes
      };
    case _ActionTypes.GET_COMPONENT_THEMES:
      return state;
    default:
      return state;
  }
};
var _default = exports.default = componentTheme;