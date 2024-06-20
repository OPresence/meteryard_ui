import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";
import { AuthContext } from "../context/Auth";
const SubMenuStyle = styled(Box)(({ theme }) => ({
  "& .mainBox": {
    marginTop: "10px",

    boxShadow: "unset",
    "& h5": {
      fontSize: "16px",
      fontWeight: "600",
      position: "relative",
      "@media(max-width:615px)": {
        "&::after": {
          top: "27px",
          width: "100px !important",
          height: "1.5px",
          backgroundColor: "#a2d017",
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
    "& .choose-section": {
      paddingLeft: "9px",
      height: "300px",
    },
  },
}));

const SubMenu2Component = () => {
  const auth = useContext(AuthContext);

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
              boxShadow:
                window.innerWidth >= 600
                  ? "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
                  : "unset",
            }}
          >
            <Box
              textAlign={{ xs: "left" }}
              height={"100%"}
              className="choose-section"
            >
              <Typography variant="h5">Choose your city</Typography>
              <Box mt={1}>
                {auth?._propertyList &&
                  auth?._propertyList?.map((data, index) => {
                    return (
                      <Box
                        key={index}
                        style={{ cursor: "pointer", padding: "4px 0" }}
                        onClick={() => auth?.setGetPropetyType(data?._id)}
                      >
                        <Typography className="cityname" variant="h6">
                          {data.projectType}
                        </Typography>
                      </Box>
                    );
                  })}
              </Box>
              <Box maxWidth={125} position={"absolute"} bottom={0}>
                <img
                  src="/images/meteryard/Graphics/Group 7795.png"
                  width={"100%"}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            {auth?._subytypelist &&
              auth?._subytypelist?.map((data, index) => {
                return (
                  <Box
                    key={index}
                    style={{ cursor: "pointer", padding: "4px 0" }}
                  >
                    <Link href="/all-property">
                      <Typography className="cityname" variant="h6">
                        {data?.projectSubType}
                      </Typography>
                    </Link>
                  </Box>
                );
              })}
          </Grid>
        </Grid>
      </Box>
    </SubMenuStyle>
  );
};

export default SubMenu2Component;
