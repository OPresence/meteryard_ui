import React from "react";
import { Box, Typography, Grid } from "@mui/material";
// import CardComponent from "./CardComponent";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const CardComponentStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    background: "#fff",
    // padding: "50px",
    "& h2": {
      fontWeight: "500",
    },
    "& .cardBox": {
      display: "flex",
      justifyItems: "center",
      height: "100%",
      paddingBlock: "20px",
      "@media(max-width:900px)": {
        marginTop: "90px",
      },
    },
  },

  "& .cards": {
    cursor: "pointer",
    width: "100%",
    borderRadius: "15px",
    position: "relative",
    transition: "0.8s",
    transform: "scale(0.9)",
    "&:hover": {
      transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
      padding: "10px",
      marginTop: "-30px",
      background: "#fff",
      borderRadius: "10px",
      position: "relative",
      width: "100%",
      "& svg": {
        color: "#000",
        fontSize: "16px",
      },

      "& h5": {
        fontSize: "12px",
        textAlign: "start",
        fontWeight: "bold",
        padding: "5px",
        marginTop: "-10px",
      },
      "& h4": {
        fontSize: "12px",
        color: "#000",
        fontWeight: "500",
      },
      "& h6": {
        fontSize: "10px",
        color: "#818181",
        fontWeight: "500",
        margin: "5px 5px",
      },
    },

    "& h5": {
      textAlign: "end",
      fontSize: "18px",
    },
  },
}));

const ResidentialProperty = () => {
  return (
    <CardComponentStyle>
      <Box className="SuggestionHeading">
        <Typography variant="h2">Residential Property</Typography>
        <Typography variant="body1">
          Featured Residential Projects Across India
        </Typography>

        <Box style={{ marginTop: "120px" }}>
          <Grid container>
            <Grid item xs={12} lg={3}>
              <Box className="cardBox">
                <Box className="cards">
                  <Box display={"flex"} justifyContent={"center"}>
                    <Box className="contentBox" width={"90%"}>
                      <Box>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          m={"-95px 0 0 0"}
                        >
                          <Box>
                            <img
                              src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                              width={"100%"}
                              height={"100%"}
                              alt="img"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        variant="h5"
                        style={{ padding: "20px 25px 9px" }}
                      >
                        BLK 7-1005, Vascon Tulips Gold
                      </Typography>
                      <Box display={"flex"} mt={1}>
                        <FmdGoodIcon />
                        &nbsp;
                        <Box m={"0 0 0 5px"}>
                          <Typography variant="h4">
                            BLK 7-1005, Vascon Tulips Gold
                          </Typography>
                          <Typography variant="h6">
                            It Is A Piece Of Really Soft Tissue That Appears As
                            A Thin Line Between The Gums And Lips.
                          </Typography>
                          <Box m={"10px 0"}>
                            <Divider color="#D2D2D2" />
                          </Box>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Typography variant="h6">
                                Property Size
                              </Typography>
                              <Typography variant="h5">900 Sqr Ft.</Typography>
                            </Box>
                            <Box>
                              <Typography variant="h6">Price</Typography>
                              <Typography variant="h5">2,75000/-</Typography>
                            </Box>
                          </Box>
                          <ButtonComponent />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Box className="cardBox">
                <Box className="cards">
                  <Box display={"flex"} justifyContent={"center"}>
                    <Box className="contentBox" width={"90%"}>
                      <Box>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          m={"-95px 0 0 0"}
                        >
                          <Box>
                            <img
                              src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                              width={"100%"}
                              height={"100%"}
                              alt="img"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        variant="h5"
                        style={{ padding: "20px 25px 9px" }}
                      >
                        BLK 7-1005, Vascon Tulips Gold
                      </Typography>
                      <Box display={"flex"} mt={1}>
                        <FmdGoodIcon />
                        &nbsp;
                        <Box m={"0 0 0 5px"}>
                          <Typography variant="h4">
                            BLK 7-1005, Vascon Tulips Gold
                          </Typography>
                          <Typography variant="h6">
                            It Is A Piece Of Really Soft Tissue That Appears As
                            A Thin Line Between The Gums And Lips.
                          </Typography>
                          <Box m={"10px 0"}>
                            <Divider color="#D2D2D2" />
                          </Box>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Typography variant="h6">
                                Property Size
                              </Typography>
                              <Typography variant="h5">900 Sqr Ft.</Typography>
                            </Box>
                            <Box>
                              <Typography variant="h6">Price</Typography>
                              <Typography variant="h5">2,75000/-</Typography>
                            </Box>
                          </Box>
                          <ButtonComponent />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box className="cardBox">
                <Box className="cards">
                  <Box display={"flex"} justifyContent={"center"}>
                    <Box className="contentBox" width={"90%"}>
                      <Box>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          m={"-95px 0 0 0"}
                        >
                          <Box>
                            <img
                              src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                              width={"100%"}
                              height={"100%"}
                              alt="img"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        variant="h5"
                        style={{ padding: "20px 25px 9px" }}
                      >
                        BLK 7-1005, Vascon Tulips Gold
                      </Typography>
                      <Box display={"flex"} mt={1}>
                        <FmdGoodIcon />
                        &nbsp;
                        <Box m={"0 0 0 5px"}>
                          <Typography variant="h4">
                            BLK 7-1005, Vascon Tulips Gold
                          </Typography>
                          <Typography variant="h6">
                            It Is A Piece Of Really Soft Tissue That Appears As
                            A Thin Line Between The Gums And Lips.
                          </Typography>
                          <Box m={"10px 0"}>
                            <Divider color="#D2D2D2" />
                          </Box>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Typography variant="h6">
                                Property Size
                              </Typography>
                              <Typography variant="h5">900 Sqr Ft.</Typography>
                            </Box>
                            <Box>
                              <Typography variant="h6">Price</Typography>
                              <Typography variant="h5">2,75000/-</Typography>
                            </Box>
                          </Box>
                          <ButtonComponent />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box className="cardBox">
                <Box className="cards">
                  <Box display={"flex"} justifyContent={"center"}>
                    <Box className="contentBox" width={"90%"}>
                      <Box>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          m={"-95px 0 0 0"}
                        >
                          <Box>
                            <img
                              src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                              width={"100%"}
                              height={"100%"}
                              alt="img"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        variant="h5"
                        style={{ padding: "20px 25px 9px" }}
                      >
                        BLK 7-1005, Vascon Tulips Gold
                      </Typography>
                      <Box display={"flex"} mt={1}>
                        <FmdGoodIcon />
                        &nbsp;
                        <Box m={"0 0 0 5px"}>
                          <Typography variant="h4">
                            BLK 7-1005, Vascon Tulips Gold
                          </Typography>
                          <Typography variant="h6">
                            It Is A Piece Of Really Soft Tissue That Appears As
                            A Thin Line Between The Gums And Lips.
                          </Typography>
                          <Box m={"10px 0"}>
                            <Divider color="#D2D2D2" />
                          </Box>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Typography variant="h6">
                                Property Size
                              </Typography>
                              <Typography variant="h5">900 Sqr Ft.</Typography>
                            </Box>
                            <Box>
                              <Typography variant="h6">Price</Typography>
                              <Typography variant="h5">2,75000/-</Typography>
                            </Box>
                          </Box>
                          <ButtonComponent />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CardComponentStyle>
  );
};

export default ResidentialProperty;
