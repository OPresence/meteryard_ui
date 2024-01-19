import React, { useContext } from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CheckBoxComponent from "src/component/CheckBoxComponent.js";
import { AuthContext } from "../../context/Auth";
const DialogStyleComponent = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: "100%",
    position: "relative",
    overflow: "initial",
    borderTopLeftRadius: "50px !important",
    borderTopRightRadius: "55px !important",
  },
  "& .mainDialogBox": {
    // margin: "0",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   bottom: "243px",
    //   left: "-9px",
    //   height: "282px",
    //   border: "5px solid #FE5D27",
    //   borderRadius: "0 0 10 76px",
    //   borderTopRightRadius: "25px",
    //   borderTopLeftRadius: "20px",
    //   borderBottomLeftRadius: "63px",
    // },
    // "&::after": {
    //   background: "#FE5D27",
    //   content: '""',
    //   position: "absolute",
    //   top: "-150px",
    //   left: "132px",
    //   height: "282px",
    //   border: "5px solid #FE5D27",
    //   borderRadius: "0 0 10 76px",
    //   borderTopRightRadius: "25px",
    //   borderTopLeftRadius: "0px",
    //   borderBottomRightRadius: "77px",
    //   borderBottomLeftRadius: "0px",
    //   WebkitTransform: "rotateZ(271deg)",
    //   MozTransform: "rotateZ(271deg)",
    //   MsTransform: "rotateZ(271deg)",
    //   transform: "rotateZ(270deg)",
    //   borderTopRightRadius: "90px",
    // },
    "& .submit": {
      background: "#444444",
      color: "#fff",
      fontSize: "12px",
      padding: "10px 50px",
    },

    "& .checkBox": {
      "& h6": {
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    "& .profileBox": {
      border: "1px solid #B8B8B8",
      position: "absolute",
      borderRadius: "100px",
      width: 80,
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        color: "#B8B8B8",
      },
      "& span": {
        textAlign: "center",
        fontSize: "8px",
      },
    },
    "& .headingBox": {
      background: "#444444",
      borderTopLeftRadius: "50px", // padding: "10px",
      borderTopRightRadius: "50px", // padding: "10px",
      //   "& h6": {
      //     fontSize: "24px",
      //     fontWeight: "700",
      //     textAlign: "center",
      //     color: "#fff",
      //   },
      "& h6": {
        // marginTop: "5px",
        textAlign: "center",
        color: "#fff",
        fontSize: "18px",
        padding: "10px",
      },
    },
  },
});

const EnquiryForm = ({
  handleClose,
  //   setChecked_Get,
  open,
  setOpen,
  handleChangeCheckBox,
  data,
  index,
}) => {
  const router = useRouter();
  const [_property_type, setProperty_type] = React.useState("");
  const [_budget, setbudget] = React.useState("");

  const [_property_category, setPropertyCategory] = React.useState("");
  const [checked_get, setChecked_Get] = React.useState("");

  const auth = useContext(AuthContext);

  console.log("authnjfndj--->", auth);
  return (
    <DialogStyleComponent open={open} keepMounted onClose={handleClose}>
      <Box className="mainDialogBox">
        <DialogTitle style={{ padding: "0 0px" }}>
          <Box className="headingBox">
            <Typography variant="h6">Enquiry Form</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box mt={5}>
              <Grid container spacing={3}>
                <Grid item={6} md={6} sm={6} xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    id="outlined-read-only-input"
                    label="Full Name"
                  />
                </Grid>
                <Grid item={6} md={6} sm={6} xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-read-only-input"
                    placeholder="Your Adress"
                    label="Email Adress"
                  />
                </Grid>
                <Grid item={6} md={6} sm={6} xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-read-only-input"
                    placeholder="Your Mobile number"
                    label="Mobile Number"
                  />
                </Grid>
                <Grid item={6} md={6} sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">
                      budget
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={_budget}
                      fullWidth
                      label="budget"
                      onChange={(e) => setbudget(e.target.value)}
                    >
                      <MenuItem value="" disabled>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                      <MenuItem value={"VILLA"}>VILLA</MenuItem>
                      <MenuItem value={"PLOTS"}>PLOTS</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item={6} md={6} sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">
                      Residential
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={_property_type}
                      fullWidth
                      label="Residential"
                      onChange={(e) => setPropertyCategory(e.target.value)}
                    >
                      <MenuItem value="" disabled>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                      <MenuItem value={"VILLA"}>VILLA</MenuItem>
                      <MenuItem value={"PLOTS"}>PLOTS</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item={6} md={6} sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">
                      property category
                    </InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={_property_type}
                      label="Age"
                      onChange={(e) => setProperty_type(e.target.value)}
                    >
                      <MenuItem value="" disabled>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"HOUSE"}>HOUSE</MenuItem>
                      <MenuItem value={"VILLA"}>VILLA</MenuItem>
                      <MenuItem value={"PLOTS"}>PLOTS</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* <Grid item={6} md={6} sm={6} xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-read-only-input"
                    placeholder="Enter city"
                    label="City"
                  />
                </Grid>
                <Grid item={12} md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Enter location"
                    id="outlined-read-only-input"
                    label="local area"
                  />
                </Grid> */}
              </Grid>
              <Box display={"flex"} className="checkBox" mt={1}>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant="h6">Get Alert On Enquiry</Typography>{" "}
                  <CheckBoxComponent setChecked_Get={setChecked_Get} />
                </Box>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant="h6">Get Alert On Enquiry</Typography>{" "}
                  <CheckBoxComponent setChecked_Get={setChecked_Get} />
                </Box>
              </Box>
              <Box mt={1}>
                <Button className="submit">SUBMIT</Button>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <Button
                  className="submit"
                  style={{ background: "#A3A3A3" }}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  CLOSE
                </Button>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Box>
    </DialogStyleComponent>
  );
};
export default EnquiryForm;
