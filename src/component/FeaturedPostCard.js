import React from "react";
import { Typography, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";
import { useRouter } from "next/router";

const CardComponentStyle = styled(Box)(({ theme }) => ({
  width: "100%",
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
    width: "90%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    position: "relative",
    margin: "20px 0",
    height: "100%",
    "& .CardImgBox": {
      width: "100%",
      position: "relative",
      height: "170px",
    },
    "& img": {
      height: "100%",
    },
    "&:hover": {
      // transform: "scale(0.9)",
      transition: "0.8s",
    },
    "& .contentBox": {
      // padding: "10px 10px 10px",
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
        "@media(max-width:1280px)": {
          fontSize: "14px",
          fontWeight: "600",
          padding: "0px",
        },
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
      // borderTopRightRadius: "10px",
      // borderTopLeftRadius: "10px",
    },
  },
}));
const FeaturedPostCard = ({ data, index, type }) => {
  console.log("type898---->", type);
  const router = useRouter();
  return (
    <CardComponentStyle>
      <Box
        height={"100%"}
        pb={"20px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box className="cards">
          <Box class="CardImgBox">
            <img src={data?.coverImage} width={"100%"} height={"100%"} />
            <div class="block-layer"></div>
          </Box>
          <Box
            padding={"10px"}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            gap={1}
            minHeight="250px"
          >
            <Box className="paragraph">
              <Typography variant="h3">{data?.title} </Typography>
            </Box>
            <Box>
              <Typography
                className="paragraph"
                fontSize={14}
                fontWeight={300}
                // width={"12lh"}
                // sx={{
                //   overflow: "hidden",
                //   textOverflow: "ellipsis",
                //   display: "-webkit-box",
                //   WebkitLineClamp: "5",
                //   WebkitBoxOrient: "vertical",
                //   height: "105px",
                // }}
              >
                {data?.description}
              </Typography>
            </Box>
            <Box>
              <Divider color="#A9D910" />
            </Box>
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent="flex-start"
              style={{ gap: "15px" }}
              width="100%"
              padding={"0 10px"}
            >
              <Box width="40%" display="flex" flexDirection="column" gap={0.5}>
                <Typography
                  variant="p"
                  fontSize={14}
                  fontWeight={400}
                  style={{ textWrap: "nowrap" }}
                >
                  Property Size
                </Typography>
                <Typography variant="p" color="#E0AF00" fontSize={14}>
                  {data?.superBuildupArea}
                </Typography>
              </Box>
              <Box width="55%" display="flex" flexDirection="column" gap={0.5}>
                <Typography variant="p" fontSize={14} fontWeight={400}>
                  Price
                </Typography>
                <Typography variant="p" color="#E0AF00" fontSize={14}>
                  {data?.price?.toLocaleString()}/- Rs
                </Typography>
              </Box>
            </Box>
            <Box
              style={
                type == "COMMERCIAL"
                  ? { justifyContent: "start" }
                  : { justifyContent: "center" }
              }
              width="100%"
              display="flex"
            >
              <ButtonComponent data={data} />
            </Box>
          </Box>
        </Box>
      </Box>
    </CardComponentStyle>
  );
};

export default FeaturedPostCard;
