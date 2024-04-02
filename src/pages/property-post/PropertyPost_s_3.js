import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import styled from "@emotion/styled";
import PostCheckBox from "../../component/PostCheckBox";
import Checkbox from "@mui/material/Checkbox";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import VideocamIcon from "@mui/icons-material/Videocam";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LocationDialog from "../../component/LocationDialog";

import { SelectField, InputField } from "./FormFields";
import CircularProgressComponent from "../../component/CircularProgressComponent";
const PriceBox = styled("Box")(({ theme }) => ({
  "& .mainPriceBox": {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #676767",
    "& h2": {
      fontSize: "15px !important",
      fontWeight: "600 !important",
      textAlign: "start !important",
      padding: "10px 0 !important",
    },
    "& .videoBox": {
      padding: "5px",
      border: "1px solid #676767",
      borderRadius: "10px",
      cursor: "pointer",
      "& h2": {
        // marginTop: "10px",
        fontSize: "10px",
        fontWeight: "500",
        textAlign: "center !important",
        width: "90px",
      },
      "& svg": {
        fontSize: "22px",
        fontWeight: "500",
        color: "#707070",
      },
    },
    "& .cameraBox": {
      border: "1px solid  #676767",
      padding: "10px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        color: "#676767",
        fontSize: "16px",
      },
    },
    "& .main-upload-file": {
      "@media(max-width:615px)": {
        display: "block !important",
      },
      "& .CoverImage": {
        "@media(max-width:615px)": {
          marginBottom: "10px",
        },
      },
      "& .multipleImageBox": {
        "@media(max-width:615px)": {
          alignItems: "start",
        },
      },
    },
  },
  "& .checkboxStyle span": {
    "@media(max-width:615px)": {
      fontSize: "13px",
      padding: "0px !important",
      margin: "0px",
    },
  },
}));
const PropertyPostScreenStyle = styled("Box")(({ theme }) => ({
  "& .borderBox": {
    width: "250px",
    height: "350px",
    position: "absolute",
  },
  //   "& .mainBox": {
  //     height: "500px",
  //     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  //     background: "#fff",
  //     borderRadius: "15px",
  //     position: "relative",
  //   },
  "& .mainBox": {
    // height: "500px",
    // paddingBottom: "50px",
    // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    // background: "#fff",
    // borderRadius: "0 15px 15px 15px",
    // position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-1px",
      left: "-12px",
      height: "282px",
      border: "6px solid #b8db53",
      borderRadius: "0 0 10 76px",
      borderTopRightRadius: "0px",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "63px",
    },
    "&::after": {
      background: "#b8db53",
      content: '""',
      position: "absolute",
      top: "-153px",
      left: "129px",
      height: "282px",
      border: "6px solid #b8db53",
      borderRadius: "0 0 10 76px",
      borderTopRightRadius: "25px",
      borderTopLeftRadius: "0px",
      borderBottomRightRadius: "77px",
      borderBottomLeftRadius: "0px",
      WebkitTransform: "rotateZ(271deg)",
      MozTransform: "rotateZ(271deg)",
      MsTransform: "rotateZ(271deg)",
      transform: "rotateZ(270deg)",
      borderTopRightRadius: "90px",
    },
    "& .HeadingBox": {
      padding: "0 20px",
      "& h2": {
        //   textAlign: "center",
        // color: "#444444",
        // fontSize: "15px",
        // fontWeight: "600",
        // padding: "10px 0",
      },
      //   "& h3": {
      //     color: "#444444",
      //     fontSize: "16px",
      //     fontWeight: "600",
      //     padding: "5px 0",
      //   },
      "& .CheckBox": {
        // display: "flex",
        alignItems: "center",
      },
    },
  },
}));
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
    "@media(max-width:615px)": {
      padding: "10px 18px",
      marginBottom: "20px",
    },
  },
}));
const PropertyPost_s_3 = (props) => {
  const {
    _projecttype,
    formField: {
      listed_name,
      furnishing,
      bedrooms,
      bathrooms,
      super_building,
      carpet_area,
      total_floors,
      floors_no,
      facing,
      project_name,
      add_title,
      description,
      price,
      location,
      landmark,
      coverImage,
    },
  } = props;
  const fileInputRef = useRef(null);

  const [state, setState] = React.useState(false);
  const [_propertyList, setPropertyList] = React.useState([]);
  const propertyType = [
    {
      name: "For Rent",
      value: "FOR_RENT",
    },
    {
      name: "For Sale",
      value: "FOR_SALE",
    },
  ];
  const listedData = [
    {
      value: "Owner",
      name: "Owner",
    },
    {
      value: "Dealer",
      name: "Dealer",
    },
    {
      value: "Builder",
      name: "Builder",
    },
  ];
  const furnishingList = [
    {
      name: "Furnished",
    },
    {
      name: "UnFurnished",
    },
    {
      name: "Semi-Furnished",
    },
  ];
  const badRoomNumberList = [
    {
      name: "1",
      value: "1",
    },
    {
      name: "2",
      value: "2",
    },
    {
      name: "3",
      value: "3",
    },
    {
      name: "4",
      value: "4",
    },

    {
      name: "5",
      value: "5",
    },
    {
      name: "6",
      value: "6",
    },
    {
      name: "7",
      value: "7",
    },
    {
      name: "8",
      value: "8",
    },
    {
      name: "9",
      value: "9",
    },
  ];
  const bathroomNumberList = [
    {
      name: "1",
      value: "1",
    },
    {
      name: "2",
      value: "2",
    },
    {
      name: "3",
      value: "3",
    },
    {
      name: "4",
      value: "4",
    },

    {
      name: "5",
      value: "5",
    },
    {
      name: "6",
      value: "6",
    },
    {
      name: "7",
      value: "7",
    },
    {
      name: "8",
      value: "8",
    },
    {
      name: "9",
      value: "9",
    },
  ];
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(id);
  };
  const termConditionCheck = (event) => {
    if (!props?._consition) {
      props?.setConsition(true);
    } else {
      props?.setConsition(false);
    }
  };
  const ProjectType = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.proSubTypeListWithProType,
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
  useEffect(() => {
    ProjectType();
  }, []);
  return (
    <PropertyPostScreenStyle>
      <Box className="mainBox">
        <Box className="HeadingBox">
          <Typography variant="h2">List Your property</Typography>
          <Box className="CheckBox">
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <PriceBox>
                  <Box className="mainPriceBox">
                    <Box>
                      <Typography variant="h2">SET A PRICE</Typography>
                      <Box mt={2}>
                        <InputField
                          _isloading={props._isloading}
                          name={price.name}
                          valueName={price.value}
                          label={price.label}
                          fullWidth
                        />
                      </Box>
                      <Box
                        display={"flex"}
                        mt={2}
                        gap={"15px"}
                        className="main-upload-file"
                      >
                        <Box display={"flex"} gap={"5px"}>
                          <label>
                            <Box className="videoBox">
                              <Typography variant="h2">
                                upload 30 sec video
                              </Typography>
                              <Box textAlign={"center"}>
                                <input
                                  type="file"
                                  accept="video/*"
                                  capture="user"
                                  style={{ display: "none" }}
                                  ref={fileInputRef}
                                  onChange={props?.handleFileChange}
                                  onInvalid={() => {
                                    alert("Please upload a valid video file.");
                                    fileInputRef.current.value = "";
                                  }}
                                />
                                <VideocamIcon style={{ cursor: "pointer" }} />
                              </Box>
                            </Box>
                            <Box
                              display={"flex"}
                              justifyContent={"center"}
                              mt={1}
                            >
                              {props?._videoupload && (
                                <>
                                  <CircularProgressComponent />
                                </>
                              )}
                            </Box>
                          </label>
                          <label>
                            <Box className="videoBox CoverImage">
                              <Typography variant="h2">Cover Image</Typography>
                              <Box textAlign={"center"} mt={"17px"}>
                                <input
                                  type="file"
                                  accept="image/*"
                                  style={{ display: "none" }}
                                  name="coverImage"
                                  onChange={(e) => {
                                    const selectedImage = e.target.files[0];
                                    if (selectedImage) {
                                      props?.CoverImageFunction(
                                        e.target.files[0]
                                      );
                                      props?.setCoverImage(selectedImage);
                                      const imageUrl =
                                        URL.createObjectURL(selectedImage);
                                      props?.setCoverImage(imageUrl);
                                    }
                                  }}
                                />
                                {props?._coverImage && (
                                  <Box maxWidth={100}>
                                    <img
                                      src={props?._coverImage}
                                      alt="Cover Preview"
                                      style={{ width: "100%" }}
                                    />
                                  </Box>
                                )}
                                <CameraAltIcon style={{ cursor: "pointer" }} />
                              </Box>
                            </Box>
                          </label>{" "}
                        </Box>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          gap={"6px"}
                          className="multipleImageBox"
                        >
                          <label>
                            <input
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                              ref={fileInputRef}
                              onChange={props?.handleFileChangeImage}
                              multiple
                            />

                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"} // Center items horizontally
                              gap={"6px"}
                            >
                              {props?.selectedImages1
                                .slice(0, 4)
                                .map((image, index) => (
                                  <Box key={index} maxWidth={50}>
                                    <img
                                      style={{ width: "45px", height: "45px" }}
                                      width={"100%"}
                                      src={image}
                                      alt={`Selected Image ${index}`}
                                    />
                                  </Box>
                                ))}
                              {Array.from(
                                {
                                  length: Math.max(
                                    0,
                                    4 - props?.selectedImages1.length
                                  ),
                                },
                                (_, index) => (
                                  <Box key={index} className="cameraBox">
                                    <CameraAltIcon />
                                  </Box>
                                )
                              )}
                            </Box>
                            {props?.selectedImages1?.length >= 4 ? (
                              <Box
                                mt={1}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"} // Center items horizontally
                                gap={"6px"}
                              >
                                {props?.selectedImages1
                                  .slice(4, 8)
                                  .map((image, index) => (
                                    <Box key={index} maxWidth={50}>
                                      <img
                                        style={{
                                          width: "45px",
                                          height: "45px",
                                        }}
                                        width={"100%"}
                                        src={image}
                                        alt={`Selected Image ${index}`}
                                      />
                                    </Box>
                                  ))}

                                {Array.from(
                                  {
                                    length: Math.max(
                                      0,
                                      8 - props?.selectedImages1.length
                                    ),
                                  },
                                  (_, index) => (
                                    <Box key={index} className="cameraBox">
                                      <CameraAltIcon />
                                    </Box>
                                  )
                                )}
                              </Box>
                            ) : (
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"} // Center items horizontally
                                gap={"6px"}
                                mt={1}
                              >
                                {props?.selectedImages1
                                  .slice(4, 8)
                                  .map((image, index) => (
                                    <Box key={index} maxWidth={50}>
                                      <img
                                        width={"100%"}
                                        src={image}
                                        alt={`Selected Image ${index}`}
                                      />
                                    </Box>
                                  ))}

                                {Array.from(
                                  {
                                    length: Math.max(0, 4),
                                  },
                                  (_, index) => (
                                    <Box key={index} className="cameraBox">
                                      <CameraAltIcon />
                                    </Box>
                                  )
                                )}
                              </Box>
                            )}
                          </label>{" "}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box mt={2} display={"none"}>
                      <InputField
                        _isloading={props._isloading}
                        name={location.name}
                        valueName={location.value}
                        label={location.label}
                        fullWidth
                      />
                    </Box>
                  </Box>

                  <Box mt={2}>
                    <LocationDialog
                      address={props?.address}
                      setAddress={props?.setAddress}
                      coordinates={props?.coordinates}
                      setCoordinates={props?.setCoordinates}
                    />
                  </Box>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <InputField
                      _isloading={props._isloading}
                      name={landmark.name}
                      valueName={landmark.value}
                      label={landmark.label}
                      fullWidth
                    />
                  </Grid>
                  <Box>
                    <Box display={"flex"} gap={"20px"} mt={2}>
                      <Box
                        display={"inline-flex"}
                        alignItems={"center"}
                        className="checkboxStyle"
                      >
                        <span>Terms & Condition</span>
                        <Checkbox
                          required
                          checked={props?._consition}
                          // onClick={(e) => setConsition(e.target.value)}
                          onClick={termConditionCheck}
                        />
                      </Box>
                      <Box
                        display={"inline-flex"}
                        alignItems={"center"}
                        className="checkboxStyle"
                      >
                        <span>Featured Property</span>
                        <Checkbox
                          checked={props?._checked}
                          onClick={props?.handleChangeCheck}
                        />
                      </Box>
                    </Box>
                  </Box>
                </PriceBox>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={1}
                  gap={"50px"}
                >
                  <DialogButtonStyle>
                    <Box display={"flex"} gap={"20px"} justifyContent={"left"}>
                      {/* <Button
                        onClick={props?.handleClose}
                        disabled={props?._isloading || props?._videoupload}
                      >
                        <span>CANCEL</span>
                      </Button> */}
                      {/* <Button
                        disabled={props?._isloading || props?._videoupload}
                        type="submit"
                        style={{
                          background: "#A2D117",
                        }}
                      >
                        <span>Add Property</span>
                        {props?._isloading && (
                          <>
                            &nbsp;&nbsp;
                            <CircularProgressComponent colorValue="#fff" />
                          </>
                        )}
                      </Button>
                      {props?._image_upload && (
                        <Box>
                          &nbsp;&nbsp;
                          <CircularProgressComponent colorValue="#000" />
                        </Box>
                      )} */}
                    </Box>
                  </DialogButtonStyle>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </PropertyPostScreenStyle>
  );
};

export default PropertyPost_s_3;
