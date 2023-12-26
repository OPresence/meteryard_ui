import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import AccordionComponent from "./AccordionComponent";
import Divider from "@mui/material/Divider";
import PriceRangeComponent from "src/component/PriceRangeComponent";
import StateComponent from "src/component/StateComponent";
import { useRouter } from "next/router";
import CityProperty from "./CityProperty";
import PostSection from "./PostSection/index";
import AdvertisementComponent from "../../component/AdvertisementComponent";
import SellerListComponent from "src/component/SellerListComponent";
import SellerUploadProperty from "src/component/SellerUploadProperty";
import EnquiryForm from "./EnquiryForm";
const BuyerStyle = styled("div")(({ theme }) => ({
  "& .mainBox": {
    background: theme.palette.background.default,
    "& .EnquiryButton": {
      background: "#BADF4E",
      color: "#000",
      borderRadius: "50px",
      padding: "10px 30px",
      "& span": {
        fontSize: "12px",
      },
    },
    "& .SellerBox": {
      padding: "20px",
      boxShadow: "0px 1px 13px #00000026",
    },
    "& .filterBox": {
      padding: "15px",
      // boxShadow: theme.shadows[3],
      boxShadow: "0px 1px 13px #00000026",
      "& .devider": {
        background: "#00000040",
      },
      "& h2": {
        fontWeight: "600",
      },
      "& .imgBox": {
        background: "#fff",
        borderRadius: "100px",
        maxWidth: 60,
        minHeight: 60,
        maxHeight: 60,
        boxShadow: theme.shadows[2],
        overflow: "hidden",
        "& img": {
          width: "70px",
          height: "70px",
        },
      },
    },
  },
}));
const FilterSection = () => {
  const router = useRouter();
  const [open, setOpen] = useState("");
  const { BuyerKey } = router.query;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <BuyerStyle>
      <Box minHeight={"100vh"} mt={"30px"} className="mainBox">
        <Container maxWidth style={{ padding: "0 0 0 25px" }}>
          <Grid container spacing={3}>
            {/* <Grid item lg={3} md={3}>
              <Box className="filterBox">
                <Box display={"flex"} alignItems={"center"}>
                  <Box className="imgBox">
                    <img
                      src="/images/meteryard/Images/Image 23.png"
                      width={"100%"}
                    />
                  </Box>
                  &nbsp;&nbsp;&nbsp;
                  <Typography variant="h6">Monu Rajput</Typography>
                </Box>
                <Box>
                  <Box m={"10px 0"}>
                    <Typography variant="h2">property category</Typography>
                  </Box>
                  {CheckBoxName.map((data, index) => {
                    return (
                      <AccordionComponent
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
              </Box>
            </Grid> */}
            <Grid
              item
              lg={8}
              md={8}
              style={{
                overflow: "hidden",
              }}
              sm={8}
              xs={8}
            >
              <Box p={"5px"}>
                <CityProperty />
                {BuyerKey == "Seller" && (
                  <Box mt={2}>
                    <Button className="EnquiryButton" onClick={handleClickOpen}>
                      <span>Raise Enquiry</span>
                    </Button>
                  </Box>
                )}
                {BuyerKey == "Seller" && (
                  <Box>
                    <SellerUploadProperty />
                  </Box>
                )}

                <PostSection />
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <Box>
                <Box m={"0 0px 10px 0"}>
                  <Typography variant="h6">Sponsored</Typography>
                </Box>
                <AdvertisementComponent />
                <Box m={"10px 0"}>
                  <Typography variant="h6">
                    {BuyerKey == "Seller" ? "Seller's" : "Buyer's"}
                  </Typography>
                </Box>
                <Box className="SellerBox">
                  {SellerList &&
                    SellerList?.map((data, index) => {
                      return (
                        <Box m={"20px 0"}>
                          <SellerListComponent data={data} index={index} />
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <EnquiryForm
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />
        </Container>
      </Box>
    </BuyerStyle>
  );
};

export default FilterSection;
