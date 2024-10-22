"use client";
import { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Box,
  Container,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Logo from "../component/Logo";
import styled from "@emotion/styled";
import MenuComponent from "../component/MenuComponent";
import DialogComponent from "../component/DialogComponent";
import { useRouter } from "next/router";
import LoginDialog from "../component/LoginDialog";
import { AuthContext } from "../context/Auth";
import CloseIcon from "@mui/icons-material/Close";
import ProfileMenu from "../component/ProfileMenu";
import MobilerMenu from "../component/MobileMenu";
import RegisterModal from "../component/registerSellerModal/RegisterModal";
const MenuStyle = styled(Box)(({ theme }) => ({
  "& .hidebox": {
    display: "block",
    "@media(max-width:615px)": {
      display: "none !important",
    },
  },
  "& .cityChat": {
    padding: "0",
    display: "none",

    "@media(max-width:615px)": {
      display: "block !important",
    },
  },
  "& .MobileMenu": {
    display: "none",

    "@media(max-width:615px)": {
      display: "block !important",
    },
  },
  "& .LoginButton": {
    marginTop: "20px",
    padding: "5px 20px",
    background: "#444444",
    border: "1px solid #fff",
    color: "#fff",
    // clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    "&:hover": {
      background: "#fff",
      color: "#444444",
      border: "1px solid #fff",
    },
  },
}));

const MainComponent = styled(Box)(({ theme }) => ({
  "& .appbarBox": {
    width: "100vw",
    left: "0 !important",
    background: "#fff ",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    boxShadow: "0px 1px 13px #00000026",

    "& .flexJustify": {
      display: "flex",
      justifyContent: "space-between",
    },

    "& .flexAlign": {
      display: "flex",
      alignItems: "center",
      "& p": {
        fontSize: "16px !important",
        color: "#000",
      },
      // "@media(max-width:615px)": {
      //   display: "none",
      // },
      "& span": {
        color: "#000",
        fontFamily: "system-ui",
        fontWeight: "500",
        cursor: "pointer",
      },
      "& .icon1": {
        backgroundColor: "#00008B",
      },
      "& .icon2": {
        backgroundColor: "#A7D325",
      },
    },
  },
  "& .TopIconBox": {
    "& .TopIconBoxChild": {
      padding: "10px 25px  ",
      display: "flex",
      justifyContent: "space-between",
      "& svg": {
        color: "#fff ",

        padding: "5px ",
        fontSize: "28px ",
        borderRadius: "50px ",
      },
    },
    "& .ContentBox": {
      background: "#444444 ",
      display: "flex",
      alignItems: "center",
      padding: "0 0px 0 120px ",
      clipPath: "polygon(6% 0%, 100% 0%, 100% 700%, -35% 700%) ",
    },
  },

  "& .JoinLiveChatBox": {
    display: "flex",
    alignItems: "center",
    "& .buttonclass": {
      borderRadius: "50px",
      color: "grey",
      background:
        "linear-gradient(#fff, #fff) padding-box,\n  linear-gradient(80deg, #ff001f, #e50b17, #3dfb15, #FBB415, #FBB415) border-box",
      border: "3px solid transparent",
      animation: "borderBlink 1s infinite",
    },
  },
  "& .LogoBox": {
    maxWidth: "230px",
    "@media(max-width:1080px)": {
      maxWidth: "140px",
    },
  },
}));
export default function Topbar() {
  // const auth = useContext(AuthContext);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [_openDialog, setOpenDialog] = useState(false);
  const [_openDialogLogin, setOpenDialogLogin] = useState(false);
  const [_selectScreen, setSelectScreen] = useState("");
  const [_signcomplete, setSignUpComplete] = useState(false);
  const [_accesstoken, setAccessToken] = useState(null);
  const [_open_city_dia, setOpenCity_dia] = useState(false);
  const [_signup_dia, setSignUpDia] = useState(false);

  const SignUpDialog = (value) => {
    setSignUpDia(true);
  };
  const router = useRouter();
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleClickOpenLogin = (value) => {
    setSelectScreen(value);
    setOpenDialogLogin(true);
    setSignUpComplete(false);
  };
  const handleCloseLogin = () => {
    setOpenDialogLogin(false);
  };
  const { mobileView, drawerOpen } = state;
  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  useEffect(() => {
    const setResponsiveness = () => {
      if (typeof window !== "undefined") {
        setState((prevState) => ({
          ...prevState,
          mobileView: window.innerWidth < 1080,
        }));
      }
    };
    setResponsiveness();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setResponsiveness);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", setResponsiveness);
      }
    };
  }, []);
  // useEffect(() => {
  //   GetProfileFunction();
  // }, []);
  useEffect(() => {
    setAccessToken(sessionStorage.getItem("token"));
  }, [sessionStorage.getItem("token")]);
  const femmecubatorLogo = (
    <Box display={"flex"} alignItems={"center"} gap={"20px"}>
      <Box className="LogoBox">
        <Link href="/">
          <Logo className="logoImg" />
        </Link>
      </Box>
      <Box>
        {/* <MenuStyle>
          <Box className="cityChat">
            <Button
              className="rainbowGradient"
              onClick={() =>
                router.push({
                  pathname: "/CityChat",
                  // query: { BuyerKey: "Buyer", search: "Buyer" },
                })
              }
            >
              My Citychat
            </Button>
          </Box>
        </MenuStyle> */}
      </Box>
    </Box>
  );

  const displayMobile = () => {
    return (
      <Toolbar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          style={{
            width: "260px",
            height: "100%",
            display: "flex",
            padding: "20px 0px 20px 20px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
            className={"forMobileView"}
          >
            <Box className="LogoBox">
              <Link href="/">
                <Logo className="logoImg" />
              </Link>
            </Box>
          </Box>
          <Box className="close-icon">
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <MenuStyle>
            <Box className={"ContentBox"}>
              <Box className="flexJustify" width={"100%"}>
                <Box className="hidebox">
                  <Box className="flexAlign">
                    <MenuComponent />
                  </Box>
                </Box>
                <Box className="MobileMenu">
                  <MobilerMenu />
                </Box>
              </Box>
            </Box>
            <Box className="flexAlign for-svg-design" p={"0 15px 0px 0px"}>
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {_accesstoken == null ? (
                  <>
                    {/* <Box className="cityChat"> */}
                    <Button
                      style={{
                        padding: "5px 30px",
                        background: "#A7D325",
                        borderRadius: "15px",
                      }}
                      className="LoginButton"
                      onClick={() => {
                        handleClickOpenLogin("Login");
                      }}
                    >
                      Login
                    </Button>
                    {/* </Box> */}
                    {/* &nbsp;&nbsp; &nbsp;&nbsp;
                    <Button
                      onClick={() => SignUpDialog()}
                      className="LoginButton"
                    >
                      Sign Up
                    </Button> */}
                  </>
                ) : (
                  <Box display={"flex"} justifyContent={"center"} mt={1}>
                    <ProfileMenu setAccessToken={setAccessToken} />
                  </Box>
                )}
              </>
            </Box>
          </MenuStyle>
          {_openDialog && (
            <DialogComponent
              open={_openDialog}
              setOpen={setOpenDialog}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
            />
          )}

          {_openDialogLogin && (
            <LoginDialog
              open={_openDialogLogin}
              setOpen={setOpenDialogLogin}
              handleClickOpen={handleClickOpenLogin}
              handleClose={handleCloseLogin}
              _selectScreen={_selectScreen}
              setSelectScreen={setSelectScreen}
              setSignUpComplete={setSignUpComplete}
              _signcomplete={_signcomplete}
            />
          )}
        </Drawer>
        <Box
          className="topbarmainBox"
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems="center"
        >
          <div>{femmecubatorLogo}</div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            style={{ background: "transparent" }}
          >
            <MenuIcon
              width="60px"
              height="60px"
              style={{ color: "#000", fontSize: "30px" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    );
  };
  const displayDesktop = () => {
    return (
      <Box className={"flexJustify"} width={"100%"} alignItems={"center"}>
        <Grid container>
          <Grid
            item
            lg={4}
            md={4}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Container>{femmecubatorLogo}</Container>
            </Box>
          </Grid>
          <Grid item lg={8} md={8}>
            <Box className={"TopIconBox"}>
              <Box className={"TopIconBoxChild"} alignItems={"enter"}>
                <Box display={"flex"} alignItems={"enter"}>
                  <Box className="flexAlign">
                    <CallIcon className="icon2" /> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="tel:7060604604"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography variant="body1">7060604604</Typography>
                    </a>
                  </Box>
                  <Box className="flexAlign" p={"0 0 0 30px"}>
                    <CallIcon className="icon2" /> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography variant="body1">
                      contact@meteryard.com
                    </Typography>
                  </Box>
                </Box>
                <Box className="flexAlign" p={"0 0 0 30px"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {_accesstoken == null ? (
                    <>
                      {/* <span onClick={() => handleClickOpenLogin("Login")}>
                        Login
                      </span> */}
                      <Button
                        style={{
                          padding: "5px 30px",
                          background: "#A7D325",
                          color: "#000",
                          borderRadius: "5px",
                        }}
                        className="LoginButton"
                        onClick={() => {
                          handleClickOpenLogin("Login");
                        }}
                      >
                        Login
                      </Button>
                      {/* <span onClick={() => SignUpDialog()}>/Sign Up</span> */}
                    </>
                  ) : (
                    <ProfileMenu setAccessToken={setAccessToken} />
                  )}
                </Box>
              </Box>
              <MenuStyle>
                <Box className={"ContentBox"}>
                  <Box className="flexJustify" width={"100%"}>
                    <Box className="hidebox">
                      <Box className="flexAlign">
                        <MenuComponent />
                      </Box>
                    </Box>
                    <Box className="MobileMenu">
                      <MobilerMenu />
                    </Box>
                    {/* {router.pathname == "/" && ( */}
                    {/* <Box
                      p={"0px 25px 0 0"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Button
                        className="rainbowGradient_new"
                        onClick={() =>
                          router.push({
                            pathname: "/CityChat",
                            // query: { BuyerKey: "Buyer", search: "Buyer" },
                          })
                        }
                      >
                        My Citychat
                      </Button>
                    </Box> */}
                    {/* )} */}
                  </Box>
                </Box>
              </MenuStyle>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };
  return (
    <MainComponent>
      <AppBar elevation={0} className={"appbarBox"}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <DialogComponent
        open={_openDialog}
        setOpen={setOpenDialog}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      {_signup_dia && (
        <RegisterModal
          open={_signup_dia}
          handleClickOpenLogin={SignUpDialog}
          setOpen={setSignUpDia}
        />
      )}

      {_openDialogLogin && (
        <LoginDialog
          open={_openDialogLogin}
          setOpen={setOpenDialogLogin}
          handleClickOpen={handleClickOpenLogin}
          handleClose={handleCloseLogin}
          _selectScreen={_selectScreen}
          setSelectScreen={setSelectScreen}
          setSignUpComplete={setSignUpComplete}
          _signcomplete={_signcomplete}
          SignUpDialog={SignUpDialog}
        />
      )}
    </MainComponent>
  );
}
