import React, { useRef } from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MainComponent = styled(Box)(({ theme }) => ({
  "& .mainSliderDiv": {
    textAlign: "center",
    width: "85%",
    margin: "0 auto",
    marginTop: "-90px",
    "@media(max-width:615px)": {
      marginTop: "40px",
    },
  },
  "& .circleimg": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& svg": {
      color: "orange",
    },
    "& .img": {
      height: "100px",
      width: "120px",
      "@media(max-width:615px)": {
        height: "60px",
        width: "70px",
      },
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
    position: "relative",
    "@media(max-width:615px)": {
      height: "150px",
    },

    "& h5": {
      marginTop: "1rem",

      // "fontFamily":"Inter","fontSize":"22px","fontWeight":"700","lineHeight":"26.31px","textAlign":"center"
      fontFamily: "Inter",
      fontSize: "22px",
      fontWeight: "600",
      lineHeight: "26.31px",
      textAlign: "center",
    },
    "& .rightIcon": {
      textAlign: "center",
      fontSize: "18px",
      marginTop: "2rem",
    },
  },
  "& .container": {
    height: "310px",
    "@media(max-width:615px)": {
      height: "200px",
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

const SliderComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          slidesToShow: 3,
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
          slidesToShow: 2,
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
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <MainComponent position="relative" m={"2rem 0"}>
      {!isMobile && (
        <IconButtonLeftContent onClick={handlePrevious}>
          <ArrowBackIosIcon />
        </IconButtonLeftContent>
      )}

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
                <Container className="container">
                  <Box display={"flex"} justifyContent={"center"} key={index}>
                    <Card className="cards project-slider">
                      <Box className="circleimg">
                        <Box className="img">
                          <img src={data?.image} alt="img" width={"100%"} />
                        </Box>
                        <Box mt={3}>
                          <Typography
                            variant="h6"
                            fontSize={isMobile ? 16 : 24}
                          >
                            {data?.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Container>
              </Grid>
            );
          })}
        </Slider>
      </Box>
      {!isMobile && (
        <IconButtonRightContent onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButtonRightContent>
      )}
    </MainComponent>
  );
};

export default SliderComponent;
