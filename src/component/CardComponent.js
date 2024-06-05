import React, { useContext, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import FeaturedPostCard from "./FeaturedPostCard";
import { AuthContext } from "../context/Auth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const CardComponentStyle = styled(Box)(({ theme }) => ({
  position: "relative",
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
    // width: "60%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    // borderRadius: "20px",
    transform: "0",

    "&:hover": {},
    "& .contentBox": {
      padding: "10px 10px 10px",
    },
  },
  "& .viewmoreButtonShow": {
    padding: "10px",
    display: "flex",
    justifyContent: "end",

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

const CardComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sliderRef = useRef(null);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <CardComponentStyle>
      <div className="mainSliderDiv">
        <Container maxWidth>
          <Box width={isMobile ? "100%" : "90%"} marginInline="auto">
            <Typography
              variant="h1"
              fontSize={isMobile ? 28 : 48}
              fontWeight={500}
              lineHeight={isMobile && 1.5}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="p"
              fontSize={isMobile ? 20 : 24}
              pl={0.3}
              fontWeight={300}
            >
              Featured Residential Projects Across India
            </Typography>
          </Box>

          {auth._isFeaturedPost.length > 4 && !isMobile && (
            <IconButtonLeftContent onClick={handlePrevious}>
              <ArrowBackIosIcon />
            </IconButtonLeftContent>
          )}

          <Box mt={4} width="95%" marginInline="auto">
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
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
              {React.Children.toArray(
                auth._isFeaturedPost.map((item, index) => {
                  if (index >= auth._isFeaturedPost.length - 2) return null;
                  return (
                    <Box
                      onClick={() => {
                        setCurrentSlide(index);
                        sliderRef.current.slickGoTo(index);
                      }}
                      style={{
                        minWidth: "10px",
                        minHeight: "10px",
                        borderRadius: "50%",
                        border: "1px solid #A7D325",
                        backgroundColor:
                          currentSlide === index ? "#A7D325" : "white",
                        marginRight: "4px",
                      }}
                    />
                  );
                })
              )}
            </Box>
          )}

          {auth._isFeaturedPost.length > 4 && !isMobile && (
            <IconButtonRightContent onClick={handleNext}>
              <ArrowForwardIosIcon />
            </IconButtonRightContent>
          )}
          <Box className="viewmoreButtonShow" style={{ marginTop: "1rem" }}>
            {auth._isFeaturedPost.length > 4 && (
              <Button onClick={handleClick}>
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
