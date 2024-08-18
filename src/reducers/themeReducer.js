import { ADD_THEME } from "../constants/ActionTypes";

const theme = (state = [], action) => {
  switch (action.type) {
    case ADD_THEME:
      return state.filter((elem) => elem.key === action.name)
        ? null
        : state.push({ key: action.name, value: action.theme });
    default:
      return state;
  }
};

export default theme;
