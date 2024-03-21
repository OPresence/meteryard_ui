import React from "react";
import { Box, Typography, Grid } from "@mui/material";
// import CardComponent from "./CardComponent";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";

const CardComponentStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "20px 0 30px 0",
    background: "#fff",
    // padding: "50px",
    "& h2": {
      fontWeight: "500",
    },
  },
  "& .circleimg": {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "250px",
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
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "20px",
    transform: "0",
    transition: "0.8s",
    transform: "scale(0.9)",

    "&:hover": {
      transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      padding: "0 10px 10px",
      "& h5": {
        fontSize: "14px",
        textAlign: "start",
        fontWeight: "500",
        padding: "5px",
      },
      "& h4": {
        fontSize: "12px",
        color: "#000",
        fontWeight: "500",
        margin: "5px 5px",
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

const SuggestionProperties = () => {
  return (
    <CardComponentStyle>
      <Box className="SuggestionHeading">
        <Typography variant="h2">
          Suggestion Properties&apos; In This Project And Near By{" "}
        </Typography>
        <Typography variant="body1">
          Featured Residential Projects Across India{" "}
        </Typography>

        <Box>
          <Grid container>
            <Grid item xs={12} lg={3}>
              <Box className="cards">
                <Box className="">
                  <img
                    src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                    width={"100%"}
                    height={"100%"}
                    alt="img"
                  />
                </Box>
                <Box className="contentBox">
                  <Typography variant="h5">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h4">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h6">
                    It Is A Piece Of Really Soft Tissue That Appears As A Thin
                    Line Between The Gums And Lips.
                  </Typography>
                  <Box m={"10px 0"}>
                    <Divider color="#D2D2D2" />
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                  </Box>
                  <ButtonComponent />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box className="cards">
                <Box className="">
                  <img
                    src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                    width={"100%"}
                    height={"100%"}
                    alt="img"
                  />
                </Box>
                <Box className="contentBox">
                  <Typography variant="h5">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h4">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h6">
                    It Is A Piece Of Really Soft Tissue That Appears As A Thin
                    Line Between The Gums And Lips.
                  </Typography>
                  <Box m={"10px 0"}>
                    <Divider color="#D2D2D2" />
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                  </Box>
                  <ButtonComponent />
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box className="cards">
                <Box className="">
                  <img
                    src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                    width={"100%"}
                    height={"100%"}
                    alt="img"
                  />
                </Box>
                <Box className="contentBox">
                  <Typography variant="h5">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h4">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h6">
                    It Is A Piece Of Really Soft Tissue That Appears As A Thin
                    Line Between The Gums And Lips.
                  </Typography>
                  <Box m={"10px 0"}>
                    <Divider color="#D2D2D2" />
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                  </Box>
                  <ButtonComponent />
                </Box>
              </Box>{" "}
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box className="cards">
                <Box className="">
                  <img
                    src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                    width={"100%"}
                    height={"100%"}
                    alt="img"
                  />
                </Box>
                <Box className="contentBox">
                  <Typography variant="h5">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h4">
                    BLK 7-1005, Vascon Tulips Gold
                  </Typography>
                  <Typography variant="h6">
                    It Is A Piece Of Really Soft Tissue That Appears As A Thin
                    Line Between The Gums And Lips.
                  </Typography>
                  <Box m={"10px 0"}>
                    <Divider color="#D2D2D2" />
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">900 Sqr Ft.</Typography>
                    </Box>
                  </Box>
                  <ButtonComponent />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CardComponentStyle>
  );
};

export default SuggestionProperties;
