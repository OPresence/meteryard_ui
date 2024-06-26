import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import GalleryImg from "../../component/GalleryImg";
import styled from "@emotion/styled";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideocamIcon from "@mui/icons-material/Videocam";
import PropertyMoreDetails from "../../component/PropertyMoreDetails";
import { useRouter } from "next/router";
import HomeLayout from "../../layout/HomeLayout";
import ContactOwnerModal from "../../component/ContactOwnerModal";
import ResidentialProjects from "../../component/ResidentialProjects";
const ViewPropetyStyle = styled(Box)(({ theme }) => ({
  "& .imgBox": {
    "@media(max-width:615px)": {
      marginTop: "80px",
    },
  },
  "& .joinPrimeButton": {
    background: "orange",
    "@media(max-width:615px)": {
      width: "100%",
    },
  },
  "& .boxClass": {
    paddingLeft: "80px",
    "@media(max-width:615px)": {
      paddingLeft: "0px",
    },
  },
  "& .boxClass30": {
    paddingLeft: "30px",
    "@media(max-width:615px)": {
      paddingLeft: "0px",
    },
  },
}));

const ViewPropertyIndex = () => {
  const router = useRouter();
  const dataArray = router.query.data ? JSON.parse(router.query.data) : null;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <HomeLayout>
      <ViewPropetyStyle>
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
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box className="imgBox" maxWidth={350}>
                    <img src="/images/Group 8252.svg" alt="img" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box mt={"50px"}>
              <Box className="galleryCardInfo">
                <Box className="gallery">
                  <Grid container>
                    <Grid item lg={5} md={6} xs={12}>
                      <Box height={"352px"} display={"flex"} width={"100%"}>
                        <img src={dataArray?.coverImage} width={"100%"} />
                      </Box>
                    </Grid>
                    <Grid item lg={7} md={6} xs={12}>
                      {dataArray?.image?.length > 0 && (
                        <Box display={"flex"} justifyContent={"flex-end"}>
                          <Box height={"353px"} width={"100%"}>
                            <GalleryImg ArrayImage={dataArray?.image} />
                          </Box>
                        </Box>
                      )}
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
                      {dataArray?.furnishingId && (
                        <Box className="contextDetails">
                          <Typography variant="h4">
                            {dataArray?.furnishingId?.projectFurnishing}
                          </Typography>
                        </Box>
                      )}

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
                          {dataArray?.video != "" && (
                            <Box className="PhotoImg">
                              <a href={dataArray?.video} target="_blank">
                                <IconButton>
                                  <VideocamIcon />
                                </IconButton>
                              </a>
                              <Typography variant="h6">1 Video</Typography>
                            </Box>
                          )}
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
                      <Box className="boxClass30">
                        <Box className="detailsHeading">
                          <Typography variant="h3">Carpet Area</Typography>
                          <Typography variant="body1">
                            {dataArray?.carpetArea}
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
                      <Box className="boxClass">
                        <Box className="detailsHeading">
                          <Typography variant="h3">Floors</Typography>
                          <Typography variant="body1">
                            {dataArray?.floorNumber} Out Of 4 Floors
                          </Typography>
                          <br />

                          <Typography variant="h3">Facing</Typography>
                          <Typography variant="body1">
                            {dataArray?.facingId?.propFacing}{" "}
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
                      <Box className="boxClass">
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
                  <Button onClick={handleClickOpen}>Get ONWER Contact</Button>
                </Box>
              </Box>

              <Box className="propertyMoredtails">
                <PropertyMoreDetails dataArray={dataArray} />
              </Box>

              <Box className="ResidentialProperty" style={{ padding: "20px" }}>
                <ResidentialProjects />
              </Box>
            </Box>
          </Container>
        </Box>
        <ContactOwnerModal
          open={open}
          dataArray={dataArray}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      </ViewPropetyStyle>
    </HomeLayout>
  );
};

export default ViewPropertyIndex;
