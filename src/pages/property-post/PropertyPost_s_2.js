import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, FormControlLabel, Button } from "@mui/material";
import styled from "@emotion/styled";
import PostCheckBox from "../../component/PostCheckBox";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { SelectField, InputField } from "./FormFields";

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
}));

const PropertyPost_s_2 = (props) => {
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
      coverImage,
      typeProperty,
    },
  } = props;
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
  console.log("bdhjfds---->", _projecttype);
  return (
    <PropertyPostScreenStyle>
      <Box className="mainBox">
        <Box className="HeadingBox">
          <Typography variant="h2">List Your property</Typography>
          <Box className="CheckBox">
            <Box mb={1}>
              <Typography variant="h3">Property Type</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <SelectField
                  _isloading={props._isloading}
                  name={total_floors.name}
                  data={badRoomNumberList}
                  valueName={total_floors.value}
                  label={total_floors.label}
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <SelectField
                  _isloading={props._isloading}
                  name={floors_no.name}
                  valueName={floors_no.value}
                  label={floors_no.label}
                  fullWidth
                  data={bathroomNumberList}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={facing.name}
                  valueName={facing.value}
                  label={facing.label}
                  fullWidth
                  data={badRoomNumberList}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={project_name.name}
                  valueName={project_name.value}
                  label={project_name.label}
                  fullWidth
                  data={bathroomNumberList}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={add_title.name}
                  valueName={add_title.value}
                  label={add_title.label}
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={description.name}
                  valueName={description.value}
                  label={description.label}
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

export default PropertyPost_s_2;