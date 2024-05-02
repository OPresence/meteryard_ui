import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const PropertyMoreDetails = ({ dataArray }) => {
  return (
    <Box className="MoreCard">
      <Typography variant="h6">More Details</Typography>
      <Box className="cardContent">
        <Grid container spaceing={2}>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box className="moreDetailcontent" style={{ width: "150px" }}>
                  <Typography variant="h3">Price Breakup</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent">
                  <Typography variant="body1">
                    {dataArray?.price?.toLocaleString()}/- Rs
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent" style={{ width: "150px" }}>
                  <Typography variant="h3">Booking Amount</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent">
                  <Typography variant="body1">
                    {dataArray?.price?.toLocaleString()}/- Rs
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent" style={{ width: "150px" }}>
                  <Typography variant="h3">Address</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent">
                  <Typography variant="body1">{dataArray?.address}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent" style={{ width: "150px" }}>
                  <Typography variant="h3">Furnishing</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent">
                  <Typography variant="body1">
                    {dataArray?.furnishingId?.projectFurnishing}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="moreDetailcontent" style={{ width: "150px" }}>
                  <Typography variant="h3">Type Of Ownership</Typography>
                </Box>
              </Grid>{" "}
              <Grid item xs={6}>
                <Box className="moreDetailcontent">
                  <Typography variant="body1">{dataArray?.listedBy}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Box className="ImageBox">
              <Box className="" maxWidth={300}>
                <img
                  src="/images/DrawKit_Vector_Illustration_Real_Estate___Homeowner_Illustrations__5__2x-removebg-preview.png"
                  alt="img"
                  width={"100%"}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PropertyMoreDetails;
