import React from "react";
import AccordionComponent from "../../pages/CityChat/AccordionComponent";
import PriceRangeComponent from "../../component/PriceRangeComponent";
import StateComponent from "../../component/StateComponent";
import { styled } from "@mui/system";
import { Box, Divider } from "@mui/material";
const Filterstyle = styled("div")(({ theme }) => ({
  "& .mainBoxFilter": {
    marginTop: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    "& .devider": {
      background: "#00000040",
      position: "relative",
      zIndex: 1,
    },
  },
}));
const FilterComponent = () => {
  const CheckBoxName = [
    {
      name: "residential",
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
      name: "commercial",
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
      name: "agriculture",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];
  const State_name = [
    {
      name: "Uttar Pradesh",
    },
    {
      name: "Delhi",
    },
    {
      name: "Gujarat",
    },
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
  const SellerList = [
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/Describe-a-Foreign-Person-You-Are-Interested-In-1.png",
      online: true,
    },
    {
      name: "Monu Rajput",
      img: "/images/images (2).png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/Describe-a-Foreign-Person-You-Are-Interested-In-1.png",
      online: true,
    },
    {
      name: "Monu Rajput",
      img: "/images/images (2).png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/Describe-a-Foreign-Person-You-Are-Interested-In-1.png",
      online: true,
    },
    {
      name: "Monu Rajput",
      img: "/images/images (2).png",
      online: false,
    },
    {
      name: "Monu Rajput",
      img: "/images/1567018939360.png",
      online: false,
    },
  ];
  return (
    <Filterstyle>
      <Box className="mainBoxFilter">
        {CheckBoxName.map((data, index) => {
          return (
            <AccordionComponent
              key={index}
              data={data}
              index={index}
              imgURL="/images/Group 8163.png"
            />
          );
        })}
        <Box m={"10px 0 0 0"}>
          <Divider className="devider" />
        </Box>

        {CheckBoxName1.map((data, index) => {
          return (
            <AccordionComponent
              key={index}
              data={data}
              index={index}
              imgURL="/images/Group 8164.png"
            />
          );
        })}
        <Box m={"10px 0 0 0"}>
          <Divider className="devider" />
        </Box>

        {CheckBoxName2.map((data, index) => {
          return (
            <AccordionComponent
              key={index}
              data={data}
              index={index}
              imgURL="/images/Group 8165.png"
            />
          );
        })}
        <Box m={"10px 0 0 0"}>
          <Divider className="devider" />
        </Box>
        <Box>
          <PriceRangeComponent imgURL="/images/Group 8346.png" />
        </Box>
        <Box m={"10px 0 0 0"}>
          <Divider className="devider" />
        </Box>
        <Box>
          <StateComponent
            StattName={State_name}
            type="Select State"
            name="State"
            imgURL="/images/Group 8180.png"
          />
        </Box>
        <Box m={"10px 0 0 0"}>
          <Divider className="devider" />
        </Box>
        <Box>
          <StateComponent
            StattName={City_name}
            type="Select City"
            name="City"
            imgURL="/images/Group 8179.png"
          />
        </Box>
        <Box m={"10px 0 0 0"}>
          <Divider className="devider" />
        </Box>
        <Box>
          <StateComponent
            StattName={City_name_LocalArea}
            type="Select Local Area"
            imgURL="/images/Group 8180.png"
            name="Local Area"
          />
        </Box>
        <Box m={"10px 0 0 0"}>
          <Divider className="devider" />
        </Box>
      </Box>
    </Filterstyle>
  );
};

export default FilterComponent;
