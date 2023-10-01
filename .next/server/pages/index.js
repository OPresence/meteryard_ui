(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 4162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (ClientPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(9259);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./src/pages/_app.js + 2 modules
var _app = __webpack_require__(7078);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/layout/HomeLayout/Footer.js




const MainComponent = styled_default()("Box")(({ theme })=>({
        "& .mainBox": {
            padding: "3px 0px 36px",
            background: "rgba(21, 13, 64, 1)",
            width: "100%",
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat !important",
            "& .copyRightBox": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
                " & .titleBox": {
                    display: "flex",
                    alignItems: "center"
                },
                "& .termConditionBox": {
                    display: "flex",
                    justifyContent: "space-evenly"
                }
            }
        }
    }));
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ _jsx(MainComponent, {
        children: /*#__PURE__*/ _jsx(Box, {
            className: "mainBox",
            children: /*#__PURE__*/ _jsx(Container, {
                children: /*#__PURE__*/ _jsx(Box, {
                    className: "copyRightBox",
                    children: /*#__PURE__*/ _jsxs(Box, {
                        children: [
                            /*#__PURE__*/ _jsx(Box, {
                                className: "titleBox",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "images/logo.png",
                                    alt: "",
                                    width: "100%",
                                    style: {
                                        maxWidth: "128px",
                                        margin: "0 auto"
                                    }
                                })
                            }),
                            /*#__PURE__*/ _jsx(Box, {
                                children: /*#__PURE__*/ _jsxs(Typography, {
                                    variant: "body2",
                                    marginTop: "10px",
                                    color: "#FFFFFF99",
                                    children: [
                                        "Copyright \xa9 ",
                                        currentYear,
                                        " Raffle Game"
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const HomeLayout_Footer = ((/* unused pure expression or super */ null && (Footer)));

;// CONCATENATED MODULE: external "@mui/icons-material/Call"
const Call_namespaceObject = require("@mui/icons-material/Call");
var Call_default = /*#__PURE__*/__webpack_require__.n(Call_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/WhatsApp"
const WhatsApp_namespaceObject = require("@mui/icons-material/WhatsApp");
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/PermIdentity"
const PermIdentity_namespaceObject = require("@mui/icons-material/PermIdentity");
var PermIdentity_default = /*#__PURE__*/__webpack_require__.n(PermIdentity_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/component/Logo.js


const Logo = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("img", {
        src: "/images/logo.png",
        alt: "Logo",
        ...props
    });
};
/* harmony default export */ const component_Logo = (Logo);

;// CONCATENATED MODULE: ./src/layout/HomeLayout/Topbar.js










const Topbar_MainComponent = styled_default()("Box")(({ theme })=>({
        "& .appbarBox": {
            background: "#fff ",
            boxShadow: "none ",
            "& .flexJustify": {
                display: "flex",
                justifyContent: "space-between"
            },
            "& .flexAlign": {
                display: "flex",
                alignItems: "center"
            }
        },
        "& .TopIconBox": {
            "& .TopIconBoxChild": {
                padding: "10px 25px  ",
                display: "flex",
                justifyContent: "space-between",
                "& svg": {
                    color: "#fff ",
                    background: "#343A40 ",
                    padding: "5px ",
                    fontSize: "28px ",
                    borderRadius: "50px "
                }
            },
            "& .ContentBox": {
                background: "#444444 ",
                display: "flex",
                alignItems: "center",
                padding: "10px 0px 10px 120px ",
                clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%) "
            }
        },
        "& .JoinLiveChatBox": {
            display: "flex",
            alignItems: "center"
        }
    }));
function Topbar() {
    const [state, setState] = (0,external_react_.useState)({
        mobileView: false,
        drawerOpen: false
    });
    const { mobileView, drawerOpen } = state;
    const handleDrawerOpen = ()=>setState((prevState)=>({
                ...prevState,
                drawerOpen: true
            }));
    const handleDrawerClose = ()=>setState((prevState)=>({
                ...prevState,
                drawerOpen: false
            }));
    (0,external_react_.useEffect)(()=>{
        const setResponsiveness = ()=>{
            setState((prevState)=>({
                    ...prevState,
                    mobileView: window.innerWidth < 1080
                }));
        };
        setResponsiveness();
        window.addEventListener("resize", setResponsiveness);
        return ()=>{
            window.removeEventListener("resize", setResponsiveness);
        };
    }, []);
    const femmecubatorLogo = /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        maxWidth: 230,
        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime.jsx(component_Logo, {
                className: "logoImg"
            })
        })
    });
    const displayMobile = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Toolbar, {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Hidden, {
                    xsDown: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Drawer, {
                        anchor: "right",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                        style: {
                            width: "260px",
                            height: "100%",
                            display: "flex",
                            padding: "20px 0px 20px 20px"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "20px"
                            },
                            children: femmecubatorLogo
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                    className: "topbarmainBox",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: femmecubatorLogo
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                            edge: "start",
                            color: "inherit",
                            "aria-label": "menu",
                            "aria-haspopup": "true",
                            onClick: handleDrawerOpen,
                            style: {
                                background: "transparent"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx((Menu_default()), {
                                width: "60px",
                                height: "60px",
                                style: {
                                    color: "#000",
                                    fontSize: "30px"
                                }
                            })
                        })
                    ]
                })
            ]
        });
    };
    const displayDesktop = ()=>{
        return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
            className: "flexJustify",
            width: "100%",
            alignItems: "center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Grid, {
                container: true,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                        item: true,
                        lg: 4,
                        md: 4,
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
                                children: femmecubatorLogo
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                        item: true,
                        lg: 8,
                        md: 8,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                            className: "TopIconBox",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                    className: "TopIconBoxChild",
                                    alignItems: "enter",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                            display: "flex",
                                            alignItems: "enter",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                    className: "flexAlign",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((Call_default()), {}),
                                                        " \xa0\xa0\xa0\xa0",
                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                            variant: "body1",
                                                            children: "011-41219999 | 09999-127085"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                    className: "flexAlign",
                                                    p: "0 0 0 30px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((WhatsApp_default()), {}),
                                                        " \xa0\xa0\xa0\xa0",
                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                            variant: "body1",
                                                            children: "whatsapp us"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                            className: "flexAlign",
                                            p: "0 0 0 30px",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((PermIdentity_default()), {}),
                                                " \xa0\xa0\xa0\xa0",
                                                /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                    variant: "body1",
                                                    children: "Login/Sign Up"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                    className: "ContentBox",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                        className: "flexJustify",
                                        width: "100%",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                className: "flexAlign",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                        variant: "body1",
                                                        style: {
                                                            color: "#fff"
                                                        },
                                                        children: "Cities"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                        p: "0 0 0 70px",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                            variant: "body1",
                                                            style: {
                                                                color: "#fff"
                                                            },
                                                            children: "Property Type"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                p: "0 25px 0 0",
                                                className: "JoinLiveChatBox",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                                    className: "button",
                                                    children: "My Citychat"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx(Topbar_MainComponent, {
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.AppBar, {
            elevation: 0,
            className: "appbarBox",
            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                children: mobileView ? displayMobile() : displayDesktop()
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/layout/HomeLayout/index.js




function HomeLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Topbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/pages/home/Banner.js
var Banner = __webpack_require__(3771);
// EXTERNAL MODULE: ./src/Scss/scroll.css
var Scss_scroll = __webpack_require__(5614);
;// CONCATENATED MODULE: external "@mui/icons-material/Send"
const Send_namespaceObject = require("@mui/icons-material/Send");
;// CONCATENATED MODULE: external "@mui/icons-material/CameraAlt"
const CameraAlt_namespaceObject = require("@mui/icons-material/CameraAlt");
;// CONCATENATED MODULE: external "@mui/icons-material/Minimize"
const Minimize_namespaceObject = require("@mui/icons-material/Minimize");
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
;// CONCATENATED MODULE: external "@mui/icons-material/Cancel"
const Cancel_namespaceObject = require("@mui/icons-material/Cancel");
;// CONCATENATED MODULE: external "@mui/icons-material/FiberManualRecord"
const FiberManualRecord_namespaceObject = require("@mui/icons-material/FiberManualRecord");
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
;// CONCATENATED MODULE: ./src/component/ChatBoat.js











const ChatBoat = ()=>{
    const [_view_chat_screen, setView_chat_Screen] = useState(false);
    const [_view_search_screen, setSearch_screen] = useState(false);
    console.log("_view_search_screen--->", _view_search_screen);
    const chatJson = [
        {
            type: "text",
            text: "Hello Steve",
            from: "jid_1109",
            sender_name: "Michel Slatter",
            to: "jid_1111"
        },
        {
            type: "text",
            text: "Hi Michael",
            from: "jid_1111",
            sender_name: "Steve Jobs",
            to: "jid_1109"
        },
        {
            type: "text",
            text: "Check this",
            from: "jid_1109",
            sender_name: "Michel Slatter",
            to: "jid_1111"
        },
        {
            type: "text",
            text: "Hello Steve",
            from: "jid_1109",
            sender_name: "Michel Slatter",
            to: "jid_1111"
        },
        {
            type: "text",
            text: "Hi Michael",
            from: "jid_1111",
            sender_name: "Steve Jobs",
            to: "jid_1109"
        },
        {
            type: "text",
            text: "Check this below destination",
            from: "jid_1109",
            sender_name: "Michel Slatter",
            to: "jid_1111"
        }
    ];
    const toggleChatScreen = ()=>{
        setView_chat_Screen((prevState)=>!prevState);
    };
    const toggleSearchScreen = ()=>{
        setSearch_screen((prevState)=>!prevState);
    };
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs(Box, {
            children: [
                _view_chat_screen && /*#__PURE__*/ _jsxs(Box, {
                    style: {
                        position: "fixed",
                        background: "#fff",
                        top: "115px",
                        right: "22px",
                        zIndex: 1,
                        borderRadius: "0 10px 10px 10px",
                        maxWidth: 500,
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Box, {
                            style: _view_search_screen ? {
                                background: "#3B3B3B",
                                position: "absolute",
                                width: "200px",
                                height: "300px",
                                left: "-200px",
                                borderRadius: "10px 0 0 10px"
                            } : {
                                background: "transparent",
                                position: "absolute",
                                //   width: "200px",
                                //   height: "300px",
                                left: "-200px",
                                borderRadius: "10px 0 0 10px"
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    display: "flex",
                                    m: "10px 0 0 10px",
                                    children: [
                                        /*#__PURE__*/ _jsxs(Box, {
                                            style: _view_search_screen ? {
                                                border: "1px solid grey",
                                                borderRadius: "10px"
                                            } : {},
                                            children: [
                                                /*#__PURE__*/ _jsx(IconButton, {
                                                    onClick: ()=>{
                                                        if (!_view_search_screen) {
                                                            toggleSearchScreen();
                                                        }
                                                    },
                                                    style: _view_search_screen ? {
                                                        position: "absolute",
                                                        // background: "#a7d325",
                                                        right: "35px",
                                                        borderRadius: "10px 0 0 10px"
                                                    } : {
                                                        right: "-190px",
                                                        background: "#a7d325",
                                                        borderRadius: 0,
                                                        top: 0,
                                                        position: "absolute"
                                                    },
                                                    children: /*#__PURE__*/ _jsx(SearchIcon, {
                                                        style: {
                                                            color: "#fff"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(Box, {
                                                    style: _view_search_screen ? {
                                                        borderRadius: "10px 0 0 10px"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: /*#__PURE__*/ _jsx("input", {
                                                        placeholder: "search seller...",
                                                        style: {
                                                            borderRadius: "10px 0 0 10px",
                                                            height: "40px",
                                                            padding: "0 10px",
                                                            border: "none",
                                                            outline: "none",
                                                            width: "88%",
                                                            background: "transparent"
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Box, {
                                            style: _view_search_screen ? {
                                                borderRadius: "10px 0 0 10px"
                                            } : {
                                                display: "none"
                                            },
                                            children: /*#__PURE__*/ _jsx(IconButton, {
                                                onClick: toggleSearchScreen,
                                                children: /*#__PURE__*/ _jsx(CancelIcon, {
                                                    style: {
                                                        color: "#fff"
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    class: _view_search_screen ? "scrollbar" : "",
                                    id: "style-3",
                                    style: {
                                        background: "transparent"
                                    },
                                    children: /*#__PURE__*/ _jsx(Box, {
                                        class: "force-overflow",
                                        children: /*#__PURE__*/ _jsxs(Box, {
                                            style: _view_search_screen ? {
                                                display: "block"
                                            } : {
                                                display: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsxs(Box, {
                                                    p: "20px 10px",
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(Box, {
                                                            display: "flex",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs(Box, {
                                                                    position: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Avatar, {
                                                                            alt: "Remy Sharp",
                                                                            src: "/images/meteryard/Images/chat-user.webp",
                                                                            sx: {
                                                                                width: 40,
                                                                                height: 40
                                                                            }
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ _jsx(FiberManualRecordIcon, {
                                                                            style: {
                                                                                color: "red",
                                                                                position: "absolute",
                                                                                bottom: "0",
                                                                                right: "-3px",
                                                                                fontSize: "16px"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                "\xa0\xa0\xa0\xa0",
                                                                /*#__PURE__*/ _jsxs(Box, {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Typography, {
                                                                            variant: "body1",
                                                                            style: {
                                                                                fontWeight: "500",
                                                                                color: "#fff"
                                                                            },
                                                                            children: "Anuj Sharma"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs(Box, {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Typography, {
                                                                                    variant: "overline",
                                                                                    style: {
                                                                                        fontWeight: "500"
                                                                                    },
                                                                                    children: "Seller"
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ _jsx(Typography, {
                                                                                    variant: "overline",
                                                                                    style: {
                                                                                        fontWeight: "500"
                                                                                    },
                                                                                    children: "Online"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Box, {
                                                            mt: 1,
                                                            children: /*#__PURE__*/ _jsx(Divider, {
                                                                color: "#fff"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs(Box, {
                                                    p: "5px 10px 0 10px",
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(Box, {
                                                            display: "flex",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs(Box, {
                                                                    position: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Avatar, {
                                                                            alt: "Remy Sharp",
                                                                            src: "/images/meteryard/Images/chat-user.webp",
                                                                            sx: {
                                                                                width: 40,
                                                                                height: 40
                                                                            }
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ _jsx(FiberManualRecordIcon, {
                                                                            style: {
                                                                                color: "green",
                                                                                position: "absolute",
                                                                                bottom: "0",
                                                                                right: "-3px",
                                                                                fontSize: "16px"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                "\xa0\xa0\xa0\xa0",
                                                                /*#__PURE__*/ _jsxs(Box, {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Typography, {
                                                                            variant: "body1",
                                                                            style: {
                                                                                fontWeight: "500",
                                                                                color: "#fff"
                                                                            },
                                                                            children: "Anuj Sharma"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs(Box, {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Typography, {
                                                                                    variant: "overline",
                                                                                    style: {
                                                                                        fontWeight: "500"
                                                                                    },
                                                                                    children: "Seller"
                                                                                }),
                                                                                " ",
                                                                                /*#__PURE__*/ _jsx(Typography, {
                                                                                    variant: "overline",
                                                                                    style: {
                                                                                        fontWeight: "500"
                                                                                    },
                                                                                    children: "Busy"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Box, {
                                                            mt: 1,
                                                            children: /*#__PURE__*/ _jsx(Divider, {
                                                                color: "#fff"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Box, {
                            children: [
                                /*#__PURE__*/ _jsx(Box, {
                                    style: {
                                        background: "transparent linear-gradient(270deg, #EA6F6F 0%, #565656 100%) 0% 0%",
                                        padding: "10px",
                                        borderRadius: "0 10px 0 0"
                                    },
                                    children: /*#__PURE__*/ _jsxs(Box, {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        children: [
                                            /*#__PURE__*/ _jsxs(Box, {
                                                children: [
                                                    /*#__PURE__*/ _jsx(Box, {
                                                        height: 50,
                                                        width: 50,
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        style: {
                                                            background: "#fff",
                                                            borderRadius: "50px"
                                                        },
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: "/images/meteryard/Images/profile.png",
                                                            width: "100%"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx(Typography, {
                                                        variant: "body1",
                                                        style: {
                                                            fontWeight: "600",
                                                            color: "#fff",
                                                            marginTop: "5px",
                                                            marginBottom: "-5px"
                                                        },
                                                        children: "Hi There !"
                                                    }),
                                                    /*#__PURE__*/ _jsx(Typography, {
                                                        variant: "overline",
                                                        style: {
                                                            fontWeight: "500",
                                                            color: "#fff"
                                                        },
                                                        children: "Welcome To City Chat"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(MinimizeIcon, {
                                                onClick: ()=>{
                                                    toggleChatScreen();
                                                    setSearch_screen(false);
                                                },
                                                style: {
                                                    color: "#fff",
                                                    marginTop: "-20px",
                                                    fontSize: "35px",
                                                    cursor: "pointer"
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    class: "scrollbar",
                                    id: "style-3",
                                    children: /*#__PURE__*/ _jsx(Box, {
                                        class: "force-overflow",
                                        children: /*#__PURE__*/ _jsx(Box, {
                                            children: /*#__PURE__*/ _jsx(Box, {
                                                p: "20px",
                                                children: chatJson.map((data, index)=>{
                                                    return /*#__PURE__*/ _jsxs(Box, {
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(Box, {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                mt: 1,
                                                                children: [
                                                                    /*#__PURE__*/ _jsx(Box, {
                                                                        maxWidth: 50,
                                                                        maxHeight: 50,
                                                                        style: {},
                                                                        children: /*#__PURE__*/ _jsx(Avatar, {
                                                                            alt: "Remy Sharp",
                                                                            src: "/images/meteryard/Images/chat-user.webp",
                                                                            sx: {
                                                                                width: 30,
                                                                                height: 30
                                                                            }
                                                                        })
                                                                    }),
                                                                    "\xa0 \xa0",
                                                                    /*#__PURE__*/ _jsx(Box, {
                                                                        style: {
                                                                            padding: "3px 20px",
                                                                            background: "#FFD99F",
                                                                            borderRadius: "50px 50px 50px 0",
                                                                            maxWidth: 155
                                                                        },
                                                                        children: /*#__PURE__*/ _jsx(Typography, {
                                                                            variant: "overline",
                                                                            style: {
                                                                                fontWeight: "600",
                                                                                marginTop: "5px",
                                                                                marginBottom: "-5px",
                                                                                color: "#000"
                                                                            },
                                                                            children: data?.text
                                                                        })
                                                                    }),
                                                                    "\xa0 \xa0",
                                                                    /*#__PURE__*/ _jsx(Box, {
                                                                        children: /*#__PURE__*/ _jsx(Typography, {
                                                                            variant: "overline",
                                                                            style: {
                                                                                color: "#000"
                                                                            },
                                                                            children: "4:45 PM"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx(Box, {
                                                                display: "flex",
                                                                justifyContent: "end",
                                                                mt: 1,
                                                                children: /*#__PURE__*/ _jsxs(Box, {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Box, {
                                                                            children: /*#__PURE__*/ _jsx(Typography, {
                                                                                variant: "overline",
                                                                                style: {
                                                                                    color: "#000"
                                                                                },
                                                                                children: "4:45 PM"
                                                                            })
                                                                        }),
                                                                        "\xa0 \xa0",
                                                                        /*#__PURE__*/ _jsx(Box, {
                                                                            style: {
                                                                                padding: "3px 20px",
                                                                                background: "#F0F0F0",
                                                                                borderRadius: "50px 50px 50px 0",
                                                                                maxWidth: 155
                                                                            },
                                                                            children: /*#__PURE__*/ _jsx(Typography, {
                                                                                variant: "overline",
                                                                                style: {
                                                                                    fontWeight: "600",
                                                                                    marginTop: "5px",
                                                                                    marginBottom: "-5px",
                                                                                    color: "#000"
                                                                                },
                                                                                children: data?.text
                                                                            })
                                                                        }),
                                                                        "\xa0 \xa0",
                                                                        /*#__PURE__*/ _jsx(Box, {
                                                                            maxWidth: 50,
                                                                            maxHeight: 50,
                                                                            style: {},
                                                                            children: /*#__PURE__*/ _jsx(Avatar, {
                                                                                alt: "Remy Sharp",
                                                                                src: "/images/meteryard/Images/chat-user.webp",
                                                                                sx: {
                                                                                    width: 30,
                                                                                    height: 30
                                                                                }
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    });
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            p: "10px",
                            children: /*#__PURE__*/ _jsxs(Box, {
                                style: {
                                    borderRadius: "10px",
                                    border: "0.5px solid #000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "0 10px 0 10px"
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(CameraAltIcon, {
                                        style: {
                                            color: "#000",
                                            fontSize: "30px",
                                            cursor: "pointer"
                                        }
                                    }),
                                    /*#__PURE__*/ _jsx("input", {
                                        placeholder: "something here.....",
                                        style: {
                                            borderRadius: "10px",
                                            height: "40px",
                                            padding: "0 10px",
                                            border: "none",
                                            outline: "none"
                                        }
                                    }),
                                    /*#__PURE__*/ _jsx(SendIcon, {
                                        style: {
                                            color: "#000",
                                            fontSize: "30px",
                                            cursor: "pointer"
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Box, {
                    style: {
                        position: "fixed",
                        bottom: "0",
                        right: "22px",
                        zIndex: 1
                    },
                    children: /*#__PURE__*/ _jsx(Box, {
                        maxWidth: 100,
                        children: /*#__PURE__*/ _jsx("img", {
                            onClick: ()=>{
                                toggleChatScreen();
                                setSearch_screen(false);
                            },
                            src: "/images/meteryard/Images/chat-boat-icon.gif",
                            style: {
                                borderRadius: "50px",
                                cursor: "pointer"
                            }
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const component_ChatBoat = ((/* unused pure expression or super */ null && (ChatBoat)));

;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(1598);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowRightAlt"
const ArrowRightAlt_namespaceObject = require("@mui/icons-material/ArrowRightAlt");
var ArrowRightAlt_default = /*#__PURE__*/__webpack_require__.n(ArrowRightAlt_namespaceObject);
;// CONCATENATED MODULE: ./src/component/SliderComponent.js








const SliderComponent_MainComponent = styled_default()("Box")(({ theme })=>({
        "& .mainSliderDiv": {
            marginTop: "80px",
            textAlign: "center"
        },
        "& .circleimg": {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& h6": {
                color: "#A7D325",
                fontSize: "14px"
            },
            "& svg": {
                color: "#A7D325"
            }
        },
        "& .large": {
            background: "#FFF"
        },
        "& .cards": {
            cursor: "pointer",
            // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "10px",
            width: "80%",
            "& h5": {
                textAlign: "end",
                fontSize: "18px"
            }
        }
    }));
const SliderComponent = ()=>{
    const sliderRef = (0,external_react_.useRef)(null);
    const projectDetails = [
        {
            name: "Launched Project",
            image: "images/meteryard/Graphics/Group 7831.png"
        },
        {
            name: "Delivered Project",
            image: "images/meteryard/Graphics/Group 7829.png"
        },
        {
            name: "Pre - Launched Project",
            image: "images/meteryard/Graphics/Group 7824.png"
        },
        {
            name: "Running Project",
            image: "images/meteryard/Graphics/Group 7830.png"
        },
        {
            name: "Launched Project",
            image: "images/meteryard/Graphics/Group 7831.png"
        },
        {
            name: "Delivered Project",
            image: "images/meteryard/Graphics/Group 7829.png"
        },
        {
            name: "Pre - Launched Project",
            image: "images/meteryard/Graphics/Group 7824.png"
        },
        {
            name: "Running Project",
            image: "images/meteryard/Graphics/Group 7830.png"
        }
    ];
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ jsx_runtime.jsx(SliderComponent_MainComponent, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mainSliderDiv",
            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
                maxWidth: true,
                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
                    ...settings,
                    ref: sliderRef,
                    children: projectDetails.map((data, index)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                            item: true,
                            lg: 3,
                            md: 3,
                            sm: 6,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                display: "flex",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Card, {
                                        className: "cards",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                    variant: "h5",
                                                    children: data?.name
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                className: "circleimg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                        maxWidth: 115,
                                                        minHeight: 85,
                                                        maxHeight: 85,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: data?.image,
                                                            alt: "img",
                                                            width: "100%"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                variant: "h6",
                                                                children: "View all"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((ArrowRightAlt_default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    " "
                                ]
                            }, index)
                        });
                    })
                })
            })
        })
    });
};
/* harmony default export */ const component_SliderComponent = (SliderComponent);

;// CONCATENATED MODULE: ./src/component/ButtonComponent.js




const ButonStyle = styled_default()("Box")(({ theme })=>({
        "& .viewmoreButton": {
            "& button": {
                background: "none",
                border: "1px solid black"
            },
            "& span": {
                color: "#000",
                fontSize: "10px"
            }
        }
    }));
const ButtonComponent = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(ButonStyle, {
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
            p: "10px 0 0 0",
            className: "viewmoreButton",
            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    children: "Get View More"
                })
            })
        })
    });
};
/* harmony default export */ const component_ButtonComponent = (ButtonComponent);

;// CONCATENATED MODULE: ./src/component/CardComponent.js









const CardComponentStyle = styled_default()("Box")(({ theme })=>({
        "& .mainSliderDiv": {
            marginTop: "20px",
            background: "#fff",
            padding: "50px",
            "& h2": {
                fontWeight: "500"
            }
        },
        "& .circleimg": {
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "158px",
            "& h6": {
                color: "#A7D325",
                fontSize: "14px"
            },
            "& svg": {
                color: "#A7D325"
            }
        },
        "& .large": {
            background: "#FFF"
        },
        "& .cards": {
            cursor: "pointer",
            width: "90%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "15px",
            "& .contentBox": {
                padding: "0 10px 10px",
                "& h5": {
                    fontSize: "14px",
                    textAlign: "start",
                    fontWeight: "500",
                    padding: "5px"
                },
                "& h4": {
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "500",
                    margin: "5px 5px"
                },
                "& h6": {
                    fontSize: "10px",
                    color: "#818181",
                    fontWeight: "500",
                    margin: "5px 5px"
                }
            },
            "& h5": {
                textAlign: "end",
                fontSize: "18px"
            }
        }
    }));
const CardComponent = ()=>{
    const sliderRef = (0,external_react_.useRef)(null);
    const projectDetails = [
        {
            name: "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It OnThe Top And The Bottom Of Your Oral Cavity.",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            name: "Delivered Project",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            name: "Pre - Launched Project",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            name: "Running Project",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            name: "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It OnThe Top And The Bottom Of Your Oral Cavity.",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            name: "Delivered Project",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            name: "Pre - Launched Project",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            name: "Running Project",
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ jsx_runtime.jsx(CardComponentStyle, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mainSliderDiv",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Container, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h2",
                                children: "Featured Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h6",
                                children: "Featured Residential Projects Across India"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        mt: 5,
                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
                            ...settings,
                            ref: sliderRef,
                            children: projectDetails.map((data, index)=>{
                                return /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                    item: true,
                                    lg: 3,
                                    md: 6,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                        display: "flex",
                                        justifyContent: "center",
                                        height: "100%",
                                        pb: "20px",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                className: "cards",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                        className: "circleimg",
                                                        style: {
                                                            backgroundImage: "url('/images/meteryard/Images/Screenshot 2023-09-02 100309.png')"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                        className: "contentBox",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                variant: "h5",
                                                                children: "BLK 7-1005, Vascon Tulips Gold"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                variant: "h4",
                                                                children: "BLK 7-1005, Vascon Tulips Gold"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                variant: "h6",
                                                                children: "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                                m: "10px 0",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                                                                    color: "#D2D2D2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                variant: "h4",
                                                                                children: "Property Size"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                variant: "h5",
                                                                                children: "900 Sqr Ft."
                                                                            })
                                                                        ]
                                                                    }),
                                                                    "\xa0\xa0 \xa0\xa0",
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                variant: "h4",
                                                                                children: "Property Size"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                variant: "h5",
                                                                                children: "900 Sqr Ft."
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(component_ButtonComponent, {})
                                                        ]
                                                    })
                                                ]
                                            }),
                                            " "
                                        ]
                                    })
                                });
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_CardComponent = (CardComponent);

;// CONCATENATED MODULE: external "@mui/icons-material/FmdGood"
const FmdGood_namespaceObject = require("@mui/icons-material/FmdGood");
var FmdGood_default = /*#__PURE__*/__webpack_require__.n(FmdGood_namespaceObject);
;// CONCATENATED MODULE: ./src/component/ResidentialProjects.js







const ResidentStyle = styled_default()("Box")(({ theme })=>({
        "& .mainSliderDiv": {
            marginTop: "20px",
            background: "#fff",
            padding: "50px",
            "& h2": {
                fontWeight: "500"
            }
        },
        "& .circleimg": {
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "164px",
            "& h6": {
                color: "#A7D325",
                fontSize: "14px"
            },
            "& svg": {
                color: "#A7D325"
            }
        },
        "& .large": {
            background: "#FFF"
        },
        "& .cards": {
            cursor: "pointer",
            width: "100%",
            borderRadius: "15px",
            position: "relative",
            "& .contentBox": {
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: "10px",
                marginTop: "-30px",
                background: "#fff",
                borderRadius: "10px",
                position: "relative",
                "& svg": {
                    color: "#000",
                    fontSize: "16px"
                },
                "& .circleBox": {
                    borderRadius: "50px",
                    height: "50px",
                    width: "50px",
                    marginTop: "-35px",
                    background: "darkslategray",
                    display: "flex",
                    alignItems: "center"
                },
                "& h5": {
                    fontSize: "12px",
                    textAlign: "start",
                    fontWeight: "bold",
                    padding: "5px",
                    marginTop: "-10px"
                },
                "& h4": {
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "500"
                },
                "& h6": {
                    fontSize: "10px",
                    color: "#818181",
                    fontWeight: "500",
                    margin: "5px 5px"
                }
            },
            "& h5": {
                textAlign: "end",
                fontSize: "18px"
            }
        }
    }));
const ResidentialProjects = ()=>{
    const projectDetails = [
        {
            image: "/images/meteryard/Images/Image 23.png"
        },
        {
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
        },
        {
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
        },
        {
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100420.png"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(ResidentStyle, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mainSliderDiv",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Container, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h2",
                                children: "Residential Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h6",
                                children: "Featured Residential Projects Across India"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        mt: 5,
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                            container: true,
                            spacing: 3,
                            children: projectDetails.map((data, index)=>{
                                return /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                    item: true,
                                    lg: 3,
                                    md: 3,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                        display: "flex",
                                        justifyContent: "center",
                                        height: "100%",
                                        pb: "20px",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                            className: "cards",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                    className: "circleimg",
                                                    style: {
                                                        backgroundImage: `url('${data?.image}')`
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                        className: "contentBox",
                                                        width: "90%",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                                        className: "circleBox",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                                            maxWidth: 50,
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                src: "/images/meteryard/Graphics/Group 7803.png"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                        variant: "h5",
                                                                        children: "BLK 7-1005, Vascon Tulips Gold"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                display: "flex",
                                                                mt: 1,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx((FmdGood_default()), {}),
                                                                    "\xa0",
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                        m: "0 0 0 5px",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                variant: "h4",
                                                                                children: "BLK 7-1005, Vascon Tulips Gold"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                variant: "h6",
                                                                                children: "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It OnThe Top And The Bottom Of Your Oral Cavity."
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                                                m: "10px 0",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                                                                                    color: "#D2D2D2"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                justifyContent: "space-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                                variant: "h6",
                                                                                                children: "Property Size"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                                variant: "h5",
                                                                                                children: "900 Sqr Ft."
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                                variant: "h6",
                                                                                                children: "Price"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                                variant: "h5",
                                                                                                children: "2,75000/-"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(component_ButtonComponent, {})
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                });
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_ResidentialProjects = (ResidentialProjects);

;// CONCATENATED MODULE: ./src/component/CommercialProjects.js







const Commercialstyle = styled_default()("Box")(({ theme })=>({
        "& .mainSliderDiv": {
            background: "#fff",
            padding: "50px",
            "& h2": {
                fontWeight: "500"
            }
        },
        "& .circleimg": {
            width: "90%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "125px",
            zIndex: 1,
            "& h6": {
                color: "#A7D325",
                fontSize: "14px"
            },
            "& svg": {
                color: "#A7D325"
            }
        },
        "& .large": {
            background: "#FFF"
        },
        "& .cards": {
            cursor: "pointer",
            width: "100%",
            borderRadius: "15px",
            position: "relative",
            "& .contentBox": {
                boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                padding: "10px",
                marginTop: "-30px",
                background: "#fff",
                borderRadius: "10px",
                position: "relative",
                "& svg": {
                    color: "#000",
                    fontSize: "16px"
                },
                "& h5": {
                    fontSize: "12px",
                    textAlign: "start",
                    fontWeight: "bold",
                    padding: "5px",
                    marginTop: "-10px"
                },
                "& h4": {
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "500"
                },
                "& h6": {
                    fontSize: "10px",
                    color: "#818181",
                    fontWeight: "500",
                    margin: "5px 5px"
                }
            },
            "& h5": {
                textAlign: "end",
                fontSize: "18px"
            }
        }
    }));
const CommercialProjects = ()=>{
    const projectDetails = [
        {
            image: "/images/meteryard/Images/Image 23.png"
        },
        {
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
        },
        {
            image: "/images/meteryard/Images/Image 23.png"
        },
        {
            image: "/images/meteryard/Images/Screenshot 2023-09-02 100420.png"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(Commercialstyle, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mainSliderDiv",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Container, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h2",
                                children: "Commercial Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h6",
                                children: "Featured Residential Projects Across India"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        mt: 18,
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                            container: true,
                            spacing: 2,
                            children: projectDetails.map((data, index)=>{
                                return /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                    item: true,
                                    lg: 3,
                                    md: 3,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                        display: "flex",
                                        justifyContent: "center",
                                        height: "100%",
                                        pb: "20px",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                            className: "cards",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                display: "flex",
                                                justifyContent: "center",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                    className: "contentBox",
                                                    width: "90%",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                m: "-75px 0 0 0",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                                    className: "circleimg",
                                                                    style: {
                                                                        backgroundImage: `url('${data?.image}')`
                                                                    }
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                            variant: "h5",
                                                            style: {
                                                                padding: "20px 25px 9px"
                                                            },
                                                            children: "BLK 7-1005, Vascon Tulips Gold"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                            display: "flex",
                                                            mt: 1,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx((FmdGood_default()), {}),
                                                                "\xa0",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                    m: "0 0 0 5px",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                            variant: "h4",
                                                                            children: "BLK 7-1005, Vascon Tulips Gold"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                            variant: "h6",
                                                                            children: "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                                                            m: "10px 0",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                                                                                color: "#D2D2D2"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "space-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                            variant: "h6",
                                                                                            children: "Property Size"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                            variant: "h5",
                                                                                            children: "900 Sqr Ft."
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                            variant: "h6",
                                                                                            children: "Price"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                                                            variant: "h5",
                                                                                            children: "2,75000/-"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx(component_ButtonComponent, {})
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }, index)
                                });
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const component_CommercialProjects = (CommercialProjects);

;// CONCATENATED MODULE: ./src/pages/index.js









function ClientPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
        mb: 5,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Banner["default"], {}),
            /*#__PURE__*/ jsx_runtime.jsx(component_SliderComponent, {}),
            /*#__PURE__*/ jsx_runtime.jsx(component_CardComponent, {}),
            /*#__PURE__*/ jsx_runtime.jsx(component_ResidentialProjects, {}),
            /*#__PURE__*/ jsx_runtime.jsx(component_CommercialProjects, {})
        ]
    });
}
ClientPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(HomeLayout, {
        children: page
    });
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: pages_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 5614:
/***/ (() => {



/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [259,812,429,78,771], () => (__webpack_exec__(4162)));
module.exports = __webpack_exports__;

})();