import React, { useState, useEffect } from "react";
import { Box, TextField, FormHelperText, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { styled } from "@mui/system";
import * as yep from "yup";

import CircularProgressComponent from "../../component/CircularProgressComponent";
const BannerStyle = styled(Box)(({ theme }) => ({}));
const DialogButtonStyle = styled(Box)(({ theme }) => ({
  "& button": {
    padding: "10px 40px",
    background: "#444444",
    border: "1px solid #fff",
    color: "#fff",
    clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    "&:hover": {
      background: "#444444",
      color: "#fff",
      border: "1px solid #fff",
    },
  },
}));
const ViewBanner = ({
  type,
  _viewData,
  handleClose,
  AddMoreList,
  _isloading,
  open,
}) => {
  const [_initialstate, setInitialState] = useState({
    title: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    title: yep.string().required("Title name is required."),
  });
  useEffect(() => {
    setInitialState({
      title: _viewData?.title,
    });
  }, []);
  return (
    <BannerStyle>
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
            <Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Box maxWidth={250}>
                  <img src={_viewData?.image} width={"100%"} />
                </Box>
              </Box>
              <Box mt={3}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label={type == "VIEW" ? "" : "  "}
                  variant="outlined"
                  placeholder="Banner"
                  disabled={_isloading || type == "VIEW"}
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  inputProps={{ maxLength: 120 }}
                />
                <FormHelperText error style={{ marginLeft: "0px !important" }}>
                  {touched.title && errors.title}
                </FormHelperText>
              </Box>
              <DialogButtonStyle>
                {type != "VIEW" ? (
                  <Box display={"flex"} gap={"20px"} mt={3}>
                    <Button
                      onClick={() => {
                        handleClose();
                      }}
                      disabled={_isloading}
                    >
                      <span>CANCEL</span>
                    </Button>
                    <Button
                      disabled={_isloading}
                      type="submit"
                      style={{
                        background: "#A2D117",
                      }}
                    >
                      <span>Update</span> &nbsp;
                      {_isloading && (
                        <CircularProgressComponent colorValue="#fff" />
                      )}
                    </Button>
                  </Box>
                ) : (
                  ""
                )}
              </DialogButtonStyle>
            </Box>
          </Form>
        )}
      </Formik>
    </BannerStyle>
  );
};

export default ViewBanner;
