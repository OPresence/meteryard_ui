import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Container,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Apiconfigs from "../ApiConfig/ApiConfig";
import { PostApiFunction } from "@/utils";

const TestimonialStyle = styled(Box)(({ theme }) => ({
  marginTop: "6rem",
  "& .Cards": {
    gap: "0px",
    borderRadius: "12.81px",
    boxShadow: "0px 0px 7.79px 0px #00000026",
    position: "relative",
    overflow: "initial !important",
    padding: "10px 10px 23px 10px",
    margin: "60px 23px",
    maxWidth: "320px",
    transition: "transform 0.8s, opacity 0.8s",
    "@media(max-width:615px)": {
      maxWidth: "80%",
      marginInline: "auto",
      display: "inherit !important",
    },
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },

    "& h4": {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "43.57px",
      textAlign: "center",
      "@media(max-width:615px)": {
        fontSize: "18px",
      },
    },
    "& h5": {
      fontFamily: "Inter",
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "29.05px",
      textAlign: "center",
      "@media(max-width:615px)": {
        fontSize: "18px",
      },
    },
    "& h6": {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1.3rem",
      textAlign: "center",
      "@media(max-width:615px)": {
        fontSize: "14px",
      },
    },
  },
  "& .centerCard": {
    transform: "scale(1.20) !important",
    opacity: "1 !important",
    marginLeft: "20px",
  },
  "& .imageBox": {
    background: "#dce1e4",
    maxWidth: "70px",
    display: "flex",
    alignItems: "center",
    borderRadius: "50px",
    marginTop: "-40px",
    "& img": {
      height: "70px",
      width: "70px",
    },
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

const IconButtonLeftContent = styled(Box)({
  position: "absolute",
  left: "0",
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
  right: "0",
  top: "50%",
  transform: "translateY(-50%)",
  color: "black",
  cursor: "pointer",
  "@media(max-width:615px)": {
    right: "0rem",
  },
});

const TestimonialComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [testimonials, setTestimonials] = useState([]);
  const [centerIndex, setCenterIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await PostApiFunction({
          endPoint: Apiconfigs?.listAllTestimonial,
        });

        setTestimonials(res.result.docs);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setCenterIndex(next),
    afterChange: (current) => setCenterIndex(current),
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
          slidesToShow: 1,
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
          autoplay: false,
          initialSlide: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const data = testimonials[0];
  const index = 0;

  return (
    <TestimonialStyle position="relative">
      {testimonials?.length > 0 && (
        <Box>
          <Container>
            <Box mb={10}>
              <Typography
                variant="h1"
                fontSize={isMobile ? 28 : 48}
                fontWeight={500}
                lineHeight={isMobile && 1.5}
              >
                TESTIMONIAL
              </Typography>
              <Typography
                variant="p"
                fontWeight={300}
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
              >
                Featured Residential Projects Across India
              </Typography>
            </Box>
          </Container>

          <Box p={"40px 0"}>
            <Container
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                }}
              >
                <Box display={"flex"} justifyContent={"center"}>
                  <Box
                    maxWidth={420}
                    position={"absolute"}
                    top={"-20px"}
                    marginLeft={"-20px"}
                    transform={isMobile && "scale(1.3)"}
                  >
                    <img src="./images/vector.png" width={"100%"} alt="img" />
                  </Box>
                </Box>

                <Box width="100%" position="relative">
                  {!isMobile && (
                    <IconButtonLeftContent onClick={handlePrevious}>
                      <ArrowBackIosIcon />
                    </IconButtonLeftContent>
                  )}

                  <Box width="105%">
                    <Slider ref={sliderRef} {...settings} className="slider">
                      {testimonials &&
                        testimonials.map((data, index) => (
                          <Card
                            className={`Cards ${
                              index === centerIndex ? "centerCard" : ""
                            }`}
                            key={index}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"center"}
                              mb={"10px"}
                            >
                              <Box className="imageBox">
                                <Avatar
                                  src={data?.file}
                                  width={"100%"}
                                  style={{ height: "70px", width: "70px" }}
                                />
                              </Box>
                            </Box>
                            <Typography variant="h4" fontWeight={300}>
                              {data?.customerName}
                            </Typography>
                            <Typography variant="h5">Lorem Ipsum</Typography>
                            <Box mt={1}>
                              <Typography variant="h6">
                                {data?.comments?.length > 120
                                  ? `${data.comments.substring(0, 130)}...`
                                  : data?.comments}
                              </Typography>
                            </Box>
                          </Card>
                        ))}
                    </Slider>
                  </Box>

                  {!isMobile && (
                    <IconButtonRightContent onClick={handleNext}>
                      <ArrowForwardIosIcon />
                    </IconButtonRightContent>
                  )}
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      )}
    </TestimonialStyle>
  );
};

export default TestimonialComponent;
