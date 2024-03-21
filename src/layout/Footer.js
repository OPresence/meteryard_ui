import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    padding: "80px 0px 50px",
    background: `url('images/footerBg.png')`,
    width: "100%",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",

    "& .headBox": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px",
    },

    "& .sliderBox": {
      margin: "150px 0px",

      "& input": {
        width: "100%",
        borderRadius: "50px",
        background: "#fff",
      },

      "& Button": {
        width: "100%",
      },

      "& .slick-dots": {
        zIndex: "-1 ",
      },

      "& .slick-prev, .slick-next": {
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "60px 530px",
        border: "2px solid #FFF",
        background: "#7A69FE",
      },
      "& .slick-prev": {},
      "& .slick-next": {},
      // "& .slick-prev:before":{
      //   color: "black",
      //   fontSize: "40px",
      // }
    },

    "& .copyRightBox": {
      display: "flex",
      justifyContent: "space-between",
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
  return (
    <MainComponent>
      <Box className="mainBox">
        <Container>
          <Box className="headBox">
            <Box>
              <Typography variant="h1">Let&apos;s Talk About</Typography>
            </Box>
            <Box>
              <Typography variant="h1" style={{ color: "#fff" }}>
                MVP Care.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ backgroundColor: "#FFFFFF40", marginTop: "20px" }} />
          <Box className="copyRightBox">
            <Box className="titleBox">
              <Box>
                <Typography variant="h5" color="#FFFFFF">
                  MVP Care.
                </Typography>
              </Box>
              <Box className="termConditionBox">
                <Box>
                  <Typography color="#FFFFFF99" ml={4}>
                    | Privacy Policy
                  </Typography>
                </Box>
                <Box>
                  <Typography color="#FFFFFF99" ml={4}>
                    | Terms & Conditions
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" marginTop="10px" color="#FFFFFF99">
                Copyright©2023. Created with love by MVP CARE
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default Footer;
