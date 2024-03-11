import * as React from "react";
import { Button, Typography, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/system";
import CreateDepartment from "../component/CreateDepartment";
import CreateAdmin from "../../admin-list/CreateAdmin";
import AddBanner from "../../banner/AddBanner";
import UpdateCountry from "../../countries/UpdateCountry";
import AddState from "../../state/AddState";
import AddCity from "../../cities/AddCity";
import AddProjectType from "../../project-type/AddProjectType";
import AddProjectSubType from "../../Project-Sub-Type/AddProjectType";
import AddProjectFinishing from "../../project-finishing/AddProjectFinishing";
import AddAmenties from "../../amenties/AddAmenties";
import AddUnites from "../../area-unites/AddUnites";
import AddProperty from "../../property-availabilities/AddProperty";
import JoditComponent from "../component/JoditComponent";
import AddWaterResource from "../../water-resources/AddWaterResource";
import AddOverlooking from "../../overlooking/AddOverLooking";
import AddFeatures from "../../property-other-features/AddFeatures";
import AddFacing from "../../property-facing/AddFacing";
import AddBlog from "../../blog/AddBlog";
import AddTestimonial from "../../testimonial/AddTestimonial";
import AddVideo from "../../property-videos/AddVideo";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogStyle = styled("Box")(({ theme }) => ({
  "& button": {
    background: "#A2D117",
    padding: "8px 25px",
    borderRadius: "10px",
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

export default function AlertDialogSlide({
  ButtonName,
  HeadingDialog,
  AddMoreList,
  _isloading,
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  _change_about,
  setChange_About,
  _about,
  ImageUpload,
  _image_upload,
  _getcountrylist,
  handleRating,
  onPointerEnter,
  onPointerLeave,
  rating,
  _imageurl,
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
        <Button onClick={handleClickOpen}>
          <span>{ButtonName}</span>{" "}
        </Button>
        <Dialog
          maxWidth={
            ButtonName == "Create Admin" ||
            ButtonName == "Update About US" ||
            ButtonName == "Update Privacy Policy" ||
            ButtonName == "Add sub-type" ||
            ButtonName == "Create Blog" ||
            // ButtonName == "Create Video" ||
            ButtonName == "Create Testimonial" ||
            ButtonName == "Update Terms Conditions"
              ? "md"
              : "sm"
          }
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
                  <>
                    {open && (
                      <Box display={"flex"} justifyContent={"center"}>
                        <Box maxWidth={600} width={"100%"}>
                          <CreateAdmin
                            handleClose={handleClose}
                            ButtonName={ButtonName}
                            ImageUpload={ImageUpload}
                            _isloading={_isloading}
                            AddMoreList={AddMoreList}
                          />
                        </Box>
                      </Box>
                    )}
                  </>
                ) : ButtonName == "Add Banner" ? (
                  <>
                    <AddBanner
                      handleClose={handleClose}
                      ButtonName={ButtonName}
                      ImageUpload={ImageUpload}
                      _isloading={_isloading}
                      AddMoreList={AddMoreList}
                    />
                  </>
                ) : ButtonName == "Update About US" ||
                  ButtonName == "Update Privacy Policy" ||
                  ButtonName == "Update Terms Conditions" ? (
                  <JoditComponent
                    _initial_state={_change_about}
                    set_Content_State={setChange_About}
                    title="Enter Title"
                    AddAboutContent={AddMoreList}
                    _isloading={_isloading}
                    _about={_about}
                  />
                ) : ButtonName == "Update Country" ? (
                  <UpdateCountry
                    handleClose={handleClose}
                    ButtonName={ButtonName}
                    ImageUpload={ImageUpload}
                    _image_upload={_image_upload}
                    _isloading={_isloading}
                    AddMoreList={AddMoreList}
                  />
                ) : ButtonName == "Update State" ? (
                  <>
                    {open && (
                      <AddState
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _image_upload={_image_upload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        _getcountrylist={_getcountrylist}
                      />
                    )}
                  </>
                ) : ButtonName == "Create State" ? (
                  <AddState handleClose={handleClose} ButtonName={ButtonName} />
                ) : ButtonName == "Add City" ? (
                  <>
                    {open && (
                      <AddCity
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                      />
                    )}
                  </>
                ) : ButtonName == "Create project" ? (
                  <>
                    {open && (
                      <AddProjectType
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        _getcountrylist={_getcountrylist}
                      />
                    )}
                  </>
                ) : ButtonName == "Add sub-type" ? (
                  <>
                    {open && (
                      <AddProjectSubType
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        _getcountrylist={_getcountrylist}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Blog" ? (
                  <>
                    {open && (
                      <AddBlog
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        _getcountrylist={_getcountrylist}
                        ImageUpload={ImageUpload}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Finishing" ? (
                  <>
                    {open && (
                      <AddProjectFinishing
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        _getcountrylist={_getcountrylist}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Aminity" ? (
                  <>
                    {open && (
                      <AddAmenties
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        _getcountrylist={_getcountrylist}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Area Unit" ? (
                  <>
                    {open && (
                      <AddUnites
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        _getcountrylist={_getcountrylist}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Property" ? (
                  <>
                    {open && (
                      <AddProperty
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Resource" ? (
                  <>
                    {open && (
                      <AddWaterResource
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Features" ? (
                  <>
                    {open && (
                      <AddFeatures
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Overlooking" ? (
                  <>
                    {open && (
                      <AddOverlooking
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Facing" ? (
                  <>
                    {open && (
                      <AddFacing
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Testimonial" ? (
                  <>
                    {open && (
                      <AddTestimonial
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        rating={rating}
                        handleRating={handleRating}
                        _image_upload={_image_upload}
                        _imageurl={_imageurl}
                      />
                    )}
                  </>
                ) : ButtonName == "Create Video" ? (
                  <>
                    {open && (
                      <AddVideo
                        handleClose={handleClose}
                        ButtonName={ButtonName}
                        ImageUpload={ImageUpload}
                        _isloading={_isloading}
                        AddMoreList={AddMoreList}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        rating={rating}
                        handleRating={handleRating}
                        _image_upload={_image_upload}
                        _imageurl={_imageurl}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {open && (
                      <CreateDepartment
                        handleClose={handleClose}
                        AddMoreList={AddMoreList}
                        _isloading={_isloading}
                        open={open}
                        setOpen={setOpen}
                        handleClickOpen={handleClickOpen}
                      />
                    )}
                  </>
                )}
              </DialogContentText>
            </DialogContent>
          </Box>
        </Dialog>
      </DialogStyle>
    </React.Fragment>
  );
}
