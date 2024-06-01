import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/system";
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
      background: "#444444",
      color: "#fff",
      border: "1px solid #fff",
    },
  },
}));
const DepartmentView = ({
  type,
  _viewData,
  handleClose,
  AddMoreList,
  _isloading,
  open,
  setOpen,
  handleClickOpen,
}) => {
  const formInitialSchema = {
    departmentName: "",
    status: "",
  };
  const [_initialstate, setInitialState] = useState({
    departmentName: _viewData?.departmentRole,
    status: _viewData?.status || "ACTIVE",
  });
  const formValidationSchemaDepartment = yep.object().shape({
    departmentName: yep.string().required("department name is required."),
    status: yep.string().required("status is required."),
  });
  useEffect(() => {
    if (open) {
      setInitialState({
        departmentName: _viewData?.departmentRole,
        status: _viewData?.status,
      });
    }
  }, [open]);
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
            {console.log("values--->", values)}
            <Box display={"flex"} justifyContent={"center"} mt={3} mb={5}>
              <Box maxWidth={400} width={"100%"}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label={type == "VIEW" ? "" : ""}
                  variant="outlined"
                  name="departmentName"
                  placeholder="department"
                  disabled={_isloading || type == "VIEW"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.departmentName}
                  inputProps={{ maxLength: 120 }}
                />
                <FormHelperText error style={{ marginLeft: "0px !important" }}>
                  {touched.departmentName && errors.departmentName}
                </FormHelperText>
                <Box alignItems={"center"} mt={3}>
                  <Box width={"100%"}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        disabled={_isloading || type == "VIEW"}
                        label="status"
                        name="status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.status}
                      >
                        <MenuItem value={"ACTIVE"}>Active</MenuItem>
                        <MenuItem value={"BLOCK"}>Deactive</MenuItem>
                      </Select>
                      <FormHelperText error>
                        {touched.status && errors.status}
                      </FormHelperText>
                    </FormControl>
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
                          {_isloading && <CircularProgressComponent />}
                        </Button>
                      </Box>
                    ) : (
                      ""
                    )}
                  </DialogButtonStyle>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DepartmentView;
