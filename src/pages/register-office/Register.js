import HomeLayout from "@/layout/HomeLayout";
import React from "react";
import styled from "@emotion/styled";

import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

import {
  Box,
  Button,
  Container,
  Typography,
  FormControl,
  TextField,
  Grid,
  Select,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";

const Registers = styled("Box")(({ theme }) => ({
  "& .registerpara": {
    height: "670px",
    width: "100%",
    background: "#B4C584",
    "@media(max-width:992px)": {
      height: "1000px",
    },
    "@media(max-width:768px)": {
      height: "875px",
    },
    "@media(max-width:426px)": {
      height: "780px",
    },
    "@media(max-width:321px)": {
      height: "840px",
    },
  },
  "& .registerBanner": {
    position: "relative",
  },
  "& .registeroffice1": {
    display: "flex",
    justifyContent: "center",
    "@media(max-width:615px)": {
      height: "auto",
      marginTop: "0px",
    },
  },

  "& .registeroffice": {
    position: "absolute",
    height: "890px",
    width: "98%",
    background: "#fff",
    top: "20%",
    left: "10%",
    borderRadius: "100px 100px",
    transform: "rotate(-10deg)",
    display: "flex",
    justifyContent: "center",
    "@media(max-width:1200px)": {
      height: "initial",
    },

    // "@media(max-width:321px)": {
    //   top: "7%",
    // },
  },
  "& .registercontent": {
    height: "800px",
    // width: "60%",
    position: "reletive",
    top: "20px",
    // background: "red",
    transform: "rotate(10deg)",
    textAlign: "center",
    marginTop: "45px",
    font: "normal normal bold 36px/45px Samsung Sharp Sans",

    "& h2": {
      "@media(max-width:499px)": {
        fontSize: "21px !important",
      },
      "@media(max-width:321px)": {
        fontSize: "15px !important",
        textAlign: "left",
      },
      "@media(max-width:426px)": {
        fontSize: "14px !important",
      },
    },
    "& h6": {
      "@media(max-width:499px)": {
        fontSize: "11px !important",
      },
      "@media(max-width:321px)": {
        textAlign: "left !important",
      },
    },

    "& h3": {
      "@media(max-width:499px)": {
        fontSize: "11px !important",
      },
      "@media(max-width:321px)": {
        fontSize: "9px !important",
        textAlign: "left",
      },
    },
    "@media(max-width:1200px)": {
      height: "initial",
      marginTop: "25px",
    },
  },
  "& .iconbox": {
    height: "100px",
    width: "100%",

    // background:"black",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    "@media(max-width:321px)": {
      justifyContent: "flex-start",
    },
  },
  "& .iconbox1": {
    height: "100px",
    width: "80%",
    top: "50px",
    gap: "10px",
    display: "flex",
    justifyContent: "space-between",
    // background:"red",
    "@media(max-width:615px)": {
      height: "50px",
    },
  },
  "& .phonebox": {
    height: "100px",
    width: "30%",
    //  background:"#B4C584",
    "@media(max-width:615px)": {
      width: "80%",
      height: "20px",
      h6: {
        fontSize: "2px",
      },
    },
    "& h6": {
      "@media(max-width:499px)": {
        fontSize: "11px !important",
      },
    },
    "@media(max-width:499px)": {
      fontSize: "25px",
    },
  },
  "& .emailbox": {
    height: "100px",
    width: "30%",
    //  background:"#B4C584",
    "@media(max-width:615px)": {
      width: "80%",
      height: "20px",
      h6: {
        fontSize: "2px",
      },
    },
    "& h6": {
      "@media(max-width:499px)": {
        fontSize: "11px !important",
      },
    },
    "@media(max-width:499px)": {
      fontSize: "25px",
    },
  },
  "& .whatsappbox": {
    height: "100px",
    width: "30%",
    "& h6": {
      "@media(max-width:499px)": {
        fontSize: "11px !important",
      },
    },
    "@media(max-width:499px)": {
      fontSize: "25px",
    },
    "@media(max-width:615px)": {
      width: "80%",
      height: "20px",
      h6: {
        fontSize: "2px",
      },
    },
  },
  "& .carebox1": {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    "@media(max-width:321px)": {
      justifyContent: "start",
    },
  },
  "& .carebox": {
    background: "#9CC525",
    padding: "13px 100px",
    borderRadius: "30px 30px",
    "& h2": {
      "@media(max-width:768px)": {
        fontSize: "16px",
      },
      "@media(max-width:499px)": {
        fontSize: "11px",
      },
      "@media(max-width:321px)": {
        fontSize: "10px !important",
      },
    },

    "@media(max-width:699px)": {
      padding: "13px 50px",
    },
  },
  "& .contactbox": {
    // background:"red",
    marginTop: "20px",
    "@media(max-width:1200px)": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    "@media(max-width:321px)": {
      width: "100%",
      display: "flex",
      justifyContent: "start",
    },
  },

  "& .addressbox": {
    marginTop: "30px",
    "@media(max-width:499px)": {
      marginTop: "15px",
    },
    "& p": {
      fontFamily: "system-ui",
      textAlign: "center",
      "@media(max-width:499px)": {
        fontSize: "11px !important",
      },
      "@media(max-width:321px)": {
        fontSize: "10px !important",
      },
    },
  },
  "& .btn": {
    marginTop: "10px",
  },
  "& Button": {
    height: "35px",
    width: "20%",
    color: "#FFFFFF",
    background: "#A2B178",
    fontSize: "15px",
    fontWeight: "200",
    clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    "@media(max-width:768px)": {
      width: "30%",
    },
    "@media(max-width:499px)": {
      width: "50%",
    },
  },
  "& .contactbox1": {
    width: "100%",
    textAlign: "center",
    "@media(max-width:1200px)": {
      width: "70%",
      paddingBottom: "15px",
    },
    "@media(max-width:499px)": {
      width: "63%",
      paddingBottom: "15px",
    },
    "@media(max-width:321px)": {
      width: "84%",
      paddingBottom: "15px",
    },

    "& h3": {
      color: "#114A82",
      fontWeight: 500,
      fontSize: "30px",
      "@media(max-width:1200px)": {
        fontSize: "25px",
      },
    },
    "& h6": {
      color: "#707070",
      paddingBottom: "20px",
      "@media(max-width:1200px)": {
        fontSize: "13px",
      },
    },
  },
  "& .inputField": {
    width: "100%",
    "& input": {
      width: "100%",
      border: "1px solid #CCCECE",
      borderRadius: "5px",
      // "@media(max-width:992px)": {
      //   // paddingBottom: "15px",
      //   height: "4px",
      // },
    },
  },
  "& .textArea": {
    padding: "10px",
    width: "100%",
    resize: "none",
    backgroundColor: "transparent",
    border: "1px solid #CCCECE",
    borderRadius: "5px",
    "@media(max-width:992px)": {
      // height: "4px",
    },
  },
  // "& .selectbox": {
  //   height: "40px",
  // },
  "& .registerBanner1": {
    "@media(max-width:321px)": {
      marginTop: "57px",
    },
  },
  "& .imgBx": {
    "@media(max-width:768px)": {
      height: "402px",
    },
    "@media(max-width:321px)": {
      height: "300px",
    },
  },
}));

function Register() {
  return (
    <HomeLayout>
      <Registers>
        <Box className="registerBanner">
          <Container maxWidth>
            <Box className="registerBanner1">
              <Box maxWidth={1400} className="imgBx">
                <img
                  src="/images/google-placeholder.png"
                  alt="Placeholder Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
            <Box className="registeroffice1">
              <Box className="registeroffice">
                <Box className="registercontent">
                  <Typography
                    variant="h2"
                    style={{ fontSize: "25px", fontWeight: "500" }}
                  >
                    Registered Office:
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#717272",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    meteryard pvt ltd
                  </Typography>
                  <Typography variant="h3" style={{ fontSize: "12px" }}>
                    B-2/1A, Africa Avenue Road, Opposite St. Thomas Church,
                    <br /> Safdarjung Enclave New Delhi – 110029
                  </Typography>
                  <Box className="addressbox">
                    <Typography
                      variant="h6"
                      style={{
                        color: "#717272",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      National Reference Laboratory:
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#464646",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      meteryard pvt ltd
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#0A0B0C",
                        fontSize: "15px",
                        fontWeight: "300",
                      }}
                    >
                      A-17, Infocity,Sector-34 Gurugram, Haryana – 122001
                    </Typography>
                  </Box>
                  <Box className="iconbox">
                    <Box className="iconbox1">
                      <Box className="phonebox ">
                        <FiPhoneCall style={{ color: "#24A0B8" }} />
                        <Typography
                          variant="h6"
                          style={{ fontSize: "14px", fontWeight: "200" }}
                        >
                          Phone number
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{ fontSize: "11px", fontWeight: "200" }}
                        >
                          0124 6650000
                        </Typography>
                      </Box>
                      <Box className="emailbox ">
                        <TfiEmail style={{ color: "#24A0B8" }} />
                        <Typography
                          variant="h6"
                          style={{ fontSize: "14px", fontWeight: "200" }}
                        >
                          Email ID
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{ fontSize: "11px", fontWeight: "200" }}
                        >
                          life@oncquest.net
                        </Typography>
                      </Box>
                      <Box className="whatsappbox ">
                        <FaWhatsapp style={{ color: "#24A0B8" }} />
                        <Typography
                          variant="h6"
                          style={{ fontSize: "14px", fontWeight: "200" }}
                        >
                          Whatsapp On:
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{ fontSize: "11px", fontWeight: "200" }}
                        >
                          7065350350
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="carebox1">
                    <Box className="carebox">
                      <Typography variant="h2" style={{ color: "#F8F8FE" }}>
                        National Customer Care: 0124 6650000
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="contactbox">
                    <Box className="contactbox1">
                      <Typography variant="h3">Conatct Us</Typography>
                      <Typography variant="h6">
                        Please fill in your details below and we will get back
                        to you. Thanks
                      </Typography>

                      <Box className="gridBox">
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box className="inputField">
                              <TextField
                                type="text"
                                placeholder="Name"
                                fullWidth
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box className="inputField">
                              <TextField
                                type="text"
                                placeholder="Mobile Number"
                                fullWidth
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box className="inputField">
                              <TextField
                                type="text"
                                placeholder="Email Id"
                                fullWidth
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Box className="inputField">
                              <Select fullWidth value={1} className="selectbox">
                                <MenuItem value={1} disabled>
                                  City
                                </MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <MenuItem value={3}>Option 3</MenuItem>
                              </Select>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box className="inputField">
                              <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Message"
                                minRows={6}
                                className="textArea"
                              />
                            </Box>
                          </Grid>
                        </Grid>

                        <Box className="btn">
                          <Button type="submit" variant="contained">
                            SUBMIT
                            <GoArrowRight />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="registerpara"></Box>
            </Box>
          </Container>
        </Box>
      </Registers>
    </HomeLayout>
  );
}

export default Register;
