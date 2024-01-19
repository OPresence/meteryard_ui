import React, { useEffect, useRef, useMemo, useState } from "react";
// import JoditEditor from "jodit-react";
import dynamic from "next/dynamic";

const DynamicJoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

import AdminLayout from "../../../layout/AdminLayout";
import { Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";

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
    "& .headingBox": {
      padding: "15px 0",
      "& h1": {
        fontSize: "16px",
        fontWeigth: "600",
      },
    },
  },
}));
const JoditComponent = ({ _initial_state, set_Content_State, title }) => {
  const editor = useRef(null);
  //   const [_change_about, setChange_About] = useState("");

  return (
    <AdminLayout>
      <Root>
        <Box className="mainPage">
          <Box className="headingBox">
            <Typography variant="h1">{title}</Typography>
          </Box>
          <Divider />
          <Box mt={2}>
            <DynamicJoditEditor
              ref={editor}
              height="100%"
              name="answer"
              value={_initial_state}
              tabIndex={1} // tabIndex of textarea
              onBlur={(e) => {}}
              onChange={(e) => {
                set_Content_State(e.target.value);
              }}
            />
          </Box>
        </Box>
      </Root>
    </AdminLayout>
  );
};

export default JoditComponent;
