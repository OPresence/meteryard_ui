import { useContext, useRef, useState, useEffect } from "react";
import FeaturedPostCard from "../component/FeaturedPostCard";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../context/Auth";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Button,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const CardComponentStyle = styled(Box)(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "0 40px",
    position: "relative",
    background: "#fff",
    "@media(max-width:615px)": {
      padding: "0",
      marginTop: "2rem",
    },
    "& container": {
      padding: "0px",
    },
  },

  "& .viewmoreButtonShow": {
    padding: "10px",
    position: "absolute",
    right: "55px",
    bottom: "-15px",
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
const FeatureProperty = () => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sliderRef = useRef(null);
  const [_featured_property, setFeatyredProperty] = useState([]);
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
          slidesToShow: 1,
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
  const handlePrevious = () => {
    console.log("aadasdd");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleClick = () => {
    router.push({
      pathname: "/all-property",
      query: { _id: "FEATURED" },
    });
  };
  useEffect(() => {
    auth?._getallProduct?.map((productData, index) =>
      setFeatyredProperty(
        productData?.allProperty?.filter((dataFind) => {
          if (dataFind?.featuredProperty) {
            return dataFind;
          }
        })
      )
    );
  }, [auth?._getallProduct?.length]);

  return (
    <CardComponentStyle>
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
                Featured Projects
              </Typography>
              <Typography
                variant="h6"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                Featured Projects Across India
              </Typography>
            </Box>
          </Box>
        </Container>
        {_featured_property?.length > 4 && (
          <IconButtonLeftContent onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </IconButtonLeftContent>
        )}
        {console.log("_featured_property90--->", _featured_property)}
        <Box mt={4} width={"95%"} margin={"0 auto"}>
          {_featured_property?.length > 4 ? (
            <Slider {...settings} ref={sliderRef}>
              {!auth?._loadingAllProduct &&
                _featured_property?.length > 0 &&
                _featured_property?.map((ProductData, _id) => {
                  return (
                    <Box key={_id}>
                      <FeaturedPostCard data={ProductData} />
                    </Box>
                  );
                })}
            </Slider>
          ) : (
            <Grid container spacing={3}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                {!auth?._loadingAllProduct &&
                  _featured_property?.length > 0 &&
                  _featured_property?.map((ProductData, _id) => {
                    return (
                      <Box key={_id}>
                        <FeaturedPostCard data={ProductData} />
                      </Box>
                    );
                  })}
              </Grid>
            </Grid>
          )}
        </Box>
        {_featured_property?.length > 4 && (
          <IconButtonRightContent onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButtonRightContent>
        )}
        <Box className="viewmoreButtonShow" style={{ marginTop: "1rem" }}>
          {_featured_property?.length > 4 && (
            <Button onClick={handleClick}>
              View All
              <ArrowForwardIcon sx={{ fontSize: "18px", marginLeft: "10px" }} />
            </Button>
          )}
        </Box>
      </Box>
    </CardComponentStyle>
  );
};

export default FeatureProperty;
