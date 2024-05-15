import React, { useContext } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import { AuthContext } from "../context/Auth";
import { MdOutlineVideoChat } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    height: "15px",
  },
  "& .mainBox": {
    height: "100vh",
    "& .backImage": {
      maxWidth: "950px",
      maxHeight: "670px",
      overflow: "hidden",
      position: "relative",
      marginTop: "20px",
      "@media(max-width:900px)": {
        maxWidth: "753px",
        maxHeight: "575px",
        overflow: "hidden",
        position: "relative",
        marginTop: "20px",
      },
    },
  },

  "& .buttons": {
    borderRadius: "6px",
    padding: "20px",
    background: "#fff",
    boxShadow: "0px 3px 17px #00000029",
  },
  "& .videoButton": {
    position: "ralative",
    display: "flex",
    alignItems: "center",
    "& p": {
      textAlign: "left",
      font: "normal normal 600 21px/54px Montserrat",
      letterSpacing: "0px",
      color: "#444444",
      textTransform: "lowercase",
      fontSize: "20px",
      opacity: "1",
    },
  },
  "& .Banner_inputField_button": {
    boxShadow: "0px 3px 27px #68686829",
    background: "#FBB415 0% 0% no-repeat padding-box",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8px 0px 0px 8px;",
    alignItems: "center",
    width: "100%",
    height: "46px",
    "@media(max-width:615px)": {
      height: "40px",
    },
    "& h6": {
      fontSize: "18px",
      fontWeight: "600",
      color: "#444444",
      "@media(max-width:615px)": {
        fontSize: "14px",
      },
    },
  },
  "& .searchbox_button": {
    borderRadius: "0px 8px 8px 0px;",
    background: "#444444 0% 0% no-repeat padding-box",
    height: "46px",
    "& svg": {
      fontSize: "28px",
      color: "#FFFF",
    },
    "@media(max-width:615px)": {
      height: "40px",
    },
  },
  "& .BuyerBox": {},
}));

export default function ButtonSwitchComponent({
  handleClickOpen,
  setOpen,
  Type,
}) {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/all-property",
      query: { _id: "FEATURED" },
    });
  };
  return (
    <MainComponent>
      <Box>
        <Box className="mai1nBox">
          <Box>
            <Box className="BuyerBox">
              {Type == "Buyer" && (
                <Box className="buttons">
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "left",
                      font: "normal normal normal 13px/16px Montserrat",
                      letterSpacing: "0px",
                      color: "#AEAEAE",
                      textTransform: "capitalize",
                    }}
                  >
                    Please Select Your Category
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Box mt={3} className={"videoButton"}>
                        <Box
                          variant="outlined"
                          className={"Banner_inputField_button"}
                        >
                          <Typography variant="h6">Join city chat</Typography>
                        </Box>
                        <Button className="searchbox_button">
                          <MdOutlineVideoChat />
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Box mt={3} className={"videoButton"}>
                        <Box
                          variant="outlined"
                          className={"Banner_inputField_button"}
                          style={{
                            background: "#EFEFEF 0% 0% no-repeat padding-box",
                          }}
                        >
                          <Typography variant="h6">
                            Explore more property
                          </Typography>
                        </Box>
                        <Button
                         onClick={handleClick}
                          className="searchbox_button"
                          style={{
                            background: "#A7D325 0% 0% no-repeat padding-box",
                          }}
                        >
                          <HomeIcon />
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
            <Box>
              {Type == "Seller" && (
                <Box className="buttons">
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "left",
                      font: "normal normal normal 13px/16px Montserrat",
                      letterSpacing: "0px",
                      color: "#AEAEAE",
                      textTransform: "capitalize",
                    }}
                  >
                    Please Select Your Category
                  </Typography>
                  <Box width={"100%"}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Box mt={3} className={"videoButton"}>
                          <Box
                            variant="outlined"
                            className={"Banner_inputField_button"}
                          >
                            <Typography variant="h6">Join city chat</Typography>
                          </Box>
                          <Button className="searchbox_button">
                            <MdOutlineVideoChat />
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Box mt={3} className={"videoButton"}>
                          <Box
                            variant="outlined"
                            className={"Banner_inputField_button"}
                            style={{
                              background: "#EFEFEF 0% 0% no-repeat padding-box",
                            }}
                          >
                            <Typography variant="h6">
                              Property listing
                            </Typography>
                          </Box>
                          <Button
                            onClick={() => {
                              if (auth?._getprofile?.userType == "SELLER") {
                                router.push("property-post");
                              } else {
                                toast.error(
                                  "Only Seller post the property please login."
                                );
                              }
                            }}
                            className="searchbox_button"
                            style={{
                              background: "#A7D325 0% 0% no-repeat padding-box",
                            }}
                          >
                            <HomeIcon />
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Box mt={3} className={"videoButton"}>
                          <Box
                            variant="outlined"
                            className={"Banner_inputField_button"}
                            style={{
                              background: "#EFEFEF 0% 0% no-repeat padding-box",
                            }}
                          >
                            <Typography variant="h6">
                              Register as seller
                            </Typography>
                          </Box>
                          <Button
                            onClick={() => setOpen(true)}
                            className="searchbox_button"
                            style={{
                              background: "#ACACAC 0% 0% no-repeat padding-box",
                            }}
                          >
                            <PersonAddAltIcon
                            // style={{ fontSize: "28px", color: "#FFFF" }}
                            />
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </MainComponent>
  );
}
