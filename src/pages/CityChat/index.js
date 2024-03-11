import React from "react";
import TopBar from "../../layout/HomeLayout/Topbar";
import Footer from "../../layout/HomeLayout/Footer";
import FilterSection from "./FilterSection";
import { Box } from "@mui/material";
import DashboardLayout from "src/layout/DashboardLayout";
import LeadBox from "../Lead-Box/LeadBox";
const index = () => {
  return (
    <div>
      <DashboardLayout>
        <Box>
          <FilterSection />
        </Box>
      </DashboardLayout>

      {/* <Footer /> */}
    </div>
  );
};

export default index;
