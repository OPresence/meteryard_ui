import React, { useEffect, useState } from "react";

import {
  Button,
  Grid,
  Box,
  TextField,
  FormHelperText,
  Container,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import "react-phone-input-2/lib/style.css";
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressComponent from "../../component/CircularProgressComponent";
const DynamicJoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import dynamic from "next/dynamic";
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

const ViewBlog = ({
  handleClose,
  ImageUpload,
  _image_upload,
  _isloading,
  AddMoreList,
  _viewData,
  type,
  ButtonName,
  _imageurl,
  _imageurl1,
}) => {
  const [_initialstate, setInitialState] = useState({
    seo_url: "",
    author_name: "",
    publish_date: "",
    file_select: "",
    heading: "",
    heading_description: "",
    meta_title: "",
    meta_title_description: "",
    file_select2: "",
    description: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    seo_url: yep.string().required("sea url is required."),
    author_name: yep.string().required("author name is required."),
    publish_date: yep.string().required("publish date is required."),
    // file_select: yep.string().required("file is required."),
    heading: yep.string().required("heading is required."),
    heading_description: yep.string().required("heading is required."),
    meta_title: yep.string().required("meta title is required."),
    meta_title_description: yep
      .string()
      .required("meta description is required."),
    // file_select2: yep.string().required("file is required."),
    description: yep.string().required("description is required."),
  });

  useEffect(() => {
    setInitialState({
      seo_url: _viewData?.seo_url,
      author_name: _viewData?.authorName,
      publish_date: _viewData?.publishDate,
      heading: _viewData?.heading_1,
      heading_description: _viewData?.heading_2,
      meta_title: _viewData?.meta_title,
      meta_title_description: _viewData?.meta_description,
      description: _viewData?.short_description,
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
                      disabled={type == "VIEW" ? true : false || _isloading}
                      fullWidth
                      id="outlined-basic"
                      label="Seo URL"
                      variant="outlined"
                      placeholder="enter seo url"
                      name="seo_url"
                      value={values?.seo_url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.seo_url && errors.seo_url}
                    </FormHelperText>
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      disabled={type == "VIEW" ? true : false || _isloading}
                      fullWidth
                      id="outlined-basic"
                      label="Author Name"
                      variant="outlined"
                      placeholder="author name name"
                      name="author_name"
                      value={values?.author_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.author_name && errors.author_name}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      disabled={type == "VIEW" ? true : false || _isloading}
                      fullWidth
                      id="outlined-basic"
                      label="Publish Date"
                      variant="outlined"
                      placeholder="publish date name"
                      name="publish_date"
                      value={values?.publish_date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.publish_date && errors.publish_date}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      disabled={type == "VIEW" ? true : false || _isloading}
                      fullWidth
                      type="file"
                      id="outlined-basic"
                      variant="outlined"
                      name="file_select"
                      value={values?.file_select}
                      onChange={(newContent) => {
                        setFieldValue("file_select", newContent.target.value);
                        ImageUpload(newContent.target.files[0], "first");
                      }}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.file_select && errors.file_select}
                    </FormHelperText>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box maxWidth={100}>
                      <img
                        width={"100%"}
                        src={_viewData?.file_1 || _imageurl}
                      />
                    </Box>
                    {_image_upload && (
                      <>
                        &nbsp;&nbsp;
                        <CircularProgressComponent />
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Box mt={5} mb={3}>
                <Divider />
              </Box>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      disabled={type == "VIEW" ? true : false || _isloading}
                      fullWidth
                      id="outlined-basic"
                      label="Heading"
                      variant="outlined"
                      placeholder="EnterProperty facing name"
                      name="heading"
                      value={values?.heading}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.heading && errors.heading}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <Textarea
                      disabled={type == "VIEW" ? true : false || _isloading}
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="enter heading description"
                      name="heading_description"
                      value={values?.heading_description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Property facing"
                    />

                    <FormHelperText error>
                      {touched.heading_description &&
                        errors.heading_description}
                    </FormHelperText>
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      disabled={type == "VIEW" ? true : false || _isloading}
                      fullWidth
                      id="outlined-basic"
                      label="Meta Title"
                      variant="outlined"
                      placeholder="meta title"
                      name="meta_title"
                      value={values?.meta_title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.meta_title && errors.meta_title}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <Textarea
                      disabled={type == "VIEW" ? true : false || _isloading}
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="meta title description"
                      name="meta_title_description"
                      value={values?.meta_title_description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Property facing"
                    />
                    <FormHelperText error>
                      {touched.meta_title_description &&
                        errors.meta_title_description}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      disabled={type == "VIEW" ? true : false || _isloading}
                      fullWidth
                      type="file"
                      id="outlined-basic"
                      variant="outlined"
                      name="file_select2"
                      value={values?.file_select2}
                      onChange={(newContent) => {
                        setFieldValue("file_select2", newContent.target.value);
                        ImageUpload(newContent.target.files[0], "Second");
                      }}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.file_select2 && errors.file_select2}
                    </FormHelperText>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box maxWidth={100}>
                      <img
                        width={"100%"}
                        src={_viewData?.file_2 || _imageurl1}
                      />
                    </Box>
                    {_image_upload && (
                      <>
                        &nbsp;&nbsp;
                        <CircularProgressComponent />
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Box mt={5} mb={3}>
                <Divider />
              </Box>
              <Box>
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <DynamicJoditEditor
                      height="100%"
                      name="description"
                      value={values?.description}
                      tabIndex={1}
                      onBlur={handleBlur}
                      onChange={(newContent) => {
                        setFieldValue("description", newContent);
                      }}
                    />
                    <FormHelperText error>
                      {touched.description && errors.description}
                    </FormHelperText>
                  </Box>
                </Grid>
              </Box>
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
                        <span>{ButtonName} </span>
                        {_isloading && (
                          <>
                            &nbsp;&nbsp;
                            <CircularProgressComponent colorValue="#fff" />
                          </>
                        )}
                      </Button>
                    )}

                    {/* {_image_upload && (
                      <Box>
                        &nbsp;&nbsp;
                        <CircularProgressComponent colorValue="#000" />
                      </Box>
                    )} */}
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

export default ViewBlog;
