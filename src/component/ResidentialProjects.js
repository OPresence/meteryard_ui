import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import ButtonComponent from "./ButtonComponent";

const ResidentStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    marginTop: "20px",
    background: "#fff",
    padding: "50px",
    "& h2": {
      fontWeight: "500",
    },
  },
  "& .circleimg": {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "164px",
    "& h6": {
      color: "#A7D325",
      fontSize: "14px",
    },
    "& svg": {
      color: "#A7D325",
    },
  },
  "& .large": {
    background: "#FFF",
  },
  "& .cards": {
    cursor: "pointer",
    width: "100%",
    borderRadius: "15px",
    position: "relative",
    "& .contentBox": {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: "10px",
      marginTop: "-30px",
      background: "#fff",
      borderRadius: "10px",
      position: "relative",
      "& svg": {
        color: "#000",
        fontSize: "16px",
      },
      "& .circleBox": {
        borderRadius: "50px",
        height: "50px",
        width: "50px",
        marginTop: "-35px",
        background: "darkslategray",
        display: "flex",
        alignItems: "center",
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
const ResidentialProjects = () => {
  const projectDetails = [
    {
      image: "/images/meteryard/Images/Image 23.png",
    },
    {
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100309.png",
    },
    {
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100420.png",
    },
  ];

  return (
    <ResidentStyle>
      <div className="mainSliderDiv">
        <Container>
          <Box>
            <Typography variant="h2">Featured Projects</Typography>
            <Typography variant="h6">
              Featured Residential Projects Across India
            </Typography>
          </Box>
          <Box mt={5}>
            <Grid container spacing={3}>
              {projectDetails.map((data, index) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      height={"100%"}
                      pb={"20px"}
                    >
                      <Box className="cards">
                        <Box
                          className="circleimg"
                          style={{
                            backgroundImage: `url('${data?.image}')`,
                          }}
                        ></Box>

                        <Box display={"flex"} justifyContent={"center"}>
                          <Box className="contentBox" width={"90%"}>
                            <Box display={"flex"} alignItems={"center"}>
                              <Box className="circleBox">
                                <Box maxWidth={50}>
                                  <img src="/images/meteryard/Graphics/Group 7803.png" />
                                </Box>
                              </Box>
                              <Typography variant="h5">
                                BLK 7-1005, Vascon Tulips Gold
                              </Typography>
                            </Box>
                            <Box display={"flex"} mt={1}>
                              <FmdGoodIcon />
                              &nbsp;
                              <Box m={"0 0 0 5px"}>
                                <Typography variant="h4">
                                  BLK 7-1005, Vascon Tulips Gold
                                </Typography>
                                <Typography variant="h6">
                                  It Is A Piece Of Really Soft Tissue That
                                  Appears As A Thin Line Between The Gums And
                                  Lips. You Can Find It OnThe Top And The Bottom
                                  Of Your Oral Cavity.
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
                                    <Typography variant="h5">
                                      900 Sqr Ft.
                                    </Typography>
                                  </Box>
                                  <Box>
                                    <Typography variant="h6">Price</Typography>
                                    <Typography variant="h5">
                                      2,75000/-
                                    </Typography>
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
                );
              })}
            </Grid>
          </Box>
        </Container>
      </div>
    </ResidentStyle>
  );
};

export default ResidentialProjects;
