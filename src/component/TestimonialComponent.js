import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Box, Card, Container, Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const TestimonialStyle = styled("Box")(({ theme }) => ({
  "& .backgorunClass": {
    backgroundImage: `url("/images/meteryard/Graphics/Rectangle 399.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height: "735px",
    position: "relative",
    left: "-190px",

    "@media(max-width:1080px)": {
      left: "0",
    },
    "& h2": {
      color: "#fff",
    },
    "& .sliderBox": {
      maxWidth: "250px",
      marginTop: "40px",
      "@media(max-width:615px)": {
        maxWidth: "100%",
        marginTop: "20px",
      },

      "& h6": {
        color: "#fff",
        fontSize: "14px",
        marginBottom: "20px",
      },
    },
    "& .ArrowClass": {
      cursor: "pointer",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        background: "rgb(162 209 23)",
        transition: "0.6s",
      },
      "& svg": {
        color: "#fff !important",
        fontSize: "25px",
      },
    },
    "& .arrowsBox": {
      textAlign: "center",
      display: "flex",
      gap: "10px",
      position: "relative",
      zIndex: "1",
      marginTop: "-50px",
      "@media(max-width:1080px)": {
        marginTop: "0px",
        top: "-150px",
      },
      "& .ArrowClassprev": {
        "@media(max-width:1080px)": {
          position: "absolute",
          left: "-9px",
        },
      },
      "& .ArrowClassNext": {
        "@media(max-width:1080px)": {
          position: "absolute",
          right: "-9px",
        },
      },
    },
    "& .Cards": {
      // height: "250px",
      // width: "200px",
      padding: "20px",
      transition: "0.8s",
      transform: "scale(0.9)",
      borderRadius: "20px",
      "&:hover": {
        transform: "scale(1)",
        transition: "0.8s",
      },
      "& h6": {
        textAlign: "center",
        fontSize: "12px",
      },
      "& h4": {
        color: "#114A82",
        fontSize: "16px",
        textAlign: "center",
      },
    },
  },
  "& .imageBox": {
    background: "#dce1e4",
    maxWidth: "70px",
    minHeight: "70px",
    display: "flex",
    alignItems: "center",
    borderRadius: "50px",
  },
  "& .borderLine": {
    borderBottom: "2px solid #707070",
    width: "75px",
    height: "3px",
  },
  "& .mainBox": {
    padding: "190px 90px 190px 190px",
    "@media(max-width:1080px)": {
      padding: "140px 0 0 0",
    },
    "@media(max-width:615px)": {
      paddingBottom: "40px",
    },
  },
}));

const TestimonialComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          autoplay: true,
          initialSlide: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const CardJson = [{}, {}, {}, {}];
  return (
    <TestimonialStyle>
      <Box position={"relative"}>
        <Box className="backgorunClass">
          <Container maxWidth>
            <Box className="mainBox">
              <Typography variant="h2">Testimonials</Typography>
              <Box>
                <Grid container>
                  <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Box className={"sliderBox"}>
                      <Typography variant="h6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    lg={9}
                    md={9}
                    sm={9}
                    xs={12}
                    style={{ justifyContent: "end" }}
                  >
                    <Slider ref={sliderRef} {...settings}>
                      <Card className="Cards">
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          mb={"10px"}
                        >
                          <Box className="imageBox">
                            <img
                              src="\images\meteryard\Images\profile.png"
                              width={"100%"}
                            />
                          </Box>
                        </Box>
                        <Typography variant="h6">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&apos;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type.
                        </Typography>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          m={"20px 0"}
                        >
                          <Box className="borderLine"></Box>
                        </Box>
                        <Typography variant="h4">DIVYA BAJAJ</Typography>
                      </Card>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Card className="Cards">
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          mt={"10px"}
                        >
                          <Box className="imageBox">
                            <img
                              src="\images\meteryard\Images\profile.png"
                              width={"100%"}
                            />
                          </Box>
                        </Box>
                        <Typography variant="h6">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&apos;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type.
                        </Typography>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          m={"20px 0"}
                        >
                          <Box className="borderLine"></Box>
                        </Box>
                        <Typography variant="h4">DIVYA BAJAJ</Typography>
                      </Card>
                      <Card className="Cards">
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          mt={"10px"}
                        >
                          <Box className="imageBox">
                            <img
                              src="\images\meteryard\Images\profile.png"
                              width={"100%"}
                            />
                          </Box>
                        </Box>
                        <Typography variant="h6">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&apos;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type.
                        </Typography>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          m={"20px 0"}
                        >
                          <Box className="borderLine"></Box>
                        </Box>
                        <Typography variant="h4">DIVYA BAJAJ</Typography>
                      </Card>
                    </Slider>
                  </Grid>
                </Grid>
              </Box>

              {/* <Box > */}
              <Box className="arrowsBox">
                <Box className={"ArrowClass ArrowClassprev"} onClick={previous}>
                  <NavigateBeforeIcon />
                </Box>
                <Box onClick={next} className={"ArrowClass ArrowClassNext"}>
                  <NavigateNextIcon />
                </Box>
              </Box>
              {/* </Box> */}
            </Box>
          </Container>
        </Box>
      </Box>
    </TestimonialStyle>
  );
};

export default TestimonialComponent;
