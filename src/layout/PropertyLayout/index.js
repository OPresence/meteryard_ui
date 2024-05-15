import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import NavBar from "./NavBar";
import TopBar from "../HomeLayout/Topbar";
import Footer from "./Footer";
import { Box, Grid, Typography, Divider } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignContent: "center",
}));
const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  position: "relative",
  // paddingTop: 70,
  minHeight: "calc(100vh - 75px)",
  backgroundColor: "#fff",
  marginTop: "83px",
  borderRadius: "5px",
  // [theme.breakpoints.up("lg")]: {
  //   paddingLeft: 256,
  // },
}));

const ContentContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const Content = styled("div")(({ theme }) => ({
  flex: "1 1 auto",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  padding: "23px 25px 25px",
  [theme.breakpoints.down("md")]: {
    padding: "23px 25px 25px",
  },
}));

const AdvertisementContainer = styled("Box")({
  marginTop: "8rem",
  width: "80vw",
  height: "35vh",
  border: "1px solid gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10%",
  borderRadius: "5px",
  flexDirection: "row",

  "@media screen and (max-width: 600px)": {
    flexDirection: "column",
    height: "auto",
  },

  "& .img": {
    width: "50vw",
    height: "35vh",
    "@media screen and (max-width: 600px)": {
      width: "100%",
      height: "30vh",
    },
  },

  "& .content": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "12rem",
    width: "100%",
    "@media screen and (max-width: 600px)": {
      height: "auto",
      padding: "0.50rem",
    },
  },

  "& .h4": {
    color: "gray",
  },

  "& .below-content": {
    display: "flex",
    height: "2rem",
    borderTop: "2px solid 	#D0D0D0",
    borderRight: "0px solid transparent",
    borderBottom: "0px solid transparent",
    borderLeft: "0px solid transparent",
    "@media screen and (max-width: 600px)": {
      fontSize: "12px",
    },
  },

  "& .h3": {
    "@media screen and (max-width: 600px)": {
      fontSize: "12px",
    },
  },

  "& .open-link": {
    display: "flex",
    marginLeft: "auto",
    textAlign: "center",
    marginTop: "0.50rem",
    "@media screen and (max-width: 600px)": {
      fontSize: "15px",
      marginTop: "0.25rem",
    },
  },

  "& a": {
    textDecoration: "none",
    color: "blue",
    fontSize: "15px",
    marginTop: "5px",
  },
});

const FooterContainer = styled("div")({
  width: "100%",
});

const PropertyLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Arbitrage");

  return (
    <Root>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <AdvertisementContainer>
        <Box className="img">
          <img
            src="/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg"
            alt="img"
            height={"100%"}
            width={"100%"}
          />
        </Box>

        <Box className="content">
          <Typography
            variant="h4"
            sx={{
              color: "black",
              marginLeft: "2rem",
              "@media screen and (max-width: 600px)": {
                marginLeft: "1rem",
                padding: "5px",
              },
            }}
          >
            3D Interior Design Made Easy
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "600",
              color: "gray",
              marginLeft: "2rem",
              width: "75%",
              "@media screen and (max-width: 600px)": {
                marginLeft: "1rem",
                padding: "5px",
              },
            }}
          >
            Design your 3D dream home like a pro, Interior Design & 4k Render
          </Typography>

          <div className="below-content">
            <Typography
              variant="h3"
              sx={{
                color: "#444444",
                marginLeft: "2rem",
                marginTop: "0.50rem",
                width: "100%",
                marginTop: "5px",
                "@media screen and (max-width: 600px)": {
                  fontSize: "15px",
                  marginTop: "0.50rem",
                  marginLeft: "1rem",
                  padding: "5px",
                },
              }}
            >
              Coohom 3D Design Tool
            </Typography>

            <div className="open-link">
              <a href="/open" target="_blank">
                Open
              </a>
              <ChevronRightIcon sx={{ color: "blue" }} />
            </div>
          </div>
        </Box>
      </AdvertisementContainer>
      <Wrapper>
        <ContentContainer>
          <Grid container spacing={3}>
            <Grid item lg={3} md={4} sm={12} xs={12}>
              <NavBar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
                setSelectedTab={(item) => setSelectedTab(item)}
                tabView={selectedTab}
              />
            </Grid>
            <Grid item lg={9} md={8} sm={12} xs={12} >
              <Content id="main-scroll">{children}</Content>
            </Grid>
          </Grid>
        </ContentContainer>
      </Wrapper>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Root>
  );
};

PropertyLayout.propTypes = {
  children: PropTypes.node,
};

export default PropertyLayout;
