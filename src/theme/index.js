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
        // "@media(min-width:1200px)":{},
        "@media(max-width:1280px)": {
          paddingLeft: "60px",
          // maxWidth: "initial",
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
