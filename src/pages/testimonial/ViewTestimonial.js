import React, { useEffect, useState } from "react";

import {
  Button,
  Grid,
  Box,
  TextField,
  FormHelperText,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import "react-phone-input-2/lib/style.css";
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressComponent from "../../component/CircularProgressComponent";
import { Rating } from "react-simple-star-rating";
const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    &:focus-visible {
      outline: 0;
    }
  `
);
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
const ViewTestimonial = ({
  handleClose,
  ImageUpload,
  _image_upload,
  _isloading,
  AddMoreList,
  ButtonName,
  _viewData,
  onPointerEnter,
  onPointerLeave,
  type,
  handleRating,
}) => {
  const [_initialstate, setInitialState] = useState({
    customer_name: "",
    comment: "",
    rattingName: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    customer_name: yep.string().required("sea url is required."),
    comment: yep.string().required("comment is required."),
  });
  useEffect(() => {
    setInitialState({
      customer_name: _viewData?.customerName,
      comment: _viewData?.comments,
      rattingName: _viewData?.ratings,
    });
  }, []);

  return (
    <Container>
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
                    <TextField
                      fullWidth
                      disabled={
                        type == "VIEW"
                          ? true
                          : false || _image_upload || _isloading
                      }
                      id="outlined-basic"
                      label="Cutomer Name"
                      variant="outlined"
                      placeholder="enter cutomer name"
                      name="customer_name"
                      value={values?.customer_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.customer_name && errors.customer_name}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <Textarea
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="enter comment"
                      name="comment"
                      value={values?.comment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={
                        type == "VIEW"
                          ? true
                          : false || _image_upload || _isloading
                      }
                      label="Property facing"
                    />

                    <FormHelperText error>
                      {touched.comment && errors.comment}
                    </FormHelperText>
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      type="file"
                      disabled={
                        type == "VIEW"
                          ? true
                          : false || _image_upload || _isloading
                      }
                      id="outlined-basic"
                      variant="outlined"
                      name="file_select"
                      value={values?.file_select}
                      onChange={(newContent) => {
                        setFieldValue("file_select", newContent.target.value);
                        ImageUpload(newContent.target.files[0], "Second");
                      }}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.file_select && errors.file_select}
                    </FormHelperText>
                  </Box>
                  <Box>
                    <Box maxWidth={100}>
                      <img src={_viewData?.file} width={"100%"} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <Typography variant="h6">Rating</Typography>
                    <Rating
                      onClick={handleRating}
                      onPointerEnter={onPointerEnter}
                      onPointerLeave={onPointerLeave}
                      initialValue={_viewData?.ratings}
                      readonly={type == "VIEW" ? true : false}
                    />
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
                    {type != "VIEW" && (
                      <Button
                        disabled={_image_upload || _isloading}
                        type="submit"
                        style={{
                          background: "#A2D117",
                        }}
                      >
                        <span>{ButtonName}</span>
                        {_isloading && (
                          <>
                            &nbsp;&nbsp;
                            <CircularProgressComponent colorValue="#fff" />
                          </>
                        )}
                      </Button>
                    )}

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
    </Container>
  );
};

export default ViewTestimonial;
