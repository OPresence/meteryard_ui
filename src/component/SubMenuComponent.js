import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import { cityObject } from "../utils";

const SubMenuStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    // padding: "20px 20px 0 20px  ",
    boxShadow:"unset",
    "& h5": {
      fontSize: "16px",
      fontWeight: "600",
      position:"relative",
      "@media(max-width:615px)": {
        "&::after": {
          top: "27px",
          width: "100px !important",
          height: "1.5px",
          backgroundColor:"#a2d017",
        },
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        width: "0",
        left: "0",
        right: "0",
        height: "2px",
        transition: "0.1s ease-in-out",
      },
    },
    "& h6": {
      fontSize: "16px",
      fontWeight: "600",
    },
  },
}));

const SubMenuComponent = () => {
  return (
    <SubMenuStyle>
      <Box className="mainBox">
        <Grid
          container
          spacing={1}
          style={{
            background: "#fff",
          }}
        >
          <Grid
            item
            lg={3}
            md={3}
            sm={3}
            xs={12}
            style={{
              boxShadow: window.innerWidth >= 600 ? "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" : "unset",
            }}
          >
            <Box textAlign={{ xs: "left", md: "center" }} height={"100%"}>
              <Typography variant="h5">Choose your city</Typography>
              <Box maxWidth={125} position={"absolute"} bottom={0}>
                <img
                  src="/images/meteryard/Graphics/Group 7795.png"
                  width={"100%"}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            {cityObject.map((data, index) => {
              return (
                <Box>
                  <a href="">
                    <Typography className="cityname" variant="h6">
                      {data}
                    </Typography>
                  </a>
                </Box>
              );
            })}
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            {cityObject.map((data, index) => {
              return (
                <Box>
                  <a href="">
                    <Typography className="cityname" variant="h6">
                      {data}
                    </Typography>
                  </a>
                </Box>
              );
            })}
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            {cityObject.map((data, index) => {
              return (
                <Box>
                  <a href="">
                    <Typography className="cityname" variant="h6">
                      {data}
                    </Typography>
                  </a>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </SubMenuStyle>
  );
};

export default SubMenuComponent;
