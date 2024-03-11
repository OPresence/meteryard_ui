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
  IconButton,
  FormControl,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
import { Form, Formik } from "formik";
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
  },
  // "& .checkBox": {
  //   display: "flex",
  //   alignItems: "center",
  // },
  "& .loginBox": {
    padding: "0 35px",
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
const Login = ({ _selectScreen, setSelectScreen, setOpen }) => {
  const formInitialSchema = {
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  };
  const formValidationSchemaLogin = yep.object().shape({
    email: yep.string().required("Email is required."),

    password: yep
      .string()
      .required("Password is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const Auth = useContext(AuthContext);
  console.log("Authdfdf--->", Auth);
  const [isloading, setIsLoading] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  function rememberMe() {
    if (!isRememberMe) {
      setIsRememberMe(true);
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      window.localStorage.setItem("email", email?.value);
      window.localStorage.setItem("password", password?.value);
    } else {
      setIsRememberMe(false);
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("password");
    }
  }

  const Login_Function = async (values) => {
    let data_Login = {
      email: values?.email,
      password: values?.password,
    };
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.login,
        data: data_Login,
      });
      if (res) {
        console.log("njkdnsjfds---->", res);
        if (res?.responseCode == 200) {
          sessionStorage.setItem("token", res?.result?.token);
          toast.success(res?.responseMessage);

          setOpen(false);
          setIsLoading(false);
          setSelectScreen("Login");
          Auth.setAccessToken(res?.result?.token);
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
              validationSchema={formValidationSchemaLogin}
              onSubmit={(values, { resetForm }) => {
                Login_Function(values)
                  .then(() => {
                    resetForm();
                  })
                  .catch((error) => {
                    console.error("API call failed", error);
                  });
              }}
              // onSubmit={(values) => {
              //   Login_Function(values);
              // }}
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
                          <Typography variant="h2">Please Login</Typography>

                          <Box mt={2}>
                            <Typography variant="h6">
                              Enter Your E-Mail
                            </Typography>
                            {/* <FormControl fullWidth> */}
                            <TextField
                              name="email"
                              id="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              fullWidth
                              variant="outlined"
                              placeholder="Examle11@gmail.com"
                            />
                            <FormHelperText
                              error
                              style={{ marginLeft: "0px !important" }}
                            >
                              {touched.email && errors.email}
                            </FormHelperText>
                            {/* </FormControl> */}
                          </Box>

                          <Box mt={2}>
                            <Typography variant="h6">Password</Typography>
                            <TextField
                              fullWidth
                              id="password"
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
                            <Button className="singup" fullWidth type="submit">
                              Sign In &nbsp;
                              {isloading && (
                                <CircularProgressCompoennt
                                  colorValue={"#fff"}
                                />
                              )}
                            </Button>
                            <Box className="checkBox" mt={2}>
                              <Checkbox
                                checked={isRememberMe}
                                // onClick={() => setIsRememberMe(isRememberMe)}
                                onClick={rememberMe}
                              />
                              <span>Remember Me</span>
                            </Box>
                            <Box mt={2}>
                              <Typography variant="h6">
                                Don't Have An Account?{" "}
                                <span
                                  onClick={() => setSelectScreen("Sign Up")}
                                >
                                  Register Here
                                </span>
                              </Typography>
                            </Box>
                          </Box>

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

export default Login;
