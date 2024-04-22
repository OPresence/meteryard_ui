"use client";
import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
import { Form, Formik } from "formik";
import moment from "moment";
import * as yep from "yup";
import CircularProgressCompoennt from "../../component/CircularProgressComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/Auth";
const LoginStyle = styled("Box")(({ theme }) => ({
  "& .backgroundBox": {
    backgroundSize: "75%",
    backgroundPosition: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/images/Path 8365 (1).svg")',
    padding: "56px 0",
    "@media(max-width:615px)": {
      marginBottom: "80px",
    },
  },
  "& .imageBox": {
    "@media(max-width:615px)": {
      display: "none",
    },
  },
  "& .ForgotBox": {
    padding: "0 35px",
    "@media(max-width:615px)": {
      padding: "0 0px",
    },
    "& input": {
      padding: "10.5px 14px !important",
    },
    "& h2": {
      fontWeight: "600",
      color: "#6F6F6F",
    },
    "& h6": {
      color: "#6F6F6F",
      fontSize: "16px",
    },
    "& .buttonBox": {
      gap: "20px",
      display: "flex",
      marginTop: "20px",
      "& .singup": {
        background: "#0099FF",
        border: "1px solid #0099FF",
        color: "#fff",
        padding: "5px 20px",
      },
      "& .singin": {
        background: "#fff",
        border: "1px solid #0099FF",
        color: "#0099FF",
        padding: "0px 20px",
      },
    },
    "& .checkBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& a": {
        textDecoration: "none",
        "& span": {
          color: "#0099FF",
        },
      },
      "& span": {
        color: "#0099FF",
      },
    },
    "& .socialIconBox": {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      "& .iconButton": {
        borderRadius: "0",
        border: "1px solid #0099FF",
        padding: "3px 20px",
        "& svg": {
          fontSize: "16px",
          color: "#0099FF",
        },
      },
    },
  },
  "& .SendBox": {
    "& button": {
      background: "#A2D117",
      color: "#fff",
      padding: "10px",
    },
    "& span": {
      color: "red",
      cursor: "pointer",
    },
  },
}));
const ForgotPassword = ({
  handleCloseForgot,
  handleOpenOTP,
  setSaveForgot,
}) => {
  const formInitialSchema = {
    email: "",
  };
  const formValidationSchemaLogin = yep.object().shape({
    email: yep.string().required("Email is required."),
  });
  const Auth = useContext(AuthContext);
  const [isloading, setIsLoading] = useState(false);

  const Forgot_Function = async (values) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.forgotPassword,
        data: {
          email: values?.email,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          handleOpenOTP();
          handleCloseForgot();
          setIsLoading(false);
          setSaveForgot(res?.result);
          Auth.setEndtime(moment().add(1, "m").unix());
        } else if (res?.responseCode == 409) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        } else if (res?.responseCode == 500) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        } else {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Email is not registered."); // Display error notification
      console.log("error", error);
    }
  };
  return (
    <LoginStyle>
      <Box className="backgroundBox">
        <Container
          maxWidth
          //   style={{ background: "#eeeeee", paddingBottom: "50px" }}
        >
          <Box maxWidth={250} p={3}>
            <img src="/images/logo.png" width={"100%"} />
          </Box>

          <Box>
            <Formik
              initialValues={formInitialSchema}
              enableReinitialize={true}
              initialStatus={{
                success: false,
                successMsg: "",
              }}
              validationSchema={formValidationSchemaLogin}
              onSubmit={(values, { resetForm }) => {
                Forgot_Function(values);
                // .then(() => {
                //   resetForm();
                // })
                // .catch((error) => {
                //   console.error("API call failed", error);
                // });
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                touched,
                values,
                setFieldValue,
              }) => (
                <Form>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      lg={7}
                      md={7}
                      sm={12}
                      xs={12}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Box maxWidth={500} className="imageBox">
                        <img src="/images/Group 8422.svg" width={"100%"} />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      lg={5}
                      md={5}
                      sm={12}
                      xs={12}
                      style={{
                        padding: "25px",
                      }}
                    >
                      <Box className="ForgotBox">
                        <Typography variant="h2">Forgot Password?</Typography>
                        <Box mt={2}>
                          <Typography variant="h6">
                            Please enter your registered email here and we will
                            send OTP to reset your password.
                          </Typography>
                        </Box>
                        <Box mt={2}>
                          <Typography variant="h6">
                            Enter Your Email
                            <span className="span-astrick">*</span>
                          </Typography>
                          <TextField
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            fullWidth
                            variant="outlined"
                            placeholder="Examle11@gmail.com"
                            inputProps={{
                              maxLength: 160,
                            }}
                          />
                          <FormHelperText
                            error
                            style={{ marginLeft: "0px !important" }}
                          >
                            {touched.email && errors.email}
                          </FormHelperText>
                        </Box>

                        <Box
                          mt={3}
                          className="SendBox"
                          display={"flex"}
                          gap={"10px"}
                        >
                          <Button
                            className="singup"
                            fullWidth
                            // type="submit"
                            onClick={handleCloseForgot}
                          >
                            BACK &nbsp;
                          </Button>
                          <Button className="singup" fullWidth type="submit">
                            Send OTP &nbsp;
                            {isloading && (
                              <CircularProgressCompoennt colorValue={"#fff"} />
                            )}
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
            {/* <EnterOptScreen
              _forgot_open={_forgot_open}
              handleOpenOTP={handleOpenOTP}
              handleCloseOTP={handleCloseOTP}
            /> */}
          </Box>
        </Container>
      </Box>
    </LoginStyle>
  );
};

export default ForgotPassword;
