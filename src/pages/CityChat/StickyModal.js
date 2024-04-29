import React, { useState } from "react";
import {
  Modal,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Divider,
  Icon,
} from "@mui/material";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import MobileModal from "../CityChat/MobileModal";
const StickyModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const handleToggleModal = () => {
    setOpen(!open);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {isMobile && (
        <>
          {!open && (
            <Box
              sx={{
                backgroundColor: "white",
                color: "gray",
                width: "100%",
                height: "60px",
                position: "fixed",
                bottom: "0px",
                left: "0px",
                borderRadius: "0",
              }}
            >
              <IconButton
                onClick={handleToggleModal}
                sx={{ gap: "8rem", left: "25px", borderRadius: "15px" }}
              >
                <FilterAltIcon />
                <ForumOutlinedIcon />
                <ArrowUpwardOutlinedIcon />
              </IconButton>
            </Box>
          )}
          {open && (
            <Modal open={open} onClose={handleCloseModal}>
              <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <div
                  style={{
                    position: "sticky",
                    top: "100%",
                    background: "#f0f0f0",
                    padding: "20px",
                    borderRadius: "50px 50px 0px 0px",
                  }}
                >
                  <IconButton
                    onClick={expanded ? handleCollapse : handleExpand}
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                  ></IconButton>

                  <Box>
                    <MobileModal />
                  </Box>
                </div>
              </Slide>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default StickyModal;
