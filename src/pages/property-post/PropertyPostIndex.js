import { useEffect, useState } from "react";
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
  CircularProgress,
} from "@mui/material";
import styled from "@emotion/styled";
import checkoutFormModel from "./checkoutFormModel";
import validationSchema from "./validationSchema";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { PostApiFunction } from "../../utils";
import formInitialValues from "./formInitialValues";
import Apiconfigs from "../../ApiConfig/ApiConfig";
const PropertyPostIndexStyle = styled("Box")(({ theme }) => ({
  "& .MainBox": {
    height: "100%",
    display: "flex",
    alignItems: "center",

    "& h2": {
      fontSize: "14px",
      fontWeight: "600",
    },
  },
  "& .Form_main_Box": {
    marginBottom: "30px",
    paddingBottom: "30px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    borderRadius: "0 15px 15px 15px",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-1px",
      left: "-12px",
      height: "282px",
      border: "6px solid #b8db53",
      borderRadius: "0 0 10 76px",
      borderTopRightRadius: "0px",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "63px",
    },
    "&::after": {
      background: "#b8db53",
      content: '""',
      position: "absolute",
      top: "-153px",
      left: "129px",
      height: "282px",
      border: "6px solid #b8db53",
      borderRadius: "0 0 10 76px",
      borderTopRightRadius: "25px",
      borderTopLeftRadius: "0px",
      borderBottomRightRadius: "77px",
      borderBottomLeftRadius: "0px",
      WebkitTransform: "rotateZ(271deg)",
      MozTransform: "rotateZ(271deg)",
      MsTransform: "rotateZ(271deg)",
      transform: "rotateZ(270deg)",
      borderTopRightRadius: "90px",
    },
    "& .HeadingBox": {
      padding: "0 20px",
      "& h2": {
        textAlign: "center",
        color: "#444444",
        fontSize: "28px",
        fontWeight: "600",
        padding: "20px 0",
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
}));
const DialogButtonStyle = styled("Box")(({ theme }) => ({
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
const PropertyPostIndex = () => {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
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
  const steps = ["Property Details", "Area Details", "Images & Location"];
  const { formId, formField } = checkoutFormModel;
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const [selectedImages, setSelectedImages] = useState([]);
  const isLastStep = activeStep === steps.length - 1;
  const [imageUploadResponses, setImageUploadResponses] = useState([]);
  const [address, setAddress] = useState("");
  const [_trucapthca, setTrueCaptcha] = useState(false);
  const [selectedImages1, setSelectedImages1] = useState([]);
  const [_savedata, setSaveData] = useState("");
  const [_isloading, setIsLoading] = useState(false);
  const [_coverImage, setCoverImage] = useState("");
  const [_video_url, setVideoURL] = useState("");
  const [_consition, setConsition] = useState(false);
  const [_propertyform, setPropertyForm] = useState(false);
  const [_checked, setChecked] = useState(false);
  const [_get_type_name, setGet_Type_Name] = useState("");
  const [_getproject_sub_type, setGetProject_sub_Type] = useState("");
  const [_getproprty_type, setGetPropetyType] = useState("");
  const [_getsubtype, setSubTypeList] = useState("");

  const [_videoupload, setVideoUpload] = useState(false);
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
    setGetPropetyType(_id);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the video duration is less than or equal to 30 seconds
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = async function () {
        if (video.duration > 30) {
          alert("Please upload a video that is 30 seconds or shorter.");
          // Optionally, you can clear the file input
          fileInputRef.current.value = "";
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
  const handleFileChangeImage = (e) => {
    const files = e.target.files;
    const images = [];
    const selectedImagesInfo = [];
    for (let i = 0; i < Math.min(files.length, 8); i++) {
      const file = files[i];
      const url = URL.createObjectURL(files[i]);
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

    setSelectedImages1(images);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ProjectType = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs.listAllProjectType,
      });
      if (res) {
        setProjectType(res?.result?.docs);
      }
    } catch (error) {
      console.log("error", error);
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
  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <PropertyPost_s_1
            formField={formField}
            setTrueCaptcha={setTrueCaptcha}
            _isloading={_isloading}
            setGetPropetyType={setGetPropetyType}
            _getproprty_type={_getproprty_type}
            handleCheckboxChange={handleCheckboxChange}
            _getproject_sub_type={_getproject_sub_type}
            setGetProject_sub_Type={setGetProject_sub_Type}
          />
        );
      case 1:
        return (
          <PropertyPost_s_2 formField={formField} _isloading={_isloading} />
        );
      default:
        return (
          <PropertyPost_s_3
            formField={formField}
            _isloading={_isloading}
            _projecttype={_projecttype}
            _videoupload={_videoupload}
            _coverImage={_coverImage}
            handleFileChange={handleFileChange}
            selectedImages={selectedImages}
            selectedImages1={selectedImages1}
            handleFileChangeImage={handleFileChangeImage}
            address={address}
            setAddress={setAddress}
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
  async function PropertyPostFunction(values) {
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
          // toast.success(res?.responseMessage); // Display success notification
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
      setPropertyForm(false);

      console.log("error", error);
    }
  }
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }
  useEffect(() => {
    ProjectType();
  }, []);
  return (
    <PropertyPostIndexStyle>
      <Box mt={"136px"} className="MainBox">
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box maxWidth={500}>
                <img src="/images/Group 8363.svg" width={"100%"} />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box mt={5} mb={5}>
                <Stepper activeStep={activeStep} className={"stepper"}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>
                        <Typography variant="h2">{label}</Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              <Box>
                <Formik
                  initialValues={formInitialValues}
                  validationSchema={currentValidationSchema}
                  onSubmit={_handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form id={formId}>
                      <Box className="Form_main_Box">
                        {_renderStepContent(activeStep)}
                        {console.log("activeStepxcx---->", activeStep)}
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
                              {activeStep !== 0 && (
                                <>
                                  <Button
                                    disabled={_isloading}
                                    onClick={_handleBack}
                                    className={"button"}
                                    variant="contained"
                                    color="primary"
                                  >
                                    Back
                                  </Button>
                                </>
                              )}
                            </Box>
                            &nbsp;&nbsp;{" "}
                            <Box
                              className={"wrapper"}
                              display={"flex"}
                              justifyContent={"center"}
                            >
                              <Button
                                disabled={_isloading}
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
                                      color="#000"
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PropertyPostIndexStyle>
  );
};

export default PropertyPostIndex;
