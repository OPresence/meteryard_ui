import { useEffect, useState } from "react";
import PropertyPost_s_1 from "./PropertyPost_s_1";
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
import checkoutFormModel from "./checkoutFormModel";
import validationSchema from "./validationSchema";
import { Formik, Form } from "formik";
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
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  console.log("windowSize----->", windowSize);
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
  const isLastStep = activeStep === steps.length - 1;
  const [_trucapthca, setTrueCaptcha] = useState(false);
  const [_savedata, setSaveData] = useState("");
  const [_isloading, setIsLoading] = useState(false);
  const [_projecttype, setProjectType] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
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
        console.log("bjdbbfs---->", res?.result?.docs);
        setProjectType(res?.result?.docs);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    ProjectType();
  }, []);
  function _renderStepContent(step) {
    console.log("stepfjndfnjd--->", step, formField);
    switch (step) {
      case 0:
        return (
          <PropertyPost_s_1
            formField={formField}
            _isloading={_isloading}
            _projecttype={_projecttype}
          />
        );
      case 1:
        return (
          <PropertyPost_s_1 formField={formField} _isloading={_isloading} />
        );
      default:
        return (
          <PropertyPost_s_1
            formField={formField}
            setTrueCaptcha={setTrueCaptcha}
            _isloading={_isloading}
          />
        );
    }
  }
  async function _submitForm(values, actions) {
    if (_trucapthca) {
      try {
        setIsLoading(true);
        actions.setSubmitting(false);
        setActiveStep(activeStep + 1);
        const res = await PostApiFunctionWipro({
          endPoint:
            "https://mob.aicofindia.com/UATMAWrapper/cpmaNewInsuranceController/cpmaGrsServiceCall?serviceName=%2Fgrv%2FcreateGrsWithoutMultipart&methodType=POST",
          data: {
            acBankIfscId: "",
          },
        });
        if (res) {
          setIsLoading(false);

          setSaveData(res?.data);
          if (res?.data?.code == 1) {
            swal({
              icon: "success",
              title: "Your form has been submitted successfully!",

              content: {
                element: "span",
                attributes: {
                  innerHTML:
                    "Your Grievance number is : <span id='grievanceNumber'>" +
                    res?.data?.data?.grievanceCd +
                    "</span>",
                },
              },
              buttons: {
                confirm: "OK",
              },
            }).then((value) => {
              if (value) {
                window.location.reload();
              }
            });
            setIsLoading(false);
          } else {
            swal({
              icon: "error",
              title: "Oops...",
              text: res?.data?.messageResponse,
              buttons: {
                confirm: "OK",
              },
            }).then((value) => {
              if (value) {
                window.location.reload();
              }
            });

            setIsLoading(false);
          }
        }
      } catch (error) {
        setIsLoading(false);

        console.log(error);
      }
    } else {
      alert("Please enter the captcha and verify.");
    }
  }

  async function _handleSubmit(values, actions) {
    if (isLastStep) {
      try {
        const apiResponse = await _submitForm(values, actions);

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
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <PropertyPostIndexStyle>
      <Box
        mt={"136px"}
        className="MainBox"
        // style={{ height: `${windowSize?.height}px` }}
      >
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
                <img src="/images/Group 8422.svg" width={"100%"} />
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
                                <Button
                                  disabled={_isloading}
                                  onClick={_handleBack}
                                  className={"button"}
                                  variant="contained"
                                  color="primary"
                                >
                                  Back
                                </Button>
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
                                    <CircularProgress
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
