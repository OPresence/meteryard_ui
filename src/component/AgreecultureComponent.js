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
import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/Auth";
import AgreeculturePostCard from "./FeaturedPostCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const AgreecultureStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "0 40px",
    position: "relative",
    background: "#fff",
    "@media(max-width:615px)": {
      padding: "0",
      marginTop: "5rem",
    },
    "& p": {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "29.05px",
    },
    // padding: "50px",
    "@media(max-width:615px)": {
      padding: "20px 0px",
    },
    "& h2": {
      fontWeight: "500",
    },
  },
  "& .ArrowClass": {
    cursor: "pointer",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#a2d117",
    border: "3px solid #FAF9F6",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    "& svg": {
      color: "#000 !important",
      fontSize: "12px",
    },
    "&:hover": {
      background: "rgb(0, 144, 53)",
      transition: "0.6s",
      "& svg": {
        color: "#fff !important",
      },
    },
  },

  "& .viewmoreButtonShow": {
    padding: "10px",
    position: "absolute",
    right: "60px",
    bottom: "0",
    zIndex: "999",
    "@media(max-width:615px)": {
      right: "0px",
      bottom: "0px",
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
  top: "60%",
  transform: "translateY(-50%)",
  color: "black",
  cursor: "pointer",
  zIndex: 2,
  "@media(max-width:615px)": {
    left: "0rem",
  },
});

const IconButtonRightContent = styled(Box)({
  position: "absolute",
  right: "3rem",
  top: "60%",
  transform: "translateY(-50%)",
  color: "black",
  cursor: "pointer",
  zIndex: 2,
  "@media(max-width:615px)": {
    right: "0rem",
  },
});

const AgreecultureComponent = ({ showViewMore }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const auth = useContext(AuthContext);
  const sliderRef = useRef(null);
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    if (sliderRef.current) {
      if (currentSlide >= 1) {
        setCurrentSlide(currentSlide - 1);
      }
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      if (currentSlide <= auth?._getlistAgreeculture.length - 3) {
        setCurrentSlide(currentSlide + 1);
      }
      sliderRef.current.slickNext();
    }
  };
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
    });
  };

  return (
    <AgreecultureStyle>
      <Box className="mainSliderDiv">
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={5}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize={isMobile ? 28 : 48}
                fontWeight={500}
                lineHeight={isMobile && 1.5}
              >
                Agriculture Projects
              </Typography>
              <Typography
                variant="p"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                Agriculture Projects Across India.
              </Typography>
            </Box>
          </Box>
        </Container>

        {!isMobile && auth?._getlistAgreeculture?.length > 4 && (
          <IconButtonLeftContent onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </IconButtonLeftContent>
        )}
        <Box>
          <Box mt={4} width="95%" marginInline="auto">
            <Slider {...settings} ref={sliderRef}>
              {auth?._getlistAgreeculture &&
                auth?._getlistAgreeculture?.map((data, index) => {
                  return <AgreeculturePostCard data={data} key={index} />;
                })}
            </Slider>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
          {React.Children.toArray(
            auth?._getlistAgreeculture.map((item, index) => {
              if (index >= auth?._getlistAgreeculture.length - 2) return null;
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
        {!isMobile && auth?._getlistAgreeculture?.length > 4 && (
          <IconButtonRightContent onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButtonRightContent>
        )}
        {auth?._getlistAgreeculture.length > 0 && (
          <Box className="viewmoreButtonShow">
            <Button onClick={handleClick}>
              View All <ArrowForwardIcon className="forwardIcon" />
            </Button>
          </Box>
        )}
      </Box>
    </AgreecultureStyle>
  );
};

export default AgreecultureComponent;
