import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import index from "@/pages/CityChat";
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
export default function StateComponent({ StattName, type, name, imgURL }) {
  const [expanded, setExpanded] = React.useState(false);
  const [_state, setState] = React.useState("0");
  const menuProps = {
    getContentAnchorEl: null,
    disableScrollLock: true,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangevalue = (event) => {
    setState(event.target.value);
  };
  return (
    <Accordionstyle>
      <Accordion
        className="accordionstyle"
        expanded={expanded === "panel1"}
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
            <Typography variant="h6">{name}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="mainBox">
            <FormControl sx={{ m: 1, width: "100%" }} size="small">
              {/* <InputLabel id="demo-select-small-label">
                  Select State
                </InputLabel> */}

              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                fullWidth
                value={_state}
                onChange={handleChangevalue}
                MenuProps={menuProps}
              >
                <MenuItem value="0" disabled>
                  {type}
                </MenuItem>
                {StattName.map((data, index) => {
                  return <MenuItem value={data?.name}>{data?.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Accordionstyle>
  );
}
