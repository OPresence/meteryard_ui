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
    padding: "40px 0px",
    background: "#fff",
    position: "relative",
    "& p": {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "29.05px",
    },
    "@media(max-width:615px)": {
      padding: "20px 0px",
    },
    // "& h1": {
    //   fontWeight: "600",
    //   fontSize: "28px",
    // },
    "& h2": {
      fontWeight: "500",
      fontSize: "16px",
    },
    "& h4": {
      fontSize: "14px",
      fontFamily: "system-ui",
      marginTop: "5px",
      fontWeight: "500",
      color: "#000",
    },
    "& h5": {
      fontSize: "12px",
      fontFamily: "system-ui",
      marginTop: "5px",
      fontWeight: "500",
      color: "#E0AF00",
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
    // "&:hover": {
    //   background: "rgb(0, 144, 53)",
    //   transition: "0.6s",
    //   "& svg": {
    //     color: "#fff !important",
    //   },
    // },
  },
  "& .circleimg": {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "265px",
    // "& h6": {
    //   color: "#A7D325",
    //   fontSize: "14px",
    // },
    "& svg": {
      color: "#A7D325",
      display: "none",
    },
  },
  "& .large": {
    background: "#FFF",
  },
  "& .cards": {
    cursor: "pointer",
    width: "100%",
    // borderRadius: "15px",
    position: "relative",
    // transition: "0.8s",
    // transform: "scale(0.9)",
    // display: "flex",

    "&:hover": {
      // transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: "0px",
      marginTop: "0px",
      background: "#fff",
      // borderRadius: "10px",
      position: "relative",
      // minHeight: "220px",
      height: "100%",
      "& svg": {
        color: "#000",
        fontSize: "6px",
      },
      "& .circleBox": {
        // borderRadius: "50px",
        height: "50px",
        width: "50px",
        marginTop: "-35px",
        background: "darkslategray",
        display: "flex",
        alignItems: "center",
      },

      // "& h5": {
      //   fontSize: "12px",
      //   textAlign: "start",
      //   fontWeight: "bold",
      //   padding: "5px",
      //   marginTop: "-10px",
      // },
      // "& h4": {
      //   fontSize: "12px",
      //   color: "#000",
      //   fontWeight: "500",
      // },
      // "& h6": {
      //   fontSize: "10px",
      //   color: "#818181",
      //   fontWeight: "500",
      //   margin: "5px 5px",
      // },
    },

    // "& h5": {
    //   textAlign: "end",
    //   fontSize: "18px",
    // },
  },
  "& .GridClassCard": {
    height: "100%",
    display: "flex",
    "@media(max-width:615px)": {
      marginTop: "10px !important",
    },
  },
  "& .viewBtn": {
    backgroundColor: "#A7D325",
    color: "white",
    float: "right",
  },
  "& .forwardIcon": {
    fontSize: "18px",
    marginLeft: "10px",
  },
  // "& .cards":{
  //   display:"flex",
  //   // width:"100%",

  //   "& .contentBox":{

  //     marginTop:"0px",

  //   },
  // },
  "& .viewmoreButtonShow": {
    padding: "10px",
    display: "flex",
    justifyContent: "end",
    marginTop: "-10px",

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

const ResidentialProjects = ({ showViewMore }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const auth = useContext(AuthContext);
  const sliderRef = useRef(null);
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide(currentSlide + 1);
    }
  };

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
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
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
          slidesToShow: 2,
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
          infinite: true,
          autoplay: true,
          initialSlide: 1,
        },
      },
    ],
  };
  const handleClick = () => {
    // router.push({
    //   pathname: "/all-property",
    //   query: { _id: auth?._getlist[0]?.projectTypeId?._id },
    // });
    router.push({
      pathname: "/all-property",
      // query: { _id: "FEATURED" },
    });
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
            <Box width={isMobile ? "100%" : "90%"} marginInline="auto">
              <Typography
                variant="h1"
                fontSize={isMobile ? 28 : 48}
                fontWeight={500}
                lineHeight={isMobile && 1.5}
              >
                Residential Projects
              </Typography>
              <Typography
                variant="p"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                Residential Projects Across India
              </Typography>
            </Box>
          </Box>
          {currentSlide >= 2 && !isMobile && (
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
              {auth?._getlist?.length > 4 ? (
                <Slider {...settings} ref={sliderRef}>
                  {auth?._getlist &&
                    auth?._getlist?.map((data, index) => {
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
                    {auth?._getlist &&
                      auth?._getlist?.map((data, index) => {
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

            <Box mt={"2rem"} sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {React.Children.toArray(
                  auth._isFeaturedPost.map((item, index) => {
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

            {auth?._getlist_commercial.length > 0 && (
              <Box className="viewmoreButtonShow" height="100px">
                <Button onClick={handleClick}>
                  View All <ArrowForwardIcon className="forwardIcon" />
                </Button>
              </Box>
            )}
          </Box>

          {currentSlide < auth?._getlist_commercial.length && !isMobile && (
            <IconButtonRightContent onClick={handleNext}>
              <ArrowForwardIosIcon />
            </IconButtonRightContent>
          )}
        </Container>
      </div>
    </ResidentStyle>
  );
};

export default ResidentialProjects;
