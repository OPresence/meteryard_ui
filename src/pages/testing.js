import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";

import React from "react";

const MainComponent = styled("Box")((theme) => ({
  "& .mainBox": {
    padding: "80px 0px 50px",
    backgroundColor: "#101017",
  },

  "& .headText": {
    textAlign: "center",
    "& h2": {
      // color:theme.text.primary
    },

    // [theme.breakpoints.down("md")]: {
    //   fontSize:"40px"
    // },
    // [theme.breakpoints.up('md')]: {
    //   fontSize:"20px",
    // },

    // fontSize: theme.breakpoints.up("md") ? "20px" : "inherit",
  },
  "& .sliderBox": {
    marginTop: "50px",
    textAlign: "center",
    color: "white",
  },
}));

const testing = () => {
  return (
    <MainComponent>
      <Box className="mainBox">
        <Container>
          <Box className="headText">
            <Box>
              <Typography variant="h2" color={"white"}>
                Healthcare with AI Connects Patients & Doctors
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default testing;
