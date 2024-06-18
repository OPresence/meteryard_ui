import React, { useRef, useContext, useState } from "react";
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
import styled from "@emotion/styled";
import ResidentialPostCard from "./ResidentialPostCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import { AuthContext } from "../context/Auth";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ResidentStyle = styled(Box)(({ theme }) => ({
  "& .mainSliderDiv": {
    background: "#fff",
    position: "relative",
    padding: "0 40px",
    marginTop: "4rem",

    "@media(max-width:615px)": {
      padding: "0",
      marginTop: "5rem",
    },
  },

  "& .cards": {
    cursor: "pointer",
    width: "100%",
    position: "relative",

    "&:hover": {
      transition: "0.8s",
    },
  },

  "& .forwardIcon": {
    fontSize: "18px",
    marginLeft: "10px",
  },
  "& .viewmoreButtonShow": {
    padding: "10px",
    position: "absolute",
    right: "25px",
    bottom: "0",
    zIndex: "999",
    "@media(max-width:615px)": {
      right: "0px",
      bottom: "-40px",
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
  zIndex: 1,
  cursor: "pointer",
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
  "@media(max-width:615px)": {
    right: "0rem",
  },
});

const ResidentialProjects = ({ showViewMore, ProductData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const auth = useContext(AuthContext);
  const sliderRef = useRef(null);
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      if (currentSlide != 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      if (currentSlide < ProductData?.allProperty?.length.length - 3)
        setCurrentSlide(currentSlide + 1);
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
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
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !true,
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
    <ResidentStyle>
      <Box className="mainSliderDiv">
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize={isMobile ? 28 : 48}
                fontWeight={500}
                lineHeight={isMobile && 1.5}
              >
                {ProductData?.projectType} Projects
              </Typography>
              <Typography
                variant="h6"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                {ProductData?.projectType} Projects Across India
              </Typography>
            </Box>
          </Box>
        </Container>

        {ProductData?.allProperty?.length > 4 && (
          <IconButtonLeftContent onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </IconButtonLeftContent>
        )}

        <Box className="cards" mt={4}>
          <Box
            sx={{
              width: "95%",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {ProductData?.allProperty?.length > 4 ? (
              <Slider {...settings} ref={sliderRef}>
                {ProductData?.allProperty?.length &&
                  ProductData?.allProperty?.map((data, index) => {
                    return (
                      <Box key={index}>
                        <ResidentialPostCard data={data} />
                      </Box>
                    );
                  })}
              </Slider>
            ) : (
              <>
                <Grid container>
                  {!!ProductData?.allProperty?.length &&
                    ProductData?.allProperty?.map((data, index) => {
                      return (
                        <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                          <ResidentialPostCard data={data} />
                        </Grid>
                      );
                    })}
                </Grid>
              </>
            )}
          </Box>

          {!isMobile && (
            <Box mt={"2rem"} sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {React.Children.toArray(
                  ProductData?.allProperty.map((item, index) => {
                    if (index >= ProductData?.allProperty?.length - 2)
                      return null;
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
            </Box>
          )}
          <Box className="viewmoreButtonShow">
            {ProductData?.allProperty?.length > 3 && (
              <Button onClick={handleClick}>
                View All
                <ArrowForwardIcon
                  sx={{ fontSize: "18px", marginLeft: "10px" }}
                />
              </Button>
            )}
          </Box>
        </Box>

        {ProductData?.allProperty?.length > 4 && (
          <IconButtonRightContent onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButtonRightContent>
        )}
      </Box>
    </ResidentStyle>
  );
};

export default ResidentialProjects;
