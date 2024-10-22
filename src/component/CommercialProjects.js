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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import CommercialPostCard from "./FeaturedPostCard";
import { AuthContext } from "../context/Auth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const CommercialProjectsStyle = styled(Box)(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "0 40px",
    position: "relative",

    background: "#fff",
    "@media(max-width:615px)": {
      padding: "0",
      marginTop: "5rem",
    },
    "& container": {
      padding: "0px",
    },
    // "& p": {
    //   fontFamily: "Inter",
    //   fontSize: "24px",
    //   fontWeight: "400",
    //   lineHeight: "29.05px",
    // },
    // "& h2": {
    //   fontWeight: "500",
    // },
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
const CommercialProjects = () => {
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <CommercialProjectsStyle>
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
                Commercial Projects
              </Typography>
              <Typography
                variant="p"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                Commercial Projects Across India
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box mt={4} width="95%" marginInline="auto">
          {auth?._getlist_commercial?.length > 4 || isMobile ? (
            <Slider {...settings} ref={sliderRef}>
              {React.Children.toArray(
                auth?._getlist_commercial?.map((data, index) => {
                  return (
                    <CommercialPostCard
                      data={data}
                      key={index}
                      type="COMMERCIAL"
                    />
                  );
                })
              )}
            </Slider>
          ) : (
            <Grid container>
              {auth?._getlist_commercial?.map((data, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                    className="GridClassCard"
                    style={index > 3 ? { marginTop: "60px" } : {}}
                  >
                    <CommercialPostCard data={data} type="COMMERCIAL" />
                  </Grid>
                );
              })}
            </Grid>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "10px" }}
              >
                {isMobile &&
                  React.Children.toArray(
                    auth?._getlist_commercial.map((item, index) => {
                      return (
                        <Box
                          onClick={() => {
                            setCurrentSlide(index);
                            sliderRef?.current?.slickGoTo(index);
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

          {auth?._getlist_commercial.length > 0 && (
            <Box className="viewmoreButtonShow">
              <Button onClick={handleClick}>
                View All <ArrowForwardIcon className="forwardIcon" />
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </CommercialProjectsStyle>
  );
};

export default CommercialProjects;
