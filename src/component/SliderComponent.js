import React, { useRef } from "react";
import { Card, Grid, Typography, Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "60px 0",
    textAlign: "center",
    margin: "0 20px",
    "@media(max-width:615px)": {
      padding: "0px 0 60px 0",
      marginTop: "150px",
    },
  },
  "& .circleimg": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    boxShadow: "none !important",
    padding: "10px",
    width: "80%",

    "& h5": {
      textAlign: "end",
      fontSize: "18px",
    },
  },
}));
const SliderComponent = () => {
  const sliderRef = useRef(null);
  const projectDetails = [
    {
      name: "Launched Project",
      image: "images/meteryard/Graphics/Group 7831.png",
    },
    {
      name: "Delivered Project",
      image: "images/meteryard/Graphics/Group 7829.png",
    },
    {
      name: "Pre - Launched Project",
      image: "images/meteryard/Graphics/Group 7824.png",
    },
    {
      name: "Running Project",
      image: "images/meteryard/Graphics/Group 7830.png",
    },
    {
      name: "Launched Project",
      image: "images/meteryard/Graphics/Group 7831.png",
    },
    {
      name: "Delivered Project",
      image: "images/meteryard/Graphics/Group 7829.png",
    },
    {
      name: "Pre - Launched Project",
      image: "images/meteryard/Graphics/Group 7824.png",
    },
    {
      name: "Running Project",
      image: "images/meteryard/Graphics/Group 7830.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
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
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
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
          autoplay: true,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <MainComponent>
      <Box className="mainSliderDiv" mt={"25rem"}>
        <Slider {...settings} ref={sliderRef}>
          {projectDetails.map((data, index) => {
            return (
              <Grid item lg={3} md={6} sm={12} xs={12} key={index}>
                <Container maxWidth>
                  <Box display={"flex"} justifyContent={"center"} key={index}>
                    <Card className="cards project-slider">
                      <Box>
                        <Typography variant="h5">{data?.name}</Typography>
                      </Box>
                      <Box className="circleimg">
                        <Box
                          maxWidth={115}
                          minHeight={85}
                          maxHeight={85}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <img src={data?.image} alt="img" width={"100%"} />
                        </Box>
                        <Box display={"flex"}>
                          <Typography variant="h6">View all</Typography>
                          <span>
                            <ArrowRightAltIcon />
                          </span>
                        </Box>
                      </Box>
                    </Card>{" "}
                  </Box>
                </Container>
              </Grid>
            );
          })}
        </Slider>
      </Box>
    </MainComponent>
  );
};

export default SliderComponent;
