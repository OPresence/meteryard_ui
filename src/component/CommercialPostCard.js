// import React from "react";
// import { Grid, Typography, Box, Container } from "@mui/material";
// import FmdGoodIcon from "@mui/icons-material/FmdGood";
// import styled from "@emotion/styled";
// import Divider from "@mui/material/Divider";
// import ButtonComponent from "./ButtonComponent";

// const Commercialstyle = styled("Box")(({ theme }) => ({
//   "& .mainSliderDiv": {
//     background: "#fff",

//     "& .mainBoxCard": {
//       border: "2px solid pink",
//       marginTop: "54px",
//       "@media(max-width:615px)": {
//         marginTop: "0",
//       },
//       "& .GridClassCard": {
//         border: "2px solid red",
//         "@media(max-width:615px)": {
//           marginTop: "10px !important",
//         },
//       },
//     },
//     "@media(max-width:615px)": {
//       padding: "20px 0px",
//     },
//     "& h2": {
//       fontWeight: "500",
//     },
//     "& .cardBox": {
//       border: "2px solid green",
//       display: "flex",
//       justifyItems: "center",
//       // height: "100%",
//       paddingBlock: "20px",
//       "@media(max-width:900px)": {
//         marginTop: "90px",
//       },
//     },
//   },
//   "& .cards": {
//     cursor: "pointer",
//     border: "2px solid red",
//     width: "100%",
//     borderRadius: "15px",
//     position: "relative",
//     // transition: "0.8s",
//     transform: "scale(0.9)",
//     // display: "flex",

//     "&:hover": {
//       // transform: "scale(1)",
//       // transition: "0.8s",
//     },
//     "& .contentBox": {
//       boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
//       padding: "10px",

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
// }));
// const CommercialPostCard = ({ data }) => {
//   return (
//     <Commercialstyle>
//       <Box className="cardBox">
//         <Box className="cards">
//           <Box display={"flex"} justifyContent={"center"}>
//             <Box
//               className="contentBox"
//               // width={"90%"}
//               sx={{ border: "2px solid green" }}
//             >
//               <Box>
//                 {/* <Box
//                   // display={"flex"}
//                   // justifyContent={"center"}
//                   m={"-80px 0 0 0"}
//                 > */}
//                 <Box sx={{ border: "2px solid red" }}>
//                   <img
//                     src={data?.coverImage}
//                     width={"100%"}
//                     style={{
//                       borderRadius: "15px",
//                       height: "180px",
//                     }}
//                   />
//                 </Box>
//                 {/* </Box> */}
//               </Box>
//               <Typography variant="h5" style={{ padding: "20px 25px 9px" }}>
//                 {data?.projectName}{" "}
//               </Typography>
//               <Box display={"flex"} mt={1}>
//                 <FmdGoodIcon />
//                 &nbsp;
//                 <Box m={"0 0 0 5px"} width={"100%"}>
//                   <Typography variant="h4">{data?.title} </Typography>
//                   <div className="paragraph-container">
//                     <p className="paragraph">{data?.description}</p>
//                   </div>
//                   <Box m={"10px 0"}>
//                     <Divider color="#D2D2D2" />
//                   </Box>
//                   <Box
//                     display={"flex"}
//                     alignItems={"center"}
//                     justifyContent={"space-between"}
//                   >
//                     <Box>
//                       <Typography variant="h6">Property Size</Typography>
//                       <Typography variant="h5">
//                         {data?.superBuildupArea}
//                       </Typography>
//                     </Box>
//                     <Box>
//                       <Typography variant="h6">Price</Typography>
//                       <Typography variant="h5">
//                         {data?.price?.toLocaleString()}/- Rs
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <ButtonComponent data={data} />
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Commercialstyle>
//   );
// };

// export default CommercialPostCard;

import React from "react";
import { Typography, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";
import { useRouter } from "next/router";
const CardComponentStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "20px 0 30px 0",
    background: "#fff",
    // "& h2": {
    //   fontWeight: "500",
    // },
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
    // cursor: "pointer",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "20px",
    position: "relative",
    margin: "20px",
    "& img": {
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      height: "100%",
    },
    "&:hover": {
      // transform: "scale(0.9)",
      transition: "0.8s",
    },
    "& .contentBox": {
      padding: "10px 10px 10px",
      "& .headingBox": {
        display: "flex",
        justifyContent: "center",
      },
      "& h2": {
        fontSize: "18px",
        textAlign: "start",
        fontWeight: "600",
        padding: "5px",
        // position: "absolute",
        // top: "10px",
        // textAlign: "center",
        // color: "#fff",
      },
      "& h5": {
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: "500",
        // color: "#fff",
      },
      "& h4": {
        fontSize: "12px",
        color: "#000",
        fontWeight: "500",
        margin: "5px 5px",
      },
      "& h6": {
        fontSize: "16px",
        color: "#818181",
        fontWeight: "500",
        margin: "5px 5px",
        color: "#E0AF00",
      },
    },

    "& .block-layer": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgb(0 0 0 / 0))",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
    },
  },
}));
const CommercialPostCard = ({ data, index }) => {
  const router = useRouter();
  return (
    <CardComponentStyle>
      <Box
        // onClick={() =>
        //   router.push({
        //     pathname: "/view-property",
        //     query: {
        //       data: JSON.stringify(data),
        //     },
        //   })
        // }
        height={"100%"}
        pb={"20px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box className="cards">
          <Box maxHeight={"170px"} height={"100%"}>
            <img src={data?.coverImage} width={"100%"} height={"100%"} />
          </Box>
          <Box className="contentBox">
            <Box>
              <Typography variant="h2">{data?.projectName} </Typography>
            </Box>
            {/* <Typography variant="h4">{data?.title} </Typography> */}
            <div className="paragraph-container">
              <p className="paragraph">{data?.description}</p>
            </div>
            <Box m={"10px 0"}>
              <Divider color="#A9D910" />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              // justifyContent={"space-between"}
              style={{ gap: "35px" }}
            >
              <Box>
                <Typography variant="h5">Property Size</Typography>
                <Typography variant="h6">{data?.superBuildupArea}</Typography>
              </Box>
              {/* &nbsp;&nbsp; &nbsp;&nbsp; */}
              <Box>
                <Typography variant="h5">Price</Typography>
                <Typography variant="h6">
                  {data?.price?.toLocaleString()}/- Rs
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"start"}>
              <ButtonComponent data={data} />
            </Box>
          </Box>
        </Box>{" "}
      </Box>
    </CardComponentStyle>
  );
};

export default CommercialPostCard;
