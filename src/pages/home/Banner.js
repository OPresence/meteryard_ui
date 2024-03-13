import React, { useState, useContext, useEffect } from "react";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import ButtonSwitchComponent from "../../component/ButtonSwitchComponent";
import RegisterSeller from "../../component/RegisterSeller";
import SearchIcon from "@mui/icons-material/Search";
import PropertyForm from "./PropertyForm";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    height: "100vh",
    overflow: "hidden",
    "@media(max-width:615px)": {
      marginBottom: "-140px"
    },
    "& .backImage": {
      maxWidth: "892px",
      overflow: "hidden",
      position: "relative",
      marginTop: "18px",
      left: "0",
    },
  },
  "& .bacBox": {
    position: "relative",
    left: "100px",
    "@media(max-width:900px)": {
      left: "0",
    },
  },
  "& .handImage": {
    left: "50px",
    bottom: "120px",
    position: "absolute",
    maxWidth: "748px",
    "@media(max-width:615px)": {
      top: "0px",
    },
  },
  "& .contentBox": {
    top: "35%",
    zIndex: "1",
    "& .Banner_inputField": {
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      borderRadius: "11px",
      "@media(max-width:615px)": {
        padding: "0px",
        fontSize:"15px",
      },
      "& ::placeholder": {
        textAlign: "left",
        font: "normal normal medium 23px/30px Samsung Sharp Sans",
        letterSpacing: "0.23px",
        fontSize: "18px",
        fontWeight: 400,
        color: "#949494",
        opacity: 1,
      },
    },

    "& .searchbox": {
      background: "#A9D910 0% 0% no-repeat padding-box;",
      position: "absolute",
      right: "0px",
      top: "0px",
      width: "65px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
    },
    "& .Banner_textFild": {
      position: "relative",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 3px 27px #68686829",
      borderRadius: "11px",
      opacity: "1",
      width: "100%",
      transition: "0.8s",
      marginLeft: "20px",
      "@media(max-width:615px)": {
        margin: "0px",
        marginLeft: "0px",
        marginTop: "30px",
        width:"95% !important",
        margin:"auto",
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
      color: "#444444",
    },
    "& .Make": {
      color: "#A7D325",
    },
  },
  "& .buttonBox": {
    "& .ButtonClass": {
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 4%, 100% 0%, 70% 123%, 0% 100%, 0 0%)",
      color: "#fff",
      background: "rgb(172 172 172)",
      "& .buyerBoxSpan": {
        padding: "0 90px 0 50px",
        "@media(max-width:615px)": {
          padding: "0 50px 0 20px",
        },

        "& span": {
          color: "#eeeeee",
        },
      },
      "& .buttonText": {
        color: "#0000",
      },
      "& .buttonIconBox": {
        background: "#fff",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        "& .imageBox": {
          padding: "10px",
          maxWidth: "40px !Important",
          "@media(max-width:615px)": {
            padding: "9px",
            maxWidth: "38px !important",
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
        width: "200%",
      },
    },
    "&:hover": {
      "& .hoverBox": {
        display: "block",
      },
    },
  },
  "& .buttonBoxSecond": {
    "& .ButtonClass1": {
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 24% 0%)",
      borderTopRightRadius: "20px",
      borderBottomLeftRadius: "0px",
      marginLeft: "-40px",
      background: "rgb(172 172 172)",
      color: "#fff",
      "&:hover": {
        background: "#A7D325",
      },
      "& .buyerBoxSpan": {
        padding: "0 90px 0 50px",
        "@media(max-width:615px)": {
          padding: "0 20px 1px 50px",
        },
        "& span": {
          color: "#eeeeee",
        },
      },
      "@media(max-width:433px)": {
        marginLeft: "0px",
      },
      "& .buttonIconBox": {
        background: "#fff",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        "& .imageBox": {
          padding: "10px",
          maxWidth: "40px !important",
          "@media(max-width:615px)": {
            padding: "9px",
            maxWidth: "38px !important",
          },
        },
      },
    },
    "& .hoverBox1": {
      display: "none",
      // display: "block",
      position: "absolute",
      width: "420%",
      "@media(max-width:615px)": {
        width: "199%",
        right: "0",
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
    },
  },
  
}));

export default function Home() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUploadResponses, setImageUploadResponses] = useState([]);
  const [_video_url, setVideoURL] = useState("");
  const [_coverImage, setCoverImage] = useState("");
  const [activeBtn, setActivebtn] = useState("SEARCH");
  const [open, setOpen] = useState(false);
  const [_propertyform, setPropertyForm] = React.useState(false);
  const [_isloading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [_checked, setChecked] = React.useState(false);
  const [_consition, setConsition] = React.useState(false);
  const [_getproprty_type, setGetPropetyType] = useState("");
  const [_get_type_name, setGet_Type_Name] = useState("");
  const [_getproject_sub_type, setGetProject_sub_Type] = React.useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 27.1881,
    lng: 77.935,
  });
  const handleClickOpen = () => {
    setPropertyForm(true);
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
        console.log("res---->", res);
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
          console.log("Uploaded image:", res);
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
          console.log("Processing image:", image);
          const response = await imageUploadFunction(image);
          // console.log("responses---->0", response?.result[0]?.mediaUrl);
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
       <Container maxWidth>
      <Box>
          <Box position={"absolute"} className="contentBox">
            <Box>
              <Typography variant="h1" className="banner-heading">
                <span className="find">Find Your Place</span>
                <span className="Make">, Make It Home</span>
              </Typography>
              <Box mt={3.5}>
                <Typography variant="h4">
                  Please Select Your Category
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"} className="buyer-seller-btn">
                <Box
                  mt={5}
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
                          src="/images/meteryard/icons/advisory.png"
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
                  mt={5}
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
                      <span>Seller</span>
                    </Box>
                    <Box className={"buttonIconBox"}>
                      <Box className="imageBox">
                        <img
                          src="/images/meteryard/icons/advisory.png"
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
              <Box mt={3} className={"Banner_textFild"}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  sx={{
                    "& fieldset": { border: "none", height: "10px" },
                  }}
                  variant="outlined"
                  placeholder="Search your property..."
                  className={"Banner_inputField"}
                />
                <Button className="searchbox">
                  <SearchIcon style={{ fontSize: "25px", color: "#FFFF" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        <Box className="mainBox">
          <Box display={"flex"} justifyContent={"end"} className="bacBox">
            <Box>
              <Box className="backImage">
                <img
                  src="/images/meteryard/Graphics/Path 7886.png"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
                <Box>
                  <Box className="handImage">
                    <img
                      src="/images/meteryard/Images/home-background-images.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <RegisterSeller open={open} setOpen={setOpen} />
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
      {/* <PropertyForm
        open={_propertyform}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      /> */}
      
      </Container>
    </MainComponent>
  );
}
