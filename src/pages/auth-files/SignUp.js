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
  InputAdornment,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import moment from "moment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleProvider from "next-auth/providers/facebook";
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AuthContext } from "../../context/Auth";
const LoginStyle = styled(Box)(({ theme }) => ({
  "& .backgroundBox": {
    backgroundSize: "75%",
    backgroundPosition: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/images/Path 8365.svg")',
    "@media(max-width:615px)": {
      marginBottom: "80px",
    },
    "& input": {
      padding: "10.5px 14px !important",
    },
  },
  "& .imageBox": {
    "@media(max-width:615px)": {
      display: "none",
    },
  },
  "& .loginBox": {
    padding: "0 35px",
    "@media(max-width:615px)": {
      padding: "0 0px",
    },

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
    "@media(max-width:615px)": {
      marginTop: "20px",
    },
    "& button": {
      padding: "8px 40px",
      background: "#0099FF",
      color: "#fff",
      "@media(max-width:615px)": {
        padding: "8px 19px",
      },
    },
  },
}));
const PhoneINputStyle = styled(Box)(({ theme }) => ({
  "& .phoneInputBox": {
    "& input": {
      padding: "10.5px 40px !important",
    },
  },
}));

const formInitialSchema = {
  name: "",
  email: "",
  password: "",
  PhoneNumber: "",
};

const formValidationSchema = yep.object().shape({
  name: yep
    .string()
    .required("Name is required.")
    .min(2, "Please enter min 2 charector."),
  email: yep
    .string()
    .required("Email is required.")
    .matches(
      /^[^@]+@[^@.]+\.[^@.]+$/,
      "Please enter a valid email address with only one '@' and one '.'."
    ),
  PhoneNumber: yep.string().required("Phone number is required."),
  password: yep
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
    ),
});

const SignUp = ({
  _selectScreen,
  setSelectScreen,
  setSignUpComplete,
  SignUpDialog,
  handleClose,
}) => {
  const [isloading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [_isSignup, setIsSignUp] = useState(false);
  const [_countrycode, setCountryCode] = useState("");
  const [selectedValue, setSelectedValue] = useState("BUYER"); // Initial selected value
  const handleChangeType = (event) => {
    if (event.target.value == "SELLER") {
      SignUpDialog();
      handleClose();
    } else {
      setSelectedValue(event.target.value);
    }
  };
  const phoneInputStyles = {
    width: "100%",
    height: "44px",
    background: "transparent",
    padding: "10.5px 40px !important",
  };

  const handleNameKeyDown = (event) => {
    if (/[^a-zA-Z\s]/.test(event.key)) {
      event.preventDefault();
    }
  };
  const SignUp_Function = async (values) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.userSignUp,
        data: {
          name: values?.name,
          email: values?.email,
          password: values?.password,
          phoneNumber: values?.PhoneNumber,
          userType: selectedValue,
        },
      });
      if (res) {
        setSelectScreen("OTP");
        if (res?.responseCode == 200) {
          // toast.success("SignUp successful!"); // Display success notification
          toast.success(res?.responseMessage);
          setIsLoading(false);
          auth.setEndtime(moment().add(1, "m").unix());

          setSignUpComplete(res?.result);
        } else if (res?.responseCode == 409) {
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
        } else if (res?.responseCode == 500) {
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
        } else {
          toast.error(res?.responseMessage); // Display error notification
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoading(false);

      toast.error("SignUp failed. Please try again."); // Display error notification
      console.log("error", error);
    }
  };

  function facebookSignup() {
    const facebookAppId = "YOUR_FACEBOOK_APP_ID";
    const facebookRedirectUri = "http://localhost:3000/";

    const facebookAuthUrl = `https://www.facebook.com/v3.3/dialog/oauth?client_id=${facebookAppId}&redirect_uri=${facebookRedirectUri}&scope=email&response_type=code`;

    window.location.href = facebookAuthUrl;
  }
  function googleSignup() {
    const googleClientId = "YOUR_GOOGLE_CLIENT_ID";
    const googleRedirectUri = "http://localhost:3000/";

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&scope=profile email&response_type=code`;

    window.location.href = googleAuthUrl;
  }
  function linkedinSignup() {
    const linkedinClientId = "YOUR_LINKEDIN_CLIENT_ID";
    const linkedinRedirectUri = "http://localhost:3000/";
    const linkedinScope = "r_liteprofile r_emailaddress";

    const linkedinAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?client_id=${linkedinClientId}&redirect_uri=${linkedinRedirectUri}&scope=${linkedinScope}&response_type=code&state=${generateRandomState()}`;

    window.location.href = linkedinAuthUrl;
  }
  function generateRandomState() {
    return Math.random().toString(36).substr(2, 10);
  }
  function handleSocialRedirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Exchange authorization code for access token
      fetch("/api/social-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, provider: getProviderFromUrl() }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Use access token to sign up or log in user
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  // Get provider from URL
  function getProviderFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const provider = urlParams.get("provider");

    return provider;
  }

  // Add event listeners to social media buttons
  document.addEventListener("DOMContentLoaded", () => {
    const facebookButton = document.getElementById("facebook-button");
    const googleButton = document.getElementById("google-button");
    const LinkedInButton = document.getElementById("LinkedIn-button");

    facebookButton.addEventListener("click", facebookSignup);
    googleButton.addEventListener("click", googleSignup);
    LinkedInButton.addEventListener("click", linkedinSignup);

    // Handle redirect from social media providers
    handleSocialRedirect();
  });
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
                        <Box>
                          <FormControl>
                            <Box>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                className="custom-radio-group"
                                value={selectedValue}
                                onChange={handleChangeType}
                                style={{ display: "-webkit-box !important" }}
                              >
                                <Box>
                                  <FormControlLabel
                                    value="BUYER"
                                    disabled={isloading}
                                    control={<Radio />}
                                    label="BUYER"
                                  />
                                </Box>
                                <Box>
                                  <FormControlLabel
                                    disabled={isloading}
                                    value="SELLER"
                                    control={<Radio />}
                                    label="SELLER"
                                  />
                                </Box>

                                {/* <Box>
                                  <FormControlLabel
                                    value="GUEST"
                                    disabled={isloading}
                                    control={<Radio />}
                                    label="GUEST"
                                  />
                                </Box> */}
                              </RadioGroup>
                            </Box>
                          </FormControl>
                        </Box>
                        <Box className="loginBox">
                          <Typography variant="h2">Please Sign Up</Typography>
                          <Box mt={1}>
                            <Typography variant="h6">
                              Enter Your Name
                              <span className="span-astrick">*</span>
                            </Typography>
                            <FormControl fullWidth>
                              <TextField
                                name="name"
                                type="text"
                                onChange={handleChange}
                                // onChange={(e) =>
                                //   handleNameChange(e, setFieldValue)
                                // }
                                onBlur={handleBlur}
                                onKeyDown={handleNameKeyDown}
                                value={
                                  values.name?.charAt(0).toUpperCase() +
                                  values.name.slice(1)
                                }
                                id="outlined-basic"
                                fullWidth
                                variant="outlined"
                                placeholder="Enter your name"
                                disabled={isloading}
                                inputProps={{
                                  maxLength: 32,
                                }}
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

                          <Box mt={1}>
                            <Typography variant="h6">
                              Enter Your Email
                              <span className="span-astrick">*</span>
                            </Typography>
                            <FormControl fullWidth>
                              <TextField
                                name="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={isloading}
                                value={values.email}
                                id="outlined-basic"
                                fullWidth
                                variant="outlined"
                                placeholder="Examle11@gmail.com"
                                inputProps={{
                                  maxLength: 160,
                                }}
                              />
                              <FormHelperText
                                style={{
                                  marginLeft: "0px",
                                  color: "red",
                                }}
                              >
                                {touched.email && errors.email}
                              </FormHelperText>
                            </FormControl>
                          </Box>
                          <PhoneINputStyle>
                            <Box mt={1} className="phoneInputBox">
                              <Typography variant="h6">
                                Enter Your Phone
                                <span className="span-astrick">*</span>
                              </Typography>

                              <PhoneInput
                                country={"in"}
                                onlyCountries={["in"]}
                                name="PhoneNumber"
                                inputClass="phoneInputField"
                                disabled={isloading}
                                buttonClass="phoneInputButton"
                                variant="outlined"
                                value={values.PhoneNumber}
                                error={Boolean(
                                  touched.PhoneNumber && errors.PhoneNumber
                                )}
                                onBlur={handleBlur}
                                onChange={(phone, e) => {
                                  let formattedPhone = phone;
                                  // Check if the phone number doesn't start with "+91" or "91", then add it
                                  if (
                                    !phone.startsWith("+91") &&
                                    !phone.startsWith("91")
                                  ) {
                                    formattedPhone = "+91" + phone;
                                  }
                                  setCountryCode(e.dialCode);
                                  setFieldValue("PhoneNumber", formattedPhone);
                                  console.log(
                                    "formattedPhone--->",
                                    formattedPhone
                                  );
                                }}
                                inputStyle={phoneInputStyles}
                              />
                              <FormHelperText error>
                                {touched.PhoneNumber && errors.PhoneNumber}
                              </FormHelperText>
                            </Box>
                          </PhoneINputStyle>

                          <Box mt={1}>
                            <Typography variant="h6">
                              Password
                              <span className="span-astrick">*</span>
                            </Typography>
                            <TextField
                              disabled={isloading}
                              id="outlined-basic"
                              fullWidth
                              variant="outlined"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              placeholder="********"
                              inputProps={{
                                maxLength: 16,
                              }}
                              type={showPassword ? "text" : "password"}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                      edge="end"
                                    >
                                      {showPassword ? (
                                        <Visibility
                                          style={{
                                            fontSize: "18px",
                                            color: "#A2D117",
                                          }}
                                        />
                                      ) : (
                                        <VisibilityOff
                                          style={{
                                            fontSize: "18px",
                                            color: "#A2D117",
                                          }}
                                        />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
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
                          {/* <Box className="checkBox" mt={1}>
                            <Checkbox {...label} />
                            <span>Remember Me</span>
                          </Box> */}
                          <Box mt={1} className="socialIconBox">
                            <IconButton
                              className="iconButton"
                              onClick={facebookSignup}
                            >
                              <FaFacebookF />
                            </IconButton>
                            <IconButton
                              className="iconButton"
                              style={{ border: "1px solid #CA0000" }}
                              onClick={googleSignup}
                            >
                              <FaGoogle style={{ color: "#CA0000" }} />
                            </IconButton>
                            <IconButton
                              className="iconButton"
                              onClick={linkedinSignup}
                            >
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
