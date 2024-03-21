import { create, responsiveFontSizes } from "@mui/material/styles";
import { themeOptions } from "./typography";

const baseOptions = {
  palette: {
    primary: {
      main: "#fff", // Customize this color as needed
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.60)", // Customize this color as needed
    },
    background: {},
    text: {
      secondary: "#B8C3FF",
    },
  },
  components: {
    MuiInputBase: {
      input: {
        MuiOutlinedInput: {
          WebkitTextFillColor: "#000 !important",

          "& .input.Mui-disabled": {
            WebkitTextFillColor: "#000 !important",
            color: "#000 !important",
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        switchViewButton: {
          "&:hover": {
            backgroundColor: "#544FA7",
          },
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        button: {
          "&:hover": {
            background: "#544FA7",
          },
          marginRight: "0px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          color: "#FFFFFF !important",
          background: "rgb(63, 59, 122)",
          padding: "12px",
          width: "50px",
          height: "50px",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "50px",
          borderRadius: "10px",
          // border: "1px solid rgba(255, 255, 255, 0.40)",
          color: "#fff",
          backgroundColor: "#2B2959",
          borderRadius: "5px",
        },
        notchedOutline: {
          borderColor: "rgba(0, 0, 0, 0.08)",
        },
        colorSecondary: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "#222",
            borderColor: "#222",
          },
          "&.Mui-focused": {
            color: "#222",
          },
        },
      },
      input: {
        color: "#fff",
        fontSize: "14px",
        borderRadius: "8px",
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: { minWidth: "30px" },
      },
    },

    MuiPaper: {
      styleOverrides: {
        outlined: {
          padding: "15px",
          width: "100%",
          backgroundColor: "#544FA7",
        },
        elevation1: {
          backgroundColor: `rgba(252, 252, 255, 0.05)`,
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          padding: "0px",
          boxShadow: "none",
        },
        elevation2: {
          backgroundColor: "#ccc",
          border: "2px solid rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          padding: "0px",
          boxShadow: "none",
          marginBottom: "30px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        head: {
          color: "#fff",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 99999,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          alignItems: "self-start",
        },
        gutters: {
          paddingLeft: 0,
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.40)",
          borderRadius: "10px !important",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.40)",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "4px",
          fontSize: "12px",
        },
        colorSecondary: {
          "&.Mui-checked": { color: "#000" },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          paddingBottom: "0",
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperScrollPaper: {
          Width: 450,
          maxWidth: "100%",
        },
        paper: {
          overflowY: "unset",
          background: "#544FA7",
          width: "100%",
        },
        paperWidthSm: {
          maxWidth: "647px !important",
        },
        paperWidthXs: {
          maxWidth: "514px !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: 16,
          color: "#fff",
          // height: "0.1876em",
          height: "2em",
          padding: "0px 0 0px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: "#d32f2f !important",
          },
          marginRight: "0px",
          marginLeft: "0px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "22px 45px",
          paddingTop: "19px !important",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.38,
            background: "rgb(121 115 255)",
            color: "#fff",
          },
          "&.Mui-selected": {
            background: "#ffff",
            "&:hover": {
              backgroundColor: "#fff",
            },
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "17px 0px",
          justifyContent: "center",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(63, 59, 122, 1)",
          textAlign: "center",
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "18px",
          letterSpacing: "0px",
          textAlign: "left",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          color: "#fff",
          display: "flex",
          padding: "19px 30px",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "700",
          borderRadius: "50px",
          fontFamily: "'Space Grotesk', sans-serif",
          background: "#161E29",
          whiteSpace: "pre",
          // border: "1px solid #fff",
          "&:hover": {
            color: "#161E29",
            background: "#fff",
            border: "1px solid #161E29",
          },
        },
        containedSizeSmall: { fontSize: "12px" },
        containedPrimary: {
          color: "#fff",
          borderRadius: "30px",
          border: "1px solid transparent",
          textTransform: "capitalize",
          background: " linear-gradient(180deg, #857CEE 0%, #726AEA 100%)",
          whiteSpace: "pre",
          "&:hover": {
            color: "#f5f5f5",
            background: " linear-gradient(100deg, #726AEA 0%, #857CEE 100%)",
            border: "1px solid transparent",
          },
        },
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: "0",
        },
        paper: {
          width: "250px",
          backgroundColor: "#150D40",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          border: "1px solid transparent !important",
          backgroundColor: "rgba(76, 72, 141, 1)",
        },
        select: {
          color: "#fff !important",
          backgroundColor: "transparent !important",
          fontSize: 15,
        },
        icon: {
          // color: "#fff !important",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: { top: "47px" },
        list: {
          background: "rgba(76, 72, 141, 1)",
          color: "#fff!important",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { paddingLeft: "20px" },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: "#a7a2ee",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: "transparent !important",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        // root: {
        //   padding: "0px 65px !important",
        //   "@media (max-width: 780px)": {
        //     padding: "0px 16px !important",
        //   },
        // },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none !important",
          cursor: "pointer",
        },
      },
    },
  },
};

export const createCustomTheme = (config = {}) => {
  let theme = createTheme({ ...baseOptions, ...themeOptions });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
