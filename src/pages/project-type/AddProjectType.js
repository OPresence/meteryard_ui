import React from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";

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
const AddProjectType = ({ handleClose }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box display={"flex"} justifyContent={"center"} mt={3} mb={5}>
        <Box maxWidth={400} width={"100%"}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Project Type"
            variant="outlined"
            placeholder="Project Type"
          />
          <Box alignItems={"center"} mt={3}>
            <Box width={"100%"}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="status"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Active</MenuItem>
                  <MenuItem value={20}>Deactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <DialogButtonStyle>
              <Box display={"flex"} gap={"20px"} mt={3}>
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
      </Box>
    </div>
  );
};

export default AddProjectType;
