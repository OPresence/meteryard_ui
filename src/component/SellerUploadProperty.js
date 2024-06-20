import React from "react";
import { Avatar, Typography, Box, TextField, InputBase } from "@mui/material";
import styled from "@emotion/styled";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideocamIcon from "@mui/icons-material/Videocam";
import { fontSize } from "@mui/system";
const SellerUploadStyle = styled(Box)(({ theme }) => ({
  "& .mainBox": {
    boxShadow: "0px 1px 13px #00000026",
    padding: "20px 20px 40px 20px",
    marginTop: "15px",
    borderRadius: "15px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "90px",
    },

    "& .detailsBox": {
      display: "flex",

      //   position: "relative",
      "& .IconBox": {
        fontSize: "14px",
        "& svg": {
          marginLeft: "10px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
        },
      },
      "& .input": {
        width: "100%",
        background: "white",
        borderRadius: "50px",
        padding: "10px 20px",
        height: "30px",
        flex: 1,
        border: "1px solid black",
        marginTop: "9px",
        color: "##838383",
        fontSize: "14px",
        "&::placeholder": {
          color: "##838383",
        },
        [theme.breakpoints.down("sm")]: {
          height: "30px",
          width: "100%",
          marginTop: "9px",
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
          <Avatar
            src={"/images/1567018939360.png"}
            sx={{
              width: { xs: "40px" },
              height: { xs: "40px" },
              marginTop: { xs: "8px", md: "4px" },
            }}
          />
          <Box
            width={"100%"}
            sx={{
              height: "40px",
              margin: "6px",
              marginTop: { xs: "-4px", md: "-4px" },
            }}
          >
            <InputBase
              className="input"
              placeholder="Write something here..."
              inputProps={{
                sx: { fontSize: { xs: "12px", md: "14px" } },
                "aria-label": "search in Site..",
              }}
            />
            <Box display={"flex"} alignItems={"center"} className="IconBox">
              <Box
                display="flex"
                alignItems="center"
                sx={{ marginTop: "-1px", p: "8px" }}
              >
                <VideocamIcon style={{ color: "#EE4A2A", fontSize: "15px" }} />{" "}
                &nbsp;
                <span>Shorts/Video</span>
              </Box>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              <Box
                display="flex"
                alignItems="center"
                sx={{ marginTop: "-1px", p: "8px" }}
              >
                <CollectionsIcon
                  style={{ color: "#15D608", fontSize: "12px" }}
                />{" "}
                &nbsp;
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
