import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Button,
  CircularProgress,
} from "@mui/material";
import styled from "@emotion/styled";
import CircularProgressComponent from "../../component/CircularProgressComponent";

import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { SelectField, InputField } from "./FormFields";
import { withStyles } from "@material-ui/core/styles";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const PropertyPostScreenStyle = styled("Box")(({ theme }) => ({
  "& .borderBox": {
    width: "250px",
    height: "350px",
    position: "absolute",
  },
  "& .mainBox": {
    height: "500px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    borderRadius: "15px",
    position: "relative",
  },
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
        // display: "flex",
        alignItems: "center",
      },
    },
  },
  "& .buttonStyle": {
    padding: "5px 20px",
    borderRadius: "26px",
    color: "#000",
  },
}));
const GreenCheckbox = withStyles({
  root: {
    color: "#b8db53",
    "&$checked": {
      color: "#b8db53",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const PropertyPost_s_1 = (props) => {
  const {
    _getproprty_type,
    handleCheckboxChange,
    setGetProject_sub_Type,
    setGetPropetyType,
    _getproject_sub_type,
    formField: {
      listed_name,
      furnishing,
      bedrooms,
      bathrooms,
      super_building,
      carpet_area,
    },
  } = props;
  const [_propertyList, setPropertyList] = React.useState([]);
  const [_subytypelist, setSubTypeList] = useState([]);
  const [_isloading, setIsLoading] = useState(false);

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
  const ProjectType = async () => {
    try {
      setIsLoading(true);

      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllProjectType,
      });
      if (res) {
        setGetPropetyType(res?.result?.docs[0]?._id);
        if (res?.responseCode == 200) {
          setIsLoading(false);

          setPropertyList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setIsLoading(false);

          setPropertyList([]);
          toast.error(res?.responseMessage);
          setPropertyList([]);
        } else if (res?.responseCode == 404) {
          setIsLoading(false);

          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setIsLoading(false);

          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setIsLoading(false);

          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      setIsLoading(false);

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
        setGetProject_sub_Type(res?.result?.docs[0]?._id);
        setSubTypeList(res?.result?.docs);
      } else if (res?.responseCode == 404) {
        setSubTypeList([]);
        toast.error(res?.responseMessage);
        setSubTypeList([]);
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
    if (_getproprty_type) {
      SubProjectType();
    }
  }, [_getproprty_type]);
  useEffect(() => {
    ProjectType();
  }, []);

  return (
    <PropertyPostScreenStyle>
      <Box className="mainBox">
        <Box className="HeadingBox">
          <Typography variant="h2">List Your property</Typography>
          <Box className="CheckBox">
            {_isloading ? (
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
                <Box mb={1}>
                  <Typography variant="h3">Property Type</Typography>
                </Box>
                <Grid container spacing={3}>
                  {_propertyList.map((data, index) => (
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <div key={index}>
                        <FormControlLabel
                          control={
                            <GreenCheckbox
                              checked={_getproprty_type === data?._id}
                              onChange={() => handleCheckboxChange(data?._id)}
                            />
                          }
                          label={data?.projectType}
                        />
                      </div>
                    </Grid>
                  ))}
                </Grid>
                <Box>
                  <Typography variant="h3">Property Category</Typography>
                </Box>
                <Box mb={2} mt={1}>
                  <Grid container spacing={3}>
                    {_subytypelist &&
                      _subytypelist?.map((data) => {
                        return (
                          <>
                            <Grid
                              item
                              lg={data?.projectSubType?.length >= 8 ? 3 : 2}
                              md={2}
                              sm={4}
                              xs={6}
                            >
                              <Button
                                className="buttonStyle"
                                style={
                                  _getproject_sub_type == data?._id
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
                                key={data?._id}
                                onClick={() =>
                                  setGetProject_sub_Type(data?._id)
                                }
                              >
                                {data?.projectSubType}
                              </Button>
                            </Grid>
                            &nbsp;&nbsp;
                          </>
                        );
                      })}
                  </Grid>
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
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <SelectField
                  _isloading={props._isloading}
                  name={bedrooms.name}
                  valueName={bedrooms.value}
                  label={bedrooms.label}
                  fullWidth
                  data={badRoomNumberList}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
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
                  label={super_building.label}
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={carpet_area.name}
                  valueName={carpet_area.value}
                  label={carpet_area.label}
                  fullWidth
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
