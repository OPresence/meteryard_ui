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
    // padding: "50px",
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
    cursor: "pointer",
    width: "90%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "20px",
    transform: "0",
    transition: "0.8s",
    transform: "scale(0.9)",
    maxHeight: "150",
    "& img": {
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      height: "100%",
    },
    "&:hover": {
      transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      padding: "10px 10px 10px",
      "& h5": {
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
}));
const FeaturedPostCard = ({ data }) => {
  const router = useRouter();
  return (
    <CardComponentStyle>
      <Box
        onClick={() =>
          router.push({
            pathname: "/view-property",
            query: {
              data: JSON.stringify(data),
            },
          })
        }
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
            <Typography variant="h5">{data?.projectName} </Typography>
            <Typography variant="h4">{data?.title} </Typography>
            <div className="paragraph-container">
              <p className="paragraph">{data?.description}</p>
            </div>
            <Box m={"10px 0"}>
              <Divider color="#D2D2D2" />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box>
                <Typography variant="h4">Property Size</Typography>
                <Typography variant="h5">{data?.superBuildupArea}</Typography>
              </Box>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Box>
                <Typography variant="h4">Price</Typography>
                <Typography variant="h5">
                  {data?.price?.toLocaleString()}/- Rs
                </Typography>
              </Box>
            </Box>
            {/* <ButtonComponent data={data} /> */}
          </Box>
        </Box>{" "}
      </Box>
    </CardComponentStyle>
  );
};

export default FeaturedPostCard;
