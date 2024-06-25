import React, { useState, useContext, useRef } from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  FormHelperText,
  InputAdornment,
  IconButton,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import CheckBoxComponent from "../CheckBoxComponent";
import { PostApiFunction } from "../../utils/index";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import CircularProgressCompoennt from "../CircularProgressComponent";
import { Form, Formik } from "formik";
import * as yep from "yup";
import { AuthContext } from "../../context/Auth";
const DialogStyleInput = styled(Box)({
  "& .loginBox": {
    padding: "0 60px",
    maxHeight: "410px",
    overflowY: "scroll",
    height: "100%",
    "@media(max-width:615px)": {
      padding: "0 0px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
    "& h4": {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "16.94px",
      textAlign: "left",
      color: "#191919 !important",
    },
    "& h5": {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "19.36px",
      textAlign: "left",
      background: "#FFFFFF",
    },

    "& .labelstyle": {
      gap: "0px",
      borderRadius: "12px",
      border: "1px solid #000000",
      opacity: "0px",
      display: "inline-flex",
      justifyContent: "space-between",
      padding: "11px 0 11px 10px",
      alignItems: "center",
      position: "relative",
      "& .labelStyle": {
        width: "128px",
        height: "42px",
        position: "absolute",
        right: "0",
        borderRadius: "0px 11px 11px 0px",
        border: "1px solid #444444",
        opacity: "0px",
        background: "#444444",
        color: "#fff",
      },
    },

    "& input": {
      padding: "8px 14px !important",

      gap: "0px",
      borderRadius: "12px",
      fontSize: "16px",
      "&::placeholder": {
        fontSize: "16px",
      },
      "&::active": {
        border: "1px solid red",
        borderColor: "red",
      },
    },
    "& h6": {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "19.36px",
      textAlign: "left",
      marginBottom: "10px",
    },
  },
});
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    borderRadius: "12px",
    border: "1px solid #000",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    display: "none !important",
    border: "none !important",
  },
}));
const PhoneINputStyle = styled(Box)(({ theme }) => ({
  "& .phoneInputBox": {
    "& input": {
      padding: "0px 0px 0 5px !important",
      borderRadius: "12px",
      border: "1px solid #000",
    },
    "& .react-tel-input .flag-dropdown": {
      borderRadius: "50px",
      display: "none",
    },
  },
}));
const RegisterSeller = ({
  // isloading,
  open,
  setOpen,
  setSignUpComplete,
  data,
  setSelectScreen,
}) => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const [_image_type, setImage_type] = React.useState("");
  const [_property_category, setPropertyCategory] = React.useState("");
  const [checked_get, setChecked_Get] = React.useState("");
  const [_countrycode, setCountryCode] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [_getwhatsapp_check, setWhatsapp_CheckBox] = useState(false);
  const [_getemail_check, setEmail_CheckBox] = useState(false);
  const [_image_upload, setImageUpload] = useState(false);
  const fileInputRef = useRef(null);

  const phoneInputStyles = {
    width: "100%",
    height: "44px",
    background: "transparent",
    padding: "10.5px 45px !important",
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const EnquirtCheck = (event) => {
    if (!_getwhatsapp_check) {
      setWhatsapp_CheckBox(true);
    } else {
      setWhatsapp_CheckBox(false);
    }
  };
  const EventCheck = (event) => {
    if (!_getemail_check) {
      setEmail_CheckBox(true);
    } else {
      setEmail_CheckBox(false);
    }
  };
  const formInitialSchema = {
    name: "",
    email: "",
    password: "",
    PhoneNumber: "",
    image: "",
    stateName: "",
    cityName: "",
    Location: "",
    alertEvent: "",
    alertEnquiry: "",
  };

  const formValidationSchema = yep.object().shape({
    name: yep
      .string()
      .required("Name is required.")
      .min(2, "Please enter min 2 charector."),
    email: yep
      .string()
      .required("Email is required.")
      .matches(/^[^@]+@[^@.]+\.[^@.]+$/, "Please enter a valid email address"),
    PhoneNumber: yep.string().required("Phone number is required."),
    stateName: yep.string().required("State is required."),
    cityName: yep.string().required("City is required."),
    Location: yep
      .string()
      .required("Location is required.")
      .min(2, "Please enter min 2 charector.")
      .max(360, "Please enter min 2 charector."),
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
  const ImageUpload = async (imageValue, type) => {
    try {
      const formdata = new FormData();
      formdata.append("uploaded_file", imageValue);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.uploadImage,
        data: formdata,
      });
      if (res) {
        toast.success(res?.responseMessage);
        setImageUpload(res?.result[0]?.mediaUrl);
      }
    } catch (error) {
      throw error;
    }
  };
  const SignUp_Function = async (values) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.userSignUp,
        data: {
          profilePicture: _image_upload,
          name: values?.name,
          email: values?.email,
          password: values?.password,
          phoneNumber: values?.PhoneNumber,
          stateName: values?.stateName,
          cityName: values?.cityName,
          Location: values?.Location,
          alertEvent: _getwhatsapp_check,
          alertEnquiry: _getemail_check,
          userType: "SELLER",
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setSelectScreen("OTP");

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
          SignUp_Function(values);
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
            <Box className="formBox">
              <Box className="loginBox">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box>
                      <Typography variant="h6">
                        Upload Profile Picture
                        <span className="span-astrick">*</span>
                      </Typography>
                      <FormControl fullWidth style={{ borderRadius: "15px" }}>
                        <label className="labelstyle">
                          <Typography variant="h5">
                            {_image_type === ""
                              ? "Upload Picture"
                              : _image_type?.name}
                          </Typography>
                          <Box textAlign={"center"}>
                            <input
                              ref={fileInputRef}
                              onChange={(e) => {
                                ImageUpload(e.target.files[0]);
                                setFieldValue("imageValue", e.target.value);
                                setImage_type(e.target.files[0]);
                              }}
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                            />
                          </Box>
                          <Button
                            className="labelStyle"
                            onClick={handleButtonClick}
                          >
                            Upload
                          </Button>
                        </label>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">
                        Name
                        <span className="span-astrick">*</span>
                      </Typography>
                      <FormControl fullWidth style={{ borderRadius: "15px" }}>
                        <CustomTextField
                          name="name"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyDown={handleNameKeyDown}
                          value={
                            values.name?.charAt(0).toUpperCase() +
                            values.name.slice(1)
                          }
                          fullWidth
                          placeholder="Your name"
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
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">
                        Email
                        <span className="span-astrick">*</span>
                      </Typography>
                      <FormControl fullWidth>
                        <CustomTextField
                          name="email"
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isloading}
                          value={values.email}
                          id="outlined-basic"
                          fullWidth
                          variant="outlined"
                          placeholder="Enter your email"
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
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <PhoneINputStyle>
                      <Box className="phoneInputBox">
                        <Typography variant="h6">
                          Whatsapp Number
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
                          placeholder="+91 9999999999"
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
                          }}
                          inputStyle={phoneInputStyles}
                          inputProps={{
                            placeholder: "+91 9999999999",
                          }}
                        />
                        <FormHelperText error>
                          {touched.PhoneNumber && errors.PhoneNumber}
                        </FormHelperText>
                      </Box>
                    </PhoneINputStyle>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box width={"100%"}>
                      <Typography variant="h6">
                        State
                        <span className="span-astrick">*</span>
                      </Typography>

                      <Select
                        sx={{
                          height: "45px",
                          borderRadius: "12px",
                          border: "1px solid #000",
                          padding: "0px 0px 0 5px !important",
                          borderRadius: "12px",
                          border: "1px solid #000",
                          fontSize: "18px !important",
                        }}
                        fullWidth
                        name="stateName"
                        onChange={(e) => {
                          auth?.setGetCityValue(e.target.value);
                          setFieldValue("stateName", e.target.value);
                        }}
                        // onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.stateName}
                      >
                        {auth?.statesHome &&
                          auth?.statesHome?.map((data, index) => {
                            return (
                              <MenuItem
                                key={index}
                                value={data?.stateCode}
                                sx={{
                                  fontSize: "18px !important",
                                }}
                              >
                                {data?.stateName}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <FormHelperText
                        error
                        style={{ marginLeft: "0px !important" }}
                      >
                        {touched.stateName && errors.stateName}
                      </FormHelperText>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box width={"100%"}>
                      <Typography variant="h6">
                        City
                        <span className="span-astrick">*</span>
                      </Typography>

                      <Select
                        sx={{
                          height: "45px",
                          borderRadius: "12px",
                          border: "1px solid #000",
                          padding: "0px 0px 0 5px !important",
                          borderRadius: "12px",
                          border: "1px solid #000",
                          fontSize: "18px",
                        }}
                        fullWidth
                        name="cityName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.cityName}
                      >
                        {auth?._citylist &&
                          auth?._citylist?.map((data, index) => {
                            return (
                              <MenuItem
                                key={index}
                                value={data?._id}
                                sx={{
                                  fontSize: "18px !important",
                                }}
                              >
                                {data?.cityName}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <FormHelperText
                        error
                        style={{ marginLeft: "0px !important" }}
                      >
                        {touched.cityName && errors.cityName}
                      </FormHelperText>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">
                        Password
                        <span className="span-astrick">*</span>
                      </Typography>
                      <CustomTextField
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
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box>
                      <Typography variant="h6">
                        Location
                        <span className="span-astrick">*</span>
                      </Typography>
                      <FormControl fullWidth style={{ borderRadius: "15px" }}>
                        <CustomTextField
                          name="Location"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyDown={handleNameKeyDown}
                          value={values.Location}
                          fullWidth
                          placeholder="Enter Your Location"
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
                          {touched.Location && errors.Location}
                        </FormHelperText>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Box display={"flex"} className="checkBox" mt={2}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography variant="h4" style={{ marginBottom: "0px " }}>
                      Get Alert On Enquiry
                    </Typography>{" "}
                    &nbsp;&nbsp;
                    <Checkbox
                      onChange={EnquirtCheck}
                      sx={{ padding: "0px" }}
                      checked={_getwhatsapp_check}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </Box>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography variant="h4" style={{ marginBottom: "0px " }}>
                      Get Alert On Events
                    </Typography>{" "}
                    &nbsp;&nbsp;
                    <Checkbox
                      onChange={EventCheck}
                      checked={_getemail_check}
                      sx={{ padding: "0px" }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </Box>
                </Box>

                <Box mt={4} className="loginBox1">
                  <Button className="singup" type="submit" disabled={isloading}>
                    Submit &nbsp;
                    {isloading && (
                      <CircularProgressCompoennt colorValue={"#fff"} />
                    )}
                  </Button>
                  <Button
                    disabled={isloading}
                    onClick={() => setOpen(false)}
                    // className="singup"
                    style={{
                      background: "#757575",
                      background: "none",
                      border: "3px solid #BADC54",
                      color: "#BADC54",
                    }}
                  >
                    Close &nbsp;
                  </Button>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </DialogStyleInput>
  );
};
export default RegisterSeller;
