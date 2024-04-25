import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { Card, Typography, Box, Container, Button, Skeleton, CardHeader, Avatar, IconButton, CardMedia, CardContent } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";



const CityPropertyStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    position: "relative",
   
    "& .ArrowBox": {
      cursor: "pointer",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgb(255, 255, 255)",
      border: "3px solid rgb(250, 249, 246)",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      position: "absolute",
      right: "0",
      zIndex: "1",
      borderRadius: "50px",
      top: "74px",
    
     
    },

    "& .cards": {
      boxShadow: "none",
      width: "95% !important",
      overflow: "initial",
      position: "relative",
      
      // padding: "10px",
      "& .overlay": {
        background: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        borderRadius: "15px",
       
      },
      "& .circleimg": {
        // width: "100%",
        // position: "relative",
        // maxWidth: "300px",
        "& .contentBox": {
          position: "absolute",
          right: "30px",
          top: "100px",
         
          "& h6": {
            color: "#fff",
            fontSize: "14px",
            fontWeight: "400",
          },
          "& h5": {
            color: "#fff",
            fontSize: "14px",
            fontWeight: "500",
          },
        },
        "& img": {
          // width: "260px",
          height: "190px",
          borderRadius: "15px",
        },
      },
    },
  },
}));

const CityProperty = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const sliderRef = useRef(null);
  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
  const projectDetails = [
    {
      name: "Launched Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
    {
      name: "Delivered Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
    {
      name: "Pre - Launched Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
    {
      name: "Running Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
    {
      name: "Launched Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
    {
      name: "Delivered Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
    {
      name: "Pre - Launched Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
    {
      name: "Running Project",
      image: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    },
  ];

  return (
    <CityPropertyStyle>
      {isMobile ? (  
        <Card sx={{ width:'100vw', display: 'flex' , gap:2, boxShadow:'none', marginTop:'-25px' }}>
        <Skeleton sx={{ width: '100%', height: 95, borderRadius:3 }} animation="wave" variant="rectangular" />
        <Skeleton sx={{ width: '100%', height: 95, borderRadius:3 }} animation="wave" variant="rectangular" />
        <Skeleton sx={{ width: '50%', height: 95, borderRadius:3 }} animation="wave" variant="rectangular" />
      </Card>
 
      ) : (
       <Box className="mainBox">
        <Box className="ArrowBox" onClick={next}>
          <NavigateNextIcon style={{ color: "#000" }} />
        </Box>
        <Slider {...settings} ref={sliderRef} style={{ width: "130%" , borderRadius:'10px'}}>

          {projectDetails.map((data, index) => {
            return (
              <Card className="cards" key={index} >
                <Box className="circleimg">
                  <div className="overlay"></div>
                  <img src={data?.image} alt="img" width={"100%"} />
                  <Box className="contentBox" >
                    <Typography variant="h6">
                      BLK 7-1005, Vascon Tulips Gold
                    </Typography>
                    <Box display={"flex"} alignItems={"center"} >
                      <Box>
                        <Typography variant="h5">Property Size</Typography>
                        <Typography variant="h6">900 Sqr Ft.</Typography>
                      </Box>
                      &nbsp;&nbsp; &nbsp;&nbsp;
                      <Box>
                        <Typography variant="h5">Property Size</Typography>
                        <Typography variant="h6">900 Sqr Ft.</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Slider>
      </Box>
      )}
    </CityPropertyStyle>
  );
};

export default CityProperty;
