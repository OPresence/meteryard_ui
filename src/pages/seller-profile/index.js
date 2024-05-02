import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import HomeLayout from "../../layout/HomeLayout";
import ProfileComponent from "./ProfileComponent";
import SellerDetails from "./SellerDetails";
import FilterComponent from "./FilterComponent";
import FilterButton from "./FilterButton";
import PostDetails from "./PostDetails";
import SellerListComponent from "src/component/SellerListComponent";
import AdvertisementComponent from "../../component/AdvertisementComponent";
import styled from "@emotion/styled";

const SellerStyle = styled("div")(({ theme }) => ({
  "& .SellerBox": {
    "& .listBox": {
      background: "rgb(255, 255, 255)",

      borderRadius: "10px",
      padding: "10px",
      boxShadow: "rgba(0, 0, 0, 0.06) 0px 3px 39px",
    },
  },
}));

const index = () => {
  const SellerList = [
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/Describe-a-Foreign-Person-You-Are-Interested-In-1.png",
      online: true,
    },
    {
      name: "Monu Rajput",
      img: "/images/images (2).png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/Describe-a-Foreign-Person-You-Are-Interested-In-1.png",
      online: true,
    },
    {
      name: "Monu Rajput",
      img: "/images/images (2).png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/Describe-a-Foreign-Person-You-Are-Interested-In-1.png",
      online: true,
    },
    {
      name: "Monu Rajput",
      img: "/images/images (2).png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
  ];
  return (
    <HomeLayout>
      <ProfileComponent />
      {/* <SellerStyle>
        <Box
          style={{
            background: "#fff",
            padding: "5px 0",
            marginBottom: "50px",
          }}
        >
          <Container maxWidth>
            <Grid container spacing={3}>
              <Grid item lg={3} md={3} sm={3} xs={12}>
                <Box>
                  <SellerDetails />
                  <FilterComponent />
                </Box>
              </Grid>
              <Grid item lg={7} md={3} sm={3} xs={12}>
                <FilterButton />
                <Box
                  mt={3}
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    background: "#ffff",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <Box>
                    <PostDetails />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={2} md={3} sm={3} xs={12}>
                <Box>
                  <Box className="SellerBox">
                    <AdvertisementComponent />

                    <Box
                      m={"0 0px 10px 0"}
                      mt={3}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography variant="h6">
                        SUGGEST SELLER&apos;S
                      </Typography>
                      <a href="">More</a>
                    </Box>
                    <Box className="listBox">
                      {SellerList &&
                        SellerList?.map((data, index) => {
                          return (
                            <Box m={"20px 0"} key={index}>
                              <SellerListComponent data={data} index={index} />
                            </Box>
                          );
                        })}
                    </Box>
                  </Box>{" "}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </SellerStyle> */}
    </HomeLayout>
  );
};

export default index;
