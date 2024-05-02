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

const PropertyPostScreenStyle = styled("Box")(({ theme }) => ({
  "& .borderBox": {
    width: "250px",
    height: "350px",
    position: "absolute",
  },

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
        alignItems: "center",
      },
    },
  },
  "& .buttonStyle": {
    padding: "5px 20px",
    borderRadius: "26px",
    color: "#000",
    margin: "0 15px 10px 0",
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
      fill: "red !important", // Change the fill color of the SVG icon to green
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const PropertyPost_s_1 = (props) => {
  const {
    handleCheckboxChange,
    _getfurnishing,
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
  const auth = useContext(AuthContext);
  const scrollToTop = () => {
    window.scrollTo({
      bottm: 900,
      left: 0,
      behavior: "smooth",
    });
  };
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
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <PropertyPostScreenStyle>
      <Box className="mainBoxS1">
        <Box className="HeadingBox">
          <Typography variant="h2">List Your Property</Typography>

          <Box className="CheckBox">
            {auth?._isloading ? (
              <Box display={"flex"} justifyContent={"center"} mb={2}>
                &nbsp;&nbsp;{" "}
                <CircularProgressComponent colorValue="#BADC54" size={40} />
              </Box>
            ) : (
              <>
                <Box mb={1} className="Property_Type">
                  <Typography variant="h3">Property Type</Typography>
                </Box>
                <Box>
                  {auth?._propertyList?.map((data, index) => (
                    <Box
                      display={"inline-flex"}
                      key={index}
                      style={{ padding: "0 0 0 10px" }}
                    >
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
                  data={_getfurnishing}
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
