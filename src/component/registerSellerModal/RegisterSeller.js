import React, { useState, useContext } from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  FormHelperText,
  InputAdornment,
  IconButton,
  Input,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

import PhoneInput from "react-phone-input-2";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckBoxComponent from "../CheckBoxComponent";
import { PostApiFunction } from "../../utils/index";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import CircularProgressCompoennt from "../CircularProgressComponent";
import { Form, Formik } from "formik";
import * as yep from "yup";
import { AuthContext } from "../../context/Auth";
const DialogStyleInput = styled("Box")({});

const PhoneINputStyle = styled("Box")(({ theme }) => ({
  "& .phoneInputBox": {
    "& input": {
      padding: "10.5px 40px !important",
    },
  },
}));
const RegisterSeller = ({
  handleClose,
  open,
  setOpen,
  setSignUpComplete,
  data,
  index,
}) => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const [_property_type, setProperty_type] = React.useState("");
  const [_property_category, setPropertyCategory] = React.useState("");
  const [checked_get, setChecked_Get] = React.useState("");
  const [_countrycode, setCountryCode] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isloading, setIsLoading] = useState(false);
  const phoneInputStyles = {
    width: "100%",
    height: "44px",
    background: "transparent",
    padding: "10.5px 40px !important",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    propertyType: "",
    propertyCategory: "",
    city: "",
    localArea: "",
    location: "",
    getAlert1: false,
    getAlert2: false,
  });

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
          userType: "SELLER",
        },
      });
      if (res) {
        console.log("fdfdfd--->", res);
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          setIsLoading(false);
          // auth.setEndtime(moment().add(2, "m").unix());

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
  return (
    <DialogStyleInput>
      <Formik
        initialValues={formInitialSchema}
        enableReinitialize={true}
        initialStatus={{
          success: false,
          successMsg: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { resetForm }) => {
          SignUp_Function(values)
            .then(() => {
              resetForm();
            })
            .catch((error) => {
              console.error("API call failed", error);
            });
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
                  <Box className="loginBox">
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
                            if (
                              !phone.startsWith("+91") &&
                              !phone.startsWith("91")
                            ) {
                              formattedPhone = "+91" + phone;
                            }
                            setCountryCode(e.dialCode);
                            setFieldValue("PhoneNumber", formattedPhone);
                            console.log("formattedPhone--->", formattedPhone);
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
                                onClick={() => setShowPassword(!showPassword)}
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
                      <Button
                        onClick={() => setOpen(false)}
                        className="singup"
                        fullWidth
                        style={{ background: "#757575" }}
                      >
                        Close &nbsp;
                      </Button>
                      <Button className="singup" type="submit" fullWidth>
                        Sign Up &nbsp;
                        {isloading && (
                          <CircularProgressCompoennt colorValue={"#fff"} />
                        )}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </DialogStyleInput>
  );
};
export default RegisterSeller;
