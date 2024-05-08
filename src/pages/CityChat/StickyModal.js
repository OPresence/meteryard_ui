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
                height: "40px",
                position: "fixed",
                bottom: "0px",
                left: "0px",
                borderRadius: "0",
                zIndex: "9999",
              }}
            >
              <IconButton
                onClick={handleToggleModal}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <FilterAltIcon />
                  <ForumOutlinedIcon />
                  <ArrowUpwardOutlinedIcon />
                </Box>
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
