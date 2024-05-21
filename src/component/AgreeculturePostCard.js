import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Box, Container } from "@mui/material";
import ButtonComponent from "./ButtonComponent";
import Divider from "@mui/material/Divider";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const AgreecultureStyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "80px 0px",
    background: "#fff",
    // padding: "50px",
    "@media(max-width:615px)": {
      padding: "20px 0px",
    },
    "& h2": {
      fontWeight: "500",
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
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "20px",
    position: "relative",
    margin: "20px",
    transform: "scalse(0.8)",

    "&:hover": {
      // transform: "scalse(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      padding: "10px 10px 10px",
      "& .headingBox": {
        // display: "flex",
        // justifyContent: "center",
        "& h5": {
          padding: "5px",
          // position: "absolute",
          // top: "10px",
          // textAlign: "center",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "600",
          // color: "#fff",
        },
      },
      "& h3": {
        fontSize: "16px",
        textAlign: "start",
        fontWeight: "500",
        padding: "5px",
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

    // "& h5": {
    //   textAlign: "end",
    //   fontSize: "18px",
    // },
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
}));
const AgreeculturePostCard = ({ data }) => {
  return (
    <AgreecultureStyle>
      <Box height={"100%"} pb={"20px"}>
        <Box className="cards">
          <Box height={"250px"}>
            <img
              src={data?.coverImage}
              width={"100%"}
              style={{ borderRadius: "15px", height: "250px" }}
            />
          </Box>

          <Box minHeight={"280px"} display={"flex"} justifyContent={"center"}>
            <Box className="contentBox" width={"90%"}>
              <Box className="headingBox">
                <Typography variant="h5">{data?.projectName}</Typography>
              </Box>
              <Box display={"flex"} mt={1}>
                <FmdGoodIcon />
                &nbsp;
                <Box m={"0 0 0 5px"}>
                  <Typography variant="h3">{data?.title}</Typography>
                  <div className="paragraph-container">
                    <p className="paragraph">{data?.description}</p>
                  </div>
                  <Box m={"10px 0"}>
                    <Divider color="#D2D2D2" />
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap="5px"
                  >
                    <Box
                      width={"100%"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"5px"}
                    >
                      <Typography variant="p">Property Size</Typography>
                      <Typography variant="p">
                        {data?.price?.toLocaleString()}/- Rs
                      </Typography>
                    </Box>
                    <Box
                      width={"100%"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"5px"}
                    >
                      <Typography variant="p">
                        {data?.superBuildupArea}
                      </Typography>
                      <Typography variant="p">Price</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            height={"80px"}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ButtonComponent data={data} />
          </Box>
        </Box>
      </Box>
    </AgreecultureStyle>
  );
};

export default AgreeculturePostCard;
