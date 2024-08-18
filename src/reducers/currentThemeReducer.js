import { SET_CURRENT_THEME, GET_CURRENT_THEME } from "../constants/ActionTypes";

const currentTheme = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return state.key === action.name && state.theme === action.theme
        ? state
        : { key: action.name, value: action.theme };
    case GET_CURRENT_THEME:
      return state;
    default:
      return state;
  }
};

export default currentTheme;
