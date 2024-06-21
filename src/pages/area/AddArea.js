import React, { useEffect, useState } from "react";
import {
  PostApiFunction,
  PutApiFunction,
  DeleteApiFunction,
  convertDateTime,
} from "../../utils";

import Apiconfigs from "../../ApiConfig/ApiConfig";
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
import CircularProgressComponent from "../../component/CircularProgressComponent";

const DialogButtonStyle = styled(Box)(({ theme }) => ({
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

const AddArea = ({
  handleClose,
  _getcountrylist,
  _image_upload,
  _isloading,
  AddMoreList,
}) => {
  const [_countrycode, setCountryCode] = useState("");
  console.log("_countrycode-->", _countrycode);
  const [_countrylist, setCountryList] = useState([]);
  const [_statename, setStateName] = useState("");
  const [_statelist, setStateList] = useState([]);
  const [address, setAddress] = useState("");
  const [_citylist, setCityList] = useState([]);

  const [coordinates, setCoordinates] = useState({
    lat: 27.1881,
    lng: 77.935,
  });
  const [_initialstate, setInitialState] = useState({
    countryName: "",
    stateName: "",
    cityName: "",
    Local_Area_Name: "",
    homeStatus: "",
    status: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    countryName: yep.string().required("country name is required."),
    stateName: yep.string().required("state name is required."),
    cityName: yep.string().required("city name is required."),
    Local_Area_Name: yep.string().required("local area name is required."),
    homeStatus: yep
      .string()
      .required("Please select dropdown show on home screen is required."),
    status: yep.string().required("status is required."),
  });

  const GetCountryList = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllCountry,
        data: {
          limit: "10",
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setCountryList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setCountryList([]);
        } else {
          setCountryList([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const GetStateList = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllState,
        data: {
          limit: "10",
          page: "1",
          countryCode: _countrycode,
        },
        // params: {
        //   stateId: _countrycode,
        // },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setStateList(res?.result);
        } else if (res?.responseCode == 404) {
          setStateList([]);
        } else {
          setStateList([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const GetCityList = async () => {
    try {
      console.log("hdsbbfdsjbfjds--->", _statename);

      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllCity,
        data: {
          limit: "10",
          countryCode: "IN",

          stateCode: _statename,
        },
        // params: {
        //   stateId: _statename,
        // },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setCityList(res?.result);
        } else if (res?.responseCode == 404) {
          setCityList([]);
        } else {
          setCityList([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCountryList();
  }, []);
  useEffect(() => {
    if (_countrycode) {
      GetStateList();
    }
  }, [_countrycode]);
  useEffect(() => {
    if (_statename != "0") {
      GetCityList();
    }
  }, [_statename]);
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
          AddMoreList(values)
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
            <Box justifyContent={"center"} mt={3} mb={5}>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Country Name
                      </InputLabel>
                      <Select
                        disabled={_image_upload || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Country"
                        name="countryName"
                        value={values?.countryName}
                        onChange={(e) => {
                          setCountryCode(e.target.value);
                          setFieldValue("countryName", e.target.value);
                        }}
                        onBlur={handleBlur}
                      >
                        {_countrylist &&
                          _countrylist?.map((data, index) => {
                            return (
                              <MenuItem value={data?._id} key={index}>
                                {data?.countryName}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <FormHelperText error>
                        {touched.countryName && errors.countryName}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        State Name
                      </InputLabel>
                      <Select
                        disabled={_image_upload || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select state"
                        name="stateName"
                        value={values?.stateName}
                        // onChange={handleChange}
                        onChange={(e) => {
                          setStateName(e.target.value);
                          setFieldValue("stateName", e.target.value);
                        }}
                        onBlur={handleBlur}
                      >
                        {_statelist &&
                          _statelist?.map((data, index) => {
                            return (
                              <MenuItem value={data?._id} key={index}>
                                {data?.stateName}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <FormHelperText error>
                        {touched.stateName && errors.stateName}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        City Name
                      </InputLabel>
                      <Select
                        disabled={_image_upload || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select state"
                        name="cityName"
                        value={values?.cityName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {_citylist &&
                          _citylist?.map((data, index) => {
                            return (
                              <MenuItem value={data?._id} key={index}>
                                {data?.cityName}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      <FormHelperText error>
                        {touched.cityName && errors.cityName}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      disabled={_image_upload || _isloading}
                      id="outlined-basic"
                      label="Local Area Name"
                      variant="outlined"
                      placeholder="Enter your local area name"
                      name="Local_Area_Name"
                      value={values?.Local_Area_Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.Local_Area_Name && errors.Local_Area_Name}
                    </FormHelperText>
                  </Box>
                  {/* <Box mt={2}>
                    <LocationDialog
                      address={address}
                      setAddress={setAddress}
                      coordinates={coordinates}
                      setCoordinates={setCoordinates}
                      type="Area"
                    />
                  </Box> */}
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        show on home page{" "}
                      </InputLabel>
                      <Select
                        disabled={_image_upload || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select home Status"
                        name="homeStatus"
                        value={values?.homeStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value={"YES"}>YES</MenuItem>
                        <MenuItem value={"NO"}>NO</MenuItem>
                      </Select>
                      <FormHelperText error>
                        {touched.homeStatus && errors.homeStatus}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Status
                      </InputLabel>
                      <Select
                        disabled={_image_upload || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Status"
                        name="status"
                        value={values?.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value={"ACTIVE"}>Active</MenuItem>
                        <MenuItem value={"BLOCKED"}>Deactive</MenuItem>
                      </Select>
                      <FormHelperText error>
                        {touched.status && errors.status}
                      </FormHelperText>
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
                    <Button
                      onClick={handleClose}
                      disabled={_image_upload || _isloading}
                    >
                      <span>CANCEL</span>
                    </Button>
                    <Button
                      disabled={_image_upload || _isloading}
                      type="submit"
                      style={{
                        background: "#A2D117",
                      }}
                    >
                      <span>Create Local Area</span>
                      {_isloading && (
                        <>
                          &nbsp;&nbsp;
                          <CircularProgressComponent colorValue="#fff" />
                        </>
                      )}
                    </Button>
                    {_image_upload && (
                      <Box>
                        &nbsp;&nbsp;
                        <CircularProgressComponent colorValue="#000" />
                      </Box>
                    )}
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

export default AddArea;
