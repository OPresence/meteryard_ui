import React from "react";
import { Avatar, Typography, Box, TextField, InputBase } from "@mui/material";
import styled from "@emotion/styled";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideocamIcon from "@mui/icons-material/Videocam";
const SellerUploadStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    boxShadow: "0px 1px 13px #00000026",
    padding: "20px",
    marginTop: "15px",
    borderRadius: "15px",
    "& .detailsBox": {
      display: "flex",
      //   position: "relative",
      "& .IconBox": {
        "& svg": {
          fontSize: "20px",
        },
      },
      "& .input": {
        width: "90%",
        background: "#EEEBEB",
        borderRadius: "50px",
        padding: "10px 20px",
        flex: 1,
        color: "##838383",
        fontSize: "14px",
        "&::placeholder": {
          color: "##838383", // Change this to the desired placeholder color
        },
      },
    },
  },
}));
const SellerUploadProperty = () => {
  return (
    <SellerUploadStyle>
      <Box className="mainBox">
        <Box className="detailsBox">
          <Avatar src={"/images/1567018939360.png"} /> &nbsp;&nbsp;&nbsp;
          <Box width={"100%"}>
            <InputBase
              className="input"
              placeholder="What's On Your Mind Meteryard?"
              inputProps={{
                style: { fontSize: "14px" },
                "aria-label": "search in Site..",
              }}
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              className="IconBox"
              mt={2}
            >
              <Box display={"flex"} alignItems={"center"}>
                <VideocamIcon style={{ color: "#EE4A2A" }} /> &nbsp;
                <span>Shorts/Video</span>
              </Box>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              <Box display={"flex"} alignItems={"center"}>
                <CollectionsIcon style={{ color: "#15D608" }} /> &nbsp;
                <span>Photo/Brochure</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SellerUploadStyle>
  );
};

export default SellerUploadProperty;
