import React, { useRef } from "react";
import { Card, Grid, Typography, Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    textAlign: "center",
    width: "85%",
    margin: "0 auto",
    marginTop: "-90px",
    "@media(max-width:615px)": {
      padding: "0px 0 60px 0",
      marginTop: "150px",
    },
  },
  "& .circleimg": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& h6": {
      color: "orange",
      fontSize: "16px",
      marginTop: "2rem",
      fontWeight:"400"
      // marginLeft: "-4rem",
    },

    "& svg": {
      color: "orange",
    },
    "& .img": {
      height: "100px",
      width: "120px",
    },
  },
  "& .large": {
    background: "#FFF",
  },
  "& .cards": {
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)!important",
    padding: "10px",
    width: "100%",
    height: "230px",
    borderRadius: "10px",
    marginTop: "2rem",
    position:"relative",

    "& h5": {
      marginTop: "1rem",

      // "fontFamily":"Inter","fontSize":"22px","fontWeight":"700","lineHeight":"26.31px","textAlign":"center"
      "fontFamily":"Inter","fontSize":"22px","fontWeight":"600","lineHeight":"26.31px","textAlign":"center"
    },
    "& .rightIcon": {
      textAlign: "center",
      fontSize: "18px",
      marginTop: "2rem",
    },
  },
  "& .container": {
    height: "310px",
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
              <Grid
                item
                lg={3}
                md={6}
                sm={12}
                xs={12}
                key={index}
                style={{ padding: "800px" }}
              >
                <Container maxWidth className="container">
                  <Box display={"flex"} justifyContent={"center"} key={index}>
                    <Card className="cards project-slider">
                      <Box className="circleimg">
                        <Box
                          className="img"
                        >
                          <img src={data?.image} alt="img" width={"100%"} />
                        </Box>
                        <Box>
                          <Typography variant="h5">{data?.name}</Typography>
                        </Box>
                        <Box display={"flex"} position={"absolute"} bottom={"0"} width={"100%"} left={"20px"}>
                          <Typography variant="h6">View all</Typography>
                          <span className="rightIcon">
                            <ChevronRightIcon />
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
