import {
  ADD_COMPONENT_THEMES,
  GET_COMPONENT_THEMES,
} from "../constants/ActionTypes";

const componentTheme = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPONENT_THEMES:
      return { ...state, ...action.componentThemes };
    case GET_COMPONENT_THEMES:
      return state;
    default:
      return state;
  }
};

export default componentTheme;
