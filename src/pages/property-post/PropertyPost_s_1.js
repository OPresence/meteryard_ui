import React, { useEffect, useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import styled from "@emotion/styled";
import CircularProgressComponent from "../../component/CircularProgressComponent";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { SelectField, InputField } from "../../component/FormFields";
import { withStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../context/Auth";
import Checkbox from "@material-ui/core/Checkbox";
import { fontSize } from "@mui/system";
const StepperStyle = styled("Stepper")(({ theme }) => ({
  "& .Mui-active .MuiSvgIcon-root": {
    color: "#badc54",
    fontSize: "1.8rem",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.8rem",
  },
  "& .MuiStepConnector-line": {
    borderTopWidth: "12px",
    borderColor: " #badc54",
    borderTopWidth: "9px",
  },
  "& .MuiStepLabel-iconContainer": {
    paddingRight: "0px",
  },
  "& .MuiStep-root": {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  "& .MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
    color: "red !important",
  },
}));
const PropertyPostScreenStyle = styled("Box")(({ theme }) => ({
  "& .borderBox": {
    width: "250px",
    height: "350px",
    position: "absolute",
  },
  // "& .MuiSvgIcon-root": {
  //   fontSize: "50px !important",
  // },
  "& .mainBoxS1": {
    "& .HeadingBox": {
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
        "@media(max-width:615px)": {
          padding: "10px 0",
        },
      },
      "& .CheckBox": {
        // display: "flex",
        alignItems: "center",
      },
      // "& .stepperBox": {
      //   display: "none",

      //   "@media(max-width:615px)": {
      //     width: "100%",
      //     display: "block",
      //   },
      //   "& .h2-class": {
      //     fontSize: "12px",
      //     fontWeight: "600",
      //     position: "absolute",
      //     top: "-24px",
      //     left: "-17px",
      //     width: "106px",
      //   },
      //   "& .h2-class1": {
      //     fontSize: "12px",
      //     fontWeight: "600",
      //     position: "absolute",
      //     top: "-24px",
      //     left: "-24px",
      //     width: "106px",
      //   },
      //   "& .h2-class2": {
      //     fontSize: "12px",
      //     fontWeight: "600",
      //     position: "absolute",
      //     top: "-24px",
      //     left: "-57px",
      //     width: "130px",
      //   },
      // },
    },
  },
  "& .buttonStyle": {
    padding: "5px 20px",
    borderRadius: "26px",
    color: "#000",
    margin: "0 5px 10px 0",
  },
  "& .Property_Type": {
    "& h3": {
      display: "block !important",
    },
    "@media(max-width:615px)": {
      paddingTop: "15px",
    },
  },
}));
const GreenCheckbox = withStyles({
  root: {
    color: "#b8db53",
    padding: "0px 10px 0 0 !important",
    // fontSize: "50px !important",

    "&$checked ": {
      color: "#b8db53",
      padding: "0px 10px 0 0 !important",
      // fontSize: "50px !important",
    },
    "& .MuiSvgIcon-root": {
      // fontSize: "50px !important",

      fill: "red !important", // Change the fill color of the SVG icon to green
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const PropertyPost_s_1 = (props) => {
  console.log("propsZzxzxz---->", props);
  const {
    // _getproprty_type,
    handleCheckboxChange,
    // setGetProject_sub_Type,
    setGetPropetyType,
    // auth?._getproject_sub_type,
    formField: {
      listed_name,
      furnishing,
      bedrooms,
      bathrooms,
      super_building,
      carpet_area,
      Placeholder_name,
    },
  } = props;
  console.log("formField--000>", listed_name);
  const auth = useContext(AuthContext);

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
      name: "Unfurnished",
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
  ];
  // const ProjectType = async () => {
  //   try {
  //     setIsLoading(true);

  //     const res = await PostApiFunction({
  //       endPoint: Apiconfigs?.listAllProjectType,
  //     });
  //     if (res) {
  //       setGetPropetyType(res?.result?.docs[0]?._id);
  //       if (res?.responseCode == 200) {
  //         setIsLoading(false);

  //         setPropertyList(res?.result?.docs);
  //       } else if (res?.responseCode == 404) {
  //         setIsLoading(false);

  //         setPropertyList([]);
  //         toast.error(res?.responseMessage);
  //         setPropertyList([]);
  //       } else if (res?.responseCode == 404) {
  //         setIsLoading(false);

  //         setPropertyList([]);

  //         toast.error(res?.responseMessage); // Display error notification
  //       } else if (res?.responseCode == 500) {
  //         setIsLoading(false);

  //         setPropertyList([]);

  //         toast.error(res?.responseMessage); // Display error notification
  //       } else {
  //         setIsLoading(false);

  //         setPropertyList([]);

  //         toast.error(res?.responseMessage); // Display error notification
  //       }
  //     }
  //   } catch (error) {
  //     setIsLoading(false);

  //     console.log("error");
  //     setPropertyList([]);
  //   }
  // };
  // const SubProjectType = async (id) => {
  //   try {
  //     const res = await PostApiFunction({
  //       endPoint: Apiconfigs?.listAllProjectSubType,
  //       data: {
  //         projectTypeId: _getproprty_type,
  //         page: "1",
  //         limit: "10",
  //       },
  //     });
  //     if (res?.responseCode == 200) {
  //       setGetProject_sub_Type(res?.result?.docs[0]?._id);
  //       setSubTypeList(res?.result?.docs);
  //     } else if (res?.responseCode == 404) {
  //       setSubTypeList([]);
  //       toast.error(res?.responseMessage);
  //       setSubTypeList([]);
  //     } else if (res?.responseCode == 404) {
  //       setSubTypeList([]);
  //       toast.error(res?.responseMessage); // Display error notification
  //     } else if (res?.responseCode == 500) {
  //       setSubTypeList([]);

  //       toast.error(res?.responseMessage); // Display error notification
  //     } else {
  //       setSubTypeList([]);

  //       toast.error(res?.responseMessage); // Display error notification
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  // React.useEffect(() => {
  //   if (_getproprty_type) {
  //     SubProjectType();
  //   }
  // }, [_getproprty_type]);
  // useEffect(() => {
  //   ProjectType();
  // }, []);

  return (
    <PropertyPostScreenStyle>
      <Box className="mainBoxS1">
        <Box className="HeadingBox">
          <Typography variant="h2">List Your Property</Typography>
          {/* <Box display={"flex"} justifyContent={"center"}>
            <Box mt={6} mb={1} className="stepperBox">
              <StepperStyle>
                <Stepper
                  activeStep={props?.activeStep}
                  className={"stepper"}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Step key={"label"} style={{ position: "relative" }}>
                    <StepLabel>
                      <Typography className="h2-class">
                        {"Property Details"}
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step key={"label"} style={{ position: "relative" }}>
                    <StepLabel>
                      <Typography className="h2-class1">
                        {"Area Details"}
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step key={"label"} style={{ position: "relative" }}>
                    <StepLabel>
                      <Typography className="h2-class2">
                        {"Images & Location"}
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>
              </StepperStyle>
            </Box>
          </Box> */}
          <Box className="CheckBox">
            {auth?._isloading ? (
              <Box display={"flex"} justifyContent={"center"} mb={2}>
                &nbsp;&nbsp;{" "}
                <CircularProgressComponent
                  colorValue="#BADC54"
                  size={40}
                  // className={"buttonProgress"}
                />
              </Box>
            ) : (
              <>
                <Box mb={1} className="Property_Type">
                  <Typography variant="h3">Property Type</Typography>
                </Box>
                <Box>
                  {auth?._propertyList?.map((data, index) => (
                    <Box display={"inline-flex"} key={index}>
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            className="MuiSvgIcon-root"
                            checked={auth?._getproprty_type === data?._id}
                            onChange={() => handleCheckboxChange(data?._id)}
                          />
                        }
                        label={data?.projectType}
                      />
                    </Box>
                  ))}
                </Box>
                <Box className="Property_Type">
                  <Typography variant="h3">Property Category</Typography>
                </Box>
                <Box mb={2} mt={1}>
                  {auth?._subytypelist &&
                    auth?._subytypelist?.map((data, index) => {
                      return (
                        <>
                          <Button
                            className="buttonStyle"
                            key={index}
                            style={
                              auth?._getproject_sub_type == data?._id
                                ? {
                                    background: "#BADC54",
                                    border: "1px solid #BADC54",
                                  }
                                : {
                                    background: "#fff",
                                    border: "1px solid #000",

                                    color: "#000",
                                  }
                            }
                            onClick={() =>
                              auth?.setGetProject_sub_Type(data?._id)
                            }
                          >
                            {data?.projectSubType}
                          </Button>
                          {/* &nbsp; &nbsp; */}
                        </>
                      );
                    })}
                </Box>
              </>
            )}
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <SelectField
                  _isloading={props._isloading}
                  name={listed_name.name}
                  data={listedData}
                  valueName={listed_name.value}
                  label={listed_name.label}
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <SelectField
                  _isloading={props._isloading}
                  name={furnishing.name}
                  valueName={furnishing.value}
                  label={furnishing.label}
                  fullWidth
                  data={furnishingList}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <SelectField
                  _isloading={props._isloading}
                  name={bedrooms.name}
                  valueName={bedrooms.value}
                  label={bedrooms.label}
                  fullWidth
                  data={badRoomNumberList}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <SelectField
                  _isloading={props._isloading}
                  name={bathrooms.name}
                  valueName={bathrooms.value}
                  label={bathrooms.label}
                  fullWidth
                  data={bathroomNumberList}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={super_building.name}
                  valueName={super_building.value}
                  Placeholder_name={super_building.Placeholder_name}
                  label={super_building.label}
                  fullWidth
                  yourMaxLengthValue={90}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={carpet_area.name}
                  valueName={carpet_area.value}
                  label={carpet_area.label}
                  fullWidth
                  Placeholder_name={carpet_area.Placeholder_name}
                  yourMaxLengthValue={25}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </PropertyPostScreenStyle>
  );
};

export default PropertyPost_s_1;
