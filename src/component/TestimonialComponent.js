// import React, { useRef, useState, useEffect } from "react";
// import styled from "@emotion/styled";
// import { Box, Card, Container, Typography, Grid, Avatar } from "@mui/material";
// import Slider from "react-slick";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import { PostApiFunction } from "@/utils";
// import Apiconfigs from "../ApiConfig/ApiConfig";
// import { FaStar } from "react-icons/fa";

// const TestimonialStyle = styled("Box")(({ theme }) => ({
//   "& .Cards": {
//     gap: "0px",
//     borderRadius: "12.81px",
//     opacity: "0px",
//     boxShadow: "0px 0px 7.79px 0px #00000026",
//     position: "relative",
//     overflow: "initial !important",
//     padding: "10px 10px 23px 10px",
//     margin: "31px 9px",
//     maxWidth: "350px",
//     "&:hover": {
//       transform: "scale(1)",
//       transition: "0.8s",
//     },
//     "& h6": {
//       fontFamily: "Inter",
//       fontSize: "16px",
//       fontWeight: "400",
//       lineHeight: "19.36px",
//       textAlign: "center",
//     },
//     "& h4": {
//       fontFamily: "Inter",
//       fontSize: "24px",
//       fontWeight: "600",
//       lineHeight: "43.57px",
//       textAlign: "center",
//     },
//     "& h5": {
//       fontFamily: "Inter",
//       fontSize: "20px",
//       fontWeight: "400",
//       lineHeight: "29.05px",
//       textAlign: "center",
//     },
//   },
//   "& .imageBox": {
//     background: "#dce1e4",
//     maxWidth: "70px",
//     // minHeight: "70px",
//     display: "flex",
//     alignItems: "center",
//     borderRadius: "50px",
//     marginTop: "-40px",
//     "& img": {
//       height: "70px",
//       width: "70px",
//     },
//   },
//   "& .borderLine": {
//     borderBottom: "2px solid #707070",
//     width: "75px",
//     height: "3px",
//   },
//   "& .mainBox": {
//     padding: "190px 90px 190px 190px",
//     "@media(max-width:1080px)": {
//       padding: "140px 0 0 0",
//     },
//     "@media(max-width:615px)": {
//       paddingBottom: "40px",
//     },
//   },
// }));

// const TestimonialComponent = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const res = await PostApiFunction({
//           endPoint: Apiconfigs?.listAllTestimonial,
//         });

//         setTestimonials(res.result.docs);
//       } catch (error) {
//         console.error("Error fetching testimonials:", error);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     arrows: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           initialSlide: 1,
//         },
//       },
//     ],
//   };

//   const next = () => {
//     sliderRef.current.slickNext();
//   };

//   const previous = () => {
//     sliderRef.current.slickPrev();
//   };
//   const CardJson = [{}, {}, {}, {}];
//   return (
//     <TestimonialStyle>
//       <Box p={"40px 0"}>
//         <Container maxWidth sx={{ display: "flex", justifyContent: "center" }}>
//           <Box
//             sx={{
//               width: "90%",
//               // margin: "0 auto",
//               position: "relative",
//               // display: "contents",
//             }}
//           >
//             <Box display={"flex"} justifyContent={"center"}>
//               <Box
//                 maxWidth={380}
//                 position={"absolute"}
//                 top={0}
//                 marginLeft={"50px"}
//               >
//                 <img src="./images/vector.png" width={"100%"} alt="img" />
//               </Box>
//             </Box>
//             <Box>
//               <Slider ref={sliderRef} {...settings}>
//                 {testimonials &&
//                   testimonials?.map((data, index) => (
//                     <Card className="Cards" key={index}>
//                       <Box
//                         display={"flex"}
//                         justifyContent={"center"}
//                         mb={"10px"}
//                       >
//                         <Box className="imageBox">
//                           <Avatar
//                             src={data?.file}
//                             width={"100%"}
//                             style={{ height: "70px", width: "70px" }}
//                           />
//                         </Box>
//                       </Box>
//                       <Typography variant="h4">{data?.customerName}</Typography>
//                       <Typography variant="h5"> Lorem Ipsum</Typography>
//                       <Box mt={1}>
//                         <Typography variant="h6">
//                           {" "}
//                           {data?.comments?.length > 120
//                             ? `${data.comments.substring(0, 130)}...`
//                             : data?.comments}
//                         </Typography>
//                       </Box>
//                     </Card>
//                   ))}
//               </Slider>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </TestimonialStyle>
//   );
// };

// export default TestimonialComponent;

import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Card, Container, Typography, Avatar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Apiconfigs from "../ApiConfig/ApiConfig";
import { PostApiFunction } from "@/utils";

const TestimonialStyle = styled(Box)(({ theme }) => ({
  padding: "4rem",
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
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
    "& h6": {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "19.36px",
      textAlign: "center",
    },
    "& h4": {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "43.57px",
      textAlign: "center",
    },
    "& h5": {
      fontFamily: "Inter",
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "29.05px",
      textAlign: "center",
    },
  },
  "& .centerCard": {
    transform: "scale(1.20) !important",
    opacity: "1 !important",
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
    autoplay: true,
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

  return (
    <TestimonialStyle position="relative">
      <Box
        mb={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginInline="auto"
        gap={2}
      >
        <Typography variant="h1" fontWeight={500} fontSize={48}>
          TESTIMONIAL
        </Typography>
        <Typography fontWeight="300" variant="p" fontSize={24}>
          Featured Residential Projects Across India
        </Typography>
        <Typography
          mt={1}
          width="100%"
          textAlign="center"
          fontWeight="300"
          fontSize={28}
          style={{ textWrap: "balance" }}
        >
          When the age of a person exceeds 50 years, it becomesvery important to
          take care of one’s health as she enters the senior citizen age. With
          age, the metabolism and functioning of the body become slow.
        </Typography>
      </Box>

      <Box p={"40px 0"}>
        <Container maxWidth sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "90%",
              position: "relative",
            }}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                maxWidth={420}
                position={"absolute"}
                top={"-20px"}
                marginLeft={"-20px"}
              >
                <img src="./images/vector.png" width={"100%"} alt="img" />
              </Box>
            </Box>

            <Box width="100%" position="relative">
              <IconButtonLeftContent onClick={handlePrevious}>
                <ArrowBackIosIcon />
              </IconButtonLeftContent>
              <Box width="100%">
                <Slider ref={sliderRef} {...settings}>
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
                        <Typography variant="h4">
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
              <IconButtonRightContent onClick={handleNext}>
                <ArrowForwardIosIcon />
              </IconButtonRightContent>
            </Box>
          </Box>
        </Container>
      </Box>
    </TestimonialStyle>
  );
};

export default TestimonialComponent;
