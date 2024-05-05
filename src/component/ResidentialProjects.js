import React, { useRef, useContext } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import ResidentialPostCard from "./ResidentialPostCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/Auth";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ResidentStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "80px 0px",
    background: "#fff",
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
      minHeight: "220px",
      height: "100%",
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
  "& .GridClassCard": {
    height: "100%",
    display: "flex",
    "@media(max-width:615px)": {
      marginTop: "10px !important",
    },
  },
}));
const ResidentialProjects = () => {
  const auth = useContext(AuthContext);
  const sliderRef = useRef(null);

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
  return (
    <ResidentStyle>
      <div className="mainSliderDiv">
        <Container maxWidth>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"inline-flex"}>
              <Box>
                <Typography variant="h2">Residential Projects</Typography>
                <Typography variant="h6">
                  Featured Residential Projects Across India
                </Typography>
              </Box>
            </Box>
            {auth?._getlist?.length > 4  &&
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
           </Box>}
           
          </Box>
          <Box mt={5}>
            {auth?._getlist?.length > 4 ?
             <Slider {...settings} ref={sliderRef}>
             {auth?._getlist &&
               auth?._getlist?.map((data, index) => {
                 console.log("indexsdssd--->",index);
                   return (
                     <Grid
                       item
                       lg={3}
                       md={3}
                       sm={6}
                       xs={12}
                       key={index}
                     >
                    <ResidentialPostCard data={data}/>
                     </Grid>
                   );
               })}
           </Slider> :
           <>
                 <Grid container spacing={3}>
            {auth?._getlist &&
               auth?._getlist?.map((data, index) => {
                   return (
           <Grid
           item
           lg={3}
           md={3}
           sm={6}
           xs={12}
           key={index}
         >
          <ResidentialPostCard data={data}/>
         </Grid>
                   )
                  })}
                  </Grid>
                  </>
         }
           

            {auth?._getlist?.length > 7 && (
              <Box
                display={"flex"}
                justifyContent={"end"}
                p={"0 15px"}
                mt={"-20px"}
              >
                <a href="#">view more</a>
              </Box>
            )}
          </Box>
        </Container>
      </div>
    </ResidentStyle>
  );
};

export default ResidentialProjects;
