import React, { useContext, useRef } from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import FeaturedPostCard from "./FeaturedPostCard";
import { AuthContext } from "../context/Auth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const CardComponentStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    // padding: "0px 0 0px 0",
    background: "#fff",
    // padding: "50px",

    "& h2": {
      fontWeight: "500",
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
  "& .cards": {
    cursor: "pointer",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "20px",
    transform: "0",
    transition: "0.8s",
    transform: "scale(0.9)",

    "&:hover": {
      transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      padding: "10px 10px 10px",
      "& h5": {
        fontSize: "14px",
        textAlign: "start",
        fontWeight: "500",
        padding: "5px",
      },
      "& h4": {
        fontSize: "12px",
        color: "#000",
        fontWeight: "500",
        margin: "5px 5px",
      },
      "& h6": {
        fontSize: "10px",
        color: "#818181",
        fontWeight: "500",
        margin: "5px 5px",
      },
    },

    "& h5": {
      textAlign: "end",
      fontSize: "18px",
    },
  },
}));
const CardComponent = ({ showViewMore }) => {
  const sliderRef = useRef(null);
  const auth = useContext(AuthContext);
  const router = useRouter();

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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
  const handleClick = () => {
    router.push({
      pathname: "/all-property",
      query: { _id: "FEATURED" },
    });
  };
  return (
    <CardComponentStyle>
      <div className="mainSliderDiv">
        <Container maxWidth>
          <Box className="projects-card">
            <Typography variant="h2">Featured Projects</Typography>
            <Typography variant="h6">
              Featured Residential Projects Across India
            </Typography>
          </Box>

          <Box>
            <Slider {...settings} ref={sliderRef}>
              {auth?._isFeaturedPost?.map((data, index) => (
                <FeaturedPostCard data={data} key={index} />
              ))}
            </Slider>
            {
              auth?._isFeaturedPost &&
              auth._isFeaturedPost.length > 8 && (
                <Button
                  onClick={handleClick}
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: "#A7D325",
                    color: "white",
                    float: "right",
                  }}
                >
                  View All
                  <ArrowForwardIcon
                    sx={{ fontSize: "18px", marginLeft: "10px" }}
                  />
                </Button>
              )}
          </Box>
        </Container>
      </div>
    </CardComponentStyle>
  );
};

export default CardComponent;
