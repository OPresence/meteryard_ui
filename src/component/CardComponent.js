import { Grid, Typography, Box, Container, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";
import React, { useEffect, useState, useRef } from "react";
import { PostApiFunction } from "../utils";
import Apiconfigs from "../ApiConfig/ApiConfig";
import useMediaQuery from "@mui/material/useMediaQuery";
const CardComponentStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "20px 0 30px 0",
    background: "#fff",
   
    // padding: "50px",
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
    cursor: "pointer",
    width: "90%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "20px",
    transform: "0",
    transition: "0.8s",
    transform: "scale(0.9)",

    "&:hover": {
      transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      padding: "10px 10px 10px",
      "& h5": {
        fontSize: "14px",
        textAlign: "start",
        fontWeight: "500",
        padding: "5px",
      },
      "& h4": {
        fontSize: "12px",
        color: "#000",
        fontWeight: "500",
        margin: "5px 5px",
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
}));
const CardComponent = () => {
  const sliderRef = useRef(null);

  const isMobile = useMediaQuery("(max-width:600px)");
  const projectDetails = [
    {
      name: "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It OnThe Top And The Bottom Of Your Oral Cavity.",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      name: "Delivered Project",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      name: "Pre - Launched Project",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      name: "Running Project",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      name: "It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It OnThe Top And The Bottom Of Your Oral Cavity.",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      name: "Delivered Project",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      name: "Pre - Launched Project",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
    {
      name: "Running Project",
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100341.png",
    },
  ];
  const settings = {
    dots: true,
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
  // const [_getlist, setGetList] = useState([]);
  // console.log("res---->5s645sds6a+d4sa", _getlist);

  // const [_isloading, setIsLoading] = useState(false);

  // const ResidentialAPI = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await PostApiFunction({
  //       endPoint: Apiconfigs?.listAllPropertyPost,
  //       data: {
  //         projectTypeId: "65dc4b9cda234100342352b1",
  //         page: "1",
  //         limit: "10",
  //       },
  //     });
  //     if (res?.responseCode == 200) {
  //       setIsLoading(false);

  //       setGetList(res?.result?.docs);
  //     }
  //   } catch (error) {
  //     setIsLoading(false);

  //     console.log("eror", error);
  //   }
  // };
  // useEffect(() => {
  //   ResidentialAPI();
  // }, []);
  return (
    <CardComponentStyle>
      <div className="mainSliderDiv">
        <Container maxWidth>
          <Box className="projects-card">
            <Typography variant="h2">Featured Projects</Typography>
            <Typography variant="h6">
              Featured Residential Projects Across India
            </Typography>
          </Box>
          <Box mt={isMobile ? 2 : 5}>
            <Slider {...settings} ref={sliderRef}>
              {projectDetails.map((data, index) => {
                return (
                  <Grid item lg={3} md={6} sm={6} xs={12} key={index}>
                    <Box
                      height={"100%"}
                      pb={"20px"}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Box className="cards property-card-style">
                        <Box>
                          <img
                            src="/images/meteryard/Images/Screenshot 2023-09-02 100309.png"
                            width={"100%"}
                          />
                        </Box>
                        <Box className="contentBox">
                          <Typography variant="h5">
                            BLK 7-1005, Vascon Tulips Gold
                          </Typography>
                          <Typography variant="h4">
                            BLK 7-1005, Vascon Tulips Gold
                          </Typography>
                          <Typography variant="h6">
                            It Is A Piece Of Really Soft Tissue That Appears As
                            A Thin Line Between The Gums And Lips.
                          </Typography>
                          <Box m={"10px 0"}>
                            <Divider color="#D2D2D2" />
                          </Box>
                          <Box display={"flex"} alignItems={"center"}>
                            <Box>
                              <Typography variant="h4">
                                Property Size
                              </Typography>
                              <Typography variant="h5">900 Sqr Ft.</Typography>
                            </Box>
                            &nbsp;&nbsp; &nbsp;&nbsp;
                            <Box>
                              <Typography variant="h4">
                                Property Size
                              </Typography>
                              <Typography variant="h5">900 Sqr Ft.</Typography>
                            </Box>
                          </Box>
                          {/* <ButtonComponent data={data} /> */}
                        </Box>
                      </Box>{" "}
                    </Box>
                  </Grid>
                );
              })}
            </Slider>
          </Box>
        </Container>
      </div>
    </CardComponentStyle>
  );
};

export default CardComponent;
