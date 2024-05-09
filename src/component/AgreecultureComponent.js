import React, { useContext, useRef } from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
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
    padding: "40px 0px",
    background: "#fff",

    // padding: "50px",
    "@media(max-width:615px)": {
      padding: "20px 0px",
    },
    "& h2": {
      fontWeight: "500",
    },
  },
  "& .circleimg": {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "265px",
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
    borderRadius: "15px",
    position: "relative",
    transition: "0.8s",
    transform: "scale(0.9)",
    "&:hover": {
      transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: "10px",
      marginTop: "-60px",
      background: "#fff",
      borderRadius: "10px",
      position: "relative",
      minHeight: "230px",
      "& svg": {
        color: "#000",
        fontSize: "16px",
      },
      "& .circleBox": {
        borderRadius: "50px",
        height: "50px",
        width: "50px",
        marginTop: "-35px",
        background: "darkslategray",
        display: "flex",
        alignItems: "center",
      },

      "& h5": {
        fontSize: "12px",
        textAlign: "start",
        fontWeight: "bold",
        padding: "5px",
        marginTop: "-10px",
      },
      "& h4": {
        fontSize: "12px",
        color: "#000",
        fontWeight: "500",
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
}));
const AgreecultureComponent = ({ showViewMore }) => {
  const auth = useContext(AuthContext);
  const sliderRef = useRef(null);
  const router = useRouter();
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  const handleClick = () => {
    router.push({
      pathname: "/all-property",
      query: { _id: auth?._getlistAgreeculture[0]?.projectTypeId?._id },
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
          >
            <Box display={"inline-flex"}>
              <Box>
                <Typography variant="h2">Agriculture Projects</Typography>
                <Typography variant="h6">
                  Agriculture Projects Across India.
                </Typography>
              </Box>
            </Box>
            {auth?._getlistAgreeculture?.length > 4 && (
              <Box
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "flex-end",
                }}
              >
                <Box className={"ArrowClass"} onClick={previous}>
                  <ArrowBackIosIcon
                    style={{
                      color: "#000",
                    }}
                  />
                </Box>
                <Box className={"ArrowClass"} onClick={next}>
                  <ArrowForwardIosIcon style={{ color: "#000" }} />
                </Box>
              </Box>
            )}
          </Box>
          <Box>
            {auth?._getlistAgreeculture?.length > 4 ? (
              <Slider {...settings} ref={sliderRef}>
                {auth?._getlistAgreeculture &&
                  auth?._getlistAgreeculture?.map((data, index) => {
                    return <AgreeculturePostCard data={data} key={index} />;
                  })}
              </Slider>
            ) : (
              <Grid container>
                {auth?._getlistAgreeculture &&
                  auth?._getlistAgreeculture?.map((data, index) => {
                    return (
                      <Grid
                        key={index}
                        item
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                        style={{ display: "flex" }}
                      >
                        <AgreeculturePostCard data={data} />
                      </Grid>
                    );
                  })}
              </Grid>
            )}

            {auth?._getlistAgreeculture?.length > 7 && (
              <Box
                display={"flex"}
                justifyContent={"end"}
                p={"0 15px"}
                mt={"-20px"}
              >
                <a href="#">view more</a>
              </Box>
            )}
            {
              auth?._getlistAgreeculture &&
              auth._getlistAgreeculture.length > 1 && (
                <Button
                  onClick={handleClick}
                  // href="/all-property?selectedSection=agreeculture"
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: "#A7D325",
                    color: "white",
                    float: "right",
                  }}
                >
                  View All{" "}
                  <ArrowForwardIcon
                    sx={{ fontSize: "18px", marginLeft: "10px" }}
                  />
                </Button>
              )}
          </Box>
        </Container>
      </div>
    </AgreecultureStyle>
  );
};

export default AgreecultureComponent;
