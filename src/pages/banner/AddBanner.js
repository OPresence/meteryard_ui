import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  Box,
  TextField,
  Button,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { Form, Formik } from "formik";
import * as yep from "yup";
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
const AddBanner = ({ handleClose, ImageUpload, AddMoreList, _isloading }) => {
  const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [_changetitle, setChangeTitle] = useState("");
  const [_initialstate, setInitialState] = useState({
    title: "",
  });
  const formValidationSchemaDepartment = yep.object().shape({
    title: yep.string().required("Title name is required."),
  });
  const handleChangeFunction = (files) => {
    const uploadedFile = files[0];
    ImageUpload(files[0]);
    setFile(uploadedFile);
    const objectURL = URL.createObjectURL(uploadedFile);
    setImageUrl(objectURL);
  };
  return (
    <DialogButtonStyle>
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
              setFile(null);
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
            <Box display={"flex"} justifyContent={"center"} minHeight={300}>
              <Box maxWidth={350}>
                <FileUploader
                  multiple={true}
                  handleChange={handleChangeFunction}
                  name="file"
                  types={fileTypes}
                  ImageUpload={ImageUpload}
                />
                <Box mt={2} textAlign={"center"}>
                  {file ? (
                    <>
                      <p>File Image Dimension: 1920 x 1080 {file.name}</p>
                      <Box display={"flex"} justifyContent={"center"}>
                        <Box maxWidth={200}>
                          <img
                            src={imageUrl}
                            alt="Uploaded File"
                            style={{ maxWidth: "100%" }}
                          />
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <p>No files uploaded yet</p>
                  )}
                </Box>
                <Box mt={2}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Add Title"
                    variant="outlined"
                    placeholder="Add Title"
                    name="title"
                    disabled={_isloading}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    inputProps={{ maxLength: 120 }}
                  />
                  <FormHelperText
                    error
                    style={{ marginLeft: "0px !important" }}
                  >
                    {touched.title && errors.title}
                  </FormHelperText>
                </Box>
                <Box display={"flex"} gap={"20px"} mt={3}>
                  <Button onClick={handleClose}>
                    <span>CANCEL</span>
                  </Button>
                  <Button
                    type="submit"
                    style={{
                      background: "#A2D117",
                    }}
                  >
                    <span>Add</span>{" "}
                    {_isloading && (
                      <>
                        &nbsp;&nbsp;
                        <CircularProgressCompoennt />
                      </>
                    )}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </DialogButtonStyle>
  );
};

export default AddBanner;
