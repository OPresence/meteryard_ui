import React, { useState, useEffect, useContext } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import ButtonSwitchComponent from "../../component/ButtonSwitchComponent";
import RegisterModal from "../../component/registerSellerModal/RegisterModal";
import PropertyForm from "./PropertyForm";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../../context/Auth";
const MainComponent = styled(Box)(({ theme }) => ({
  "& .mainBox": {
    overflow: "hidden",
    "& .backImageBox": {
      "@media(max-width:615px)": {
        display: "flex",
        justifyContent: "end",
      },
    },
    "@media(max-width:615px)": {
      marginBottom: "0",
      height: "auto",
    },
    "& .backImage": {
      maxWidth: "892px",
      overflow: "hidden",
      position: "relative",
      marginTop: "-10px",
      left: "0",
      "@media(max-width:615px)": {
        maxWidth: "70%",
        top: "-2%",
        // left: "20% !important",
      },
    },
  },
  "& .bacBox": {
    position: "relative",
    left: "0px",
  },
  "& .handImage": {
    left: "50px",
    bottom: "120px",
    position: "absolute",
    maxWidth: "748px",
    "@media(max-width:615px)": {
      top: "50px",
      left: "170px",
      width: "190px",
    },
  },
  "& .contentBox": {
    top: "35%",
    zIndex: "1",
    left: "80px",
    width: "100%",

    "@media(max-width:615px)": {
      top: "13%",
      left: "0",
    },
    "& .Banner_inputField": {
      width: "Fixed (987px)px",
      height: "Hug (69.4px)px",
      top: "0",
      left: "0px",
      padding: "0px",
      gap: "10px",
      borderRadius: "14px 23px 23px 14px",
      opacity: "0px",
      borderRadius: "15px",
      "&:hover": {
        borderColor: "red",
        // border:"2px solid red",
      },
      "& ::placeholder": {
        fontFamily: "Inter",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "29.05px",
        textAlign: "left",
      },
      "@media(max-width:615px)": {
        padding: "0px",
        fontSize: "12px",
      },
    },
    "& .ContainerSearchBox": {
      display: "flex",
      justifyContent: "center",
      padding: "0 150px 0 0",
      // position: "absolute",
      width: "100%",
      top: "140%",
      left: "50%",
      "@media(max-width:615px)": {
        padding: "0",
        left: "0%",
        top: "100%",
        margin: "0 0px",
      },
    },
    "& .searchbox": {
      background: "#A9D910 0% 0% no-repeat padding-box;",
      position: "absolute",
      right: "0px",
      top: "0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "11px",
      "@media(max-width:615px)": {
        width: "40px",
        height: "40px !important",
        margin: "5px 8px",
        minWidth: "unset",
      },
    },
    "& .Banner_textFild": {
      position: "relative",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "-1px 2px 8px 0px #00000024",
      marginInline: "auto",
      borderRadius: "11px",
      opacity: "1",
      width: "100%",
      transition: "0.8s",
      // marginLeft: "75%",
      "& input": {
        borderRadius: "50px",
        padding: "16.5px 14px",
        "&::placeholder": {
          fontFamily: "Inter",
          fontSize: "22px",
          fontWeight: "400",
          lineHeight: "29.05px",
          textAlign: "left",
          "@media(max-width:615px)": {
            fontSize: "16px",
          },
        },
      },
      "@media(max-width:615px)": {
        margin: "0px",
        marginLeft: "0px",
        // marginTop: "30px",
        width: "100% !important",
        margin: "auto",
        "& input": {
          fontSize: "16px",
        },
      },

      "&:hover": {
        transition: "0.8s",
        width: "100%",
        "@media(max-width:615px)": {
          width: "100%",
          right: "0",
        },
      },
    },
    "& .find": {
      color: "black",
      fontFamily: "Inter",
      fontSize: "62px",
      fontWeight: "600",
      lineHeight: "87.14px",
      textAlign: "left",

      "@media(max-width:615px)": {
        fontSize: "20px",
        lineHeight: "17.14px",
      },
    },
    "& .Make": {
      color: "#A7D325",
      fontFamily: "Inter",
      fontSize: "62px",
      fontWeight: "600",
      lineHeight: "87.14px",
      textAlign: "left",

      "@media(max-width:615px)": {
        fontSize: "20px",
        lineHeight: "17.14px",
      },
    },
  },
  "& .buttonBox": {
    width: "191px",
    "@media(max-width:615px)": {
      width: "150px",
    },
    "& .ButtonClass": {
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 70% 123%, 0% 100%, 0 0%)",
      width: "100%",
      justifyContent: " space-between",
      background: "#fff",
      boxShadow: " 0px 4px 4px 0px #0000001A",
      "@media(max-width:615px)": {
        height: "40px",
      },
      "& .buyerBoxSpan": {
        left: "208px",
        gap: "0px",
        borderRadius: "0px 21.43px 0px 21.43px",
        border: "2.38px 0px 0px 0px",
        opacity: "0px",
        angle: "-180 deg",
        "& span": {
          minWidth: "60%",
          padding: "0 0 0 65px",
          "@media(max-width:615px)": {
            padding: 0,
            width: "80%",
            marginInline: "auto",
          },
        },

        "@media(max-width:615px)": {
          // padding: "0 50px 0 20px",
          paddingLeft: "10px",
        },

        "& span": {
          color: "black",
          fontSize: "12px",
          fontWeight: "600",
        },
      },
      "& .buttonText": {
        width: "100%",
        fontFamily: "Inter",
        fontSize: "12px",
        fontWeight: 600,
        color: "#000000",
        padding: "0px 66px 0 0px",
        "@media(max-width:615px)": {
          paddingRight: "50px",
        },
      },
      "& .buttonIconBox": {
        width: "60px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        // border: "2px solid #A7D325",
        border: "2.38px solid #A9D910",
        // boxShadow: "0px 3px 27px #68686829",

        "@media(max-width:615px)": {
          width: "40px",
        },

        "& .imageBox": {
          padding: "10px",
          maxWidth: "40px !Important",

          "@media(max-width:615px)": {
            padding: "0",
            maxWidth: "100%",
            width: "100% !important",

            "& img": {
              width: "70%",
              height: "70%",
            },
          },
        },
      },

      "&:hover": {
        background: "#A7D325",
        "& .hoverBox": {
          display: "block",
        },
      },
    },

    "& .hoverBox": {
      display: "none",
      // display: "block",
      position: "absolute",
      width: "280%",

      "@media(max-width:615px)": {
        width: "300px",
        left: "35%",
      },
    },
    "&:hover": {
      "& .hoverBox": {
        display: "block",
      },
    },
  },
  "& .buttonBoxSecond": {
    // boxShadow: "0px 3px 27px #68686829",
    width: "191px",
    "@media(max-width:433px)": {
      width: "150px",
    },
    "& .ButtonClass1": {
      justifyContent: "space-between",
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 0%, 100% -0%, 100% 548%, 0% 100%, 24% 0%)",
      borderTopRightRadius: "20px",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "21px",
      marginLeft: "-40px",
      background: "#fff",
      width: "100%",
      boxShadow: " 0px 4px 4px 0px #0000001A",
      "& span": {
        padding: "0 0 0 65px",
        // fontFamily: "Inter",
        fontSize: "12px",
        fontWeight: 600,
        color: "#000000",
        "@media(max-width:433px)": {
          padding: 0,
          paddingLeft: "25px",
        },
      },
      "&:hover": {
        background: "#A7D325",
      },
      "@media(max-width:433px)": {
        marginLeft: "-25px",
        height: "40px",
        "& .buyerBoxSpan": {
          paddingLeft: "20px",
        },
      },

      "& .buttonIconBox": {
        width: "60px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderTopLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        // border: "2px solid #A7D325",
        border: "2.38px solid #A9D910",
        // boxShadow: "0px 3px 27px #68686829",
        "& .imageBox": {
          padding: "10px",
          maxWidth: "40px !important",
          "@media(max-width:615px)": {
            padding: "0",
            maxWidth: "100%",
            width: "100% !important",

            "& img": {
              width: "70%",
              height: "70%",
            },
          },
        },
        "@media(max-width:615px)": {
          height: "100%",
          width: "40px",
        },
      },
    },
    "& .hoverBox1": {
      display: "none",
      // display: "block",
      position: "absolute",
      minWidth: "600px",

      "@media(max-width:615px)": {
        minWidth: "300px",
        width: "300px",
        top: "50px",
        right: "-50%",
      },
    },
    "&:hover": {
      "& .hoverBox1": {
        display: "block",
      },
    },
  },
  "& .banner-heading": {
    "@media(max-width:615px)": {
      marginTop: "0px",
      fontSize: "16px",
    },
  },
  "& h4": {
    color: "black",
    fontFamily: "Inter",
    fontSize: "36px",
    fontWeight: "400",
    lineHeight: "43.57px",
    textAlign: "left",
    "@media(max-width:615px)": {
      marginTop: "0px",
      fontSize: "14px",
    },
  },
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const Auth = useContext(AuthContext);

  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUploadResponses, setImageUploadResponses] = useState([]);
  const [_video_url, setVideoURL] = useState("");
  const [_coverImage, setCoverImage] = useState("");
  const [activeBtn, setActivebtn] = useState("SEARCH");
  const [open, setOpen] = useState(false);
  const [_propertyform, setPropertyForm] = React.useState(false);
  const [_isloading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [_openDialogLogin, setOpenDialogLogin] = useState(false);
  const [_checked, setChecked] = React.useState(false);
  const [_consition, setConsition] = React.useState(false);
  const [_getproprty_type, setGetPropetyType] = useState("");
  const [_get_type_name, setGet_Type_Name] = useState("");
  const router = useRouter();

  const [_getproject_sub_type, setGetProject_sub_Type] = React.useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 27.1881,
    lng: 77.935,
  });
  const handleClickOpen = () => {
    setPropertyForm(true);
  };
  const handleClickOpenLogin = (value) => {
    setSelectScreen(value);
    setOpenDialogLogin(true);
    setSignUpComplete(false);
  };
  const handleCloseLogin = () => {
    setOpenDialogLogin(false);
  };
  const handleClose = () => {
    setPropertyForm(false);
  };
  const handleMouseEnter = (value) => {
    setActivebtn(value);
  };
  const AdPropertyFunction = async (values) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.createPropertyPost,
        data: {
          listedBy: values?.listed_name,
          bedroom: values?.bedrooms,
          bathroom: values?.bathrooms,
          superBuildupArea: values?.super_building,
          carpetArea: values?.carpet_area,
          totalFloors: values?.floors_no,
          floorNumber: values?.floors_no,
          projectName: values?.project_name,
          title: values?.add_title,
          description: values?.description,
          price: values?.price,
          coverImage: _coverImage,
          video: _video_url,
          type: values?.typeProperty,
          image: imageUploadResponses,
          address: address,
          termAndConditions: _consition,
          featuredProperty: _checked,
          projectTypeId: _getproprty_type,
          projectSubTypeId: _getproject_sub_type,
          location: {
            type: "Point",
            coordinates: [coordinates?.lat, coordinates?.lng],
          },
        },
      });
      if (res) {
        setIsLoading(false);
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage); // Display success notification
          setIsLoading(false);
          setPropertyForm(false);

          setSelectedImages([]);
        } else if (res?.responseCode == 404) {
          setPropertyForm(false);
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
          setPropertyForm(false);
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
          setPropertyForm(false);
        } else if (res?.responseCode == 500) {
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
          setPropertyForm(false);
        } else {
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
          setPropertyForm(false);
        }
      }
    } catch (error) {
      setIsLoading(false);
      setPropertyForm(false);

      console.log("error", error);
    }
  };
  const imageUploadFunction = async (imageValue) => {
    try {
      const formdata = new FormData();
      formdata.append("uploaded_file", imageValue);

      const res = await PostApiFunction({
        endPoint: Apiconfigs.uploadImage,
        data: formdata,
      });

      if (res) {
        if (res?.result[0]?.mediaType == "mp4") {
          toast.success("Video uploaded successfully.");
          setVideoURL(res?.result[0]?.mediaUrl);
          return res;
        } else {
          return res; // Return the response for later use
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const CoverImageFunction = async (imageValue) => {
    try {
      const formdata = new FormData();
      formdata.append("uploaded_file", imageValue);

      const res = await PostApiFunction({
        endPoint: Apiconfigs.uploadImage,
        data: formdata,
      });

      if (res) {
        toast.success("Cover image uploaded successfully.");
        setCoverImage(res?.result[0]?.mediaUrl);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleImageUpload = async () => {
    try {
      const responses = [];

      // Use asynchronous recursion to process images one by one
      const processImage = async (index) => {
        if (index < selectedImages.length) {
          const image = selectedImages[index];
          const response = await imageUploadFunction(image);
          responses.push(response?.result[0]?.mediaUrl);

          // Process the next image recursively
          await processImage(index + 1);
        } else {
          // All images processed, set the responses in the state
          setImageUploadResponses(responses);
        }
      };

      // Start processing images from index 0
      await processImage(0);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  useEffect(() => {
    if (selectedImages.length > 0) {
      handleImageUpload();
    }
  }, [selectedImages]);
  return (
    <MainComponent>
      {/* <Container maxWidth style={{ paddingRight: "0px !important;" }}> */}
      <Box>
        <Box position={"absolute"} className="contentBox">
          <Box
            width={isMobile ? "100%" : "100%"}
            padding={isMobile && "10px 20px"}
          >
            <Box>
              <Typography
                variant="h1"
                className="banner-heading"
                lineHeight={isMobile && "2rem"}
                marginTop={isMobile && "20px"}
                justifyContent={isMobile && "flex-start"}
              >
                <span className="find">Find Your Place,</span>
                {isMobile && <br />}
                <span className="Make">
                  Make {!isMobile && <br />}
                  It Home
                </span>
              </Typography>
              <Box mt={1.5} mb={1.5}>
                <Typography
                  variant="h3"
                  width={isMobile ? "68%" : "100%"}
                  fontSize={isMobile ? "14px" : "18px"}
                >
                  Please Select Your Category
                </Typography>
              </Box>
              <Box
                display={"flex"}
                className="buyer-seller-btn"
                justifyContent={isMobile && "flex-start"}
              >
                <Box
                  mt={isMobile ? 2 : 5}
                  position={"relative"}
                  zIndex={1}
                  className={"buttonBox"}
                >
                  <Button
                    variant="button"
                    className="ButtonClass"
                    onMouseEnter={() => handleMouseEnter("Buyer")}
                  >
                    <Box className={"buttonIconBox"}>
                      <Box className="imageBox">
                        <img
                          src="/images/Administrator Male.png"
                          width={"100%"}
                        />
                      </Box>
                    </Box>
                    <Box className="buyerBoxSpan">
                      <span className="buttonText">Buyer</span>
                    </Box>
                  </Button>
                  &nbsp;
                  <Box className={"hoverBox"}>
                    <ButtonSwitchComponent
                      Type="Buyer"
                      activeBtn={activeBtn}
                      setOpen={setOpen}
                      _propertyform={_propertyform}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                    />
                  </Box>
                </Box>
                <Box
                  mt={isMobile ? 2 : 5}
                  position={"relative"}
                  zIndex={1}
                  className={"buttonBoxSecond"}
                >
                  <Button
                    variant="button"
                    className="ButtonClass1"
                    onMouseEnter={() => handleMouseEnter("Seller")}
                  >
                    <Box className="buyerBoxSpan">
                      <span className="buttonText">Seller</span>
                    </Box>
                    <Box className={"buttonIconBox"}>
                      <Box className="imageBox">
                        <img
                          src="/images/Administrator Male.png"
                          width={"100%"}
                        />
                      </Box>
                    </Box>
                  </Button>
                  <Box className={"hoverBox1"}>
                    <ButtonSwitchComponent
                      Type="Seller"
                      activeBtn={activeBtn}
                      setOpen={setOpen}
                      _propertyform={_propertyform}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                      AdPropertyFunction={AdPropertyFunction}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              className="ContainerSearchBox"
              // style={{ transform: isMobile && "translate(-50%,-50%)" }}
            >
              <Box
                mt={10}
                className={"Banner_textFild"}
                maxWidth={isMobile ? "100%" : "60%"}
                borderRadius={isMobile ? "14px" : "11px"}
              >
                <TextField
                  // id="outlined-basic"
                  // Auth?.
                  fullWidth
                  onChange={(e) => Auth?.setSearchProperty(e.target.value)}
                  sx={{
                    // padding:"0px !impor",
                    "& .MuiOutlinedInput-root": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none !important",
                        width: "Fixed (987px)px",
                        height: "Hug (69.4px)px",
                        top: "0",
                        left: "0px",
                        padding: "0px",
                        gap: "10px",
                        borderRadius: "14px 23px 23px 14px",
                        opacity: "0px",
                      },
                    },
                  }}
                  // variant="outlined"
                  placeholder="City, Locality, Projects, Landmark"
                  // className={"Banner_inputField"}
                />
                <Button
                  className="searchbox"
                  onClick={() => {
                    Auth?.PropertySearchPostAPI();
                    router.push("/search-property");
                  }}
                >
                  <SearchIcon style={{ fontSize: "25px", color: "#FFFF" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="mainBox">
          <Box display={"flex"} justifyContent={"end"} className="bacBox">
            <Box className="backImageBox">
              <Box className="backImage">
                <img
                  src="/images/picture.png"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <RegisterModal
        open={open}
        setOpen={setOpen}
        handleClickOpenLogin={handleClickOpenLogin}
      />
      {_propertyform && (
        <PropertyForm
          open={_propertyform}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          AdPropertyFunction={AdPropertyFunction}
          _isloading={_isloading}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          setCoverImage={setCoverImage}
          imageUploadFunction={imageUploadFunction}
          _coverImage={_coverImage}
          address={address}
          setAddress={setAddress}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          _checked={_checked}
          setChecked={setChecked}
          _consition={_consition}
          setConsition={setConsition}
          setGetPropetyType={setGetPropetyType}
          setGet_Type_Name={setGet_Type_Name}
          setGetProject_sub_Type={setGetProject_sub_Type}
          _getproprty_type={_getproprty_type}
          CoverImageFunction={CoverImageFunction}
        />
      )}
      {/* <LoginDialog
          open={_openDialogLogin}
          setOpen={setOpenDialogLogin}
          handleClickOpen={handleClickOpenLogin}
          handleClose={handleCloseLogin}
          _selectScreen={"Login"}
          // setSelectScreen={""}
          // setSignUpComplete={setSignUpComplete}
          // _signcomplete={_signcomplete}
        /> */}
      {/* </Container> */}
    </MainComponent>
  );
}
