import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import {
  Button,
  Grid,
  Box,
  TextField,
  FormHelperText,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import "react-phone-input-2/lib/style.css";
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressComponent from "../../component/CircularProgressComponent";
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
const ViewVideo = ({
  handleClose,
  _image_upload,
  _isloading,
  AddMoreList,
  ButtonName,
  _viewData,
}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  const [_initialstate, setInitialState] = useState({
    video_URL: "",
    video_order: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    video_URL: yep.string().required("video url is required."),
    video_order: yep.string().required("video order is required."),
  });
  useEffect(() => {
    setInitialState({
      video_URL: _viewData?.videoLink,
      video_order: _viewData?.displayOrder,
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
                <Grid item lg={12} md={12} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      disabled={_image_upload || _isloading}
                      id="outlined-basic"
                      label="Video URL"
                      variant="outlined"
                      placeholder="enter vide URL"
                      name="video_URL"
                      value={values?.video_URL}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.video_URL && errors.video_URL}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      disabled={_image_upload || _isloading}
                      id="outlined-basic"
                      label="Video Order"
                      variant="outlined"
                      placeholder="enter video order"
                      name="video_order"
                      value={values?.video_order}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.video_order && errors.video_order}
                    </FormHelperText>
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
                      <span>{ButtonName}</span>
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
    </Container>
  );
};

export default ViewVideo;
