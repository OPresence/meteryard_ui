import React from "react";
import TableList from "../admin/component/TableList";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import FilterComponent from "../admin/component/FilterComponent";
import AdminLayout from "../../layout/AdminLayout";

const Root = styled("Box")(({ theme }) => ({
  "& .mainPage": {
    position: "relative", // Add position relative to enable positioning of ::before pseudo-element
    background: "#fff",
    borderRadius: "15px",
    padding: "20px",
    height: "100%",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderTop: "9px solid #444444", // Customize the border as needed
      borderRadius: "20px", // Use the same border radius as the main container
      pointerEvents: "none", // Ensure the pseudo-element doesn't interfere with interactions
      boxSizing: "border-box", // Include border in the total width/height
    },
  },
}));
const index = () => {
  return (
    <AdminLayout>
      <Root>
        <Box className="mainPage">
          <Box mt={2}>
            <FilterComponent
              title="Enquiries"
              ButtonName="enquery"
              HeadingDialog="Create Admin"
            />
          </Box>

          <Box mt={3}>
            <TableList />
          </Box>
        </Box>
      </Root>
    </AdminLayout>
  );
};

export default index;
