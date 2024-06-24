// import React from "react";
// import {
//   Button,
//   Grid,
//   Box,
//   TextField,
//   Select,
//   InputLabel,
//   MenuItem,
//   FormControl,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const DialogButtonStyle = styled(Box)(({ theme }) => ({
//   "& button": {
//     padding: "10px 40px",
//     background: "#444444",
//     border: "1px solid #fff",
//     color: "#fff",
//     clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
//     "&:hover": {
//       background: "#fff",
//       color: "#444444",
//       border: "1px solid #fff",
//     },
//   },
// }));
// const phoneInputStyles = {
//   width: "100%",
//   height: "54px",
// };

// const AddCity = ({ handleClose }) => {
//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
//   return (
//     <div>
//       <Box justifyContent={"center"} mt={3} mb={5}>
//         <Grid container spacing={2}>
//           <Grid item lg={6} md={6} sm={12}>
//             <Box mt={2}>
//               <TextField
//                 fullWidth
//                 id="outlined-basic"
//                 label="County Name"
//                 variant="outlined"
//                 placeholder="Enter your county name"
//               />
//             </Box>
//           </Grid>
//           <Grid item lg={6} md={6} sm={12}>
//             <Box mt={2}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Select State
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={age}
//                   label="Select State"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>U.P</MenuItem>
//                   <MenuItem value={20}>U.K</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </Grid>

//           <Grid item lg={12} md={12} sm={12}>
//             <Box mt={2}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Select Status
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={age}
//                   label="Select Status"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Active</MenuItem>
//                   <MenuItem value={20}>Deactive</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//           </Grid>
//         </Grid>

//         <Box
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems={"center"}
//           mt={3}
//           gap={"50px"}
//         >
//           <DialogButtonStyle>
//             <Box display={"flex"} gap={"20px"}>
//               <Button onClick={handleClose}>
//                 <span>CANCEL</span>
//               </Button>
//               <Button
//                 style={{
//                   background: "#A2D117",
//                 }}
//               >
//                 <span>CREATE</span>
//               </Button>
//             </Box>
//           </DialogButtonStyle>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default AddCity;
import React, { useState } from "react";
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

const AddState = ({
  handleClose,
  _getcountrylist,
  _image_upload,
  _isloading,
  AddMoreList,
}) => {
  const [_countrycode, setCountryCode] = useState("");

  const [_initialstate, setInitialState] = useState({
    countryName: "",
    phoneNo: "",
    status: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    countryName: yep.string().required("country name is required."),
    stateName: yep.string().required("state name is required."),
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {_getcountrylist &&
                          _getcountrylist?.map((data, index) => {
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
                {/* <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      disabled={_image_upload || _isloading}
                      id="outlined-basic"
                      label="County Name"
                      variant="outlined"
                      placeholder="Enter your county name"
                      name="countryName"
                      value={values?.countryName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.countryName && errors.countryName}
                    </FormHelperText>
                  </Box>
                </Grid> */}
                <Grid item lg={6} md={6} sm={12}>
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      disabled={_image_upload || _isloading}
                      id="outlined-basic"
                      label="State Name"
                      variant="outlined"
                      placeholder="Enter your state name"
                      name="stateName"
                      value={values?.stateName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormHelperText error>
                      {touched.stateName && errors.stateName}
                    </FormHelperText>
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

export default AddState;
