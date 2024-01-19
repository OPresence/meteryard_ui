import React from "react";
import { Box, Typography, Select, Button } from "@mui/material";
import { styled } from "@mui/system";
import { PiNoteFill } from "react-icons/pi";
import DialogComponent from "../component/DialogComponent";

const FilterStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    "& button": {
      background: "#A2D117",
      padding: "8px 25px",
      borderRadius: "10px",

      "& span": {
        color: "#fff",
        fontSize: "14px",
      },
    },
    "& h5": {
      fontSize: "18px",
      fontWeight: "500",
    },
    "& h6": {
      fontWeight: "500",
    },
    "& .filterBox": {
      gap: "30px",
      display: "flex",
      alignItems: "center",
      "& button": {
        background: "#A2D117",
        padding: "8px 25px",
        borderRadius: "10px",
        "& svg": {
          color: "#fff",
          fontSize: "28px",
        },
        "& span": {
          color: "#fff",
          fontSize: "16px",
        },
      },
    },
    "& .MuiList-root-MuiMenu-list": {
      background: "red",
    },
  },
}));
const FilterComponent = ({ title, ButtonName, HeadingDialog }) => {
  return (
    <FilterStyle>
      <Box className="mainBox">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h5">{title}</Typography>
          <Box display={"flex"} alignItems={"center"}>
            {ButtonName != "enquery" ? (
              <DialogComponent
                ButtonName={ButtonName}
                HeadingDialog={HeadingDialog}
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box className="filterBox" mt={2}>
          <Typography variant="h6">Show</Typography>
          <Box maxWidth={100} width={"100%"}>
            <Select value={10} fullWidth>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </Box>
          <Typography variant="h6">Enteries</Typography>
          <Button>
            <Box display={"flex"} alignItems={"center"}>
              <PiNoteFill />
              &nbsp; <span>CSV</span>
            </Box>
          </Button>
        </Box>
      </Box>
    </FilterStyle>
  );
};

export default FilterComponent;
