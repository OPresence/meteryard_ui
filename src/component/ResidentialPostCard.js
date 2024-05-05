import React from 'react'
import styled from "@emotion/styled";
import {  Typography, Box,  } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Divider from "@mui/material/Divider";
import ButtonComponent from "./ButtonComponent";

const ResidentStyle = styled("Box")(({ theme }) => ({

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
const ResidentialPostCard = ({data}) => {
  return (
    <ResidentStyle>
          <Box height={"100%"} pb={"20px"} width={"100%"}>
             <Box className="cards">
               <Box
                 // maxWidth={310}
                 maxHeight={220}
                 minHeight={220}
                 display={"flex"}
                 justifyContent={"center"}
               >
                 <img
                   src={data?.coverImage}
                   width={"100%"}
                   style={{
                     borderRadius: "15px",
                   }}
                 />
               </Box>

               <Box display={"flex"} justifyContent={"center"}>
                 <Box className="contentBox" width={"90%"}>
                   <Box display={"flex"} alignItems={"center"}>
                     <Typography variant="h5">
                       {data?.projectName}
                     </Typography>
                   </Box>
                   <Box display={"flex"} mt={1}>
                     <FmdGoodIcon />
                     &nbsp;
                     <Box m={"0 0 0 5px"}>
                       <Typography variant="h4">
                         {data?.title}
                       </Typography>
                       <div className="paragraph-container">
                         <p className="paragraph">
                           {data?.description}
                         </p>
                       </div>
                       <Box m={"10px 0"}>
                         <Divider color="#D2D2D2" />
                       </Box>
                       <Box
                         display={"flex"}
                         alignItems={"center"}
                         justifyContent={"space-between"}
                       >
                         <Box>
                           <Typography variant="h6">
                             Property Size
                           </Typography>
                           <Typography variant="h5">
                             {data?.superBuildupArea}
                           </Typography>
                         </Box>
                         <Box>
                           <Typography variant="h6">
                             Price
                           </Typography>
                           <Typography variant="h5">
                             {data?.price?.toLocaleString()}/- Rs
                           </Typography>
                         </Box>
                       </Box>

                       {/* <Route path="/view-property" exact> */}
                       <Box pt={"30px"}>
                         <ButtonComponent data={data} />
                       </Box>
                       {/* </Route> */}
                     </Box>
                   </Box>
                 </Box>
               </Box>
             </Box>
           </Box>
    </ResidentStyle>
  )
}

export default ResidentialPostCard