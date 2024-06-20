import React, { useContext } from "react";
import ResidentialProjects from "../component/ResidentialProjects";
import CardComponent from "../component/CardComponent";
import { AuthContext } from "../context/Auth";
import { Box, Grid, Container } from "@mui/material";
import SkeltonLoader from "./SkeltonLoader";
import styled from "@emotion/styled";

const CardComponentStyle = styled(Box)(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "0 40px",
    position: "relative",
    background: "#fff",
    "@media(max-width:615px)": {
      padding: "0",
      marginTop: "2rem",
    },
    "& container": {
      padding: "0px",
    },
  },
  "& .circleimg": {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "250px",
    "& h6": {
      color: "#A7D325",
      fontSize: "14px",
    },
    "& svg": {
      color: "#A7D325",
    },
  },
  "& .large": {
    background: "#FFF",
  },

  "& .viewmoreButtonShow": {
    padding: "10px",
    position: "absolute",
    right: "55px",
    bottom: "0",
    zIndex: "999",
    "@media(max-width:615px)": {
      right: "0px",
      bottom: "-20px",
    },
    "& button": {
      border: "2px solid #a7d325",
      background: "none",
      borderRadius: "20px",
      color: "#000",
      border: "none",

      "& span": {
        color: "#a7d325 ",
      },
    },
  },
}));

const IconButtonLeftContent = styled(Box)({
  position: "absolute",
  left: "3rem",
  top: "50%",
  transform: "translateY(-50%)",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
  "@media(max-width:615px)": {
    left: "0rem",
  },
});

const IconButtonRightContent = styled(Box)({
  position: "absolute",
  right: "3rem",
  top: "50%",
  transform: "translateY(-50%)",
  color: "black",
  cursor: "pointer",
  "@media(max-width:615px)": {
    right: "0rem",
  },
});
const MasterCardProduct = () => {
  const auth = useContext(AuthContext);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          infinite: true,
          autoplay: false,
          initialSlide: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    console.log("aadasdd");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleClick = () => {
    router.push({
      pathname: "/all-property",
      query: { _id: "FEATURED" },
    });
  };
  return (
    <Box>
      {auth?._loadingAllProduct ? (
        <Container>
          <Grid container spacing={3}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={index}>
                <SkeltonLoader />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <>
          <Box>
            {!auth?._loadingAllProduct &&
              auth?._getallProduct?.length > 0 &&
              auth?._getallProduct?.map((ProductData, _id) => {
                if (ProductData?.projectType == "Residential") {
                  return (
                    <Box key={_id}>
                      <ResidentialProjects ProductData={ProductData} />
                    </Box>
                  );
                } else {
                  return (
                    <Box key={_id} mt={5}>
                      <CardComponent ProductData={ProductData} />
                    </Box>
                  );
                }
              })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default MasterCardProduct;
