import * as React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/system";
import DepartmentView from "../../department-list/DepartmentView";
import ViewCountry from "../../countries/ViewCountry";
import AddCity from "@/pages/cities/AddCity";
import AddProjectType from "@/pages/project-type/AddProjectType";
import AddProjectFinishing from "@/pages/project-finishing/AddProjectFinishing";
import AddAmenties from "@/pages/amenties/AddAmenties";
import AddUnites from "@/pages/area-unites/AddUnites";
import AddProperty from "@/pages/property-availabilities/AddProperty";
import ViewState from "../../state/ViewState.js";
import ViewBanner from "../../banner/ViewBanner";
import ViewAdmin from "@/pages/admin-list/ViewAdmin";
import ViewUser from "../../seller-list/ViewUser";
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

export default function ViewDialog({
  ButtonName,
  HeadingDialog,
  AddMoreList,
  _isloading,
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  type,
  _viewData,
  ImageUpload,
  _image_upload,
  _getcountrylist,
}) {
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
  return (
    <React.Fragment>
      <DialogStyle>
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
                      {open && (
                        <ViewAdmin
                          handleClose={handleClose}
                          ButtonName={ButtonName}
                          _viewData={_viewData}
                          type={type}
                          AddMoreList={AddMoreList}
                          _isloadin={_isloading}
                        />
                      )}
                    </Box>
                  </Box>
                ) : ButtonName == "Add Banner" ? (
                  <ViewBanner
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                    _viewData={_viewData}
                    type={type}
                    AddMoreList={AddMoreList}
                    _isloading={_isloading}
                  />
                ) : ButtonName == "Update Country" ? (
                  <Box>
                    {open && (
                      <ViewCountry
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        _viewData={_viewData}
                        type={type}
                        AddMoreList={AddMoreList}
                        _isloading={_isloading}
                        ImageUpload={ImageUpload}
                        _image_upload={_image_upload}
                      />
                    )}
                  </Box>
                ) : ButtonName == "Update State" ? (
                  <Box>
                    {open && (
                      <ViewState
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        _viewData={_viewData}
                        type={type}
                        AddMoreList={AddMoreList}
                        _isloading={_isloading}
                        ImageUpload={ImageUpload}
                        _image_upload={_image_upload}
                        _getcountrylist={_getcountrylist}
                      />
                    )}
                  </Box>
                ) : ButtonName == "Create User" ? (
                  <ViewUser
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                    _viewData={_viewData}
                    type={type}
                  />
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
                  <DepartmentView
                    handleClose={handleClose}
                    AddMoreList={AddMoreList}
                    _isloading={_isloading}
                    open={open}
                    setOpen={setOpen}
                    handleClickOpen={handleClickOpen}
                    type={type}
                    _viewData={_viewData}
                  />
                )}
              </DialogContentText>
            </DialogContent>
          </Box>
        </Dialog>
      </DialogStyle>
    </React.Fragment>
  );
}
