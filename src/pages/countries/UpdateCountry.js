import React from "react";
import {
  Button,
  Grid,
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
const phoneInputStyles = {
  width: "100%",
  height: "54px",
};

const UpdateCountry = ({ handleClose }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box justifyContent={"center"} mt={3} mb={5}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12}>
            <Box mt={2}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="County Name"
                variant="outlined"
                placeholder="Enter your county name"
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box mt={2}>
              <PhoneInput
                country={"in"}
                name="phoneNo"
                inputClass="phoneInputField"
                buttonClass="phoneInputButton"
                variant="outlined"
                // value={values.phoneNo}
                // error={Boolean(touched.phoneNo && errors.phoneNo)}
                //   onBlur={handleBlur}
                // onChange={(phone, e) => {
                //   setCountryCode(e.dialCode);
                //   setFieldValue("phoneNo", phone);
                // }}
                inputStyle={phoneInputStyles}
              />
            </Box>
          </Grid>{" "}
          <Grid item lg={6} md={6} sm={12}>
            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select Status"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Active</MenuItem>
                  <MenuItem value={20}>Deactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box mt={2}>
              <TextField
                type="file"
                fullWidth
                id="outlined-basic"
                // label="Password"
                variant="outlined"
                // placeholder="Enter your password"
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
              <Button onClick={handleClose}>
                <span>CANCEL</span>
              </Button>
              <Button
                style={{
                  background: "#A2D117",
                }}
              >
                <span>CREATE</span>
              </Button>
            </Box>
          </DialogButtonStyle>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateCountry;
