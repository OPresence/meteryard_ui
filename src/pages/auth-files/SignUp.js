import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressCompoennt from "../../component/CircularProgressComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginStyle = styled("Box")(({ theme }) => ({
  "& .backgroundBox": {
    backgroundSize: "75%",
    backgroundPosition: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/images/Path 8365.svg")',
    "& input": {
      padding: "10.5px 14px !important",
    },
  },
  "& .loginBox": {
    padding: "0 35px",
    "& h2": {
      fontWeight: "600",
      color: "#6F6F6F",
    },
    "& h6": {
      color: "#6F6F6F",
      fontSize: "16px",
    },

    // "& .checkBox": {
    //   display: "flex",
    //   alignItems: "center",
    // },
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
  "& .loginBox1": {
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
  "& .TabButton": {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "0 0px 10px 0",
    "& button": {
      padding: "8px 40px",
      background: "#0099FF",
      color: "#fff",
    },
  },
}));
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formInitialSchema = {
  name: "",
  email: "",
  password: "",
  PhoneNumber: "",
};

const formValidationSchema = yep.object().shape({
  name: yep.string().required("Name is required."),
  email: yep.string().required("Email is required."),
  PhoneNumber: yep
    .string()
    .required("Phone Number is required.")
    .min(10, "too short")
    .max(10, "too long")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: yep
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const SignUp = ({ _selectScreen, setSelectScreen, setSignUpComplete }) => {
  const [isloading, setIsLoading] = useState(false);
  const [_isSignup, setIsSignUp] = useState(false);

  const SignUp_Function = async (values) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.userSignUp,
        data: {
          email: values?.email,
          password: values?.password,
          phoneNumber: values?.PhoneNumber,
          userType: "BUYER",
        },
      });
      if (res) {
        console.log("fdfdfd--->", res?.result);
        toast.success("SignUp successful!"); // Display success notification
        setSignUpComplete(res?.result);
      }
    } catch (error) {
      setIsLoading(false);

      toast.error("SignUp failed. Please try again."); // Display error notification
      console.log("error", error);
    }
  };
  return (
    <LoginStyle>
      <Box className="backgroundBox">
        <Container maxWidth>
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
              validationSchema={formValidationSchema}
              onSubmit={(values) => {
                SignUp_Function(values);
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
                      <Box maxWidth={500}>
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
                      <Box>
                        <Box display={"flex"} justifyContent={"center"} mt={-5}>
                          <Box className="TabButton">
                            <Button
                              className="singup"
                              style={
                                _selectScreen == "Sign Up"
                                  ? { background: "#0099FF", color: "#fff" }
                                  : {
                                      background: "#fff",
                                      color: "#000",
                                      border: "1px solid #0099FF",
                                    }
                              }
                              onClick={() => setSelectScreen("Sign Up")}
                            >
                              Sign Up
                            </Button>
                            &nbsp; &nbsp; &nbsp;
                            <Button
                              style={
                                _selectScreen == "Login"
                                  ? { background: "#0099FF", color: "#fff" }
                                  : {
                                      background: "#fff",
                                      color: "#000",
                                      border: "1px solid #0099FF",
                                    }
                              }
                              className="singin"
                              onClick={() => setSelectScreen("Login")}
                            >
                              Sign In
                            </Button>
                          </Box>
                        </Box>
                        <Box className="loginBox">
                          <Typography variant="h2">Please Sign Up</Typography>
                          <Box mt={3}>
                            <Typography variant="h6">
                              Enter Your Name
                            </Typography>
                            <FormControl fullWidth>
                              <TextField
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                id="outlined-basic"
                                fullWidth
                                variant="outlined"
                                placeholder="Enter Your Name"
                              />
                              <FormHelperText
                                style={{
                                  marginLeft: "0px",
                                  color: "red",
                                }}
                              >
                                {touched.name && errors.name}
                              </FormHelperText>
                            </FormControl>
                          </Box>

                          <Box mt={2}>
                            <Typography variant="h6">
                              Enter Your E-Mail
                            </Typography>
                            <FormControl fullWidth>
                              <TextField
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                id="outlined-basic"
                                fullWidth
                                variant="outlined"
                                placeholder="Examle11@gmail.com"
                                // className="emailText"
                              />
                              <FormHelperText
                                // className="emailText"
                                style={{
                                  marginLeft: "0px",
                                  color: "red",
                                }}
                              >
                                {touched.email && errors.email}
                              </FormHelperText>
                            </FormControl>
                          </Box>
                          <Box mt={2}>
                            <Typography variant="h6">
                              Enter Your Phone
                            </Typography>
                            <TextField
                              id="outlined-basic"
                              fullWidth
                              type="number"
                              variant="outlined"
                              name="PhoneNumber"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.PhoneNumber}
                              inputProps={{ maxLength: 10 }}
                              placeholder="000 000 0000"
                            />
                            <FormHelperText
                              error
                              style={{ marginLeft: "0px !important" }}
                            >
                              {touched.PhoneNumber && errors.PhoneNumber}
                            </FormHelperText>
                          </Box>

                          <Box mt={2}>
                            <Typography variant="h6">Password</Typography>
                            <TextField
                              id="outlined-basic"
                              fullWidth
                              variant="outlined"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              placeholder="********"
                            />
                            <FormHelperText
                              error
                              style={{ marginLeft: "0px !important" }}
                            >
                              {touched.password && errors.password}
                            </FormHelperText>
                          </Box>

                          <Box mt={3} className="loginBox1">
                            <Button className="singup" type="submit" fullWidth>
                              Sign Up &nbsp;
                              {isloading && (
                                <CircularProgressCompoennt
                                  colorValue={"#fff"}
                                />
                              )}
                            </Button>
                          </Box>
                          {/* <Box className="checkBox" mt={2}>
                            <Checkbox {...label} />
                            <span>Remember Me</span>
                          </Box> */}
                          <Box mt={2} className="socialIconBox">
                            <IconButton className="iconButton">
                              <FaFacebookF />
                            </IconButton>
                            <IconButton
                              className="iconButton"
                              style={{ border: "1px solid #CA0000" }}
                            >
                              <FaGoogle style={{ color: "#CA0000" }} />
                            </IconButton>
                            <IconButton className="iconButton">
                              <FaLinkedinIn />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Box>
    </LoginStyle>
  );
};

export default SignUp;
