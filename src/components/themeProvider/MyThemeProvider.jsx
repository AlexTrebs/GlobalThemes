import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import { toggleThemeMode } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

export default function MyThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const dispatch = useDispatch();

  if ((useSelector().mode.theme === "dark") === !prefersDarkMode)
    dispatch(toggleThemeMode());

  const _theme = createTheme({
    ...useSelector().currentTheme,
    ...useSelector().componentThemes,
  });

  return (
    <ThemeProvider theme={_theme}>
      <GlobalStyles styles={{}} />
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}

MyThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
