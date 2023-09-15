import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    padding: "3px 0px 36px",
    background: "rgba(21, 13, 64, 1)",
    width: "100%",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",

    "& .copyRightBox": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px",

      " & .titleBox": {
        display: "flex",
        alignItems: "center",
      },

      "& .termConditionBox": {
        display: "flex",
        justifyContent: "space-evenly",
      },
    },
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MainComponent>
      <Box className="mainBox">
        <Container>
          <Box className="copyRightBox">
            <Box>
              <Box className="titleBox">
                <img
                  src="images/logo.png"
                  alt=""
                  width="100%"
                  style={{ maxWidth: "128px", margin: "0 auto" }}
                />
              </Box>
              <Box>
                <Typography variant="body2" marginTop="10px" color="#FFFFFF99">
                  Copyright © {currentYear} Raffle Game
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default Footer;
