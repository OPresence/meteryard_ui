import React from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const ButonStyle = styled(Box)(({ theme }) => ({
  "& .viewmoreButton": {
    "& button": {
      width: "158.8px",
      height: "40.7px",
      gap: "0px",
      border: "1x 0px 0px 0px",
      opacity: "0px",
      background: "#A9D910",
      border: "2px solid #A9D910",
      borderRadius: "50px",
    },
    "& span": {
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "16.94px",
      color: "#000",
    },
  },
}));

const ButtonComponent = ({ data }) => {
  const router = useRouter();
  return (
    <ButonStyle>
      <Box p={"10px 0 0 0"} className="viewmoreButton">
        <Button
          onClick={() =>
            router.push({
              pathname: "/view-property",
              query: {
                data: JSON.stringify(data),
              },
            })
          }
        >
          <span>View More</span>
        </Button>
      </Box>
    </ButonStyle>
  );
};

export default ButtonComponent;
