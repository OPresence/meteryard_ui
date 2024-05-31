// import React from 'react'

// const ViewArea = () => {
//   return (
//     <div>ViewArea</div>
//   )
// }

// export default ViewArea
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

const ViewArea = ({
  handleClose,
  _viewData,
  _image_upload,
  _isloading,
  AddMoreList,
  type,
}) => {
  const [_countrycode, setCountryCode] = useState("");
  const [_countrylist, setCountryList] = useState([]);
  const [_statelist, setStateList] = useState([]);
  const [_citylist, setCityList] = useState([]);
  const [_statename, setStateName] = useState("");

  const [_initialstate, setInitialState] = useState({
    countryName: "",
    stateName: "",
    cityName: "",
    homeStatus: "",
    Local_Area_Name: "",
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
          countryId: _countrycode,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setStateList(res?.result?.docs);
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
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllCity,
        data: {
          limit: "10",
          stateId: _statename,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setCityList(res?.result?.docs);
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
    if (_statename) {
      GetCityList();
    }
  }, [_statename]);
  useEffect(() => {
    setCountryCode(_viewData?.countryId?._id);
    setStateName(_viewData?.stateId?._id);
    setInitialState({
      countryName: _viewData?.countryId?._id,
      stateName: _viewData?.stateId?._id,
      cityName: _viewData?.cityId?._id,
      Local_Area_Name: _viewData?.localAreaName,
      homeStatus: _viewData?.homeStatus,
      status: _viewData?.status,
    });
  }, []);
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
            <Box justifyContent={"center"} mt={3}>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Country Name
                      </InputLabel>
                      <Select
                        disabled={type == "VIEW" ? true : false || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label=""
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
                        disabled={type == "VIEW" ? true : false || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label=""
                        name="stateName"
                        value={values?.stateName}
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
                        disabled={type == "VIEW" ? true : false || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label=""
                        name="cityName"
                        value={values?.cityName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {console.log("_citylist0---->", _citylist)}
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
                      disabled={type == "VIEW" ? true : false || _isloading}
                      // disabled={_image_upload || _isloading}
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
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        show on home page
                      </InputLabel>
                      <Select
                        disabled={type == "VIEW" ? true : false || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label=""
                        name="homeStatus"
                        value={values?.homeStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value={true}>YES</MenuItem>
                        <MenuItem value={false}>NO</MenuItem>
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
                        disabled={type == "VIEW" ? true : false || _isloading}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label=""
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
                    <Button onClick={handleClose} disabled={_isloading}>
                      <span>CANCEL</span>
                    </Button>
                    {type != "VIEW" && (
                      <>
                        <Button
                          disabled={type == "VIEW" ? true : false || _isloading}
                          type="submit"
                          style={{
                            background: "#A2D117",
                          }}
                        >
                          <span>Create State</span>
                          {_isloading && (
                            <>
                              &nbsp;&nbsp;
                              <CircularProgressComponent colorValue="#fff" />
                            </>
                          )}
                        </Button>
                        {type == "VIEW"
                          ? true
                          : false && (
                              <Box>
                                &nbsp;&nbsp;
                                <CircularProgressComponent colorValue="#000" />
                              </Box>
                            )}
                      </>
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

export default ViewArea;
