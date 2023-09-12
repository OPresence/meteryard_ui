// client/_app.js

import ClientPage from "../pages/index";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import Head from "next/head";
const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "'Roboto', sans-serif",
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#0C0C0C",
      dark: "#f3f7f9",
      paper: colors.common.white,
    },
    primary: {
      main: "#898989",
      dark: "#de0d0d",
      light: "#de0d0d",
    },
    secondary: {
      main: "#fff",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },
    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },
    error: {
      main: "#ff7d68",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },
    text: {
      primary: "#52565c",
      secondary: "#999999",
    },
    common: {
      black: "#222222",
    },
  },
};
let theme = createTheme(themesOptions);
theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ClientPage />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
