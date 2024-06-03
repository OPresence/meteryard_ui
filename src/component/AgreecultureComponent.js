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
import AgreeculturePostCard from "./AgreeculturePostCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const AgreecultureStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    // padding: "40px 0px",
    position: "relative",
    background: "#fff",
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
  left: "4rem",
  top: "50%",
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
  right: "4rem",
  top: "50%",
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
    infinite: false,
    autoplay: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 1,
        },
      },
    ],
  };
  const handleClick = () => {
    // router.push({
    //   pathname: "/all-property",
    //   query: { _id: auth?._getlistAgreeculture[0]?.projectTypeId?._id },
    // });
    router.push({
      pathname: "/all-property",
      // query: { _id: "FEATURED" },
    });
  };

  return (
    <AgreecultureStyle>
      <div className="mainSliderDiv">
        <Container maxWidth>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={5}
          >
            <Box width={isMobile ? "100%" : "90%"} marginInline="auto">
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
          {!isMobile && auth?._getlistAgreeculture?.length > 4 && (
            <IconButtonLeftContent onClick={handlePrevious}>
              <ArrowBackIosIcon />
            </IconButtonLeftContent>
          )}
          <Box>
            <Box
              mt={2}
              width="93.9%"
              marginInline="auto"
              paddingLeft={!isMobile && 4}
            >
              <Slider {...settings} ref={sliderRef}>
                {!!auth?._getlistAgreeculture &&
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
            <Box className="viewmoreButtonShow" m={1}>
              <Button onClick={handleClick}>
                View All <ArrowForwardIcon className="forwardIcon" />
              </Button>
            </Box>
          )}
        </Container>
      </div>
    </AgreecultureStyle>
  );
};

export default AgreecultureComponent;
