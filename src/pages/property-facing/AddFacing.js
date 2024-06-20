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

const AddFacing = ({
  handleClose,
  _getcountrylist,
  _image_upload,
  _isloading,
  AddMoreList,
  onPointerEnter,
  onPointerLeave,
  rating,
}) => {
  const [_initialstate, setInitialState] = useState({
    project_type: "",
    status: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    project_type: yep.string().required("property facing name is required."),
    status: yep.string().required("status is required."),
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
                <Grid item lg={12} md={12} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      disabled={_image_upload || _isloading}
                      id="outlined-basic"
                      label="Property facing"
                      variant="outlined"
                      placeholder="EnterProperty facing name"
                      name="project_type"
                      value={values?.project_type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.project_type && errors.project_type}
                    </FormHelperText>
                  </Box>
                </Grid>

                <Grid item lg={12} md={12} sm={12}>
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
                      <span>Create State</span>
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

export default AddFacing;
