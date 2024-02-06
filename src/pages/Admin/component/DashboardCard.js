import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import Divider from "@mui/material/Divider";

const DashboardStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    "& .cardBox": {
      borderRadius: "10px",
      "& .linkBox": {
        padding: "10px",
        background: "#0d0d0d7a",
        margin: "20px 0 0 0",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        "& a": {
          color: "#fff",
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      "& .contentBox": {
        padding: "0px 20px 0px 20px",
        "& h1": {
          color: "#fff",
          fontWeight: "700",
          fontSize: "65px",
        },
        "& h6": {
          color: "#fff",
          fontWeight: "400",
          fontSize: "18px",
        },
      },
    },
  },
}));
const DashboardStyleTop = styled("Box")(({ theme }) => ({
  "& .dashboardBox": {
    margin: "0 0 20px 0",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "& h6": {
      fontSize: "18px",
      color: "#9E9E9E",
      fontWeight: "600",
    },
    "& svg": {
      fontSize: "28px",
      color: "#9E9E9E",
      fontWeight: "600",
    },
  },
}));
const DashboardCard = () => {
  const arrayData = [
    {
      backgroundColorName: "#A2D117",
    },
    {
      backgroundColorName: "#21CF5B",
    },
    {
      backgroundColorName: "#1976d2",
    },
  ];

  return (
    <DashboardStyle>
      <DashboardStyleTop>
        <Box className="dashboardBox">
          <IoSpeedometer />
          <Typography variant="h6">Dashboard</Typography>
        </Box>
        <Divider />
      </DashboardStyleTop>
      <Box className="mainBox" mt={6}>
        <Grid container spacing={3}>
          {arrayData?.map((item, index) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                <Box
                  className="cardBox"
                  style={{ background: `${item?.backgroundColorName}` }}
                >
                  <Grid container spacing={3}>
                    <Grid item lg={6} md={6}>
                      <Box className="contentBox">
                        <Typography variant="h1">0</Typography>
                        <Typography variant="h6">Total Buyer's</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box maxWidth={120}>
                        <img
                          src="/images/Icon awesome-users.svg"
                          width={"100%"}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box
                    textAlign={"center"}
                    alignItems={"center"}
                    className="linkBox"
                  >
                    <a href="#">
                      More Info &nbsp;
                      <FaCircleArrowRight />
                    </a>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </DashboardStyle>
  );
};
export default DashboardCard;
