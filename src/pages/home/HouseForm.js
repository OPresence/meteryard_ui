import React, { useContext, useRef, useState } from "react";
import {
  Button,
  Grid,
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Typography,
  Icon,
} from "@mui/material";
import { styled } from "@mui/system";
import "react-phone-input-2/lib/style.css";
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressComponent from "../../component/CircularProgressComponent";
import VideocamIcon from "@mui/icons-material/Videocam";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { AuthContext } from "../../context/Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocationDialog from "../../component/LocationDialog";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FlareSharp } from "@mui/icons-material";
import { AiFillWarning } from "react-icons/ai";
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
      marginBottom:"20px"
     },
  },
}));
const PriceBox = styled("Box")(({ theme }) => ({
  "& .mainPriceBox": {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #676767",
    "& h2": {
      fontSize: "15px",
      fontWeight: "600",
    },
    "& .videoBox": {
      padding: "5px",
      border: "1px solid #676767",
      borderRadius: "10px",
      cursor: "pointer",
      "& h2": {
        marginTop: "10px",
        fontSize: "10px",
        fontWeight: "500",
        textAlign: "center",
        width: "60px",
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
        display:"block !important",
      },
      "& .CoverImage": {
        "@media(max-width:615px)": {
          marginBottom:"10px",
        },
      },
      "& .multipleImageBox": {
        "@media(max-width:615px)": {
         alignItems: "start"
        },
      },
      
    }
  },
  "& .checkboxStyle span": {
    "@media(max-width:615px)": {
     fontSize:"13px",
     padding:"0px !important",
     margin:"0px",
    },
  }
}));

const HouseForm = ({
  
  handleClose,
  _image_upload,
  _isloading,
  AdPropertyFunction,
  selectedImages,
  setSelectedImages,
  setCoverImage,
  imageUploadFunction,
  _coverImage,
  address,
  setAddress,
  coordinates,
  setCoordinates,
  _checked,
  setChecked,
  _consition,
  setConsition,
  _propertyList,
  CoverImageFunction,
}) => {
  const fileInputRef = useRef(null);
  const Auth = useContext(AuthContext);
  const [_videoupload, setVideoUpload] = useState(false);
  const termConditionCheck = (event) => {
    if (!_consition) {
      setConsition(true);
    } else {
      setConsition(false);
    }
  };
  const handleChangeCheck = (event) => {
    if (!_checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
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
      name: "Owner",
    },
    {
      name: "Dealer",
    },
    {
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
  const [selectedImages1, setSelectedImages1] = useState([]);
  console.log("selectedImages---->", selectedImages);
  const [_initialstate, setInitialState] = useState({
    listed_name: "",
    furnishing: "",
    bedrooms: "",
    bathrooms: "",
    super_building: "",
    carpet_area: "",
    total_floors: "",
    floors_no: "",
    facing: "",
    project_name: "",
    add_title: "",
    description: "",
    price: "",
    location: "",
    coverImage: "",
    typeProperty: "",
  });

  const formValidationSchemaDepartment = yep.object().shape({
    listed_name: yep.string().required("listed by is required."),
    furnishing: yep
      .string()
      .typeError("please enter number only")
      .required("furnishing is required."),
    bedrooms: yep
      .number()
      .typeError("please enter number only")
      .min(0)
      .max(9)
      .moreThan(-1, "negative values not accepted")
      .required("bedrooms is required."),
    bathrooms: yep
      .number()
      .required("bathrooms is required.")
      .typeError("please enter number only")
      .min(0)
      .max(9)
      .moreThan(-1, "negative values not accepted"),
    super_building: yep.string().required("super buildup area is required."),
    carpet_area: yep.string().required("carpet area is required."),
    total_floors: yep.string().required("total floors is required."),
    floors_no: yep.string().required("floors no is required."),
    facing: yep.string().required("facing is required."),
    project_name: yep.string().required("project name is required."),
    add_title: yep.string().required("add title is required."),
    description: yep.string().required("description is required."),
    price: yep.string().required("price is required."),
    // coverImage: yep.string().required("cover image is required."),
    typeProperty: yep.string().required("property type is required."),
  });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the video duration is less than or equal to 30 seconds
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = async function () {
        if (video.duration > 30) {
          alert("Please upload a video that is 30 seconds or shorter.");
          // Optionally, you can clear the file input
          fileInputRef.current.value = "";
        } else {
          try {
            setVideoUpload(true);
            const res = await imageUploadFunction(e.target.files[0]);

            if (res?.responseCode == 200) {
              setVideoUpload(false);
            }
          } catch (error) {
            setVideoUpload(false);
          }
        }
      };
      video.src = URL.createObjectURL(file);
    }
  };
  const handleFileChangeImage = (e) => {
    const files = e.target.files;
    const images = [];
    const selectedImagesInfo = [];
    for (let i = 0; i < Math.min(files.length, 8); i++) {
      const file = files[i];
      const url = URL.createObjectURL(files[i]);
      images.push(url);
      const fileInfo = {
        file,
        url,
        name: file.name,
        type: file.type,
        size: file.size,
      };
      selectedImagesInfo.push(file);
    }
    setSelectedImages(selectedImagesInfo);

    setSelectedImages1(images);
  };
  
  return (
    <Box>
      <Box>
        <Typography variant="h2" style={{ fontWeight: "600" }}>
          List Your Property
        </Typography>
        <Box mt={2}>
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            Basic Information{" "}
          </Typography>
        </Box>
      </Box>
      <Formik
        initialValues={_initialstate}
        enableReinitialize={true}
        initialStatus={{
          success: false,
          successMsg: "",
        }}
        validationSchema={formValidationSchemaDepartment}
        onSubmit={(values, { resetForm }) => {
          console.log("authhdjshdj----->", Auth?._accesstoken);
          if (
            Auth?._accesstoken == null ||
            Auth?._accesstoken == undefined ||
            Auth?._accesstoken == ""
          ) {
            toast.error("Please login before.");
          } else {
            AdPropertyFunction(values)
              .then(() => {
                resetForm();
              })
              .catch((error) => {
                console.error("API call failed", error);
              });
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          touched,
          values,
          setFieldValue,
        }) => (
          <Form>
            <Box justifyContent={"center"} mt={1} mb={5}>
              <Grid container spacing={2}>
                <Grid item lg={7} md={7}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Type*{" "}
                          </InputLabel>
                          <Select
                            disabled={_image_upload || _isloading}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Type*"
                            name="typeProperty"
                            value={values?.typeProperty}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {propertyType &&
                              propertyType?.map((data, index) => {
                                return (
                                  <MenuItem value={data?.value}>
                                    {data?.name}
                                  </MenuItem>
                                );
                              })}
                          </Select>
                          <FormHelperText error>
                            {touched.typeProperty && errors.typeProperty}
                          </FormHelperText>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            listed by
                          </InputLabel>
                          <Select
                            disabled={_image_upload || _isloading}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="listed by"
                            name="listed_name"
                            value={values?.listed_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {listedData &&
                              listedData?.map((data, index) => {
                                return (
                                  <MenuItem value={data?.name}>
                                    {data?.name}
                                  </MenuItem>
                                );
                              })}
                          </Select>
                          <FormHelperText error>
                            {touched.listed_name && errors.listed_name}
                          </FormHelperText>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            furnishing
                          </InputLabel>
                          <Select
                            disabled={_image_upload || _isloading}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Select state"
                            name="furnishing"
                            value={values?.furnishing}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {furnishingList &&
                              furnishingList?.map((data, index) => {
                                return (
                                  <MenuItem value={data?.name}>
                                    {data?.name}
                                  </MenuItem>
                                );
                              })}
                          </Select>
                          <FormHelperText error>
                            {touched.furnishing && errors.furnishing}
                          </FormHelperText>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="bedrooms"
                          variant="outlined"
                          placeholder="Enter bedrooms number"
                          name="bedrooms"
                          value={values?.bedrooms}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.bedrooms && errors.bedrooms}
                        </FormHelperText>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="bathrooms"
                          variant="outlined"
                          placeholder="Enter bathrooms number"
                          name="bathrooms"
                          value={values?.bathrooms}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.bathrooms && errors.bathrooms}
                        </FormHelperText>
                      </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="super buildup area *"
                          variant="outlined"
                          placeholder="Enter super buildup area"
                          name="super_building"
                          value={values?.super_building}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.super_building && errors.super_building}
                        </FormHelperText>
                      </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="carpet area"
                          variant="outlined"
                          placeholder="Enter carpet area"
                          name="carpet_area"
                          value={values?.carpet_area}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.carpet_area && errors.carpet_area}
                        </FormHelperText>
                      </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="total floors"
                          variant="outlined"
                          placeholder="Enter total floors"
                          name="total_floors"
                          value={values?.total_floors}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.total_floors && errors.total_floors}
                        </FormHelperText>
                      </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="floors no"
                          variant="outlined"
                          placeholder="Enter floors no."
                          name="floors_no"
                          value={values?.floors_no}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.floors_no && errors.floors_no}
                        </FormHelperText>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="facing"
                          variant="outlined"
                          placeholder="Enter facing"
                          name="facing"
                          value={values?.facing}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.facing && errors.facing}
                        </FormHelperText>
                      </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="project name"
                          variant="outlined"
                          placeholder="Enter project name"
                          name="project_name"
                          value={values?.project_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.project_name && errors.project_name}
                        </FormHelperText>
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="add title*"
                          variant="outlined"
                          placeholder="Enter add title"
                          name="add_title"
                          value={values?.add_title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.add_title && errors.add_title}
                        </FormHelperText>
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Box mt={2}>
                        <TextField
                          style={{ height: "80px" }}
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="description*"
                          variant="outlined"
                          placeholder="Enter description"
                          name="description"
                          value={values?.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          MuiInputBase-root-MuiOutlinedInput-root
                          sx={{
                            height: "80px", // Set the height here
                            "& .MuiInputBase-root.MuiOutlinedInput-root": {
                              height: "100%", // Set the height here
                            },
                            "& .MuiOutlinedInput-input": {
                              height: "100%", // Set the height for the input element
                            },
                          }}
                        />
                        <FormHelperText error>
                          {touched.description && errors.description}
                        </FormHelperText>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={4} md={3} sm={12} xs={12}>
                  <PriceBox>
                    <Box className="mainPriceBox">
                      <Box>
                        <Typography variant="h2">SET A PRICE</Typography>
                        <Box mt={2}>
                          <TextField
                            fullWidth
                            disabled={_image_upload || _isloading}
                            id="outlined-basic"
                            label="price*"
                            variant="outlined"
                            placeholder="Enter price"
                            name="price"
                            value={values?.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <FormHelperText error>
                            {touched.price && errors.price}
                          </FormHelperText>
                        </Box>
                        <Box display={"flex"} mt={2} gap={"15px"} className="main-upload-file">
                        <Box
                              display={"flex"}
                              gap={"5px"}
                            >
                          <label>
                            <Box className="videoBox">
                              <Typography variant="h2">
                                upload 30 sec video
                              </Typography>
                              <Box textAlign={"center"} mt={1}>
                                <input
                                  type="file"
                                  accept="video/*"
                                  capture="user"
                                  style={{ display: "none" }}
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                  onInvalid={() => {
                                    alert("Please upload a valid video file.");
                                    // Optionally, you can clear the file input
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
                              {_videoupload && (
                                <>
                                  <CircularProgressComponent />
                                </>
                              )}
                            </Box>
                          </label>
                          <label>
                            <Box className="videoBox CoverImage">
                              <Typography variant="h2">Cover Image</Typography>
                              <Box textAlign={"center"} mt={"20px"}>
                                <input
                                  type="file"
                                  accept="image/*"
                                  style={{ display: "none" }}
                                  // ref={fileInputRef}
                                  name="coverImage"
                                  onChange={(e) => {
                                    const selectedImage = e.target.files[0];
                                    if (selectedImage) {
                                      CoverImageFunction(e.target.files[0]);
                                      setCoverImage(selectedImage);
                                      const imageUrl =
                                        URL.createObjectURL(selectedImage);
                                      setCoverImage(imageUrl); // Create state for preview image
                                    }
                                  }}
                                  onBlur={handleBlur}
                                />
                                {/* Display the preview image */}
                                {_coverImage && (
                                  <Box maxWidth={100}>
                                    <img
                                      src={_coverImage}
                                      alt="Cover Preview"
                                      style={{ width: "100%" }}
                                    />
                                  </Box>
                                )}
                                <CameraAltIcon style={{ cursor: "pointer" }} />
                              </Box>
                            </Box>
                            <FormHelperText error>
                              {touched.coverImage && errors.coverImage}
                            </FormHelperText>
                          </label>{" "}
                          </Box>
                          <Box
                            display={"flex"}
                            flexDirection={"column"} // Display items in a column
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
                                onChange={handleFileChangeImage}
                                multiple
                              />

                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"} // Center items horizontally
                                gap={"6px"}
                              >
                                {selectedImages1
                                  .slice(0, 4)
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
                                    length: Math.max(
                                      0,
                                      4 - selectedImages1.length
                                    ),
                                  },
                                  (_, index) => (
                                    <Box key={index} className="cameraBox">
                                      <CameraAltIcon />
                                    </Box>
                                  )
                                )}
                              </Box>
                              {selectedImages1?.length >= 4 ? (
                                <Box
                                  mt={1}
                                  display={"flex"}
                                  alignItems={"center"}
                                  justifyContent={"center"} // Center items horizontally
                                  gap={"6px"}
                                >
                                  {selectedImages1
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
                                      length: Math.max(
                                        0,
                                        8 - selectedImages1.length
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
                                  {selectedImages1
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
                        <TextField
                          fullWidth
                          disabled={_image_upload || _isloading}
                          id="outlined-basic"
                          label="location"
                          variant="outlined"
                          placeholder="Enter location"
                          name="location"
                          value={values?.location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormHelperText error>
                          {touched.location && errors.location}
                        </FormHelperText>
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <LocationDialog
                        address={address}
                        setAddress={setAddress}
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                      />
                    </Box>
                    <Box>
                      <Box display={"flex"} gap={"20px"} mt={2}>
                        <Box display={"inline-flex"} alignItems={"center"} className="checkboxStyle">
                          <span>Terms & Condition</span>
                          <Checkbox
                            required
                            checked={_consition}
                            // onClick={(e) => setConsition(e.target.value)}
                            onClick={termConditionCheck}
                          />
                        </Box>
                        <Box display={"inline-flex"} alignItems={"center"} className="checkboxStyle">
                          <span>Featured Property</span>
                          <Checkbox
                            checked={_checked}
                            onClick={handleChangeCheck}
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
                        <Button
                          onClick={handleClose}
                          disabled={_image_upload || _isloading || _videoupload}
                        >
                          <span>CANCEL</span>
                        </Button>
                        <Button
                          disabled={_image_upload || _isloading || _videoupload}
                          type="submit"
                          style={{
                            background: "#A2D117",
                          }}
                        >
                          <span>Add Property</span>
                          {_isloading && (
                            <>
                              &nbsp;&nbsp;
                              <CircularProgressComponent colorValue="#fff" />
                            </>
                          )}
                        </Button>
                        {_image_upload && (
                          <Box>
                            &nbsp;&nbsp;
                            <CircularProgressComponent colorValue="#000" />
                          </Box>
                        )}
                      </Box>
                    </DialogButtonStyle>
                  </Box>
                </Grid>
                <Grid item lg={1} md={1}></Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default HouseForm;
