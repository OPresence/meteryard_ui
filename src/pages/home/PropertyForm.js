// Import necessary components and styles
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, Grid, IconButton  } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HouseForm from "./HouseForm";
import Residetial from "./Residetial";
import { styled } from "@mui/system";
import { PostApiFunction } from "../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiconfigs from "../../ApiConfig/ApiConfig";

const MainFormStyle = styled("Box")(({ theme }) => ({
  "& .mainBoxStyle": {
    borderLeft: "3px solid rgb(162, 209, 23)",
    paddingLeft: "10px",
    marginTop:"20px",
  },
}));
export default function PropertyForm({
  open,
  handleClose,
  AdPropertyFunction,
  _isloading,
  selectedImages,
  setSelectedImages,
  imageUploadFunction,
  setCoverImage,
  _coverImage,
  address,
  setAddress,
  coordinates,
  setCoordinates,
  _checked,
  setChecked,
  _consition,
  setGetPropetyType,
  setGet_Type_Name,
  setGetProject_sub_Type,
  _getproprty_type,
  setConsition,
  CoverImageFunction,
}) {
  // const [_propertyList, setPropertyList] = React.useState([
  //   {
  //     Type: "Residential",
  //     image: "/images/Group 8163.png",
  //     propertyName: [
  //       {
  //         name: "House",
  //       },
  //       {
  //         name: "Villa",
  //       },
  //       {
  //         name: "Apartment",
  //       },
  //       {
  //         name: "Plot",
  //       },
  //     ],
  //   },
  //   {
  //     Type: "Commercial",
  //     image: "/images/Group 8163.png",
  //     propertyName: [
  //       {
  //         name: "House",
  //       },
  //       {
  //         name: "Villa",
  //       },
  //       {
  //         name: "Apartment",
  //       },
  //       {
  //         name: "Plot",
  //       },
  //     ],
  //   },
  //   {
  //     Type: "Agriculture",
  //     image: "/images/Group 8163.png",
  //     propertyName: [
  //       {
  //         name: "House",
  //       },
  //       {
  //         name: "Villa",
  //       },
  //       {
  //         name: "Apartment",
  //       },
  //       {
  //         name: "Plot",
  //       },
  //     ],
  //   },
  // ]);
  const [_propertyList, setPropertyList] = React.useState([]);
  const [_subtypelist, setSubTypeList] = React.useState([]);
  const ProjectType = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllProjectType,
      });
      if (res) {
        console.log("res00-->", res?.result?.docs);
        if (res?.responseCode == 200) {
          setPropertyList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setPropertyList([]);
          toast.error(res?.responseMessage);
          setPropertyList([]);
        } else if (res?.responseCode == 404) {
          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      console.log("error");
      setPropertyList([]);
    }
  };
  const SubProjectType = async (id) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllProjectSubType,
        data: {
          projectTypeId: _getproprty_type,
          page: "1",
          limit: "10",
        },
      });
      if (res?.responseCode == 200) {
        console.log("dnfknkdfn--0->", res);
        setSubTypeList(res?.result?.docs);
        setItemData(resolvedData);
        // return res?.result?.docs;
      } else if (res?.responseCode == 404) {
        setSubTypeList([]);
        toast.error(res?.responseMessage);
        setSubTypeList([]);
        // Display error notification
      } else if (res?.responseCode == 404) {
        setSubTypeList([]);

        toast.error(res?.responseMessage); // Display error notification
      } else if (res?.responseCode == 500) {
        setSubTypeList([]);

        toast.error(res?.responseMessage); // Display error notification
      } else {
        setSubTypeList([]);

        toast.error(res?.responseMessage); // Display error notification
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  React.useEffect(() => {
    ProjectType();
  }, []);
  React.useEffect(() => {
    if (_getproprty_type) {
      SubProjectType();
    }
  }, [_getproprty_type]);
  return (
    <Dialog
      open={open}
      maxWidth={"xl"}
      fullWidth
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="customDialogClass" // Add your custom class here
    >
      <DialogContent className="mainModalClassForm">
      <IconButton
          className="Property-form-close"
          onClick={handleClose} // Close the dialog when clicked
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            {_propertyList?.map((data, index) => {
              return (
                <Box mt={2}>
                  <Residetial
                    data={data}
                    index={index}
                    setGetPropetyType={setGetPropetyType}
                    setGet_Type_Name={setGet_Type_Name}
                    setGetProject_sub_Type={setGetProject_sub_Type}
                    _subtypelist={_subtypelist}
                  />
                </Box>
              );
            })}
          </Grid>
          <Grid item lg={10} md={10} >
            <MainFormStyle>
              <Box className="mainBoxStyle">
                <HouseForm
                  AdPropertyFunction={AdPropertyFunction}
                  _isloading={_isloading}
                  selectedImages={selectedImages}
                  setSelectedImages={setSelectedImages}
                  imageUploadFunction={imageUploadFunction}
                  setCoverImage={setCoverImage}
                  _coverImage={_coverImage}
                  address={address}
                  setAddress={setAddress}
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                  _checked={_checked}
                  setChecked={setChecked}
                  _consition={_consition}
                  setConsition={setConsition}
                  CoverImageFunction={CoverImageFunction}
                />
              </Box>
            </MainFormStyle>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
