import React from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const ButonStyle = styled("Box")(({ theme }) => ({
  "& .viewmoreButton": {
    "& button": {
      background: "none",
      border: "1px solid black",
      position: "absolute",
      bottom: "10px",
    },
    "& span": {
      color: "#000",
      fontSize: "10px",
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
          <span>Get View More</span>
        </Button>
      </Box>
    </ButonStyle>
  );
};

export default ButtonComponent;
