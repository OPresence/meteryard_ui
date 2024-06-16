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
import AddIcon from "@mui/icons-material/Add";
import LocationDialog from "../../component/LocationDialog";
import CloseIcon from "@mui/icons-material/Close";

import { SelectField, InputField } from "../../component/FormFields";
import CircularProgressComponent from "../../component/CircularProgressComponent";
import { margin } from "@mui/system";
const PriceBox = styled(Box)(({ theme }) => ({
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
      padding: "9px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      width: "94px",
      padding: "9px",
      cursor: "pointer",
      marginBottom:"10px",
      "& svg": {
        color: "#676767",
        fontSize: "22px",
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
        // display: "flex",
        // flexWrap: "wrap",
        display: "block",
        maxWidth: "50%",
        padding: "0",
        
        "@media(max-width:615px)": {
          alignItems: "start",
        },
      },
    },
  },
  "& .checkboxStyle span": {
    "@media(max-width:615px)": {
      fontSize: "13px",
      color: "black",
      padding: "0px !important",
      margin: "0px",
    },
  },
  "& .uploadedImg": {
    padding: "2px",
    background: "#ddd",
    borderRadius: "4px",
    marginRight: "7px",
  },
  "& .ImgcloseBtn": {
    position: "absolute",
    top: "-8px",
    right: "0px",
    cursor: "pointer",
    "& svg": {
      fontSize: "16px",
      color: "black",
    },
  },
}));
const PropertyPostScreenStyle = styled(Box)(({ theme }) => ({
  "& .borderBox": {
    width: "250px",
    height: "350px",
    position: "absolute",
  },
  // "& .mainBox": {
  //   MaxHeight: "500px",
  //   overflow:"auto"
  // },
  "& .mainBox": {
    // height: "500px",
    // paddingBottom: "50px",
    // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    // background: "#fff",
    // borderRadius: "0 15px 15px 15px",
    // position: "relative",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   top: "-1px",
    //   left: "-12px",
    //   height: "282px",
    //   border: "6px solid #b8db53",
    //   borderRadius: "0 0 10 76px",
    //   borderTopRightRadius: "0px",
    //   borderTopLeftRadius: "0px",
    //   borderBottomLeftRadius: "63px",
    // },
    // "&::after": {
    //   background: "#b8db53",
    //   content: '""',
    //   position: "absolute",
    //   top: "-153px",
    //   left: "129px",
    //   height: "282px",
    //   border: "6px solid #b8db53",
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
    "& .HeadingBox3": {
      padding: "0 20px",
      "& h2": {
        textAlign: "center",
        color: "#444444",
        fontSize: "28px",
        fontWeight: "600",
        padding: "20px 0",
      },
      "& h3": {
        color: "#444444",
        fontSize: "16px",
        fontWeight: "600",
        padding: "5px 0",
      },
      "& .CheckBox": {
        alignItems: "center",
        "@media(max-width:615px)": {
          marginTop: "30px",
        },
      },
    },
  },
}));
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
    "@media(max-width:615px)": {
      padding: "10px 18px",
      marginBottom: "20px",
    },
  },
}));
const PropertyPost_s_3 = (props, handleFileChangeImage) => {
  const {
    formField: {
      price,
      location,
      landmark,
      price_breakup,
      localArea,
      stateId,
      cityId,
      Image,
    },
  } = props;
  const fileInputRef = useRef(null);
  const [_stateList, setStateList] = React.useState([]);
  const [_cityList, setCityList] = React.useState([]);
  const [_getstate, setState] = useState("0");
  const [_images, setImages] = useState([]);
  const imgRef = useRef();

  const onImageChange = (e) => {
    if (_images.length >= 10) return;
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages].slice(0, 10));
    
  };

  const removeImage = (image) => {
    setImages(_images.filter((img) => img !== image));
  };
  console.log("bjdsbfbds---->", _getstate);
  const scrollToTop = () => {
    window.scrollTo({
      bottm: 900,
      left: 0,
      behavior: "smooth",
    });
  };
  const termConditionCheck = (event) => {
    if (!props?._consition) {
      props?.setConsition(true);
    } else {
      props?.setConsition(false);
    }
  };
  const StateFunctionList = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllState,
      });
      if (res) {
        if (res?.responseCode == 200) {
          setStateList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setStateList([]);
          toast.error(res?.responseMessage);
          setStateList([]);
        } else if (res?.responseCode == 404) {
          setStateList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setStateList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setStateList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      console.log("error");
      setStateList([]);
    }
  };
  const CityFunctionList = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllCity,
        data: {
          stateId: _getstate,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setCityList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setCityList([]);
          toast.error(res?.responseMessage);
          setCityList([]);
        } else if (res?.responseCode == 404) {
          setCityList([]);

          toast.error(res?.responseMessage);
        } else if (res?.responseCode == 500) {
          setCityList([]);

          toast.error(res?.responseMessage);
        } else {
          setCityList([]);

          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      console.log("error");
      setStateList([]);
    }
  };
  useEffect(() => {
    StateFunctionList();
    scrollToTop();
  }, []);
  useEffect(() => {
    CityFunctionList();
  }, [_getstate]);
  return (
    <PropertyPostScreenStyle>
      <Box className="mainBox">
        <Box className="HeadingBox3">
          <Typography variant="h2">List Your Property</Typography>

          <Box className="CheckBox">
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <PriceBox>
                  <Box className="mainPriceBox">
                    <Box>
                      <Typography variant="h2">SET A PRICE</Typography>
                      <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Box mt={2}>
                            <InputField
                              _isloading={props._isloading}
                              name={price.name}
                              valueName={price.value}
                              Placeholder_name={price.Placeholder_name}
                              label={price.label}
                              fullWidth
                              yourMaxLengthValue={10}
                            />
                          </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Box mt={2}>
                            <InputField
                              _isloading={props._isloading}
                              name={price_breakup.name}
                              valueName={price_breakup.value}
                              Placeholder_name={price_breakup.Placeholder_name}
                              label={price_breakup.label}
                              fullWidth
                              yourMaxLengthValue={10}
                            />
                          </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Box mt={2}>
                            <SelectField
                              _isloading={props._isloading}
                              name={stateId.name}
                              valueName={stateId.value}
                              Placeholder_name={stateId.Placeholder_name}
                              label={stateId.label}
                              fullWidth
                              yourMaxLengthValue={10}
                              data={_stateList}
                              set_State={setState}
                            />
                          </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Box mt={2}>
                            <SelectField
                              _isloading={props._isloading}
                              name={cityId.name}
                              valueName={cityId.value}
                              Placeholder_name={cityId.Placeholder_name}
                              label={cityId.label}
                              fullWidth
                              yourMaxLengthValue={10}
                              data={_cityList}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      <Box
                        display={"flex"}
                        mt={2}
                        gap={"15px"}
                        className="main-upload-file"
                      >
                        <Box gap={"5px"}>
                          <label style={{ display: "inline-flex" }}>
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
                                {props?._videoupload && (
                                  <Box
                                    display={"flex"}
                                    justifyContent={"center"}
                                  >
                                    <CircularProgressComponent />
                                  </Box>
                                )}
                                {props?._video_url && (
                                  <Box maxWidth={100} maxHeight={50}>
                                    <img
                                      src={props?._video_url?.thumbnail}
                                      alt="Cover Preview"
                                      style={{
                                        width: "80px",
                                        height: "50px",
                                        marginTop: "0px",
                                      }}
                                    />
                                  </Box>
                                )}
                                <VideocamIcon style={{ cursor: "pointer" }} />
                              </Box>
                            </Box>
                          </label>
                          &nbsp;&nbsp;&nbsp;
                          <label style={{ display: "inline-flex" }}>
                            <Box className="videoBox CoverImage">
                              <Typography variant="h2">Cover Image</Typography>
                              <Box textAlign={"center"}>
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
                                {props?._imageuploading && (
                                  <Box
                                    display={"flex"}
                                    justifyContent={"center"}
                                  >
                                    <CircularProgressComponent />
                                  </Box>
                                )}
                                {props?._coverImage && (
                                  <Box maxWidth={100} maxHeight={50}>
                                    <img
                                      src={props?._coverImage}
                                      alt="Cover Preview"
                                      style={{
                                        width: "80px",
                                        height: "50px",
                                        // marginTop: "40px",
                                      }}
                                    />
                                  </Box>
                                )}
                                <CameraAltIcon style={{ cursor: "pointer" }} />
                              </Box>
                            </Box>
                          </label>
                        </Box>
                        <div
                          className="multipleImageBox"
                          
                        >
                          {_images.length == 0 ? (
                            <span
                              className="cameraBox"
                              onChange={handleFileChangeImage}
                              onClick={() => fileInputRef.current.click()}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  fontWeight: "600",
                                  textAlign: "center",
                                  fontSize: "13px",
                                }}
                              >
                                Property Images
                              </Typography>
                              <CameraAltIcon />
                            </span>
                          ) : (
                            <>
                              {_images.length == 10 ? (
                                <span style={{ display: "none" }}></span>
                              ) : (
                                <span
                                  className="cameraBox"
                                  onClick={() => fileInputRef.current.click()}
                                  onChange={handleFileChangeImage}
                                >
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontWeight: "600",
                                      textAlign: "center",
                                      fontSize: "13px",
                                    }}
                                  >
                                    Add More Images
                                  </Typography>
                                  <AddIcon />
                                </span>
                              )}
                            </>
                          )}
                          {_images.length > 0 && (
                            <span>
                              {_images.map((image, index) => (
                                <span
                                  key={index}
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                  }}
                                >
                                  <img
                                    src={image}
                                    alt={`Uploaded ${index}`}
                                    style={{ width: "40px", height: "40px" }}
                                    className="uploadedImg"
                                  />
                                  <span
                                    onClick={() => removeImage(image)}
                                    className="ImgcloseBtn"
                                  >
                                    <CloseIcon />
                                  </span>
                                </span>
                              ))}
                            </span>
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          onChange={onImageChange}
                          style={{ display: "none" }}
                          multiple
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box mt={2}>
                      <InputField
                        _isloading={props._isloading}
                        name={location.name}
                        Placeholder_name={location.Placeholder_name}
                        valueName={location.value}
                        label={location.label}
                        fullWidth
                        yourMaxLengthValue={120}
                      />
                    </Box>
                  </Grid>

                  {/* <Box mt={2}>
                    <LocationDialog
                      address={props?.address}
                      setAddress={props?.setAddress}
                      coordinates={props?.coordinates}
                      setCoordinates={props?.setCoordinates}
                    />
                  </Box> */}
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box mt={2}>
                      <InputField
                        _isloading={props._isloading}
                        name={landmark.name}
                        Placeholder_name={landmark.Placeholder_name}
                        valueName={landmark.value}
                        label={landmark.label}
                        fullWidth
                        yourMaxLengthValue={120}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box mt={2}>
                      <InputField
                        _isloading={props._isloading}
                        name={localArea.name}
                        Placeholder_name={localArea.Placeholder_name}
                        valueName={localArea.value}
                        label={localArea.label}
                        fullWidth
                        yourMaxLengthValue={120}
                      />
                    </Box>
                  </Grid>

                  <Box>
                    <Box display={"flex"} gap={"20px"} mt={2}>
                      <Box
                        display={"inline-flex"}
                        alignItems={"center"}
                        className="checkboxStyle"
                      >
                        <span style={{ color: "black" }}>
                          Terms & Conditions
                        </span>
                        <Checkbox
                          required
                          checked={props?._consition}
                          onClick={termConditionCheck}
                        />
                      </Box>
                      <Box
                        display={"inline-flex"}
                        alignItems={"center"}
                        className="checkboxStyle"
                      >
                        <span style={{ color: "black" }}>
                          Featured Property
                        </span>
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
                    <Box
                      display={"flex"}
                      gap={"20px"}
                      justifyContent={"left"}
                    ></Box>
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
