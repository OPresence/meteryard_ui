import React from "react";
import { Box, Grid, Hidden, Typography, styled } from "@mui/material";

const MainComponent = styled("Box")(({ theme }) => ({
   " & .mvpLogo":{
          marginBottom:"50px",
          padding:"20px 0 20px 24px",
     
   },
  " .sideLayout": {
    padding: "20px",
    // maxHeight: "100vh",
    //  maxWidth:"100%",
    // overflow: "hidden",

    "& .gridSecond": {
      borderRadius: "10px",
      backgroundColor: "#7A69FE",
      // maxWidth:"100%",
      padding: "70px  55px 70px 80px",

      "& .body1": {
        margin: "10px 0 60px 0",
      },
      "& .overlapImages": {
        position: "relative",
      },
      "& .overImg": {
        position: "absolute",
        top: "50px",
        left: "250px",
      },
    },
  },
}));

export default function LoginLayout({ children }) {
  return (
    <MainComponent>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box className="mvpLogo">
            <img src="/images/mvpCarelogo..svg"/>
          </Box>
          <Box p={3}>{children}</Box>
        </Grid>

        <Hidden mdDown>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className="sideLayout">
              <Box className="gridSecond">
                <Box>
                  <Typography variant="h4" color="#FFFFFF">
                    The simplest wat to manage <br /> health data
                  </Typography>
                  <Box className="body1">
                    <Typography variant="body1" color="#FFFFFFBF">
                      Enter your credentials to access your account
                    </Typography>
                  </Box>
                </Box>
                <Box className="overlapImages">
                  <img src="/images/goalImg1.png" className="belowImg"  />
                  <img src="/images/goalImg2.png" className="overImg" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </MainComponent>
  );
}
