import React from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import styled from "@emotion/styled";
import "../Scss/border.css";
const ProjectStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    padding: "80px 0 100px 0",
    background: "#F7F7F7",
    // padding: "50px",
    "& h2": {
      fontWeight: "500",
    },
    "& .shodowBox": {
      background: "#fff",
      margin: "120px 0 0 0",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 80px",
      boxShadow: "0px 3px 39px #0000000A",
      "@media(max-width:460px)": {
        padding: "0 10px",
      },
      "& .smallBox": {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "20px",
        textAlign: "center",
        width: "150px",
        height: "150px",
        alignItems: "center",
        display: "flex",
        background: "#fff",
        justifyContent: "center",
        position: "relative" /* Added position relative */,
        border: "5px solid #A7D325",
        "& .contentBox": {
          padding: "10px",
          boxShadow: "0px 3px 39px #0000001C",
          borderRadius: "20px",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: "-4px",
          left: "-6px",
          height: "90px",
          border: "5px solid #a7d325",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
        },
        "&::after": {
          background: "#a7d325",
          content: '""',
          position: "absolute",
          bottom: "-20px",
          left: "10px",
          height: "30px",
          border: "5px solid #a7d325",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
          transform: "rotateZ(271deg)",
        },
        "& h1": {
          "@media(max-width:540px)": {
            fontSize: "16px",
          },
        },
        "& h3": {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
      "& .smallBox1": {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        // padding: "20px",
        borderRadius: "20px",
        textAlign: "center",
        width: "150px",
        height: "150px",
        alignItems: "center",
        display: "flex",
        background: "#fff",
        justifyContent: "center",
        position: "relative" /* Added position relative */,
        border: "5px solid #444444",
        "& .contentBox": {
          padding: "10px 35px",
          boxShadow: "0px 3px 39px #0000001C",
          borderRadius: "20px",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: "43px",
          right: "-6px",
          height: "90px",
          border: "5px solid #444444",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
        },
        "&::after": {
          background: "#444444",
          content: '""',
          position: "absolute",
          top: "-21px",
          right: "10px",
          height: "30px",
          border: "5px solid #444444",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
          WebkitTransform: "rotateZ(280deg)",
          MozTransform: "rotateZ(269deg)",
          MsTransform: "rotateZ(269deg)",
          transform: "rotateZ(271deg)",
        },
        "& h1": {
          "@media(max-width:540px)": {
            fontSize: "16px",
          },
        },
        "& h3": {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
    "& .contentBox": {
      padding: "10px",
      boxShadow: "0px 3px 39px #0000001C",
      borderRadius: "20px",
    },
  },
}));
const ProjectComponent = () => {
  return (
    <ProjectStyle>
      <Box className="mainBox">
        <Container maxWidth>
          <Box>
            <Typography variant="h2">Projects</Typography>
            <Typography variant="h6">
              Featured Residential Projects Across India
            </Typography>
          </Box>
          <Box>
            <Box className="shodowBox">
              <Box width={"100%"}>
                <Box
                // display={"flex"}
                // justifyContent={"space-between"}
                // mt={"-70px"}
                // gap={"5px"}
                >
                  <Grid
                    container
                    spacing={3}
                    style={{ justifyContent: "center" }}
                  >
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <Box className="rainbow" maxWidth={180}>
                        <Box className="contentBox" textAlign={"center"}>
                          <Typography variant="h1">51</Typography>
                          <Box mt={2}>
                            <Typography variant="h3">Total Projects</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <Box className="rainbowSecond" maxWidth={180}>
                        <Box className="contentBox" textAlign={"center"}>
                          <Typography variant="h1">51</Typography>
                          <Box mt={2}>
                            <Typography variant="h3">Total Projects</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <Box className="rainbow" maxWidth={180}>
                        <Box className="contentBox" textAlign={"center"}>
                          <Typography variant="h1">51</Typography>
                          <Box mt={2}>
                            <Typography variant="h3">Total Projects</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <Box className="rainbowSecond" maxWidth={180}>
                        <Box className="contentBox" textAlign={"center"}>
                          <Typography variant="h1">51</Typography>
                          <Box mt={2}>
                            <Typography variant="h3">Total Projects</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  textAlign={"center"}
                  m={"20px 0 30px 0"}
                >
                  <Box>
                    <Box mt={1}>
                      <Typography variant="h2">Counters</Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography
                        variant="h6"
                        style={{ color: "#A1A1A1", fontSize: "18px" }}
                      >
                        Featured Residential Projects Across India
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ProjectStyle>
  );
};

export default ProjectComponent;