import React, { useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  styled,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from "./VideoPlayer";
import { height } from "@mui/system";

const videos = [
  {
    image: "/images/meteryard/Images/Image 23.png",
    url: "https://www.youtube.com/watch?v=video1",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sed Aliquam Convallis Mauris.",
  },
  {
    image: "/images/meteryard/Images/Image 23.png",
    url: "https://www.youtube.com/watch?v=video1",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sed Aliquam Convallis Mauris.",
  },
  {
    image: "/images/meteryard/Images/Image 23.png",
    url: "https://www.youtube.com/watch?v=video1",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sed Aliquam Convallis Mauris.",
  },
  {
    image: "/images/meteryard/Images/Image 23.png",
    url: "https://www.youtube.com/watch?v=video1",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sed Aliquam Convallis Mauris.",
  },
];

const StyledSliderContainer = styled(Box)({
  // padding: "80px 0px",
  margin: "4rem auto",
  position: "relative",
  "& h2": {
    fontWeight: "500",
  },
  "& .heading": {
    padding: "10px 45px",
    "& p": {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "29.05px",
    },
    "@media(max-width:615px)": {
      padding: "20px 0px",
    },
  },
});

const VideoCard = styled(Card)({
  height: "395px",
  display: "flex",
  flexDirection: "column",
  width: "85%",
  margin: "10px auto",
  boxShadow: "none",
  "@media(max-width:615px)": {
    width: "95%",
    height: "100%",
  },
});

const DescriptionContent = styled(CardContent)({
  width: "100%",
  "& h4": {
    color: "black",
    fontSize: "14px",
  },
});

const IconButtonLeftContent = styled(Box)({
  position: "absolute",
  left: "3rem",
  top: "60%",
  transform: "translateY(-60%)",
  color: "black",
  cursor: "pointer",
  zIndex: 1,
  "@media(max-width:615px)": {
    left: "0rem",
  },
});
const IconButtonRightContent = styled(Box)({
  position: "absolute",
  right: "3rem",
  top: "60%",
  transform: "translateY(-60%)",
  color: "black",
  cursor: "pointer",
  "@media(max-width:615px)": {
    right: "0rem",
  },
});

const YoutubeComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <StyledSliderContainer>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Box>
              <Typography
                variant="h1"
                fontSize={isMobile ? 28 : 48}
                fontWeight={500}
                lineHeight={isMobile && 1.5}
              >
                YOUTUBE VIDEOS
              </Typography>
              <Typography
                mt={1}
                variant="p"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                Featured Residential Projects Across India
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {!isMobile && (
        <IconButtonLeftContent onClick={handlePrevious}>
          <ArrowBackIosIcon />
        </IconButtonLeftContent>
      )}
      <Box mt={4}>
        <Box
          sx={{
            width: "95%",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {videos.map((video, index) => (
              <div key={index}>
                <Box width="100%">
                  <VideoCard>
                    <VideoPlayer src={video.url} poster={video.image} />

                    <Box
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      <Typography
                        mt={2}
                        variant="h4"
                        fontSize={18}
                        fontWeight={300}
                        lineHeight={"auto"}
                      >
                        {video.description}
                      </Typography>
                    </Box>
                  </VideoCard>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
      <Box m={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
          {React.Children.toArray(
            videos.map((item, index) => {
              if (index == videos.length - 1) return null;
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
      {!isMobile && (
        <IconButtonRightContent onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButtonRightContent>
      )}
    </StyledSliderContainer>
  );
};

export default YoutubeComponent;
