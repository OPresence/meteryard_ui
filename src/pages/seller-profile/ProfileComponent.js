import { useContext } from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  Avatar,
  Container,
  // Avatar
} from "@mui/material";
import styled from "@emotion/styled";
import { BiUserPlus } from "react-icons/bi";
import { AuthContext } from "../../context/Auth";
import ChatIcon from "@mui/icons-material/Chat";
const SellerStyle = styled("div")(({ theme }) => ({
  "& .container": {
    padding: "0px",
    background: "#fff",
    "& .gridShadow": {
      padding: "0 0 10px",
      borderRadius: "15px",
    },
    "& .GridClass": {
      boxShadow:
        "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
      marginTop: "40px",
      paddingBottom: "25px",
    },
    "& .ConnectBox": {
      display: "flex",
      gap: "10px",
      "& .backgrouncolor": {
        background: "#A9D910 !important",
        padding: "0 50px !important",
      },
      "& .connectButton": {
        color: "#000",
        boxShadow: "0px 3px 11px #00000029",
        background: "transparent",
        padding: "10px 30px",
        borderRadius: "10px",
        "& svg": {
          fontSize: "25px",
          color: "#000",
        },
      },
    },
  },
  "& .root": {
    width: "100%",
    padding: "25px 0 10px 0",
    marginTop: "62px",
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
        // borderRadius: "5px ",
        overflow: "hidden",
        "& img": {
          width: "100%",

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
        maxWidth: "200px",
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      "& .User": {
        position: "absolute",
        marginTop: "-40px",
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
      marginTop: "100px",
      "& h4": {
        fontWeight: "600 !important",
        color: "#444444",
        fontSize: "32px",
        textAlign: "left",
      },

      "& span": {
        marginTop: "10px",
        color: "#444444",
        fontSize: "18px",
        fontWeight: "600",
        color: "#00000099",
        fontFamily: "system-ui",
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
      padding: "12.4px",

      fontSize: "16px",
      [theme.breakpoints.down("sm")]: {
        padding: " 6px 23px",
        fontSize: "12px",
      },
    },
  },
}));
const ProfileComponent = () => {
  const auth = useContext(AuthContext);
  return (
    <SellerStyle>
      <Container maxWidth className="container">
        <Box className={"root"}>
          <Box className="gridShadow">
            <Box className="imgbox">
              <figure className="postImg">
                <img src={"/images/profile/Screenshot 2023-10-13 005104.png"} />
              </figure>
            </Box>
            <Box>
              <Container>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4} lg={4} md={4} className="GridClass">
                    <Box className="UserProfile">
                      <figure className="User">
                        <Avatar
                          src={
                            auth?.profilePicture == ""
                              ? "/images/profile/user-placeholder.png"
                              : auth?.profilePicture
                          }
                        />
                      </figure>
                    </Box>
                    <Box className="Username">
                      <Typography variant="h4">
                        {auth?._getprofile?.name}
                      </Typography>
                      <span>{auth?._getprofile?.userType}</span>
                    </Box>
                    <Box mt={2} className="ConnectBox">
                      <Button className="connectButton">
                        <BiUserPlus />
                        &nbsp;Connect
                      </Button>
                      <Button className="connectButton backgrouncolor">
                        <ChatIcon />
                        &nbsp;Chat
                      </Button>
                    </Box>
                  </Grid>
                  {/* <Grid xs={6} sm={3} lg={6} md={8}>
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
                      <Button className="connectButton">
                        <BiUserPlus />
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
              </Grid> */}
                </Grid>
              </Container>
            </Box>
          </Box>
        </Box>
      </Container>
    </SellerStyle>
  );
};

export default ProfileComponent;
