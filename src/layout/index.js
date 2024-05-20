import React from "react";
import "./globals.css";
import {
  Container,
  Box,
  ThemeProvider,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Logo from "../pages/components/home/Logo";
import { createTheme } from "../theme";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { color } from "@mui/system";

const layOutcss = styled("Box")(({ theme }) => ({
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
      "& p": {
        color: "#000",
      },
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
    "& button": {
      borderRadius: "50px",
      color: "#fff",
      background:
        "linear-gradient(#fff, #fff) padding-box, linear-gradient(80deg, #ff001f, #e50b17,#3dfb15,#FBB415,#FBB415) border-box",
      border: "3px solid transparent",
      color: "grey",
    },
  },
}));

function PageLayout({ children }) {
  // const classes = useStyles();
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <layOutcss>
        <AppBar position="static" className={"appbarBox"}>
          <Toolbar
            style={{
              padding: "0px",
            }}
          >
            <Box className={"flexJustify"} width={"100%"} alignItems={"center"}>
              <Grid container>
                <Grid
                  item
                  lg={4}
                  md={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Box p={"0 0 0 85px"}>
                    <Container>
                      <Logo />
                    </Container>
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
                        {/* <Box className="flexAlign" p={"0 0 0 30px"}>
                          <WhatsAppIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                          <Typography variant="body1">whatsapp us</Typography>
                        </Box> */}
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
                            <Typography
                              variant="body1"
                              style={{ color: "#fff" }}
                            >
                              Property Type
                            </Typography>
                          </Box>
                        </Box>
                        <Box p={"0 120px 0 0"} className={"JoinLiveChatBox"}>
                          <Button>Join live chat</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
        <Box mt={3}>{children}</Box>
      </layOutcss>
    </ThemeProvider>
  );
}

export default PageLayout;
