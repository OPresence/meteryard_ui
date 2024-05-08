import React, { useContext } from "react";
import { styled } from "@mui/styles";
import ImageGrid from "../seller-profile/ImageGrid";
import Divider from "@mui/material/Divider";
import { Box, Typography, Avatar, Grid, Button } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { AiOutlineLike } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { AuthContext } from "../../context/Auth";

// const PostStyle = styled("Box")(({ theme }) => ({
//   "& .mainBox": {
//     "& .moreDetialsBox": {
//       "& button": {
//         background: "#fff",
//         boxShadow: "0px 3px 3px #00000014",
//       },
    
//     },
//     "& h2": {
//       fontSize: "13px",
//       fontWeight: "400",
//       color: "#444444",
//       marginTop: "5px",
//     },
//     "& .iconBox": {
//       background: "#444444",
//       display: "flex",
//       justifyContent: "center",
//       // padding: "5px",
//       borderRadius: "50px",
//       width: 25,
//       height: 25,
//       alignItems: "center",
//       "& svg": {
//         fontSize: "15px",
//         color: "#fff",
//         background: "#444444",
//       },
//     },
//     "& .viewBox": {
//       "& h6": {
//         color: "#838383",
//         fontSize: "12px",
//       },
//       "& span": {
//         color: "#FBB415",
//       },
//     },
//     "& .bottomBox": {
//       display: "flex",
//       alignItems: "center",
//       gap: "15px",
//       justifyContent: "space-between",
//     },
//     "& .contentBox": {
//       "& svg": {
//         fontSize: "16px",
//         color: "#444444",
//       },
      
//       "& span": {
//         fontSize: "16px",
//         color: "#444444",
//       },
//       "& .linkBox": {
//         marginTop: "10px",
//         lineHeight: "25px",

//         "& a": {
//           color: "#065AC7",
//           textDecoration: "none",
//         },
//       },
//     },
//   },
// }));

const PostStyle = styled('Box')(({ theme }) => ({
  "& .mainBox": {
    "& .moreDetialsBox": {
      "& button": {
        background: "#fff",
        boxShadow: "0px 3px 3px #00000014",
      },
    },
    "& h2": {
      fontSize: "13px",
      fontWeight: "400",
      color: "#444444",
      marginTop: "5px",
    },
    "& .iconBox": {
      background: "#444444",
      display: "flex",
      justifyContent: "center",
      borderRadius: "50px",
      width: 25,
      height: 25,
      alignItems: "center",
      "& svg": {
        fontSize: "15px",
        color: "#fff",
        background: "#444444",
      },
    },
    "& .viewBox": {
      "& h6": {
        color: "#838383",
        fontSize: "12px",
      },
      "& span": {
        color: "#FBB415",
      },
    },
    "& .bottomBox": {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      justifyContent: "space-between",
    },
    "& .contentBox": {
      "& svg": {
        fontSize: "16px",
        color: "#444444",
      },
      "& span": {
        fontSize: "16px",
        color: "#444444",
      },
      "& .linkBox": {
        marginTop: "10px",
        lineHeight: "25px",
        "& a": {
          color: "#065AC7",
          textDecoration: "none",
        },
      },
    },
    // Media query for screens smaller than 600px
    "@media (max-width: 600px)": {
      "& .moreDetialsBox": {
        "& button": {
          fontSize: "12px", // Smaller font size for button text
        },
      },
      "& h2": {
        fontSize: "11px", // Smaller font size
      },
      "& .iconBox": {
        width: 20,
        height: 20,
        "& svg": {
          fontSize: "12px", // Smaller icon size
        },
      },
      "& .viewBox": {
        "& h6": {
          fontSize: "10px", // Smaller text in viewBox
        },
      },
      "& .bottomBox": {
        gap: "10px", // Reduced gap between elements
      },
      "& .contentBox": {
        "& svg": {
          fontSize: "14px",
        },
        "& span": {
          fontSize: "14px",
        },
        "& .linkBox": {
          "& a": {
            fontSize: "12px", // Smaller font size for links
          },
        },
      },
    },
  },
}));

const PostDetails = () => {
  const auth = useContext(AuthContext);
  console.log("auth45454----->", auth?._getprofile);

  const ArrayJson = [{}, {}, {}, {}];
  return (
    <PostStyle>
      <Box className="mainBox">
        <Box display={"flex"} gap={2} mb={1}>
          <Box>
            <Avatar src="/images/profile/1567018939360.png" />
          </Box>
          <Box className="contentBox">
            <Typography variant="h6">{auth?._getprofile?.name}</Typography>
            <Box display={"flex"} alignItems={"center"} mt={"5px"}>
              <span>2d .</span> &nbsp;
              <PublicIcon />
            </Box>
            <Box mt={2}>
              <Typography variant="h6">
                It Is A Piece Of Really Soft Tissue That Appears As A Thin Line
                Between The Gums And Lips. You Can Find It On The Top And The
                Bottom Of Your Oral Cavity.
              </Typography>
            </Box>
            <Box className="linkBox">
              <a href="">
                #Property&nbsp; &nbsp;#Realestate&nbsp; &nbsp;#Property&nbsp;
                &nbsp;#Realestate&nbsp; &nbsp;#Property&nbsp;
                &nbsp;#Realestate&nbsp; &nbsp;#Property&nbsp;
                &nbsp;#Realestate&nbsp; &nbsp;#Property&nbsp;
                &nbsp;#Realestate&nbsp; &nbsp;#Property&nbsp;
                &nbsp;#Realestate&nbsp; &nbsp;
              </a>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box mt={2}>
          <Box display={"flex"} gap={2}>
            <Box>
              <Avatar src="/images/profile/1567018939360.png" />
            </Box>
            <Box className="contentBox1">
              <Typography variant="h6">{auth?._getprofile?.name}</Typography>
              <Box display={"flex"} alignItems={"center"} mt={"5px"}>
                <span>2d .</span> &nbsp;
                <PublicIcon />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={1}>
          <Grid container spacing={1}>
            {ArrayJson.map((data, index) => {
              return (
                <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                  <Box
                    style={{
                      background: "#fff",
                      // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      boxShadow: "0px 3px 39px #0000000F",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <ImageGrid />
                    <Box>
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
                      <Typography
                        variant="h5"
                        style={{ fontSize: "16px", marginTop: "5px" }}
                      >
                        {" "}
                        BLK 7-1005, Vascon Tulips Gold
                      </Typography>
                      <Typography variant="h2">
                        {" "}
                        It Is A Piece Of Really Soft Tissue That Appears As A
                        Thin Line Between The Gums And Lips.
                      </Typography>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Box display={"flex"} alignItems={"center"} mt={2}>
                          <Box display={"flex"} alignItems={"center"}>
                            <Box className="iconBox">
                              <Box>
                                <img
                                  src="/images/Group 4144.png"
                                  width={"100%"}
                                />
                              </Box>

                              {/* <GradeIcon /> */}
                            </Box>
                            &nbsp;
                            <Box className="viewBox">
                              <Typography variant="h6">reviews</Typography>
                              <span>4.5</span>
                            </Box>
                          </Box>
                          &nbsp;
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
                          &nbsp;
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
                        <Box className="moreDetialsBox">
                          <Button>
                            <span>More Details</span>
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </PostStyle>
  );
};

export default PostDetails;
