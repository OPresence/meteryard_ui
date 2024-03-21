import React from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  Avatar,
  Container,
} from "@mui/material";
import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeLayout from "../../layout/HomeLayout";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";

const SellerStyle = styled("div")(({ theme }) => ({
  "& .root": {
    width: "100%",
    padding: "25px 0 10px 0",
    marginTop: "112px",
    // boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
    "& .locationBox": {
      display: "flex",
      alignItems: "center",
      marginTop: "10px",
      textAlign: "center",
      "& h6": {
        fontSize: "12px",
        color: "#444444",
        fontWeight: "500",
      },
      "& span": {
        fontSize: "18px",
        color: "#444444",
        fontWeight: "600",
      },
    },
    "& .imgbox": {
      position: "relative",
      "& .postImg": {
        width: "100%",
        margin: "0 0 6px",
        borderRadius: "5px ",
        overflow: "hidden",
        "& img": {
          height: "318px",
          objectFit: "cover",
          "@media(max-width:767px)": {
            height: "150px",
          },
        },
      },
    },
    "& .UserProfile": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-20px",
      "& h4": {
        position: "absolute",
        top: "100px",
        left: "120px",
        "@media(max-width:1600px)": {
          display: "none",
        },
      },
      "@media (max-width: 599px)": {
        justifyContent: "left",
      },
      "& figure": {
        borderRadius: "50%",
        maxWidth: "150px",
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      "& .User": {
        position: "absolute",
        "& .MuiAvatar-root": {
          width: "190px",
          height: "190px",
          "@media (max-width: 768px)": {
            width: "120px",
            height: "120px",
            marginLeft: "65px",
          },
          [theme.breakpoints.down("xs")]: {
            marginLeft: "0px",
            width: "85px",
            height: "85px",
          },
        },

        "& img": {
          width: "100%",
          height: "100%",
          background: "#000",
        },
      },
    },

    "& .Username": {
      marginTop: "20px",
      "& h4": {
        fontWeight: "600 !important",
        color: "#444444",
        fontSize: "32px",
      },
      "& span": {
        marginTop: "10px",
        color: "#444444",
        fontSize: "14px",
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "20px",
        paddingTop: "10px",
      },
    },
    "& .follower": {
      display: "flex",
      alignItems: "center",
      paddingTop: "12px",
      "& p": {
        cursor: "pointer",
      },
    },
  },

  "& .pricetext": {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 10px",
    "& .IconBox": {
      padding: "12.5px",
      background: "#83a71b",
      "& svg": {
        color: "#fff",
      },
    },
    "& .btn1": {
      display: "flex",
      alignItems: "center",
      background: "#badf4e",
      borderRadius: 0,

      "& span": {
        fontSize: "14px",
        color: "#fff",
        fontWeight: "400",
      },
      padding: "10px 25px",

      fontSize: "16px",
      [theme.breakpoints.down("sm")]: {
        padding: " 6px 23px",
        fontSize: "12px",
      },
    },
  },
}));
const ProfileComponent = () => {
  return (
    <SellerStyle>
      <Container
        maxWidth
        style={{
          background: "#fff",
        }}
      >
        <Box className={"root"}>
          <Box className="imgbox">
            <figure className="postImg">
              <img src={"/images/profile/Screenshot 2023-10-13 005104.png"} />
            </figure>
          </Box>
          <Box
            style={{
              boxShadow:
                "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
              padding: "0 0 10px",
              borderRadius: "15px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} lg={3} md={2}>
                <Box className="UserProfile">
                  <figure className="User">
                    <Avatar src={"/images/profile/1567018939360.png"} />
                  </figure>
                </Box>
              </Grid>
              <Grid xs={6} sm={3} lg={6} md={8}>
                <Box className="Username">
                  <Typography color="primary.main" variant="h4">
                    Monu Rajput
                  </Typography>
                  <span>Customer Relationship Manager</span>
                </Box>
                <Grid container spacing={1}>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Box className="locationBox">
                        <LocationOnIcon />
                        <Typography variant="h6">
                          61 A, Anand Vihar ,Delhi
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box display={"flex"} justifyContent={"center"}>
                      <Box className="locationBox">
                        <BiLogoFacebook />
                        &nbsp;
                        <Typography variant="h6">Kevinsmith55</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box display={"flex"} justifyContent={"center"}>
                      <Box className="locationBox">
                        <BiLogoLinkedin />
                        &nbsp;
                        <Typography variant="h6">Kevin Smith55</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box display={"flex"} justifyContent={"center"}>
                      <Box className="locationBox">
                        <BsTwitter />
                        &nbsp;
                        <Typography variant="h6">Kevin Smith55</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={6}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      style={{ gap: "50px" }}
                    >
                      <Button
                        style={{
                          color: "#929292",
                          boxShadow: "0px 3px 11px #00000029",
                          background: "transparent",
                          padding: "10px 30px",
                        }}
                      >
                        <BiUserPlus
                          style={{ fontSize: "25px", color: "#929292" }}
                        />
                        &nbsp;Connect
                      </Button>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        style={{ gap: "20px" }}
                      >
                        <Box
                          className="locationBox"
                          style={{ display: "initial" }}
                        >
                          <Typography variant="h6">Follower&apos;s</Typography>
                          &nbsp;
                          <span>4.5</span>
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box
                          className="locationBox"
                          style={{ display: "initial" }}
                        >
                          <Typography variant="h6">Following</Typography>
                          &nbsp;
                          <span>4.5</span>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} sm={5} lg={3} md={2}>
                <Box className={"pricetext"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box className="IconBox">
                      <FaDownload />
                    </Box>
                    <Button className={"btn1"}>
                      <span>CATALOGOU</span>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </SellerStyle>
  );
};

export default ProfileComponent;
