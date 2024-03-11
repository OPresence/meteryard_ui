import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import ButtonComponent from "./ButtonComponent";
import { PostApiFunction } from "../utils";
import Apiconfigs from "../ApiConfig/ApiConfig";

const Commercialstyle = styled("Box")(({ theme }) => ({
  "& .mainSliderDiv": {
    background: "#fff",
    "& .mainBoxCard": {
      marginTop: "144px",
      "@media(max-width:615px)": {
        marginTop: "0",
      },
      "& .GridClassCard": {
        "@media(max-width:615px)": {
          marginTop: "10px !important",
        },
      },
    },
    "@media(max-width:615px)": {
      padding: "20px 0px",
    },
    "& h2": {
      fontWeight: "500",
    },
    "& .cardBox": {
      display: "flex",
      justifyItems: "center",
      // height: "100%",
      paddingBlock: "20px",
      "@media(max-width:900px)": {
        marginTop: "90px",
      },
    },
  },
  "& .cards": {
    cursor: "pointer",
    width: "100%",
    borderRadius: "15px",
    position: "relative",
    transition: "0.8s",
    transform: "scale(0.9)",
    display: "flex",

    "&:hover": {
      transform: "scale(1)",
      transition: "0.8s",
    },
    "& .contentBox": {
      boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
      padding: "10px",
      marginTop: "-30px",
      background: "#fff",
      borderRadius: "10px",
      position: "relative",
      width: "100%",
      minHeight: "325px",
      paddingBottom: "20px",

      "@media(max-width:615px)": {
        minHeight: "auto",
      },
      "& svg": {
        color: "#000",
        fontSize: "16px",
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
}));

const CommercialProjects = () => {
  const projectDetails = [
    {
      image: "/images/meteryard/Images/Image 23.png",
    },
    {
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100309.png",
    },
    {
      image: "/images/meteryard/Images/Image 23.png",
    },
    {
      image: "/images/meteryard/Images/Screenshot 2023-09-02 100420.png",
    },
  ];
  const [_getlist, setGetList] = useState([]);
  const [_isloading, setIsLoading] = useState(false);

  const ResidentialAPI = async () => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          projectTypeId: "65dc4c11da234100342352f4",
          page: "1",
          limit: "10",
        },
      });
      if (res?.responseCode == 200) {
        setIsLoading(false);
        console.log("sdfdsfjdsfdsbfs--->", res?.result?.docs);
        setGetList(res?.result?.docs);
      }
    } catch (error) {
      setIsLoading(false);

      console.log("eror", error);
    }
  };
  useEffect(() => {
    ResidentialAPI();
  }, []);
  return (
    <Commercialstyle>
      <div className="mainSliderDiv">
        <Container maxWidth>
          <Box>
            <Typography variant="h2">Commercial Projects</Typography>
            <Typography variant="h6">
              Featured Residential Projects Across India
            </Typography>
          </Box>
          <Box className="mainBoxCard">
            <Grid container spacing={2}>
              {_getlist.map((data, index) => {
                console.log("datadnjfdjf--->", index);
                if (index < 8) {
                  return (
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={6}
                      xs={12}
                      className="GridClassCard"
                      style={index > 3 ? { marginTop: "60px" } : {}}
                    >
                      <Box className="cardBox" key={index}>
                        <Box className="cards">
                          <Box display={"flex"} justifyContent={"center"}>
                            <Box className="contentBox" width={"90%"}>
                              <Box>
                                <Box
                                  display={"flex"}
                                  justifyContent={"center"}
                                  m={"-95px 0 0 0"}
                                >
                                  <Box maxWidth={280}>
                                    <img
                                      src={data?.coverImage}
                                      width={"100%"}
                                      style={{ borderRadius: "15px" }}
                                    />
                                  </Box>
                                </Box>
                              </Box>
                              <Typography
                                variant="h5"
                                style={{ padding: "20px 25px 9px" }}
                              >
                                {data?.projectName}{" "}
                              </Typography>
                              <Box display={"flex"} mt={1}>
                                <FmdGoodIcon />
                                &nbsp;
                                <Box m={"0 0 0 5px"}>
                                  <Typography variant="h4">
                                    {data?.title}{" "}
                                  </Typography>
                                  <Typography variant="h6">
                                    {data?.description}
                                  </Typography>
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
                                        {data?.price}/-
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
                    </Grid>
                  );
                }
              })}
            </Grid>
            {_getlist?.length > 7 && (
              <Box
                display={"flex"}
                justifyContent={"end"}
                p={"0 15px"}
                mt={"-20px"}
              >
                <a href="#">view more</a>
              </Box>
            )}
          </Box>
        </Container>
      </div>
    </Commercialstyle>
  );
};

export default CommercialProjects;
