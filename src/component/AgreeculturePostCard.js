import React from 'react'
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
        minHeight: "230px",
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
const AgreeculturePostCard = ({data}) => {
  return (
    <AgreecultureStyle>
         <Box height={"100%"} pb={"20px"}>
                        <Box className="cards">
                          <Box>
                            <img
                              src={data?.coverImage}
                              width={"100%"}
                              style={{ borderRadius: "15px", height: "250px" }}
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

                                  <ButtonComponent data={data} />
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
    </AgreecultureStyle>
  )
}

export default AgreeculturePostCard