import {
  TOGGLE_THEME_MODE,
  TOGGLE_COLOUR_BLIND_MODE,
  SET_CURRENT_THEME,
  ADD_THEME,
  ADD_COMPONENT_THEMES,
} from "../constants/ActionTypes";

export const addTheme = (name, theme) => ({
  type: ADD_THEME,
  name,
  theme,
});

export const setCurrentTheme = (name, theme) => ({
  type: SET_CURRENT_THEME,
  name,
  theme,
});

export const toggleThemeMode = () => ({
  type: TOGGLE_THEME_MODE,
});

export const toggleColourBlindMode = () => ({
  type: TOGGLE_COLOUR_BLIND_MODE,
});

export const addComponentThemes = () => ({
  type: ADD_COMPONENT_THEMES,
});
