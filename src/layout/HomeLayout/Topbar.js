"use client";
import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Hidden,
  Box,
  Container,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Logo from "../../component/Logo";
import styled from "@emotion/styled";
import MenuComponent from "../../component/MenuComponent";
import DialogComponent from "../../component/DialogComponent";
import { useRouter } from "next/router";
import LoginDialog from "../../component/LoginDialog";
import "../../Scss/border.css";
import Apiconfigs from "@/ApiConfig/ApiConfig";
import { getAPIdata } from "@/utils";
import { AuthContext } from "../../context/Auth";
import CloseIcon from "@mui/icons-material/Close";
import ProfileMenu from "../../component/ProfileMenu";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .appbarBox": {
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
      "& span": {
        color: "#000",
        fontFamily: "system-ui",
        fontWeight: "500",
        cursor: "pointer",
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
        background: "#343A40 ",
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
  const auth = useContext(AuthContext);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [_openDialog, setOpenDialog] = useState(false);
  const [_openDialogLogin, setOpenDialogLogin] = useState(false);
  const [_selectScreen, setSelectScreen] = useState("");
  const [_signcomplete, setSignUpComplete] = useState(false);
  const [_accesstoken, setAccessToken] = useState(null);
  console.log("_accesstoken--->", _accesstoken);
  const GetProfileFunction = async () => {
    try {
      const res = await getAPIdata({
        endPoint: Apiconfigs?.myProfile,
        data: window.sessionStorage.getItem("token"),
      });
      if (res) {
        auth?.setGetProfile(res?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
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
  useEffect(() => {
    GetProfileFunction();
  }, []);
  useEffect(() => {
    setAccessToken(sessionStorage.getItem("token"));
  }, [sessionStorage.getItem("token")]);
  const femmecubatorLogo = (
    <Box className="LogoBox">
      <Link href="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  );
  {
  }

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
            {femmecubatorLogo}
          </Box>
          <Box className="close-icon">
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className={"ContentBox"}>
            <Box className="flexJustify" width={"100%"}>
              <Box className="flexAlign">
                <MenuComponent />
              </Box>
              {router.pathname == "/" && (
                <Box p={"10px 25px 0 0"}>
                  <Button className="rainbowGradient" onClick={handleClickOpen}>
                    My Citychat
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
          <Box className="flexAlign for-svg-design" p={"0 0 0 30px"}>
            <>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {_accesstoken == null ? (
                <>
                  <span
                    onClick={() => {
                      handleClickOpenLogin("Login");
                      console.log("nksdnkndsnfk");
                    }}
                  >
                    Login
                  </span>
                  <span onClick={() => handleClickOpenLogin("Sign Up")}>
                    /Sign Up
                  </span>
                </>
              ) : (
                <ProfileMenu setAccessToken={setAccessToken} />
              )}
            </>
          </Box>
          <DialogComponent
            open={_openDialog}
            setOpen={setOpenDialog}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
          />
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
                    <CallIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography variant="body1">
                      011-41219999 | 09999-127085
                    </Typography>
                  </Box>
                  <Box className="flexAlign" p={"0 0 0 30px"}>
                    <WhatsAppIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography variant="body1">whatsapp us</Typography>
                  </Box>
                </Box>
                <Box className="flexAlign" p={"0 0 0 30px"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {_accesstoken == null ? (
                    <>
                      <span onClick={() => handleClickOpenLogin("Login")}>
                        Login
                      </span>
                      <span onClick={() => handleClickOpenLogin("Sign Up")}>
                        /Sign Up
                      </span>
                    </>
                  ) : (
                    <ProfileMenu setAccessToken={setAccessToken} />
                  )}
                </Box>
              </Box>
              <Box className={"ContentBox"}>
                <Box className="flexJustify" width={"100%"}>
                  <Box className="flexAlign">
                    <MenuComponent />
                  </Box>
                  {router.pathname == "/" && (
                    <Box p={"10px 25px 0 0"}>
                      <Button
                        className="rainbowGradient"
                        onClick={handleClickOpen}
                      >
                        My Citychat
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <DialogComponent
          open={_openDialog}
          setOpen={setOpenDialog}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
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
      </Box>
    );
  };
  return (
    <MainComponent>
      <AppBar elevation={0} className={"appbarBox"}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </MainComponent>
  );
}
