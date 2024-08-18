"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleThemeMode = exports.toggleColourBlindMode = exports.setCurrentTheme = exports.addTheme = exports.addComponentThemes = void 0;
var _ActionTypes = require("../constants/ActionTypes");
const addTheme = (name, theme) => ({
  type: _ActionTypes.ADD_THEME,
  name,
  theme
});
exports.addTheme = addTheme;
const setCurrentTheme = (name, theme) => ({
  type: _ActionTypes.SET_CURRENT_THEME,
  name,
  theme
});
exports.setCurrentTheme = setCurrentTheme;
const toggleThemeMode = () => ({
  type: _ActionTypes.TOGGLE_THEME_MODE
});
exports.toggleThemeMode = toggleThemeMode;
const toggleColourBlindMode = () => ({
  type: _ActionTypes.TOGGLE_COLOUR_BLIND_MODE
});
exports.toggleColourBlindMode = toggleColourBlindMode;
const addComponentThemes = () => ({
  type: _ActionTypes.ADD_COMPONENT_THEMES
});
exports.addComponentThemes = addComponentThemes;