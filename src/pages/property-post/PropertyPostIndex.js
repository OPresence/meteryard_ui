import { useEffect, useState, useContext } from "react";
import PropertyPost_s_1 from "./PropertyPost_s_1";
import PropertyPost_s_2 from "./PropertyPost_s_2";
import PropertyPost_s_3 from "./PropertyPost_s_3";
import CircularProgressComponent from "../../component/CircularProgressComponent";
import {
  Box,
  Grid,
  Container,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import useMediaQuery from "@mui/material/useMediaQuery";
import { formFieldValue, ValidationValue, initialValue } from "../../utils";
import { AuthContext } from "../../context/Auth";

const PropertyPostIndexStyle = styled(Box)(({ theme }) => ({
  "& input, select, fieldset": {},
  "& .MainBoxIndex": {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    "@media(max-width:615px)": {
      // background:
      //   "transparent linear-gradient(113deg, #383838 0%, #4E6407 100%) 0% 0% no-repeat padding-box",
      paddingTop: "0",
      height: "unset",
      "& .conatinerBox": {
        padding: "0",
      },
    },
    "& h3": {
      color: "#fff",
      fontSize: "22px",
      fontWeight: "600",
      padding: "0 0 10px 0",

      display: "none",
      "@media(max-width:615px)": {
        display: "Block",
        padding: "0 0 0 10px",
        // marginTop: "50px",
      },
    },
    "& h5": {
      color: "#fff",
      fontSize: "14px",
      fontWeight: "600",

      display: "none",
      "@media(max-width:615px)": {
        display: "block",
        padding: "0 0 0 10px",
      },
    },
    "& .stepperBox": {
      width: "80%",
      marginTop: "40px",
      marginBottom: "20px",
      "@media(max-width:615px)": {
        width: "100%",
        marginBottom: "10px",
        marginTop: "60px",
        // display: "none",
      },
    },
    "& .gridClass": {
      display: "flex",
      alignItems: "center",
      "@media(max-width:615px)": {
        justifyContent: "center",
      },
    },
    "& h2": {
      fontSize: "14px",
      fontWeight: "600",
    },
    "& .h2-class": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#444",
      marginLeft: "10px",
      "@media(max-width:615px)": {
        color: "#fff",
        fontSize: "12px",
      },
    },
    "& .h2-class1": {
      fontSize: "20px",
      fontWeight: "600",
      marginLeft: "10px",
      // position: "absolute",
      // top: "-24px",
      // left: "-20px",
      // width: "106px",
      color: "#444",
      "@media(max-width:615px)": {
        color: "#fff",
        fontSize: "12px",
      },
    },
    "& .h2-class2": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#444",
      marginLeft: "10px",
      // position: "absolute",
      // top: "-24px",
      // left: "-40px",
      // width: "130px",
      "@media(max-width:615px)": {
        color: "#fff",
        fontSize: "12px",
      },
    },
  },
  "& .Form_main_Box": {
    paddingBottom: "30px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    borderRadius: "15px 15px 15px 15px",
    position: "relative",
    maxHeight: "520px",
    overflow: "auto",
    marginTop: "100px",
    // maxHeight: "450px",
    // overflowY: "scroll",
    "@media(max-width:615px)": {
      borderRadius: "15px",
      maxHeight: "unset",
      boxShadow: "none",
      marginTop: "-20px",
      background: "transparent",
    },
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   top: "-1px",
    //   left: "-12px",
    //   height: "282px",
    //   border: "6px solid #b8db53",
    //   borderRadius: "0 0 10 76px",
    //   borderTopRightRadius: "0px",
    //   borderTopLeftRadius: "0px",
    //   borderBottomLeftRadius: "63px",
    //   "@media(max-width:615px)": {
    //     left: "-1000px",
    //   },
    // },
    // "&::after": {
    //   background: "#b8db53",
    //   content: '""',
    //   position: "absolute",
    //   top: "-153px",
    //   left: "129px",
    //   height: "282px",
    //   border: "6px solid #b8db53",
    //   borderRadius: "0 0 10 76px",
    //   borderTopRightRadius: "25px",
    //   borderTopLeftRadius: "0px",
    //   borderBottomRightRadius: "77px",
    //   borderBottomLeftRadius: "0px",
    //   WebkitTransform: "rotateZ(271deg)",
    //   MozTransform: "rotateZ(271deg)",
    //   MsTransform: "rotateZ(271deg)",
    //   transform: "rotateZ(270deg)",
    //   borderTopRightRadius: "90px",
    //   "@media(max-width:615px)": {
    //     left: "-1000px",
    //   },
    // },
    "& .HeadingBox": {
      padding: "20 0px",
      "@media(max-width:615px)": {
        padding: "0px 0px",
      },
      "& h2": {
        textAlign: "center",
        color: "#000",
        fontSize: "28px",
        fontWeight: "600",
        padding: "20px 0",
        "@media(max-width:615px)": {
          padding: "0px 0px",
        },
      },
      "& h3": {
        color: "#444444",
        fontSize: "16px",
        fontWeight: "600",
        padding: "5px 0",
      },
      "& .CheckBox": {
        // display: "flex",
        alignItems: "center",
      },
    },
  },
  "& .LogoBox": {
    display: "block",

    // "@media(max-width:615px)": {
    //   display: "none !important",
    // },
  },
  "& .PropertyBox": {
    "@media(max-width:615px)": {
      marginTop: "0px",
    },
  },
  "& .vectorImg": {
    width: "1222px",
    position: "absolute",
    bottom: "0",
    left: "-205px",
    height: "655px",
    "@media(max-width:615px)": {
      width: "100%",
      position: "absolute",
      top: "-30px",
      right: "0",
      height: "350px",
      left: "unset",
    },
  },
}));
const DialogButtonStyle = styled(Box)(({ theme }) => ({
  "& button": {
    padding: "10px 40px",
    background: "#444444",
    border: "1px solid #fff",
    color: "#fff",
    clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    "&:hover": {
      background: "#444444",
      color: "#fff",
      border: "1px solid #fff",
    },
    "@media(max-width:615px)": {
      padding: "10px 18px",
      marginBottom: "20px",
    },
  },
}));

const StepperStyle = styled("Stepper")(({ theme }) => ({
  "& .Mui-active .MuiSvgIcon-root": {
    color: "#badc54",
    fontSize: "1.8rem",
  },
  "& .MuiSvgIcon-root": {
    // color: "#badc54",
    fontSize: "1.8rem",
  },
  "& .MuiStepConnector-line": {
    borderTopWidth: "12px",
    borderColor: " #badc54",
    borderTopWidth: "9px",
  },
  "& .MuiStepLabel-iconContainer": {
    paddingRight: "0px",
  },
  "& .MuiStep-root": {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  "& .MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
    color: "red !important",
  },
}));

const PropertyPostIndex = () => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [_getstate_object, setGetState_Object] = useState("");
  const [_getcity_object, setGetCity_Object] = useState("");

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const steps = [
    "Enter Your Property Details",
    "Enter Your Area Details",
    "Enter Location & Import Images",
  ];
  const { formField, formId } = formFieldValue;
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = ValidationValue[activeStep];
  const [selectedImages, setSelectedImages] = useState([]);
  const isLastStep = activeStep === steps.length - 1;
  const [imageUploadResponses, setImageUploadResponses] = useState([]);
  const [address, setAddress] = useState("");
  const [_trucapthca, setTrueCaptcha] = useState(false);
  const [selectedImages1, setSelectedImages1] = useState([]);
  const [_isloading, setIsLoading] = useState(false);
  const [_coverImage, setCoverImage] = useState("");
  const [_video_url, setVideoURL] = useState("");
  const [_consition, setConsition] = useState(false);
  const [_propertyform, setPropertyForm] = useState(false);
  const [_checked, setChecked] = useState(false);
  const [_imageuploading, setImageUploading] = useState(false);
  const [_videoupload, setVideoUpload] = useState(false);
  const [_facinglist, setFacingList] = useState([]);
  const [_getfurnishing, setGetFurnishing] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 27.1881,
    lng: 77.935,
  });
  const [_projecttype, setProjectType] = useState([]);
  const [open, setOpen] = useState(false);
  const handleChangeCheck = (event) => {
    if (!_checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  const handleCheckboxChange = (_id) => {
    auth?.setGetPropetyType(_id);
  };
  const imageUploadFunction = async (imageValue) => {
    try {
      // setImageUploading(true);
      const formdata = new FormData();
      formdata.append("uploaded_file", imageValue);

      const res = await PostApiFunction({
        endPoint: Apiconfigs.uploadImage,
        data: formdata,
      });

      if (res) {
        setImageUploading(false);

        if (res?.result[0]?.mediaType == "mp4") {
          toast.success("Video uploaded successfully.");
          setVideoURL(res?.result[0]);
          return res;
        } else {
          setImageUploading(false);

          return res; // Return the response for later use
        }
      }
    } catch (error) {
      setImageUploading(false);

      console.error("Error uploading image:", error);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = async function () {
        if (video.duration > 30) {
          alert("Please upload a video that is 30 seconds or shorter.");
        } else {
          try {
            setVideoUpload(true);
            const res = await imageUploadFunction(e.target.files[0]);
            if (res?.responseCode == 200) {
              setVideoUpload(false);
            }
          } catch (error) {
            setVideoUpload(false);
          }
        }
      };
      video.src = URL.createObjectURL(file);
    }
  };
  const CoverImageFunction = async (imageValue) => {
    try {
      setImageUploading(true);
      const formdata = new FormData();
      formdata.append("uploaded_file", imageValue);

      const res = await PostApiFunction({
        endPoint: Apiconfigs.uploadImage,
        data: formdata,
      });

      if (res) {
        setImageUploading(false);

        toast.success("Cover image uploaded successfully.");
        setCoverImage(res?.result[0]?.mediaUrl);
      }
    } catch (error) {
      setImageUploading(false);

      console.error("Error uploading image:", error);
    }
  };
  const handleFileChangeImage = (e) => {
    const files = e.target.files;
    const images = [];
    const selectedImagesInfo = [];
    for (let i = 0; i < Math.min(files.length, 10); i++) {
      const file = files[i];
      const url = URL.createObjectURL(files[i]);
      console.log(url);
      images.push(url);
      const fileInfo = {
        file,
        url,
        name: file.name,
        type: file.type,
        size: file.size,
      };
      selectedImagesInfo.push(file);
    }
    setSelectedImages(selectedImagesInfo);
    console.log(images);
    console.log(selectedImagesInfo);

    setSelectedImages1(images);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FurnichingTypeType = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs.listAllPropFacing,
      });
      if (res) {
        setFacingList(res?.result?.docs);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const ProjectFurnishing = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllProjectFurnishing,
      });
      if (res) {
        if (res?.responseCode == 200) {
          setGetFurnishing(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setGetFurnishing([]);
          toast.error(res?.responseMessage);
        } else {
          setGetFurnishing([]);
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      console.log(error);
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
    ProjectFurnishing();
    FurnichingTypeType();
  }, []);
  useEffect(() => {
    if (selectedImages.length > 0) {
      handleImageUpload();
    }
  }, [selectedImages]);

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <PropertyPost_s_1
            activeStep={activeStep}
            formField={formField}
            setTrueCaptcha={setTrueCaptcha}
            _isloading={_isloading}
            _getfurnishing={_getfurnishing}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      case 1:
        return (
          <PropertyPost_s_2
            formField={formField}
            _isloading={_isloading}
            _facinglist={_facinglist}
          />
        );
      default:
        return (
          <PropertyPost_s_3
            formField={formField}
            _isloading={_isloading}
            _projecttype={auth?._propertyList}
            _videoupload={_videoupload}
            _imageuploading={_imageuploading}
            _coverImage={_coverImage}
            handleFileChange={handleFileChange}
            selectedImages={selectedImages}
            selectedImages1={selectedImages1}
            handleFileChangeImage={handleFileChangeImage}
            address={address}
            setAddress={setAddress}
            setSelectedImages={setSelectedImages}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            _consition={_consition}
            setConsition={setConsition}
            _checked={_checked}
            setChecked={setChecked}
            handleClose={handleClose}
            CoverImageFunction={CoverImageFunction}
            setCoverImage={setCoverImage}
            handleChangeCheck={handleChangeCheck}
            _video_url={_video_url}
            _getstate_object={_getstate_object}
            setGetState_Object={setGetState_Object}
            setGetCity_Object={setGetCity_Object}
          />
        );
    }
  }
  async function _handleSubmit(values, actions) {
    if (isLastStep) {
      try {
        const apiResponse = await PropertyPostFunction(values, actions);

        if (apiResponse && apiResponse.success) {
          setActiveStep(activeStep + 1);
        } else {
          console.error("API call failed:", apiResponse.error);
          swal("error", `${apiResponse.error}`);
        }
      } catch (error) {
        console.error("Error in API call:", error);
      }
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  async function PropertyPostFunction(values, actions) {
    if (_coverImage != "") {
      try {
        setIsLoading(true);
        actions.setSubmitting(false);
        setActiveStep(activeStep + 1);
        const res = await PostApiFunction({
          endPoint: Apiconfigs?.createPropertyPost,
          data: {
            listedBy: values?.listed_name,
            bedroom: values?.bedrooms,
            bathroom: values?.bathrooms,
            superBuildupArea: values?.super_building,
            carpetArea: values?.carpet_area,
            totalFloors: values?.total_floors,
            floorNumber: values?.floors_no,
            projectName: values?.project_name,
            title: values?.add_title,
            description: values?.description,
            price: Number(values?.price?.replaceAll(",", "")),
            coverImage: _coverImage,
            video: _video_url?.mediaUrl,
            projectTypeId: auth?._getproprty_type,
            projectSubTypeId: auth?._getproject_sub_type,
            furnishingId: values?.furnishing,
            facingId: values?.facing,
            termAndConditions: _consition,
            featuredProperty: _checked,
            type: values?.typeProperty,
            image: imageUploadResponses,

            address: values?.location,
            location: {
              type: "Point",
              coordinates: [coordinates?.lat, coordinates?.lng],
            },
            localAreaName: values?.localArea,
            price_breakup: Number(values?.price_breakup?.replaceAll(",", "")),
            stateId: _getstate_object?._id,
            cityId: _getcity_object?._id,
          },
        });
        if (res) {
          setIsLoading(false);
          if (res?.responseCode == 200) {
            auth?.AllCategoryProduct();
            // auth?.CommercialAPI();
            // auth?.AgreecultureAPIAPI();
            setIsLoading(false);
            setPropertyForm(false);
            setSelectedImages([]);
            swal({
              icon: "success",
              title: "Your property has been post successfully!",

              content: {
                element: "span",
                attributes: {
                  innerHTML: "Congratulations your property post complete.",
                },
              },
              buttons: {
                confirm: "OK",
              },
            }).then((value) => {
              if (value) {
                router.push("/");
                // window.location.reload();
              }
            });
            // router.push("/");
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

        console.log(error);
      }
    } else {
      toast.error("Please upload property cover image.");
    }
  }
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }
  useEffect(() => {
    // ProjectType();
  }, []);

  return (
    <PropertyPostIndexStyle>
      {/* <MobilerMenu /> */}
      <Box className="MainBoxIndex">
        <Container className="conatinerBox">
          {/* <Box
            className="LogoBox"
            maxWidth={230}
            padding={"20px 0 0 0"}
            position={"relative"}
            style={{ cursor: "pointer", display: isMobile ? "none" : "block" }}
            marginTop={"0px"}
            onClick={() => router.push("/")}
          >
            <Logo />
          </Box> */}
          <Box height={isMobile ? "unset" : "85vh"} display={"flex"}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12} className="gridClass">
                <Box p={"0 0 0 20px"}>
                  <img
                    src={
                      isMobile
                        ? "/images/property-post/vector_propery_post_mobile.svg"
                        : "/images/property-post/vector_propery_post.svg"
                    }
                    width={"100%"}
                    className="vectorImg"
                  />
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Box className="stepperBox">
                    <StepperStyle>
                      <Stepper
                        activeStep={activeStep}
                        className={"stepper"}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: isMobile ? "row" : "column",
                          gap: isMobile ? "20px" : "30px",
                        }}
                      >
                        <Step
                          key={"Enter Your Property Details"}
                          style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: isMobile ? "0px" : "0px",
                          }}
                        >
                          {/* <StyledStepLabel> */}

                          <img
                            src="/images/property-post/step_one.svg"
                            width={isMobile ? "50" : "60"}
                            marginRight={isMobile ? "0px" : "0px"}
                          />
                          <Typography
                            className="h2-class"
                            display={isMobile ? "none" : "block"}
                          >
                            {"Enter Your Property Details"}
                          </Typography>

                          {/* </StyledStepLabel> */}
                        </Step>
                        <Step
                          key={"Enter Your Area Details"}
                          style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: isMobile ? "0px" : "0px",
                          }}
                        >
                          {/* <StyledStepLabel> */}

                          {activeStep >= 1 ? (
                            <img
                              src="/images/property-post/step_2 copy.svg"
                              width={isMobile ? "50" : "60"}
                              fill={"#badc54"}
                              style={{ marginLeft: "-11px" }}
                            />
                          ) : (
                            <img
                              src="/images/property-post/step_2.svg"
                              width={isMobile ? "50" : "60"}
                              fill={"#fff"}
                              style={{ marginLeft: "-11px" }}
                            />
                          )}
                          <Typography
                            className="h2-class1"
                            display={isMobile ? "none" : "block"}
                          >
                            {"Enter Your Area Details"}
                          </Typography>

                          {/* </StyledStepLabel> */}
                        </Step>
                        <Step
                          key={"Enter Location & Import Images"}
                          style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: isMobile ? "0px" : "0px",
                          }}
                        >
                          {/* <StyledStepLabel> */}
                          {activeStep >= 2 ? (
                            <img
                              src="/images/property-post/step_3 copy.svg"
                              width={isMobile ? "50" : "60"}
                              fill={"#badc54"}
                            />
                          ) : (
                            <img
                              src="/images/property-post/step_3.svg"
                              width={isMobile ? "50" : "60"}
                              fill={"#fff"}
                            />
                          )}

                          <Typography
                            className="h2-class2"
                            display={isMobile ? "none" : "block"}
                          >
                            {"Enter Location & Import Images"}
                          </Typography>

                          {/* </StyledStepLabel> */}
                        </Step>
                      </Stepper>
                    </StepperStyle>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className="PropertyBox">
                  <Typography variant="h3">List Your Property</Typography>
                  {/* <Box mt={2}>
                    <Typography variant="h5">Fill Basic Details</Typography>
                  </Box> */}

                  <Box>
                    <Formik
                      initialValues={initialValue}
                      validationSchema={currentValidationSchema}
                      onSubmit={_handleSubmit}
                    >
                      {({ isSubmitting }) => (
                        <Form id={formId}>
                          <Box className="Form_main_Box">
                            {_renderStepContent(activeStep)}
                            <DialogButtonStyle>
                              <Box
                                className={"buttons"}
                                display={"flex"}
                                justifyContent={"center"}
                                mt={4}
                              >
                                <Box
                                  className={"wrapper"}
                                  display={"flex"}
                                  justifyContent={"center"}
                                >
                                  <>
                                    <Button
                                      disabled={
                                        auth?._isloading || _imageuploading
                                      }
                                      onClick={() => {
                                        if (activeStep !== 0) {
                                          _handleBack();
                                        } else {
                                          router.push("/");
                                        }
                                      }}
                                      className={"button"}
                                      variant="contained"
                                      color="primary"
                                    >
                                      {activeStep !== 0 ? "Back" : "Back Home"}
                                    </Button>
                                  </>
                                </Box>
                                &nbsp;&nbsp;{" "}
                                <Box
                                  className={"wrapper"}
                                  display={"flex"}
                                  justifyContent={"center"}
                                >
                                  <Button
                                    style={{ background: "#a2d117" }}
                                    disabled={
                                      _isloading ||
                                      _videoupload ||
                                      _imageuploading
                                    }
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={"button"}
                                  >
                                    {isLastStep ? "Submit" : "Next"}
                                    {_isloading && (
                                      <>
                                        &nbsp;&nbsp;{" "}
                                        <CircularProgressComponent
                                          colorValue="#fff"
                                          size={24}
                                          className={"buttonProgress"}
                                        />
                                      </>
                                    )}
                                  </Button>
                                </Box>
                              </Box>
                            </DialogButtonStyle>
                          </Box>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </PropertyPostIndexStyle>
  );
};

export default PropertyPostIndex;
