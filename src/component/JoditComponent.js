import React, { useEffect, useRef, useMemo, useState } from "react";
// import JoditEditor from "jodit-react";
import dynamic from "next/dynamic";

const DynamicJoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import CircularProgressCompoennt from "../component/CircularProgressComponent";

// import AdminLayout from "../../../layout/";
import {
  Box,
  Typography,
  Divider,
  TextField,
  FormControl,
  Button,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
import { Form, Formik } from "formik";
import * as yep from "yup";
const PageStyle = styled("Box")(({ theme }) => ({
  "& .mainPage": {
    display: "flex",
    justifyContent: "center",
  },
}));

const ButtonStyle = styled("Box")(({ theme }) => ({
  "& .mainPage": {
    display: "flex",
    justifyContent: "center",
  },
  "& button": {
    background: "#A2D117",
    padding: "8px 25px",
    borderRadius: "10px",
    color: "#fff",
    "&:hover": {
      background: "#A2D117",
      padding: "8px 25px",
      borderRadius: "10px",
    },
    "& span": {
      color: "#fff",
      fontSize: "14px",
    },
  },
}));

const JoditComponent = ({ _isloading, AddAboutContent, title, _about }) => {
  const editor = useRef(null);
  const formInitialSchema = {
    titleName: "",
    description: "",
    // titleName: _about[0]?.title,
    // description: _about[0]?.description,
  };

  const formValidationSchemaLogin = yep.object().shape({
    titleName: yep.string().required("Title name is required"),

    description: yep.string().required("Description is required."),
  });
  return (
    <PageStyle>
      <Box className="mainPage">
        <Box mt={2} minWidth={700}>
          <Formik
            initialValues={formInitialSchema}
            enableReinitialize={true}
            initialStatus={{
              success: false,
              successMsg: "",
            }}
            validationSchema={formValidationSchemaLogin}
            onSubmit={(values) => {
              AddAboutContent(values);
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
                <Box mt={1} mb={1}>
                  <Typography variant="h6">{title}</Typography>
                  <TextField
                    name="titleName"
                    id="titleName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.titleName}
                    fullWidth
                    variant="outlined"
                    placeholder="Enter title"
                    disabled={_isloading}
                  />
                  <FormHelperText
                    error
                    style={{ marginLeft: "0px !important" }}
                  >
                    {touched.titleName && errors.titleName}
                  </FormHelperText>
                </Box>
                <Box mt={1}>
                  <Typography variant="h6">Enter Description</Typography>

                  <DynamicJoditEditor
                    ref={editor}
                    height="100%"
                    name="description"
                    value={values?.description}
                    tabIndex={1}
                    onBlur={handleBlur}
                    onChange={(newContent) => {
                      setFieldValue("description", newContent);
                    }}
                  />
                  <FormHelperText
                    error
                    style={{ marginLeft: "0px !important" }}
                  >
                    {touched.description && errors.description}
                  </FormHelperText>
                </Box>
                <Box display={"flex"} justifyContent={"center"} mt={3}>
                  <Box>
                    <ButtonStyle>
                      <Button disabled={_isloading}>Cancel</Button>
                    </ButtonStyle>
                    &nbsp;&nbsp;&nbsp;
                    <ButtonStyle>
                      <Button type="submit" disabled={_isloading}>
                        Update Content
                        {_isloading && <CircularProgressCompoennt />}
                      </Button>
                    </ButtonStyle>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </PageStyle>
  );
};

export default JoditComponent;
