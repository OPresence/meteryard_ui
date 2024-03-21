import React from "react";
import {
  FormControl,
  Typography,
  Box,
  TextField,
  Grid,
  Container,
} from "@mui/material";
import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";
import index from "../CityChat";
import DashboardLayout from "src/layout/DashboardLayout";

const ResidentialStyle = styled("div")(({ theme }) => ({
  "& .MuiInputLabel-root": {
    top: "-13px !important",
  },
  "& .cardBox": {
    boxShadow: "0px 0px 30px #00000029",
    marginTop: "25px",
    "& .mainGrid": {
      padding: "15px",
    },
    "& .topBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      background:
        "transparent linear-gradient(92deg, #85AD0F 0%, #344307 100%) 0% 0% no-repeat padding-box",
    },
    "& h6": {
      color: "#fff",
    },
    "& .gridBox": {
      "& svg": {
        fontSize: "14px ",
      },
      "& h6": {
        color: "#000",
        fontSize: "12px",
        fontWeight: "700",
        "& span": {
          color: "#666666",
          fontSize: "12px",
          fontWeight: "400",
        },
      },
      "& h5": {
        color: "#666666",
        fontSize: "12px",
        fontWeight: "400",
      },
    },
  },
}));

const LeadBox = () => {
  const ArrayCard = [{}, {}, {}, {}, {}, {}];
  return (
    <DashboardLayout>
      <ResidentialStyle>
        <Container style={{ padding: "0 0 0 25px" }}>
          <Box p={"15px"}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">
                <Box display={"flex"} alignItems={"center"}>
                  <Box maxWidth={50}>
                    <img src="/images/Group 8165.png" width={"100%"} />
                  </Box>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography variant="h6">Residential - House</Typography>
                </Box>
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                //   value={_property_type}
                label={
                  <>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box maxWidth={50}>
                        <img src="/images/Group 8165.png" width={"100%"} />
                      </Box>
                      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                      <Typography variant="h6">Residential - House</Typography>
                    </Box>
                  </>
                }
                //   onChange={(e) => setProperty_type(e.target.value)}
              >
                <MenuItem value="" disabled>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                <MenuItem value={"VILLA"}>VILLA</MenuItem>
                <MenuItem value={"PLOTS"}>PLOTS</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item lg={10} md={10} sm={10} xs={12}>
                <Grid container spacing={3}>
                  {ArrayCard.map((data, index) => {
                    return (
                      <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                        <Box className="cardBox">
                          <Box className="topBox">
                            <Typography variant="h6">
                              Residential Property leads
                            </Typography>
                            <Box maxWidth={35}>
                              <img
                                src="/images/Group 8179.png"
                                width={"100%"}
                              />
                            </Box>
                          </Box>
                          <Grid container>
                            {/* <Grid item lg={6} md={6} sm={6} xs={12}> */}
                            <Box className="mainGrid">
                              <Grid container spacing={2}>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box>
                                    <Box className="gridBox">
                                      <Typography variant="h6">
                                        Property Type
                                      </Typography>
                                      <Typography variant="h5">
                                        house
                                      </Typography>
                                    </Box>
                                    <Box className="gridBox">
                                      <Typography variant="h6">
                                        budget
                                      </Typography>
                                      <Typography variant="h5">
                                        70000 - 1500000
                                      </Typography>
                                    </Box>
                                    <Box className="gridBox">
                                      <Typography variant="h6">city</Typography>
                                      <Typography variant="h5">Agra</Typography>
                                    </Box>{" "}
                                    <Box className="gridBox">
                                      <Typography variant="h6">
                                        location
                                      </Typography>
                                      <Typography variant="h5">
                                        BLK 7-1005, Vascon Tulips Gold
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                  <Box>
                                    <Box className="gridBox">
                                      <Typography variant="h6">
                                        Description
                                      </Typography>
                                      <Typography variant="h5">
                                        it is a piece of really soft tissue that
                                        appears
                                      </Typography>
                                    </Box>
                                    <Box
                                      className="gridBox"
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <CalendarViewMonthIcon />
                                      &nbsp;
                                      <Typography variant="h6">
                                        10/02/2023{" "}
                                        <span>- Date of enquiry</span>
                                      </Typography>
                                    </Box>
                                    <Box
                                      mt={"9px"}
                                      className="gridBox"
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <PersonOutlineIcon />
                                      &nbsp;
                                      <Typography variant="h5">
                                        Monu Rajput
                                      </Typography>
                                    </Box>
                                    <Box
                                      mt={"9px"}
                                      className="gridBox"
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <MarkunreadIcon />
                                      &nbsp;
                                      <Typography variant="h5">
                                        Anu******@Gmail.Com
                                      </Typography>
                                    </Box>
                                    <Box
                                      mt={"9px"}
                                      className="gridBox"
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <CallIcon />
                                      &nbsp;
                                      <Typography variant="h5">
                                        +91 7900******
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                            {/* </Grid> */}
                          </Grid>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={12}>
                <Box mt={3}>
                  <img src="/images/Print-Real-Estate-Ads.png" width={"100%"} />
                  <img src="/images/Print-Real-Estate-Ads.png" width={"100%"} />
                  <img src="/images/Print-Real-Estate-Ads.png" width={"100%"} />
                </Box>
                <Box>
                  <img src="/images/Print-Real-Estate-Ads.png" width={"100%"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ResidentialStyle>
    </DashboardLayout>
  );
};

export default LeadBox;
