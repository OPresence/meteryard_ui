import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { cityName } from "../../utils";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    // marginTop: "-120px",
    // position: "relative",
    // zIndex: 1,
    background: "#444444",
  },
  "& .footerSection": {
    background: "rgba(0,0,0,0.8)",

    padding: "60px 0 30px 0",
    "@media(max-width:615px)": {
      padding: "20px 0 20px 0",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
    },
  },

  "& .textFild": {
    position: "relative",

    "& button": {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      backgroundColor: "#A7D325",
      minWidth: "90px",
      fontSize: "18px",
      fontWeight: "700",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#A7D325",
      },
      "& svg": {},
    },
  },
  "& .footersabmenu": {
    textAlign: "left",
    "& h6": {
      fontSize: "14px",
      // paddingTop: "15px",
      maxWidth: "300px",
      fontWeight: 300,
      color: "#FFFF",
      "@media(max-width:615px)": {
        lineHeight: "31px",
      },
    },
    "& .emailsection": {
      marginTop: "40px",
      "@media(max-width:615px)": {
        marginTop: "25px",
      },
    },
  },
  "& .footer_menu_title": {
    "& h5": {
      color: "#FFFF",
      fontSize: "16px",
      fontWeight: 500,
      marginBottom: "10px",
    },
  },
  "& .socialicon": {
    display: "flex",
    gap: "15px",
    "& .iconButton": {
      width: "35px",
      height: "35px",
      background:
        "transparent linear-gradient(135deg, #4676ED 0%, #436DE4 19%, #3B54CD 49%, #2F2DA8 87%, #2B1E99 100%) 0% 0% no-repeat padding-box",
    },
    "& .icon": {
      color: "#FFF",
    },
  },
  "& .boderBox": {
    borderTop: "1px solid #f1f1f14d",
    display: "flex",
    alignItems: "center",
    padding: "20px 0",
    borderBottom: "1px solid #f1f1f14d",
    gap: "50px",
    "@media(max-width:615px)": {
      display: "block",
    },
  },

  "& .bottomFooter": {
    padding: "40px 0px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p": {
      color: "#FFF",
      fontWeight: 400,
      fontSize: "12px",
    },
  },
  "& .suscribe": {
    width: "10%",
    "@media(max-width:615px)": {
      width: "100%",
      marginBottom: "20px",
    },
    "& h5": {
      color: "#FFFF",
      fontWeight: 400,
      fontSize: "14px",
      "@media(max-width:615px)": {
        marginBottom: "10px",
      },
    },
  },
  "& .text": {
    color: "#FFF !important",
    fontWeight: 300,
    fontSize: "12px",
    marginTop: "0px !important",
  },
  "& .cityBox": {
    // display={"flex"}
    // alignItems={"center"}
    // justifyContent={"space-between"}
    // width={"100%"}
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    "@media(max-width:615px)": {
      display: "initial",
    },
    "& .city-item-footer": {
      "@media(max-width:615px)": {
        flexWrap: "nowrap",
        overflowX: "auto",
        marginLeft: "-10px",
      },
    },
  },
}));

const Footer = () => {
  return (
    <MainComponent>
      <Box className="mainBox">
        {" "}
        <Box
          className={"footerSection"}
          style={{ backgroundImage: "url('./images/footerIMG.png')" }}
        >
          <Container maxWidth>
            <Box
              style={{
                margin: "20px 10px 0",
                position: "relative",
                zIndex: "2",
              }}
            >
              <Grid container justify="space-around" spacing={1}>
                <Grid item xs={12} md={6} lg={5}>
                  <Box className={"footer_menu_title"}>
                    <Typography variant="h5">CONTACT US</Typography>
                  </Box>
                  <Box className={"footersabmenu"}>
                    <Typography variant="h6">
                      Meteryard helps users with multi-purpose information,
                      along with best real estate industry filters and useful
                      innovative technology keeping in mind the needs of buyers
                      and sellers in the real estate market along with
                      residential and commercial establishments and rental
                      properties.
                    </Typography>
                    <Box className={"emailsection"}>
                      <Typography variant="h6">
                        {" "}
                        Email: info@meteryard.com
                      </Typography>
                      <Typography variant="h6"> Phone: 9027659397</Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                  <Box className={"footer_menu_title"}>
                    <Typography variant="h5">CONTACT US</Typography>
                  </Box>
                  <Box className={"footersabmenu"}>
                    <Typography variant="h6">Home</Typography>

                    <Typography variant="h6">About Us</Typography>
                    <Typography variant="h6">Terms & Conditions</Typography>
                    <Typography variant="h6">Privacy Policy</Typography>
                    <Typography variant="h6">Contact Us</Typography>
                    <Typography variant="h6">Blog</Typography>
                    <Typography variant="h6"> Properties Listing</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4} align="left">
                  <Box className={"footer_menu_title"}>
                    <Typography variant="h5">SUBSCRIBE</Typography>
                    <Box className={"footersabmenu"}>
                      <Typography variant="h6">
                        Sign Up for Our Newsletter to get Latest Updates and
                        Offers. Subscribe to receive news in your inbox. Lorem
                        Ipsum been industry
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt={3} className={"textFild"}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      style={{
                        background: "#FFF",
                        color: "#000",
                        borderRadius: "4px",
                        padding: "0 86px 0 0",
                      }}
                      inputProps={{ maxLength: 120 }}
                      variant="outlined"
                      placeholder="EMAIL ADDRESS"
                    />
                    <Button>
                      <SendIcon />
                    </Button>
                  </Box>
                  <br />
                  <br />
                  <br />

                  <Box className={"footer_menu_title"}>
                    <Typography variant="h5">CONTACT US</Typography>
                    <Box className={"socialicon"}>
                      <IconButton
                        className="iconButton"
                        style={{
                          backgroundColor: "#2b4170",
                          background:
                            "-webkit-linear-gradient(top, #3b5998, #2b4170)",
                        }}
                      >
                        <BiLogoFacebook className="icon" />
                      </IconButton>
                      <IconButton
                        className="iconButton"
                        style={{
                          background:
                            "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                          filter:
                            "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
                        }}
                      >
                        <BsInstagram className="icon" />
                      </IconButton>
                      <IconButton
                        className="iconButton"
                        style={{
                          background: "#1DA1F2",
                        }}
                      >
                        <FiTwitter className="icon" />
                      </IconButton>
                      <IconButton className="iconButton">
                        <BiLogoLinkedin className="icon" />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <br />
              <Box className={"boderBox"}>
                <Box className={"suscribe"}>
                  <Typography variant="h5">OUR PRESENCE</Typography>
                </Box>
                <Box className="cityBox">
                  <Grid container spacing={3} className="city-item-footer">
                    {/* <Grid item lg={1} md={1} sm={2} xs={2}></Grid> */}
                    {cityName.map((data, index) => {
                      return (
                        <Grid item lg={1} md={3} sm={3} xs={4} key={index}>
                          <Box display={"flex"}>
                            <Typography variant="body1" className={"text"}>
                              {data?.name}
                            </Typography>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Typography variant="body1" className={"text"}>
                              |
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                    {/* <Grid item lg={1} md={1} sm={2} xs={2}></Grid> */}
                  </Grid>
                </Box>
              </Box>
              <Box className={"bottomFooter"}>
                <Box className={"lefttext"}>
                  <Typography variant="body1">
                    © 2023 MeterYard. All Rights Reserved.
                  </Typography>
                </Box>
                <Box className={"lefttext"}>
                  <Typography variant="body1">
                    Privacy Policy | Terms and Conditions | Disclaimer
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </MainComponent>
  );
};

export default Footer;
