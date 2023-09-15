import _ from "lodash";
import { createMuiTheme, responsiveFontSizes } from "@mui/material/styles";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiContainer: {
      root: {
        "@media(max-width:1280px)": {
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
