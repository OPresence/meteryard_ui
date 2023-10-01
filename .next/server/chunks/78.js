exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 7078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/layout/globals.css
var globals = __webpack_require__(8068);
// EXTERNAL MODULE: ./src/Scss/main.css
var main = __webpack_require__(5578);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
;// CONCATENATED MODULE: ./src/theme/typography.js
/* harmony default export */ const typography = ({
    h1: {
        fontWeight: "600",
        color: "#000",
        lineHeight: "1.2",
        fontSize: "42px",
        fontFamily: "system-ui"
    },
    h2: {
        fontSize: "22px",
        lineHeight: "1.2",
        fontWeight: "400",
        color: "#000",
        fontFamily: "system-ui"
    },
    h3: {
        fontSize: "18px",
        lineHeight: "1.2",
        fontWeight: "400",
        color: "#000",
        fontFamily: "system-ui"
    },
    h4: {
        fontSize: "22px",
        fontWeight: "600",
        color: "#444444",
        fontFamily: "system-ui"
    },
    h5: {
        fontSize: "22px",
        fontWeight: "500",
        color: "#000",
        fontFamily: "system-ui"
    },
    h6: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#000",
        fontFamily: "system-ui"
    },
    overline: {
        fontSize: "8px",
        fontFamily: "system-ui"
    },
    button: {
        padding: "0px",
        background: "#ACACAC",
        borderRadius: 27,
        fontFamily: "system-ui"
    },
    body1: {
        fontSize: "14px",
        fontWeight: "400",
        color: "#000",
        textAlign: "justify",
        fontFamily: "system-ui"
    }
});

;// CONCATENATED MODULE: ./src/theme/index.js



const baseOptions = {
    typography: typography,
    overrides: {
        MuiContainer: {
            root: {
                // "@media(min-width:1200px)":{},
                "@media(max-width:1280px)": {
                    paddingLeft: "60px",
                    // maxWidth: "initial",
                    paddingRight: "60px"
                }
            }
        }
    }
};
const themesOptions = {
    typography: {
        fontWeight: 400,
        fontFamily: "system-ui"
    }
};
const createTheme = (config = {})=>{
    let theme = (0,styles_.createMuiTheme)(external_lodash_default().merge({}, baseOptions, themesOptions));
    if (config.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return theme;
};

;// CONCATENATED MODULE: ./src/pages/_app.js
// client/_app.js






function MyApp({ Component, pageProps }) {
    const theme = createTheme();
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: ""
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: ""
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(styles_.ThemeProvider, {
                theme: theme,
                children: getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                }))
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5578:
/***/ (() => {



/***/ }),

/***/ 8068:
/***/ (() => {



/***/ })

};
;