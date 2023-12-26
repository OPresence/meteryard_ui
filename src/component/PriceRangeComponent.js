import * as React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const theme = createTheme({
  overrides: {
    MuiSlider: {
      rail: {
        height: "40px", // Change the rail height here
        backgroundColor: "red", // Change the rail background color
      },
      markLabel: {
        fontSize: "16px", // Change the font size of mark labels
      },
    },
  },
});

const Accordionstyle = styled("dic")(({ theme }) => ({
  "& .MuiPaper-root": {
    top: "0px !important",
    borderRadius: "5px",
    // width: "initial",
  },
  "& .accordionstyle": {
    boxShadow: "none",
    "& .summary": {
      height: "60px",
      margin: "0",
      "& h6": {
        fontSize: "14px",
        fontWeight: "550",
      },
    },
    "& .iconBox": {
      "& svg": {
        background: "#C8F2CD",
        color: "#fff",
        fontSize: "46px",
        padding: "8px",
        borderRadius: "50px",
      },
    },
  },
}));
export default function PriceRangeComponent({ imgURL }) {
  const [expanded, setExpanded] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState([10, 50]); // State to store the Slider's value
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  function valuetext(value) {
    return `${value} rs`;
  }
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue); // Update the state with the new value
  };
  const marks = [
    {
      value: 0,
      label: "0L",
    },

    {
      value: 20,
      label: "20L",
    },

    {
      value: 40,
      label: "40L",
    },

    {
      value: 60,
      label: "60L",
    },

    {
      value: 80,
      label: "80L",
    },

    {
      value: 100,
      label: "100L",
    },
  ];

  return (
    <Accordionstyle>
      <Accordion
        className="accordionstyle"
        expanded={true}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box display={"flex"} alignItems={"center"} mt={2}>
            <Box className="iconBox">
              <img src={imgURL} width={"100%"} />
            </Box>
            &nbsp;
            <Typography variant="h6">price range</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="mainBox">
            <Stack spacing={1} direction="row">
              <Slider
                style={{ color: "#A2D117", height: "7px" }}
                getAriaValueText={valuetext}
                defaultValue={sliderValue}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={handleSliderChange} // Add onChange event handler
              />
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Accordionstyle>
  );
}
