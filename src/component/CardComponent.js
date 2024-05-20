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
    "& p": {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "29.05px",
    },
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
    // cursor: "pointer",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "20px",
    transform: "0",
    // transition: "0.8s",
    // transform: "scale(0.8)",

    "&:hover": {
      // transform: "scale(0.9)",
      // transition: "0.8s",
    },
    "& .contentBox": {
      padding: "10px 10px 10px",
      // "& h5": {
      //   fontSize: "14px",
      //   textAlign: "start",
      //   fontWeight: "500",
      //   padding: "5px",
      // },
      // "& h4": {
      //   fontSize: "12px",
      //   color: "#000",
      //   fontWeight: "500",
      //   margin: "5px 5px",
      // },
      // "& h6": {
      //   fontSize: "10px",
      //   color: "#818181",
      //   fontWeight: "500",
      //   margin: "5px 5px",
      // },
    },

    // "& h5": {
    //   textAlign: "end",
    //   fontSize: "18px",
    //   color: "#fbb415 ",
    // },
  },
  "& .viewmoreButtonShow": {
    padding: "10px",
    display: "flex",
    justifyContent: "end",
    marginTop: "-40px",

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
const CardComponent = () => {
  const sliderRef = useRef(null);
  const auth = useContext(AuthContext);
  const router = useRouter();

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
            <Typography variant="h1">Featured Projects</Typography>
            <Typography variant="body1">
              Featured Residential Projects Across India
            </Typography>
          </Box>

          <Box mt={4}>
            {auth?._getlist?.length > 4 ? (
              <Slider {...settings} ref={sliderRef}>
                {auth?._isFeaturedPost &&
                  auth?._isFeaturedPost?.map((data, index) => {
                    return (
                      <Box key={index}>
                        <FeaturedPostCard data={data} index={index} />
                      </Box>
                    );
                  })}
              </Slider>
            ) : (
              <>
                <Grid container>
                  {auth?._isFeaturedPost &&
                    auth?._isFeaturedPost?.map((data, index) => {
                      return (
                        <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                          <FeaturedPostCard data={data} />
                        </Grid>
                      );
                    })}
                </Grid>
              </>
            )}

            {/* <Slider {...settings} ref={sliderRef}>
              {auth?._isFeaturedPost?.map((data, index) => (
                <FeaturedPostCard data={data} key={index} />
              ))}
            </Slider> */}
            <Box className="viewmoreButtonShow">
              {auth._isFeaturedPost.length > 4 && (
                <Button onClick={handleClick}>
                  View All
                  <ArrowForwardIcon
                    sx={{ fontSize: "18px", marginLeft: "10px" }}
                  />
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </CardComponentStyle>
  );
};

export default CardComponent;
