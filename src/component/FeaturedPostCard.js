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
    "& h2": {
      fontWeight: "500",
    },
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
    height: "100%",
    "& .CardImgBox": {
      width: "100%",
      position: "relative",
      height: "170px",
    },
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
        "& h5": {
          padding: "5px",
          position: "absolute",
          top: "10px",
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "600",
          color: "#fff",
        },
      },
      "& h3": {
        fontSize: "14px",
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
        fontSize: "14px",
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
const FeaturedPostCard = ({ data, index }) => {
  console.log("dnsknsn", index);
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
        <Box
          className="cards"
          // style={
          //   index == 0 ? { paddingBottom: "auto" } : { paddingBottom: "10px" }
          // }
        >
          <Box class="CardImgBox">
            <img src={data?.coverImage} width={"100%"} height={"100%"} />
            <div class="block-layer"></div>
          </Box>
          <Box className="contentBox">
            <Box className="headingBox">
              <Typography variant="h5">{data?.projectName} </Typography>
            </Box>
            <Typography variant="h3">{data?.title} </Typography>
            <div className="paragraph-container">
              <p
                className="paragraph"
                style={{ fontSize: "16px", fontWeight: "400" }}
              >
                {data?.description}
              </p>
            </div>
            <Box m={"10px 0"}>
              <Divider color="#A9D910" />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box>
                <Typography variant="h3">Property Size</Typography>
                <Typography variant="h6">{data?.superBuildupArea}</Typography>
              </Box>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Box>
                <Typography variant="h3">Price</Typography>
                <Typography variant="h6">
                  {data?.price?.toLocaleString()}/- Rs
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              // style={
              //   index == 0 ? { paddingBottom: "10px" } : { paddingBottom:"0" }
              // }
            >
              <ButtonComponent data={data} />
            </Box>
          </Box>
        </Box>{" "}
      </Box>
    </CardComponentStyle>
  );
};

export default FeaturedPostCard;
