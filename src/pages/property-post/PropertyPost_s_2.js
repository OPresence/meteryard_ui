import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, FormControlLabel, Button } from "@mui/material";
import styled from "@emotion/styled";
import PostCheckBox from "../../component/PostCheckBox";
import { PostApiFunction } from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { SelectField, InputField } from "../../component/FormFields";

const PropertyPostScreenStyle = styled(Box)(({ theme }) => ({
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
    handleNameKeyDown,
    formField: {
      total_floors,
      floors_no,
      facing,
      project_name,
      add_title,
      description,
    },
  } = props;
  const [state, setState] = React.useState(false);
  const [_propertyList, setPropertyList] = React.useState([]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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

  const ProjectType = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.proSubTypeListWithProType,
      });
      if (res) {
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
    scrollToTop();
    console.log("bbbbbbbmbmbm");
  }, []);
  return (
    <PropertyPostScreenStyle>
      <Box className="mainBox">
        <Box className="HeadingBox">
          <Typography variant="h2">List Your Property</Typography>
          <Box className="CheckBox">
            <Box mb={1}>
              <Typography variant="h3">Property Type</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={total_floors.name}
                  data={badRoomNumberList}
                  valueName={total_floors.value}
                  label={total_floors.label}
                  Placeholder_name={total_floors.Placeholder_name}
                  yourMaxLengthValue={2}
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={floors_no.name}
                  Placeholder_name={floors_no.Placeholder_name}
                  valueName={floors_no.value}
                  label={floors_no.label}
                  fullWidth
                  data={bathroomNumberList}
                  yourMaxLengthValue={2}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <SelectField
                  _isloading={props._isloading}
                  name={facing.name}
                  valueName={facing.value}
                  Placeholder_name={facing.Placeholder_name}
                  label={facing.label}
                  fullWidth
                  data={props?._facinglist}
                  yourMaxLengthValue={120}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputField
                  _isloading={props._isloading}
                  name={project_name.name}
                  Placeholder_name={project_name.Placeholder_name}
                  valueName={project_name.value}
                  label={project_name.label}
                  fullWidth
                  yourMaxLengthValue={90}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputField
                  Placeholder_name={add_title.Placeholder_name}
                  _isloading={props._isloading}
                  name={add_title.name}
                  valueName={add_title.value}
                  label={add_title.label}
                  fullWidth
                  yourMaxLengthValue={120}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputField
                  Placeholder_name={description.Placeholder_name}
                  _isloading={props._isloading}
                  name={description.name}
                  valueName={description.value}
                  label={description.label}
                  fullWidth
                  yourMaxLengthValue={250}
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
