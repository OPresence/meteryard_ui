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
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "src/component/Logo";
import styled from "@emotion/styled";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .appbarBox": {
    background: "#fff ",
    boxShadow: "none ",
    "& .flexJustify": {
      display: "flex",
      justifyContent: "space-between",
    },
    "& .flexAlign": {
      display: "flex",
      alignItems: "center",
    },
  },
  "& .TopIconBox": {
    "& .TopIconBoxChild": {
      padding: "10px 120px  ",
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
      padding: "10px 0px 10px 120px ",
      clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%) ",
    },
  },

  "& .JoinLiveChatBox": {
    display: "flex",
    alignItems: "center",

    // "& button": {
    //   borderRadius: "50px",
    //   color: "#fff",
    //   background:
    //     "linear-gradient(#fff, #fff) padding-box, linear-gradient(80deg, #ff001f, #e50b17,#3dfb15,#FBB415,#FBB415) border-box",
    //   border: "3px solid transparent",
    //   color: "grey",
    // },
  },
}));

export default function Topbar() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  useEffect(() => {
    const setResponsiveness = () => {
      setState((prevState) => ({
        ...prevState,
        mobileView: window.innerWidth < 1080,
      }));
    };

    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
    };
  }, []);
  const femmecubatorLogo = (
    <Box maxWidth={230}>
      <Link href="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  );

  const displayMobile = () => {
    return (
      <Toolbar className={""}>
        <Hidden xsDown>
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
            >
              {femmecubatorLogo}
            </Box>
            {/* <Box mr={1} ml={1}>
              <Button variant="contained" fullWidth>
                Sign Up
              </Button>
            </Box> */}
          </Drawer>
        </Hidden>
        <Box
          className="topbarmainBox"
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
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
            <Box p={"0 0 0 85px"}>
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
                  <PermIdentityIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography variant="body1">Login/Sign Up</Typography>
                </Box>
              </Box>
              <Box className={"ContentBox"}>
                <Box className="flexJustify" width={"100%"}>
                  <Box className="flexAlign">
                    <Typography variant="body1" style={{ color: "#fff" }}>
                      Cities
                    </Typography>
                    <Box p={"0 0 0 70px"}>
                      <Typography variant="body1" style={{ color: "#fff" }}>
                        Property Type
                      </Typography>
                    </Box>
                  </Box>
                  <Box p={"0 120px 0 0"} className={"JoinLiveChatBox"}>
                    <Button className="button">My Citychat</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };
  return (
    <MainComponent>
      <AppBar elevation={0} className={"appbarBox"}>
        <Box>{mobileView ? displayMobile() : displayDesktop()}</Box>
      </AppBar>
    </MainComponent>
  );
}
