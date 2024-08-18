import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import currentTheme from "../../reducers/currentThemeReducer";
import mode from "../../reducers/modeReducer";
import theme from "../../reducers/themeReducer";
import MyThemeProvider from "./MyThemeProvider";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function themeProviderWrapper({ children }) {
  const rootReducer = (history) => ({
    currentTheme,
    mode,
    theme,
    router: connectRouter(history),
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(routerMiddleware(history)),
  });

  return (
    <Provider store={store}>
      <MyThemeProvider children={children}></MyThemeProvider>
    </Provider>
  );
}
