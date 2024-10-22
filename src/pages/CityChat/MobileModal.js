import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import AccordionComponent from "../CityChat/AccordionComponent";
import PriceRangeComponent from "../../component/PriceRangeComponent";
import StateComponent from "../../component/StateComponent";

const MobileModal = () => {
  const CheckBoxName = [
    {
      name: "Residential",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];

  const CheckBoxName1 = [
    {
      name: "Commercial",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];

  const CheckBoxName2 = [
    {
      name: "Agriculture",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];

  const State_name = [
    { name: "Uttar Pradesh" },
    { name: "Delhi" },
    { name: "Gujarat" },
  ];

  const City_name = [
    { name: "Agra" },
    { name: "Mumbai" },
    { name: "Delhi" },
    { name: "Bangalore" },
  ];

  const City_name_LocalArea = [
    { name: "Pashchim Puri" },
    { name: "Sikandra" },
    { name: "Bodla" },
    { name: "Fatehabad Road" },
    { name: "Kamla Nagar" },
  ];

  return (
    <Box
      overflowY={"auto"}
      sx={{
        maxHeight: "80vh",

        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      <Box mb={2}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontSize: "500", fontSize: "20px" }}
        >
          Property category
        </Typography>
      </Box>
      {CheckBoxName.map((data, index) => (
        <AccordionComponent key={index} data={data} index={index} />
      ))}
      <Box m={"8px 0 0 0"}>
        <Divider className="devider" />
      </Box>
      {CheckBoxName1.map((data, index) => (
        <AccordionComponent key={index} data={data} index={index} />
      ))}
      <Box m={"8px 0 0 0"}>
        <Divider className="devider" />
      </Box>
      {CheckBoxName2.map((data, index) => (
        <AccordionComponent key={index} data={data} index={index} />
      ))}
      <Box m={"8px 0 0 0"}>
        <Divider className="devider" />
      </Box>
      <Box>
        <PriceRangeComponent />
      </Box>
      <Box m={"8px 0 0 0"}>
        <Divider className="devider" />
      </Box>
      <Box>
        <StateComponent
          StattName={State_name}
          type="Select State"
          name="State"
        />
      </Box>
      <Box m={"8px 0 0 0"}>
        <Divider className="devider" />
      </Box>
      <Box>
        <StateComponent StattName={City_name} type="Select City" name="City" />
      </Box>
      <Box m={"8px 0 0 0"}>
        <Divider className="devider" />
      </Box>
      <Box>
        <StateComponent
          StattName={City_name_LocalArea}
          type="Select Local Area"
          name="Local Area"
        />
      </Box>
      <Box m={"8px 0 0 0"}>
        <Divider className="devider" />
      </Box>
    </Box>
  );
};

export default MobileModal;
