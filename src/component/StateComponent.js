import React, { useContext } from "react";
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
import { AuthContext } from "../context/Auth";

const Accordionstyle = styled("dic")(({ theme }) => ({
  "& .MuiPaper-root": {
    top: "0px !important",
    borderRadius: "5px",
  },
  "& .accordionstyle": {
    boxShadow: "none",
    "& .summary": {
      height: "70px",
      margin: "0",
      padding: "0",
      "& h6": {
        fontSize: "14px",
        fontWeight: "550",
      },
    },
    "& .iconBox": {
      height: "50px",
      width: "50px",
      textAlign: "center",
      marginTop: "0.50rem",
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
export default function StateComponent({
  StattName,
  type,
  name,
  imgURL,
  stateChange,
}) {
  const auth = useContext(AuthContext);
  const [expanded, setExpanded] = React.useState(false);
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
    if (type == "Select State") {
      auth?.setGetCityValue(event.target.value);
    } else {
      auth?.setCitySelect(event.target.value);
    }
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
            <Box
              className="iconBox"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <img src={imgURL} width={"100%"} />
            </Box>
            &nbsp;
            <Typography
              variant="h6"
              sx={{ marginLeft: { xs: "15px", md: "0px" } }}
            >
              {name}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="mainBox">
            <FormControl sx={{ mt: "20px", width: "100%" }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                fullWidth
                value={
                  type == "Select State"
                    ? auth?._getCityValue
                    : auth?._cityselect
                }
                onChange={handleChangevalue}
                MenuProps={menuProps}
                sx={{ mt: { xs: "-1rem", md: "1rem" } }}
              >
                <MenuItem value="0" disabled>
                  {type}
                </MenuItem>
                {StattName &&
                  StattName?.map((data, index) => {
                    return (
                      <MenuItem key={index} value={data?._id}>
                        {data?.stateName || data?.cityName}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Accordionstyle>
  );
}
