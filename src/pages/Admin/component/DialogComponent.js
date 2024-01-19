import * as React from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/system";
import CreateDepartment from "./CreateDepartment";
import CreateAdmin from "@/pages/admin-list/CreateAdmin";
import AddBanner from "@/pages/banner/AddBanner";
import UpdateCountry from "@/pages/countries/UpdateCountry";
import AddState from "../../../pages/state/AddState";
import AddCity from "@/pages/cities/AddCity";
import AddProjectType from "@/pages/project-type/AddProjectType";
import AddProjectFinishing from "@/pages/project-finishing/AddProjectFinishing";
import AddAmenties from "@/pages/amenties/AddAmenties";
import AddUnites from "@/pages/area-unites/AddUnites";
import AddProperty from "@/pages/property-availabilities/AddProperty";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogStyle = styled("Box")(({ theme }) => ({
  "& button": {
    background: "#A2D117",
    padding: "8px 25px",
    borderRadius: "10px",

    "& span": {
      color: "#fff",
      fontSize: "14px",
    },
  },
  "& h4": {
    fontWeight: "500",
    textAlign: "center",
  },
  "& .CreateBox": {
    background: "#A2D117",
    padding: "8px 25px",
    borderRadius: "10px",

    "& span": {
      color: "#fff",
      fontSize: "14px",
    },
  },
}));

export default function AlertDialogSlide({ ButtonName, HeadingDialog }) {
  const modalClassStyles = {
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      borderTop: "13px solid #AED735",
      borderRadius: "20px",
      pointerEvents: "none",
      boxSizing: "border-box",
      width: "380px",
      height: "10px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      borderLeft: "13px solid #AED735",
      borderRadius: "20px",
      pointerEvents: "none",
      boxSizing: "border-box",
      width: "0",
      height: "278px",
    },
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <DialogStyle>
        <Button onClick={handleClickOpen}>
          <span>{ButtonName}</span>{" "}
        </Button>
        <Dialog
          maxWidth={ButtonName == "Create Admin" ? "md" : "sm"}
          fullWidth
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <Box mt={3} mb={3} sx={modalClassStyles}>
            <DialogTitle>
              <Box textAlign="center">
                <Typography variant="h4">{HeadingDialog}</Typography>{" "}
              </Box>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {ButtonName == "Create Admin" ? (
                  <Box display={"flex"} justifyContent={"center"}>
                    <Box maxWidth={600} width={"100%"}>
                      <CreateAdmin handleClose={handleClose} />
                    </Box>
                  </Box>
                ) : ButtonName == "Add Banner" ? (
                  <AddBanner
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                  />
                ) : ButtonName == "Update Country" ? (
                  <UpdateCountry
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                  />
                ) : ButtonName == "Create State" ? (
                  <AddState handleClose={handleClose} ButtonName={ButtonName} />
                ) : ButtonName == "Add City" ? (
                  <AddCity handleClose={handleClose} ButtonName={ButtonName} />
                ) : ButtonName == "Create project" ? (
                  <AddProjectType
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                  />
                ) : ButtonName == "Create project finishing" ? (
                  <AddProjectFinishing
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                  />
                ) : ButtonName == "Create Aminity" ? (
                  <AddAmenties
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                  />
                ) : ButtonName == "Create Unites" ? (
                  <AddUnites
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                  />
                ) : ButtonName == "Create Property" ? (
                  <AddProperty
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                  />
                ) : (
                  <CreateDepartment handleClose={handleClose} />
                )}
              </DialogContentText>
            </DialogContent>
          </Box>
        </Dialog>
      </DialogStyle>
    </React.Fragment>
  );
}
