import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import "../../Scss/PropertyCss.css";
import GalleryImg from "../../component/GalleryImg";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideocamIcon from "@mui/icons-material/Videocam";
import PropertyMoreDetails from "../../component/PropertyMoreDetails";
import SuggestionProperties from "../../component/SuggestionProperties";
import ResidentialProperty from "../../component/ResidentialProperty";
import { useRouter } from "next/router";

import HomeLayout from "../../layout/HomeLayout";
const index = () => {
  const router = useRouter();
  const receivedData = router;
  const dataArray = router.query.data ? JSON.parse(router.query.data) : null;

  console.log("receivedData---->", dataArray);
  return (
    <HomeLayout>
      <Box className="propertyBanner">
        <Container maxWidth>
          <Box className="ViewPropertyBanner">
            <Box className="topHeading" position={"relative"}>
              <Typography variant="h2">
                Find the most,exciting <span>Property</span>
              </Typography>
              <Typography variant="body1">
                Featured Residential projects across India
              </Typography>
              <Box style={{ display: "flex", justifyContent: "end" }}>
                <Box className="imgBox" maxWidth={350}>
                  <img src="/images/Group 8252.svg" alt="img" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={"50px"}>
            <Box className="galleryCardInfo">
              <Box className="galleryTopCard">
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1">
                    Save Time & money <br /> with &nbsp;&nbsp;
                    <span>MB Prime</span>
                  </Typography>

                  <Typography variant="body1">
                    Save Time & money sdasd cacasdsa asdad
                  </Typography>

                  <Button style={{ background: "orange" }}>
                    sdasdadnasdaskd
                  </Button>
                </Box>
              </Box>

              <Box className="gallery">
                <Grid container>
                  <Grid item lg={5} md={6} xs={12}>
                    <Box height={"352px"} display={"flex"} width={"100%"}>
                      <img src={dataArray?.coverImage} width={"100%"} />
                    </Box>
                  </Grid>
                  <Grid item lg={7} md={6} xs={12}>
                    <Box display={"flex"} justifyContent={"end"}>
                      <Box height={"353px"} width={"100%"}>
                        <GalleryImg ArrayImage={dataArray?.image} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box className="detailsOFRoom" align={"center"}>
                  <Box className="detailsOFRoomContent">
                    <Box
                      className="contextDetails"
                      style={{ borderRight: "1px solid #000" }}
                    >
                      <Typography variant="h4">
                        {dataArray?.bedroom} Bedrooms
                      </Typography>
                    </Box>
                    <Box
                      className="contextDetails"
                      style={{ borderRight: "1px solid #000" }}
                    >
                      <Typography variant="h4">
                        {dataArray?.bathroom} Bathroom
                      </Typography>
                    </Box>
                    <Box className="contextDetails">
                      <Typography variant="h4">Semi-Furnished</Typography>
                    </Box>

                    <Box className="contextDetails"></Box>

                    <Box className="contextDetails">
                      <Box className="socialMediaIcons">
                        <Box className="PhotoImg">
                          <IconButton>
                            <CollectionsIcon />
                          </IconButton>
                          <Typography variant="h6">
                            {dataArray?.image?.length} Photos
                          </Typography>
                        </Box>
                        <Box className="PhotoImg">
                          <IconButton>
                            <VideocamIcon />
                          </IconButton>
                          <Typography variant="h6">1 Video</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="cardBelowDetails">
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    lg={3}
                    style={{
                      borderRight: "1px solid #000",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box paddingLeft={"30px"}>
                      <Box className="detailsHeading">
                        <Typography variant="h3">Carpet Area</Typography>
                        <Typography variant="body1">
                          {dataArray?.superBuildupArea}
                        </Typography>
                        <br />

                        <Typography variant="h3">Project</Typography>
                        <Typography variant="body1">
                          {dataArray?.projectName}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={3}
                    style={{
                      borderRight: "1px solid #000",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      paddingLeft={"80px"}
                      // style={{ borderRight: "1px solid #000" }}
                    >
                      <Box className="detailsHeading">
                        <Typography variant="h3">Floors</Typography>
                        <Typography variant="body1">
                          {dataArray?.floorNumber} Out Of 4 Floors
                        </Typography>
                        <br />

                        <Typography variant="h3">Facing</Typography>
                        <Typography variant="body1">
                          {dataArray?.floorNumber}{" "}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={3}
                    style={{
                      borderRight: "1px solid #000",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      paddingLeft={"80px"}
                      // style={{ borderRight: "1px solid #000" }}
                    >
                      <Box className="detailsHeading">
                        <Typography variant="h3">Status</Typography>
                        <Typography variant="body1">Ready To Move</Typography>
                        <br />

                        <Typography variant="h3">Listed By</Typography>
                        <Typography variant="body1">
                          {dataArray?.listedBy}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={3}>
                    <Box maxWidth={300}>
                      <img src="/images/Group 8253.png" width={"100%"} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box className="getQnwerontactBtn">
                <Button>Get ONWER Conatact</Button>
              </Box>
            </Box>

            <Box className="propertyMoredtails">
              <PropertyMoreDetails dataArray={dataArray} />
            </Box>

            <Box className="SuggestionProperties">
              <SuggestionProperties />
            </Box>

            <Box className="ResidentialProperty" style={{ padding: "20px" }}>
              <ResidentialProperty />
            </Box>
          </Box>
        </Container>
      </Box>
    </HomeLayout>
  );
};

export default index;