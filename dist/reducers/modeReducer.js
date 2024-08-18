"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ActionTypes = require("../constants/ActionTypes");
const mode = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    theme: "light",
    colourBlind: false
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _ActionTypes.TOGGLE_THEME_MODE:
      return {
        theme: state.theme === "dark" ? "light" : "dark",
        colourBlind: state.colourBlind
      };
    case _ActionTypes.TOGGLE_COLOUR_BLIND_MODE:
      return {
        theme: state.theme,
        colourBlind: !state.colourBlind
      };
    case _ActionTypes.GET_MODE:
      return state;
    default:
      return state;
  }
};
var _default = exports.default = mode;