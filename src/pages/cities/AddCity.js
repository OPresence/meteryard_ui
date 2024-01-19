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

const AddCity = ({ handleClose }) => {
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select Country"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>India</MenuItem>
                  <MenuItem value={20}>Australia</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select State"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>U.P</MenuItem>
                  <MenuItem value={20}>U.K</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select City
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select City"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Agra</MenuItem>
                  <MenuItem value={20}>Delhi</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
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
                  <MenuItem value={20}>Inactive</MenuItem>
                </Select>
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

export default AddCity;
