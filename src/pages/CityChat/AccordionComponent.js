import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import CheckBoxComponent from "src/component/CheckBoxComponent";
const Accordionstyle = styled("div")(({ theme }) => ({
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
     
   
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: '15px'
    },
    "& .iconBox": {
      height:'50px',
      width:'50px',
      textAlign:'center',
      marginTop:'-1rem',
      "& svg": {
        background: "#C8F2CD",
        color: "#fff",
        fontSize: "40px",
        padding: "6px",
        borderRadius: "50px",

      },
    },
    
    
  },
 
}));
export default function ControlledAccordions({ data, index, imgURL }) {
  const [expanded, setExpanded] = React.useState(false);
  const [checked_get, setChecked_Get] = React.useState("");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordionstyle>
      <Accordion
        key={index}
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
          <Box display={"flex"} alignItems={"center"} mt={2} >
          <Box className="iconBox" sx={{ display: { xs: 'none', md: 'block' } }}>
              <img src={imgURL} width={"100%"} />
            </Box>
            &nbsp;
            <Typography variant="h6" sx={{ marginLeft: { xs: '1rem', md: '0px' },
            
           }}>{data?.name}</Typography>
          </Box>
        </AccordionSummary>
        <Box>
          <Box sx={{display: 'flex', flexDirection: 'column' }}>
            <AccordionDetails sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {data?.valueName?.map((data, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: '33%',
                      display: 'flex',
                      flexDirection: 'row'
                     
                    }} 
                  >
                    {/* First set of data */}
                    <Typography sx={{ mt: '8px', ml: '-10px' ,}}>
                      {data?.name}
                    </Typography>{" "}
                    <CheckBoxComponent
                      data={data}
                      index={index}
                      setChecked_Get={setChecked_Get}
                    />
                  </Box>
                );
              })}
            </AccordionDetails>
          </Box>
        </Box>



      </Accordion>
    </Accordionstyle>
  );
}