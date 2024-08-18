import {
  TOGGLE_COLOUR_BLIND_MODE,
  TOGGLE_THEME_MODE,
  GET_MODE,
} from "../constants/ActionTypes";

const mode = (state = { theme: "light", colourBlind: false }, action) => {
  switch (action.type) {
    case TOGGLE_THEME_MODE:
      return {
        theme: state.theme === "dark" ? "light" : "dark",
        colourBlind: state.colourBlind,
      };
    case TOGGLE_COLOUR_BLIND_MODE:
      return {
        theme: state.theme,
        colourBlind: !state.colourBlind,
      };
    case GET_MODE:
      return state;
    default:
      return state;
  }
};

export default mode;
