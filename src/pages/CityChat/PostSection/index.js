import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Divider, Typography, Box } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { AiOutlineLike } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { AuthContext } from "../../../context/Auth";

const CityPropertyStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    marginTop: "20px",
    borderRadius: "15px",
    boxShadow: "0px 1px 13px #00000026",
    position: "relative",
    "& .bottomBox": {
      display: "flex",
      justifyContent: "space-between",
      "& svg": {
        fontSize: "30px",
        color: "#444444",
      },
    },
    "& .commentBox": {
      "& .iconBox": {
        background: "#444444",
        display: "flex",
        justifyContent: "center",
        // padding: "5px",
        borderRadius: "50px",
        width: 40,
        height: 40,
        alignItems: "center",
        "& svg": {
          fontSize: "30px",
          color: "#fff",
          background: "#444444",
        },
      },
      "& .viewBox": {
        "& h6": {
          color: "#838383",
          fontSize: "12px",
          paddingBottom: "10px",
        },
        "& span": {
          color: "#FBB415",
        },
      },
      "& svg": {
        color: "#fff",
        padding: "5px",
        background: "blue",
        borderRadius: "50px",
      },
      "& h6": {
        fontSize: "12px",
        color: "#838383",
      },
    },
    "& .ProfileBox": {
      padding: "15px",
      "& h6": {
        fontSize: "12px",
        fontWeight: "500",
      },
      "& .imgBox": {
        background: "#fff",
        borderRadius: "100px",
        maxWidth: 60,
        minHeight: 60,
        maxHeight: 60,
        boxShadow: theme.shadows[2],
        overflow: "hidden",
        "& img": {
          width: "100%",
        },
      },
      "& .contentBox": {
        "& h6": {
          fontSize: "14px",
          fontWeight: "500",
        },
        "& h5": {
          fontSize: "13px",
          fontWeight: "400",
          color: "#444444",
          marginTop: "5px",
        },
      },
    },
  },
}));

const index = () => {
  const auth = useContext(AuthContext);
  return (
    <CityPropertyStyle>
      {auth?._postlist?.map((data, index) => {
        return (
          <Box className="mainBox" key={index}>
            <Box maxWidth={280} position={"absolute"} right={-17} top={-13}>
              <img src="/images/Path 8257.svg" width={"100%"} />
            </Box>
            <Box>
              <Box className="ProfileBox">
                <Box display={"flex"} alignItems={"center"}>
                  <Box className="imgBox">
                    {data?.sellerId?.profilePicture == "" ? (
                      <img
                        src="https://res.cloudinary.com/mobiloitteblockchain/image/upload/v1710956640/h7dhmg9pquip3assdqz3.jpg"
                        width={"100%"}
                      />
                    ) : (
                      <img
                        src={data?.sellerId?.profilePicture}
                        width={"100%"}
                      />
                    )}
                  </Box>
                  &nbsp;&nbsp;&nbsp;
                  <Typography variant="h6">{data?.sellerId?.name}</Typography>
                </Box>
                <Box mt={1} className="contentBox">
                  <Typography variant="h6">{data?.title}</Typography>
                  <Typography variant="h5">{data?.description}</Typography>
                  <Box display={"flex"} alignItems={"center"} mt={1}>
                    <Box>
                      <Typography variant="h6">Property Size</Typography>
                      <Typography variant="h5">
                        {data?.superBuildupArea}
                      </Typography>
                    </Box>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Box>
                      <Typography variant="h6">Project Name</Typography>
                      <Typography variant="h5">{data?.projectName} </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <img src={data?.coverImage} width={"100%"} />
              </Box>
              <Box padding={"15px"}>
                <Box
                  className="commentBox"
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <ThumbUpIcon /> &nbsp;&nbsp;&nbsp;
                    <Typography variant="h6">
                      ashok sharma and 560k others
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box className="iconBox">
                        <Box>
                          <img src="/images/Group 4144.png" width={"100%"} />
                        </Box>
                      </Box>
                      &nbsp;&nbsp;&nbsp;
                      <Box className="viewBox">
                        <Typography variant="h6">reviews</Typography>
                        <span>4.5</span>
                      </Box>
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box display={"flex"} alignItems={"center"}>
                      <Box className="iconBox">
                        <ApartmentIcon />
                      </Box>
                      &nbsp;&nbsp;&nbsp;
                      <Box className="viewBox">
                        <Typography variant="h6">ranking</Typography>
                        <span>4.5</span>
                      </Box>
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box display={"flex"} alignItems={"center"}>
                      <Box className="iconBox">
                        <PublicIcon />
                      </Box>
                      &nbsp;&nbsp;&nbsp;
                      <Box className="viewBox">
                        <Typography variant="h6">City</Typography>
                        <span>4.5</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box m={"15px 0"}>
                  <Divider />
                </Box>
                <Box p={"0 40px"}>
                  <Box className="bottomBox">
                    <Box display={"flex"} alignItems={"center"}>
                      <AiOutlineLike />
                      &nbsp;&nbsp;&nbsp;
                      <Typography variant="h6">ratings</Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      <BsChatDots />
                      &nbsp;&nbsp;&nbsp;
                      <Typography variant="h6">ratings</Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      <ThumbUpOffAltIcon />
                      &nbsp;&nbsp;&nbsp;
                      <Typography variant="h6">ratings</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </CityPropertyStyle>
  );
};

export default index;
