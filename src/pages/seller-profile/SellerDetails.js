import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from "@mui/icons-material/Chat";
import { AuthContext } from "../../context/Auth";

const SellerDtailsStyle = styled("div")(({ theme }) => ({
  "& .mainBox": {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    "& .callBox": {
      display: "flex",
      alignItems: "center",
      "& svg": {
        color: "#858585",
      },
      "& h6": {
        fontSize: "14px",
        color: "#858585",
        fontWeight: "500",
        "& span": {
          fontSize: "12px",
          fontWeight: "400",
        },
      },
    },
    "& .buttonBox": {
      "& button": {
        background: "#444444",
        width: "100%",
        color: "#fff",
        fontSize: "10px",
        padding: "10px 30px",
        borderRadius: "50px",
        "& svg": {
          fontSize: "22px",
          color: "#fff",
        },
      },
    },
    "& .ratingBox": {
      display: "flex",
      alignItems: "center",
      width: "80%",
      gap: "20px",
      "& h1": {
        color: "#444444",
      },
      "& span": {
        fontSize: "8px",
      },
    },
  },
}));
const SellerDetails = () => {
  const auth = useContext(AuthContext);
  return (
    <SellerDtailsStyle>
      <Box className="mainBox">
        <Box className="callBox">
          <PhoneIcon /> &nbsp;&nbsp;&nbsp;
          <Typography variant="h6">
            +91&nbsp; {auth?._getprofile?.phoneNumber}
          </Typography>
        </Box>
        <Box className="callBox" mt={3}>
          <MailIcon /> &nbsp;&nbsp;&nbsp;
          <Typography variant="h6">{auth?._getprofile?.email}</Typography>
        </Box>
        <Box className="buttonBox" mt={3}>
          <Button>
            <ChatIcon />
            &nbsp;chat
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"} mt={3}>
          <Box className="ratingBox">
            <Typography variant="h1">4.7</Typography>
            <Box>
              <Box maxWidth={20} display={"flex"}>
                <img
                  src="/images/profile/Icon metro-star-full.svg"
                  width={"100%"}
                />
                <img
                  src="/images/profile/Icon metro-star-full.svg"
                  width={"100%"}
                />
                <img
                  src="/images/profile/Icon metro-star-full.svg"
                  width={"100%"}
                />
                <img
                  src="/images/profile/Icon metro-star-full.svg"
                  width={"100%"}
                />
                <img
                  src="/images/profile/Icon metro-star-full.svg"
                  width={"100%"}
                />
              </Box>
              <span>107 Reviews</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </SellerDtailsStyle>
  );
};

export default SellerDetails;
