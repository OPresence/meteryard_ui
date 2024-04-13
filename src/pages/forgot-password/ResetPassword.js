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
  InputAdornment,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
const DialogStyleComponent = styled("Box")(({ theme }) => ({}));
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EnterOptScreen from "../verify-otp/VerifyOTP";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressCompoennt from "../../component/CircularProgressComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/Auth";
const CustomizedDialogContent = styled(DialogContent)({
  borderRadius: "8px",
  padding: "0",
});

const ResetPasswordStyle = styled("Box")(({ theme }) => ({
  "& .backgroundBox": {
    backgroundSize: "75%",
    backgroundPosition: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/images/Path 8365 (1).svg")',
    padding: "50px 0",

    "@media(max-width:615px)": {
      marginBottom: "80px",
    },
  },
  "& .loginBox": {
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

  "& .TabButton": {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "0 0px 10px 0",
    "& button": {
      padding: "8px 40px",
      background: "#0099FF",
      color: "#fff",
      width: "35%",
      "@media(max-width:615px)": {
        padding: "8px 19px",
      },
    },
  },
}));

const ButtonStyle = styled("Box")(({ theme }) => ({
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
}));

const ResetPassword = ({
  _openReset,
  _saveForgot,
  handleCloseReset,
  handleCloseForgot,
  handleCloseOTP,
  handleOpenOTP,
}) => {
  console.log("_saveForgot000--->", _saveForgot);
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [_saveForgot, setSaveForgot] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formInitialSchema = {
    password: "",
    confirmPassword: "",
  };

  const formValidationSchema = yep.object({
    password: yep
      .string()
      .trim()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain a uppercase letter, a number & a special character."
      )
      .required("Password is required.")

      .max(16, "You can enter only 16 characters."),
    confirmPassword: yep
      .string()
      .required("Confirm password is required.")
      .oneOf(
        [yep.ref("password"), null],
        "Confirm Password should match with New Password."
      ),
  });

  const Auth = useContext(AuthContext);
  const [isloading, setIsLoading] = useState(false);

  const Reset_Function = async (values) => {
    let data_Login = {
      password: values.password,
      email: _saveForgot?.email,
    };
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.resetPassword,
        data: data_Login,
      });
      if (res) {
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          setIsLoading(false);
          handleCloseReset();
          handleCloseForgot();
          handleCloseOTP();
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
      toast.error(error?.responseMessage);

      console.log("error", error);
    }
  };

  return (
    <Dialog
      open={_openReset}
      keepMounted
      onClose={handleCloseReset}
      fullWidth
      maxWidth="lg"
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: "1080px",
        },
      }}
    >
      <CustomizedDialogContent>
        <ResetPasswordStyle>
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
                  onSubmit={(values, { resetForm }) => {
                    Reset_Function(values);
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
                            <Box className="loginBox">
                              <Typography variant="h2">
                                Reset Password
                              </Typography>
                              <Box mt={2} textAlign={"center"}>
                                <Typography variant="h6">
                                  Please enter password and confirm password to
                                  reset your password
                                </Typography>
                              </Box>

                              <Box mt={2}>
                                <Grid item>
                                  <Box mb={1}>
                                    <Typography variant="body2">
                                      New Password
                                    </Typography>
                                  </Box>
                                  <TextField
                                    fullWidth
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    variant="outlined"
                                    name="password"
                                    placeholder="Enter Your New Password"
                                    value={values.password}
                                    inputProps={{ maxLength: "16" }}
                                    error={Boolean(
                                      touched.password && errors.password
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <IconButton
                                            style={{ color: "#BCBCBC" }}
                                            onClick={() =>
                                              setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                          >
                                            <Box>
                                              {showPassword ? (
                                                <Visibility />
                                              ) : (
                                                <VisibilityOff />
                                              )}
                                            </Box>
                                          </IconButton>
                                        </InputAdornment>
                                      ),
                                    }}
                                    disabled={isloading}
                                  />
                                  <FormHelperText error>
                                    {touched.password && errors.password}
                                  </FormHelperText>
                                </Grid>
                                <Grid item>
                                  <Box mt={2} mb={1}>
                                    <Typography variant="body2">
                                      Confirm Password
                                    </Typography>
                                  </Box>
                                  <TextField
                                    fullWidth
                                    type={
                                      showConfirmPassword ? "text" : "password"
                                    }
                                    id="password"
                                    variant="outlined"
                                    placeholder="Confirm New Password"
                                    name="confirmPassword"
                                    error={Boolean(
                                      touched.confirmPassword &&
                                        errors.confirmPassword
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <IconButton
                                            style={{ color: "#BCBCBC" }}
                                            onClick={() =>
                                              setShowConfirmPassword(
                                                !showConfirmPassword
                                              )
                                            }
                                            edge="end"
                                          >
                                            <Box>
                                              {showConfirmPassword ? (
                                                <Visibility />
                                              ) : (
                                                <VisibilityOff />
                                              )}
                                            </Box>
                                          </IconButton>
                                        </InputAdornment>
                                      ),
                                    }}
                                    disabled={isloading}
                                  />
                                  <FormHelperText error>
                                    {touched.confirmPassword &&
                                      errors.confirmPassword}
                                  </FormHelperText>
                                </Grid>
                              </Box>
                              <ButtonStyle>
                                <Box
                                  mt={3}
                                  className="loginBox1"
                                  display={"flex"}
                                  gap={5}
                                >
                                  <Button
                                    className="singup"
                                    fullWidth
                                    onClick={() => {
                                      handleCloseReset();
                                      handleOpenOTP();
                                    }}
                                  >
                                    BACK
                                  </Button>
                                  <Button
                                    className="singup"
                                    fullWidth
                                    type="submit"
                                  >
                                    Reset Password
                                    {isloading && (
                                      <CircularProgressCompoennt
                                        colorValue={"#fff"}
                                      />
                                    )}
                                  </Button>
                                </Box>
                              </ButtonStyle>
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
        </ResetPasswordStyle>
      </CustomizedDialogContent>
    </Dialog>
  );
};

export default ResetPassword;
