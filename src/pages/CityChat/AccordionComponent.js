import React, { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { AuthContext } from "../../context/Auth";
import CheckBoxComponent from "../../component/CheckBoxComponent";
const Accordionstyle = styled("div")(({ theme }) => ({
  "& .MuiPaper-root": {
    top: "0px !important",
    borderRadius: "5px",
  },
  "& .accordionstyle": {
    boxShadow: "none",

    "& .summary": {
      maxHeight: "20px",
      margin: "0",
      padding: "0",
      height: "100%",
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "15px",
    },
    "& .iconBox": {
      height: "50px",
      width: "50px",
      textAlign: "center",
      marginTop: "-1rem",
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
export default function ControlledAccordions({
  data,
  index,
  imgURL,
  handleCheckboxChange,
  selectedSubTypes,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const auth = useContext(AuthContext);
  const [checked_get, setChecked_Get] = React.useState("");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    auth?.setPropertyType(panel);
  };

  return (
    <Accordionstyle>
      <Accordion
        key={index}
        className="accordionstyle"
        expanded={expanded === data?._id}
        onChange={handleChange(data?._id)}
      >
        <AccordionSummary
          sx={{
            "& .MuiAccordionSummary-content.Mui-expanded": {
              marginTop: "50px",
            },
          }}
          classes={{ content: expanded ? "Mui-expanded" : "marginTop:50px" }}
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
              sx={{ marginLeft: { xs: "1rem", md: "0px" } }}
            >
              {data?.projectType}
            </Typography>
          </Box>
        </AccordionSummary>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AccordionDetails>
              {data?.allProjectSubType?.map((value, index) => {
                return (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: "inline-flex",
                        flexDirection: "row",
                      }}
                    >
                      <CheckBoxComponent
                        data={value}
                        propName={data}
                        index={index}
                        selectedSubTypes={selectedSubTypes}
                        handleCheckboxChange={handleCheckboxChange}
                        checked_get={checked_get}
                        setChecked_Get={setChecked_Get}
                      />
                      &nbsp;
                      <Typography sx={{}}>{value?.projectSubType}</Typography>
                    </Box>
                    &nbsp; &nbsp;
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
