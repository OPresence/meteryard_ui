import _ from "lodash";
import { createMuiTheme, responsiveFontSizes } from "@mui/material/styles";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiOutlinedInput: {
      input: {
        WebkitTextFillColor: "red !important",
        "&.Mui-disabled": {
          color: "red !important",
        },
      },
    },

    MuiContainer: {
      root: {
        "@media(min-width:1200px)": {
          maxWidth: "1360px !important",
          paddingLeft: "60px",
          paddingRight: "60px",
        },
      },
    },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "system-ui",
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
// src/theme.js

// import { createTheme } from "@mui/material/styles";
// const themeManage = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2", // blue
//     },
//     secondary: {
//       main: "#dc004e", // pink
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, Arial, sans-serif",
//   },
// });

// export default themeManage;
