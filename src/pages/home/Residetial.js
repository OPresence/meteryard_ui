import * as React from "react";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, Button } from "@mui/material";

export default function Residetial({
  data,
  index,
  _subtypelist,
  setGetProject_sub_Type,
  setGetPropetyType,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (id) => {
    console.log("idsjd--->", id);
    setGetPropetyType(id);
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        key={index}
        expanded={expanded}
        onChange={() => handleExpansion(data?._id)}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
          "& .MuiAccordionSummary-root": {
            padding: "0px 8px",
          },

          "& .MuiAccordionDetails-root": {
            padding: "0px 5px 5px 45px",
          },
        }}
      >
        {console.log("datadfjdfj--->", data)}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box
            style={{
              display: "flex",
              gap: "15px",
              paddingRight: "5px",
            }}
          >
            <Avatar alt="Remy Sharp" src={data?.data?.image} />
            <Typography style={{ lineHeight: "20px" }}>
              {data?.projectType}{" "}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {console.log("propertyName--->", _subtypelist)}
          <>
            {_subtypelist?.map((data2, index) => {
              return (
                <>
                  {data2?.projectTypeId?._id == data?._id && (
                    <Box
                      style={{
                        borderLeft: "1px solid #ccc",
                      }}
                    >
                      <Button
                        onClick={() => setGetProject_sub_Type(data2?._id)}
                      >
                        <Typography
                          key={index}
                          style={{ paddingLeft: "10px", paddingBottom: "10px" }}
                        >
                          {data2?.projectSubType}
                        </Typography>
                      </Button>
                    </Box>
                  )}
                </>
              );
            })}
          </>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
