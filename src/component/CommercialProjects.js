// import React, { useContext, useState, useRef } from "react";
// import { Grid, Typography, Box, Container, Button } from "@mui/material";
// import styled from "@emotion/styled";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { AuthContext } from "../context/Auth";
// import CommercialPostCard from "./CommercialPostCard";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { useRouter } from "next/router";

// const Commercialstyle = styled("Box")(({ theme }) => ({
//   "& .mainSliderDiv": {
//     // padding: "40px 0px",
//     background: "#fff",

//     "@media(max-width:615px)": {
//       padding: "20px 0px",
//     },
//     "& h1": {
//       fontWeight: "600",
//       fontSize: "28px",
//     },
//     "& h2": {
//       fontWeight: "500",
//       fontSize: "16px",
//     },
//     "& h4": {
//       fontSize: "14px",
//       fontFamily: "system-ui",
//       marginTop: "5px",
//       fontWeight: "500",
//       color: "#000",
//     },
//     "& h5": {
//       fontSize: "12px",
//       fontFamily: "system-ui",
//       marginTop: "5px",
//       fontWeight: "500",
//       color: "#E0AF00",
//     },
//   },
//   "& .cards": {
//     cursor: "pointer",
//     width: "80%",
//     borderRadius: "15px",
//     position: "relative",
//     // transition: "0.8s",
//     // transform: "scale(0.9)",
//     // display: "flex",

//     "&:hover": {
//       // transform: "scale(1)",
//       // transition: "0.8s",
//     },
//     "& .contentBox": {
//       boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
//       padding: "10px",
//       marginTop: "69px",

//       background: "#fff",
//       borderRadius: "10px",
//       position: "relative",
//       width: "100%",
//       minHeight: "325px",
//       paddingBottom: "20px",

//       "@media(max-width:615px)": {
//         minHeight: "320px",
//       },
//       "& svg": {
//         color: "#000",
//         fontSize: "16px",
//       },

//       "& h5": {
//         fontSize: "12px",
//         textAlign: "start",
//         fontWeight: "bold",
//         padding: "5px",
//         marginTop: "-10px",
//       },
//       "& h4": {
//         fontSize: "12px",
//         color: "#000",
//         fontWeight: "500",
//       },
//       "& h6": {
//         fontSize: "10px",
//         color: "#818181",
//         fontWeight: "500",
//         margin: "5px 5px",
//       },
//     },

//     "& h5": {
//       textAlign: "end",
//       fontSize: "18px",
//     },
//   },
//   "& .ArrowClass": {
//     cursor: "pointer",
//     width: "30px",
//     height: "30px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#a2d117",
//     border: "3px solid #FAF9F6",
//     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//     "& svg": {
//       color: "#000 !important",
//       fontSize: "12px",
//     },
//     "&:hover": {
//       background: "rgb(0, 144, 53)",
//       transition: "0.6s",
//       "& svg": {
//         color: "#fff !important",
//       },
//     },
//   },
//   "& .viewBtn": {
//     backgroundColor: "#A7D325",
//     color: "white",
//     float: "right",
//   },
//   "& .forwardIcon": {
//     fontSize: "18px",
//     marginLeft: "10px",
//   },
// }));

// const CommercialProjects = ({ showViewMore }) => {
//   const sliderRef = useRef(null);
//   const auth = useContext(AuthContext);
//   const router = useRouter();
//   const [_isloading, setIsLoading] = useState(false);
//   const next = () => {
//     sliderRef.current.slickNext();
//   };

//   const previous = () => {
//     sliderRef.current.slickPrev();
//   };
//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: false,
//     arrows: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,

//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 4,
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
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           autoplay: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
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
//           infinite: true,
//           autoplay: true,
//           initialSlide: 1,
//         },
//       },
//     ],
//   };
//   const handleClick = () => {
//     // router.push({
//     //   pathname: "/all-property",
//     //   query: { _id: auth?._getlist_commercial[0]?.projectTypeId?._id },
//     // });
//     router.push({
//       pathname: "/all-property",
//       // query: { _id: "FEATURED" },
//     });
//   };
//   return (
//     <Commercialstyle>
//       <div className="mainSliderDiv">
//         <Container maxWidth>
//           <Box
//             display={"flex"}
//             justifyContent={"space-between"}
//             alignItems={"center"}
//           >
//             <Box display={"inline-flex"}>
//               <Box>
//                 <Typography variant="h1">Commercial Projects</Typography>
//                 <Typography variant="h2">
//                   Featured Residential Projects Across India
//                 </Typography>
//               </Box>
//             </Box>
//             {auth?._getlist_commercial?.length > 4 && (
//               <Box
//                 style={{
//                   display: "flex",
//                   gap: "10px",
//                   justifyContent: "flex-end",
//                 }}
//               >
//                 <Box className={"ArrowClass"} onClick={previous}>
//                   <ArrowBackIosIcon
//                     style={{
//                       color: "black",
//                     }}
//                   />
//                 </Box>
//                 <Box className={"ArrowClass"} onClick={next}>
//                   <ArrowForwardIosIcon style={{ color: "black" }} />
//                 </Box>
//               </Box>
//             )}
//           </Box>
//           <Box className="mainBoxCard">
//             {auth?._getlist_commercial?.length > 4 ? (
//               <>
//                 <Slider {...settings} ref={sliderRef}>
//                   {auth?._getlist_commercial?.map((data, index) => {
//                     return <CommercialPostCard data={data} key={index} />;
//                   })}
//                 </Slider>
//               </>
//             ) : (
//               <Grid container>
//                 {auth?._getlist_commercial?.map((data, index) => {
//                   return (
//                     <Grid
//                       key={index}
//                       item
//                       lg={6}
//                       md={4}
//                       sm={6}
//                       xs={12}
//                       className="GridClassCard"
//                       style={index > 3 ? { marginTop: "60px" } : {}}
//                     >
// <CommercialPostCard data={data} />
//                     </Grid>
//                   );
//                 })}
//               </Grid>
//             )}

//             {auth?._getlist_commercial.length > 0 && (
//               <Button
//                 onClick={handleClick}
//                 variant="contained"
//                 color="success"
//                 className="viewBtn"
//               >
//                 View All <ArrowForwardIcon className="forwardIcon" />
//               </Button>
//             )}
//           </Box>
//         </Container>
//       </div>
//     </Commercialstyle>
//   );
// };

// export default CommercialProjects;

import React, { useContext, useRef } from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import CommercialPostCard from "./CommercialPostCard";
import { AuthContext } from "../context/Auth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const CommercialProjectsStyle = styled("Box")(({ theme }) => ({
  margin: "4rem 0",
  "& .mainSliderDiv": {
    // padding: "40px 0px",
    background: "#fff",
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
    // "& h2": {
    //   fontWeight: "500",
    //   fontSize: "16px",
    // },
    // "& h4": {
    //   fontSize: "14px",
    //   fontFamily: "system-ui",
    //   marginTop: "5px",
    //   fontWeight: "500",
    //   color: "#000",
    // },
    // "& h5": {
    //   fontSize: "12px",
    //   fontFamily: "system-ui",
    //   marginTop: "5px",
    //   fontWeight: "500",
    //   color: "#E0AF00",
    // },
  },
  "& .circleimg": {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "250px",
    // "& h6": {
    //   color: "#A7D325",
    //   fontSize: "14px",
    // },
    "& svg": {
      color: "#A7D325",
    },
  },
  "& .large": {
    background: "#FFF",
  },
  "& .cards": {
    // cursor: "pointer",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    // borderRadius: "20px",
    transform: "0",
    // transition: "0.8s",
    // transform: "scale(0.8)",

    "&:hover": {
      // transform: "scale(0.9)",
      // transition: "0.8s",
    },
    "& .contentBox": {
      padding: "10px 10px 10px",
    },
  },
  "& .viewmoreButtonShow": {
    padding: "10px",
    display: "flex",
    justifyContent: "end",
    marginTop: "-40px",

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
const CommercialProjects = () => {
  const sliderRef = useRef(null);
  const auth = useContext(AuthContext);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
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
  const handleClick = () => {
    router.push({
      pathname: "/all-property",
      query: { _id: "FEATURED" },
    });
  };
  return (
    <CommercialProjectsStyle>
      <Container maxWidth>
        <Box width="95%" marginInline="auto">
          <Typography variant="h1" fontSize={48} fontWeight={500}>
            Commercial Projects
          </Typography>
          <Typography fontSize={24} fontWeight={300}>
            Commercial Projects Across India
          </Typography>
        </Box>

        {/* <Box mt={4}>
            <Slider {...settings} ref={sliderRef}>
              {auth?._isFeaturedPost?.map((data, index) => (
                <FeaturedPostCard data={data} key={index} />
              ))}
            </Slider>
            <Box className="viewmoreButton">
              {auth._isFeaturedPost.length > 4 && (
                <Button onClick={handleClick}>
                  View All
                  <ArrowForwardIcon
                    sx={{ fontSize: "18px", marginLeft: "10px" }}
                  />
                </Button>
              )}
            </Box>
          </Box> */}
        <Box mt={4}>
          {auth?._getlist_commercial?.length > 4 ? (
            <>
              <Slider {...settings} ref={sliderRef}>
                {auth?._getlist_commercial?.map((data, index) => {
                  return <CommercialPostCard data={data} key={index} />;
                })}
              </Slider>
            </>
          ) : (
            <Grid container>
              {auth?._getlist_commercial?.map((data, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                    className="GridClassCard"
                    style={index > 3 ? { marginTop: "60px" } : {}}
                  >
                    <CommercialPostCard data={data} />
                  </Grid>
                );
              })}
            </Grid>
          )}

          {auth?._getlist_commercial.length > 0 && (
            <Box className="viewmoreButtonShow">
              <Button onClick={handleClick}>
                View All <ArrowForwardIcon className="forwardIcon" />
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </CommercialProjectsStyle>
  );
};

export default CommercialProjects;
