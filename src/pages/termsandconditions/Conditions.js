import React from "react";
import HomeLayout from "@/layout/HomeLayout";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Condition = styled("Box")(({ theme }) => ({
  "& .conditionBanner": {
    position: "relative",
    height: "1100px",
    width: "100%",
  },
  "& .conditionBanner1": {
    position: "absolute",
    height: "600px",
    width: "85%",
    background: "#fff",
    top: "0%",
    left: "25%",
    borderRadius: "00px 00px",
    transform: "rotate(-8deg)",
    display: "flex",
    justifyContent: "center",
    "@media(max-width:321px)": {
      height: "",
      width: "100%",
      top: "0%",
      left: "25%",
    },
  },
  "& .contentBox": {
    position: "absolute",
    height: "300px",
    width: "32%",
    top: "20%",
    left: "10%",
    background: "white",
    padding: "35px",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px 5px white",
    "@media(max-width:1024px)": {
      height: "auto",
      width: "40%",
    },
    "& h2": {
      "@media(max-width:1024px)": {
        fontSize: "20px",
      },
    },
    "@media(max-width:768px)": {
      height: "auto",
      width: "55%",
    },
    "& h2": {
      "@media(max-width:768px)": {
        fontSize: "15px",
      },
    },

    "@media(max-width:425px)": {
      height: "auto",
      width: "100%",
    },
    "& h2": {
      "@media(max-width:425px)": {
        fontSize: "10px",
      },
    },
    "@media(max-width:376px)": {
      height: "auto",
      width: "100%",
      left: "0px",
    },
    "& h2": {
      "@media(max-width:376px)": {
        fontSize: "15px !important",
      },
    },
    "@media(max-width:321px)": {
      height: "auto",
      width: "100%",
      top: "20%",
      left: "20px",
    },
    "& h2": {
      "@media(max-width:321px)": {
        fontSize: "15px",
      },
    },
  },

  "& .box": {
    height: "400px",
    width: "20%",

    background: "white",
    padding: "20px",
  },
  "& .box1": {
    height: "400px",
    width: "50%",
    background: "red",
  },
  "& .inputField": {
    width: "100%",
    color: "white",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .GerenicText": {
      background: "#737b5f",
      cursor: "pointer",
      padding: "10px 0px 10px 25px",
      borderRadius: "3px",
      width: "160px",
      boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
      "& p": {
        color: "#FFF",
      },
    },
  },
  "& .textbox1": {
    height: "50px",
    width: "90%",
    background: "red",
  },
  "& .GerenicSection": {
    position: "absolute",
    top: "55%",
    height: "500px",
    width: "100%",
    left: "4%",
    "@media(max-width:321px)": {
      left: "0px",
    },
  },
}));

function Conditions() {
  return (
    <HomeLayout>
      <Condition>
        <Box className="conditionBanner">
          <Container maxWidth>
            <Box className="conditionBanner1">
              <img
                src="/images/meteryard/Images/Screenshot 2023-09-02 100341.png"
                alt="Placeholder Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
           
            <Box className="contentBox">
              <Typography
                variant="h2"
                style={{ fontWeight: "800", fontSiz: "0px" }}
              >
                Faq
              </Typography>
              <Typography variant="h2">
                Lorem lpsum is simply dummy <br />
                text of the printing and
                <br />
                typesetting industry. Lorem lpsum <br />
                has been the industry's standard <br />
                dummmy text ever since the 1500s,
                <br />
                when an unknown printer took a
              </Typography>
            </Box>

            <Box className="GerenicSection">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={3}>
                  <Box className="inputField">
                    <Box className="GerenicText">
                      <Typography varient="h6">Gerenic</Typography>
                    </Box>
                  </Box>

                  <Box className="inputField" mt={2}>
                    <Box
                      className="GerenicText"
                      style={{ background: "white" }}
                    >
                      <Typography varient="h6" style={{ color: "blue" }}>
                        Gerenic
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={7}>
                  <Box
                    style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
                  >
                    <Accordion
                      style={{ background: "#737b5f", color: "white" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        What diseases can CBC help to detect?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      defaultExpanded
                      style={{ background: "#737b5f", color: "white" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        What diseases can CBC help to detect?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        Accordion Actions
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                      <AccordionActions>
                        {/* <Button>Cancel</Button>
                    <Button>Agree</Button> */}
                      </AccordionActions>
                    </Accordion>
                    <Accordion
                      defaultExpanded
                      style={{ background: "#737b5f", color: "white" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        What diseases can CBC help to detect?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      defaultExpanded
                      style={{ background: "#737b5f", color: "white" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        What diseases can CBC help to detect?
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Condition>
    </HomeLayout>
  );
}

export default Conditions;
