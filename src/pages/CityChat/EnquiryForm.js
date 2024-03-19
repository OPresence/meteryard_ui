import React, { useContext, useState } from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  FormHelperText,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CheckBoxComponent from "src/component/CheckBoxComponent.js";
import { AuthContext } from "../../context/Auth";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressComponent from "../../component/CircularProgressComponent";
import { toast } from "react-toastify";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
const DialogStyleComponent = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: "100%",
    position: "relative",
    overflow: "initial",
    borderTopLeftRadius: "50px !important",
    borderTopRightRadius: "55px !important",
  },
  "& .mainDialogBox": {
    "& .submit": {
      background: "#444444",
      color: "#fff",
      fontSize: "12px",
      padding: "10px 50px",
    },

    "& .checkBox": {
      "& h6": {
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    "& .profileBox": {
      border: "1px solid #B8B8B8",
      position: "absolute",
      borderRadius: "100px",
      width: 80,
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        color: "#B8B8B8",
      },
      "& span": {
        textAlign: "center",
        fontSize: "8px",
      },
    },
    "& .headingBox": {
      background: "#444444",
      borderTopLeftRadius: "50px", // padding: "10px",
      borderTopRightRadius: "50px", // padding: "10px",
      //   "& h6": {
      //     fontSize: "24px",
      //     fontWeight: "700",
      //     textAlign: "center",
      //     color: "#fff",
      //   },
      "& h6": {
        // marginTop: "5px",
        textAlign: "center",
        color: "#fff",
        fontSize: "18px",
        padding: "10px",
      },
    },
  },
  "& .enquiryButtonBox": {
    "& button": {
      clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    },
  },
});
const phoneInputStyles = {
  width: "100%",
  height: "54px",
};

const EnquiryForm = ({
  handleClose,
  open,
  setOpen,
  handleChangeCheckBox,
  data,
  index,
}) => {
  const router = useRouter();
  const [_property_type, setProperty_type] = React.useState("");
  const [_budget, setbudget] = React.useState("");
  const [_property_category, setPropertyCategory] = React.useState("");
  const [_getwhatsapp_check, setWhatsapp_CheckBox] = useState(false);
  const [_getemail_check, setEmail_CheckBox] = useState(false);
  const [_countrycode, setCountryCode] = useState("");
  const [_isloading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);
  const [_initialstate, setInitialState] = useState({
    fullname: "",
    email: "",
    mobile_Number: "",
    budget: "",
    project_Type: "",
    sub_project_Type: "",
    city: "",
    area: "",
    alert_whatsapp: "",
    alert_Email_message: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    fullname: yep.string().required("fullname name is required."),
    email: yep.string().required("email is required."),
    mobile_Number: yep.string().required("mobile number is required."),
    budget: yep.string().required("budget is required."),
    project_Type: yep.string().required("project type is required."),
    sub_project_Type: yep.string().required("sub project type is required."),
    city: yep.string().required("city name is required."),
    area: yep.string().required("area name is required."),
    // alert_whatsapp: yep.string().required("alert_whatsapp name is required."),
    // alert_Email_message: yep.string().required("alert_Email_message name is required."),
  });
  const EnwuiryFunction = async (value) => {
    if (_getwhatsapp_check && _getemail_check) {
      console.log("dnjnfkdkfndn--->", value);
      try {
        setIsLoading(true);
        const res = await PostApiFunction({
          endPoint: Apiconfigs.generateEnquiry,
          data: {
            fullName: value?.fullname,
            email: value?.email,
            mobileNumber: value?.mobile_Number,
            budget: value?.budget,
            message: "message",
            projectTypeId: value?.project_Type,
            projectSubTypeId: value?.sub_project_Type,
            getWhatsappEnquiry: _getwhatsapp_check,
            getAllertOnEnquiry: _getemail_check,
          },
        });
        if (res) {
          if (res?.responseCode == 200) {
            toast.success(res?.responseMessage);
            getLocalArea();
            setIsLoading(false);
            handleClose();
          } else if (res?.responseCode == 404) {
            setIsLoading(false);
            handleClose();
            toast.error(res?.responseMessage);
          } else if (res?.responseCode == 501) {
            setIsLoading(false);
            handleClose();
            toast.error(res?.responseMessage);
          } else {
            setIsLoading(false);
            handleClose();
            toast.error(res?.responseMessage);
          }
        }
      } catch (error) {
        setIsLoading(false);
        handleClose();
        console.log("error", error);
      }
    } else {
      if (!_getwhatsapp_check) {
        toast.error("Please click Get Alert On Whatsapp.");
      } else {
        toast.error("Get Alert On Message/Email.");
      }
    }
  };

  return (
    <DialogStyleComponent open={open} keepMounted onClose={handleClose}>
      <Box className="mainDialogBox">
        <DialogTitle style={{ padding: "0 0px" }}>
          <Box className="headingBox">
            <Typography variant="h6">Enquiry Form</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Formik
              initialValues={_initialstate}
              enableReinitialize={true}
              initialStatus={{
                success: false,
                successMsg: "",
              }}
              validationSchema={formValidationSchemaDepartment}
              onSubmit={(values) => {
                EnwuiryFunction(values);
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
                  <Box mt={5}>
                    <Grid container spacing={3}>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <TextField
                          fullWidth
                          placeholder="Your Name"
                          id="outlined-read-only-input"
                          label="Full Name"
                          disabled={_isloading}
                          name="fullname"
                          value={values?.fullname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.fullname && errors.fullname}
                        </FormHelperText>
                      </Grid>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <TextField
                          fullWidth
                          id="outlined-read-only-input"
                          placeholder="Your Adress"
                          label="Email Adress"
                          disabled={_isloading}
                          name="email"
                          value={values?.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.email && errors.email}
                        </FormHelperText>
                      </Grid>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <PhoneInput
                          country={"in"}
                          onlyCountries={["in"]}
                          name="mobile_Number"
                          inputClass="phoneInputField"
                          buttonClass="phoneInputButton"
                          variant="outlined"
                          value={values.mobile_Number}
                          disabled={_isloading}
                          error={Boolean(
                            touched.mobile_Number && errors.mobile_Number
                          )}
                          onBlur={handleBlur}
                          onChange={(phone, e) => {
                            setCountryCode(e.dialCode);
                            setFieldValue("mobile_Number", phone);
                          }}
                          inputStyle={phoneInputStyles}
                        />

                        <FormHelperText error>
                          {touched.mobile_Number && errors.mobile_Number}
                        </FormHelperText>
                      </Grid>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                            budget
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            fullWidth
                            label="budget"
                            disabled={_isloading}
                            name="budget"
                            value={values?.budget}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <MenuItem value="" disabled>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                            <MenuItem value={"VILLA"}>VILLA</MenuItem>
                            <MenuItem value={"PLOTS"}>PLOTS</MenuItem>
                          </Select>
                        </FormControl>
                        <FormHelperText error>
                          {touched.budget && errors.budget}
                        </FormHelperText>
                      </Grid>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                            Residential
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            fullWidth
                            label="Residential"
                            disabled={_isloading}
                            name="project_Type"
                            value={values?.project_Type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <MenuItem value="" disabled>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                            <MenuItem value={"VILLA"}>VILLA</MenuItem>
                            <MenuItem value={"PLOTS"}>PLOTS</MenuItem>
                          </Select>
                        </FormControl>
                        <FormHelperText error>
                          {touched.project_Type && errors.project_Type}
                        </FormHelperText>
                      </Grid>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                            property category
                          </InputLabel>
                          <Select
                            fullWidth
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="property category"
                            disabled={_isloading}
                            name="sub_project_Type"
                            value={values?.sub_project_Type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <MenuItem value="" disabled>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                            <MenuItem value={"VILLA"}>VILLA</MenuItem>
                            <MenuItem value={"PLOTS"}>PLOTS</MenuItem>
                          </Select>
                        </FormControl>
                        <FormHelperText error>
                          {touched.sub_project_Type && errors.sub_project_Type}
                        </FormHelperText>
                      </Grid>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <TextField
                          fullWidth
                          id="outlined-read-only-input"
                          placeholder="Enter city"
                          label="City"
                          disabled={_isloading}
                          name="city"
                          value={values?.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.city && errors.city}
                        </FormHelperText>
                      </Grid>
                      <Grid item={6} md={6} sm={6} xs={12}>
                        <TextField
                          fullWidth
                          placeholder="Enter location"
                          id="outlined-read-only-input"
                          label="local area"
                          disabled={_isloading}
                          name="area"
                          value={values?.area}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.area && errors.area}
                        </FormHelperText>
                      </Grid>
                    </Grid>
                    <Box display={"flex"} className="checkBox" mt={1}>
                      <Box display={"flex"} alignItems={"center"}>
                        <Typography variant="h6">
                          Get Alert On Whatsapp
                        </Typography>{" "}
                        <CheckBoxComponent
                          setChecked_Get={setWhatsapp_CheckBox}
                        />
                      </Box>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Box display={"flex"} alignItems={"center"}>
                        <Typography variant="h6">
                          Get Alert On Message/Email
                        </Typography>{" "}
                        <CheckBoxComponent setChecked_Get={setEmail_CheckBox} />
                      </Box>
                    </Box>
                    <Box mt={1} className="enquiryButtonBox">
                      <Button
                        disabled={_isloading}
                        className="submit"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        CLOSE
                      </Button>
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      <Button
                        type="submit"
                        disabled={_isloading}
                        className="submit"
                        style={{
                          background: "#9fcd17",
                        }}
                      >
                        SUBMIT{" "}
                        {_isloading && (
                          <>
                            {" "}
                            &nbsp; &nbsp;
                            <CircularProgressComponent />
                          </>
                        )}
                      </Button>
                    </Box>
                  </Box>
                </Form>
              )}
            </Formik>
          </DialogContentText>
        </DialogContent>
      </Box>
    </DialogStyleComponent>
  );
};
export default EnquiryForm;
