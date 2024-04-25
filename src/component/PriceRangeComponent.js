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
      height: "40px",
      margin: "0",
      padding: "0px !important",
    
      "& h6": {
        fontSize: "14px",
        fontWeight: "550",
      },
    },
    "& .iconBox": {
      height:'50px',
      width:'50px',
      textAlign:'center',
      marginTop:'0.75rem',
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
          <Box display={"flex"} alignItems={"center"} >
            <Box className="iconBox" sx={{ display: { xs: 'none', md: 'block' } }}>
              <img src={imgURL} width={"100%"} />
            </Box>
            &nbsp;
            <Typography variant="h6" sx={{ marginLeft: { xs: '1rem', md: '0px' } }}>Price Range</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="mainBox">
            <Stack spacing={1} direction="row"
             sx={{
              mt: {
                xs: '-30px',
                md: '0px'
              },
              marginLeft: {
                xs: '2rem',
                md:'0rem',
              },
            }}>
              <Slider
              style={{ color: "#A2D117" }}
              sx={{
                height: {
                  xs: '3px',
                  md: '7px'
                },
                width: {
                  xs: '15rem',
                  md: '25rem'
                },
               
              }}
                getAriaValueText={valuetext}
                defaultValue={sliderValue}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={handleSliderChange} 
              />
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Accordionstyle>
  );
}
