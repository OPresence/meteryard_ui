import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, Formik } from "formik";
import * as yep from "yup";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
import CircularProgressCompoennt from "../../component/CircularProgressComponent";

const DialogButtonStyle = styled("Box")(({ theme }) => ({
  "& button": {
    padding: "10px 40px",
    background: "#444444",
    border: "1px solid #fff",
    color: "#fff",
    clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    "&:hover": {
      background: "#fff",
      color: "#444444",
      border: "1px solid #fff",
    },
  },
}));
const phoneInputStyles = {
  width: "100%",
  height: "54px",
};

const CreateAdmin = ({
  handleClose,
  ButtonName,
  ImageUpload,
  _isloading,
  AddMoreList,
  _departmentlist,
}) => {
  const [_countrycode, setCountryCode] = useState("");
  const [_initialstate, setInitialState] = useState({
    department: "",
    Name: "",
    email: "",
    password: "",
    phoneNo: "",
    status: "ACTIVE",
  });
  const formValidationSchemaDepartment = yep.object().shape({
    department: yep.string().required("Department name is required."),
    Name: yep.string().required("Name is required."),
    email: yep.string().required("Email is required."),
    password: yep.string().required("Password is required."),
    phoneNo: yep.string().required("Phone Number is required."),
  });
  return (
    <div>
      <Formik
        initialValues={_initialstate}
        enableReinitialize={true}
        initialStatus={{
          success: false,
          successMsg: "",
        }}
        validationSchema={formValidationSchemaDepartment}
        onSubmit={(values, { resetForm }) => {
          AddMoreList(values, _countrycode)
            .then(() => {
              setInitialState({
                department: "",
                Name: "",
                email: "",
                password: "",
                phoneNo: "",
                status: "ACTIVE",
              });
              resetForm();
            })
            .catch((error) => {
              setInitialState({
                department: "",
                Name: "",
                email: "",
                password: "",
                phoneNo: "",
                status: "ACTIVE",
              });
              resetForm();

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
            <Box justifyContent={"center"} mt={3} mb={5}>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Department
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        disabled={_isloading}
                        id="demo-simple-select"
                        label="Select Department"
                        name="department"
                        value={values?.department}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {_departmentlist &&
                          _departmentlist?.map((data, index) => {
                            return (
                              <MenuItem value={data?._id} key={index}>
                                {data?.departmentRole}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <FormHelperText error>
                        {touched.department && errors.department}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      disabled={_isloading}
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      placeholder="Enter your name"
                      name="Name"
                      value={values.Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.Name && errors.Name}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      disabled={_isloading}
                      variant="outlined"
                      placeholder="Enter your email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </Box>
                </Grid>{" "}
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Password"
                      disabled={_isloading}
                      variant="outlined"
                      placeholder="Enter your password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.password && errors.password}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl style={{ width: "100%" }}>
                      <PhoneInput
                        country={"in"}
                        name="phoneNo"
                        inputClass="phoneInputField"
                        buttonClass="phoneInputButton"
                        disabled={_isloading}
                        variant="outlined"
                        value={values.phoneNo}
                        error={Boolean(touched.phoneNo && errors.phoneNo)}
                        onBlur={handleBlur}
                        onChange={(phone, e) => {
                          setCountryCode(e.dialCode);
                          setFieldValue("phoneNo", phone);
                        }}
                        inputStyle={phoneInputStyles}
                      />
                      <FormHelperText error>
                        {touched.phoneNo && errors.phoneNo}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="status"
                        name="status"
                        value={values?.status}
                        onChange={handleChange}
                        disabled={_isloading}
                      >
                        <MenuItem value={"ACTIVE"}>Active</MenuItem>
                        <MenuItem value={"BLOCKED"}>Deactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={3}
                gap={"50px"}
              >
                <DialogButtonStyle>
                  <Box display={"flex"} gap={"20px"}>
                    <Button onClick={handleClose}>
                      <span>CANCEL</span>
                    </Button>
                    <Button
                      type="submit"
                      style={{
                        background: "#A2D117",
                      }}
                    >
                      <span>CREATE</span>
                      {_isloading && (
                        <>
                          &nbsp;&nbsp;
                          <CircularProgressCompoennt />
                        </>
                      )}
                    </Button>
                  </Box>
                </DialogButtonStyle>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateAdmin;
