import Footer from "../../layout/HomeLayout/Footer";
import React from "react";
import Topbar from "../../layout/HomeLayout/Topbar";
import NavBar from "@/layout/DashboardLayout/NavBar";
import CardComponent from "@/component/CardComponent";
import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <React.Fragment>
      <Topbar />
   
      <Box sx={{ mt: "14rem", ml: "22rem" }}>
       
        <NavBar />
        <CardComponent />
      </Box>
    </React.Fragment>
  );
};

export default index;
