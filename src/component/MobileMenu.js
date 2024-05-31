import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import { cityObject } from "../utils";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MenuComponentStyle = styled(Box)(({ theme }) => ({
  "& .submenueTab": {
    "& h5": {
      fontSize: "18px",
      fontWeight: "600",
      position: "relative",
      lineHeight: "30px",
      "&:hover": {
        "@media(max-width:615px)": {
          "&::after": {
            top: "27px",
            width: "100px !important",
            height: "1.5px",
            backgroundColor: "#a2d017",
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          width: "0",
          left: "0",
          right: "0",
          height: "2px",
          transition: "0.1s ease-in-out",
        },
      },
    },
    "& h4": {
      fontSize: "16px",
      fontWeight: "600",
      position: "relative",
      lineHeight: "30px",
      "&:hover": {
        "@media(max-width:615px)": {
          "&::after": {
            top: "27px",
            width: "100px !important",
            height: "1.5px",
            backgroundColor: "#a2d017",
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          width: "0",
          left: "0",
          right: "0",
          height: "2px",
          transition: "0.1s ease-in-out",
        },
      },
    },
  },
}));
export default function MobilerMenu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MenuComponentStyle>
      <Box className="submenueTab">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h5">Cities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {cityObject.map((data, index) => {
              return (
                <Box key={index}>
                  <Typography variant="h4">{data}</Typography>
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography variant="h5">Property Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {cityObject.map((data, index) => {
              return (
                <Box key={index}>
                  <Typography variant="h4">{data}</Typography>
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </Box>
    </MenuComponentStyle>
  );
}
