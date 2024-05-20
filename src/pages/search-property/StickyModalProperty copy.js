import React, { useState } from "react";
import {
  Modal,
  IconButton,
  Slide,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PropertyMobileModal from "./PropertyMobileModal";

const StickyModalProperty = ({ children }) => {
  const StickyModalPropertyContainer = styled("Box")({
    backgroundColor: "white",
    color: "gray",
    width: "100%",
    height: "40px",
    position: "fixed",
    bottom: "0px",
    left: "0px",
    borderRadius: "0",
    zIndex: "9999",

    "& .iconBox": {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  });
  const ModalContainer = styled("div")({
    position: "sticky",
    top: "100%",
    background: "#f0f0f0",
    padding: "20px",
    borderRadius: "50px 50px 0px 0px",

    "& .iconBtn": {
      position: "absolute",
      top: "10px",
      right: "10px",
    },
  });
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
            <StickyModalPropertyContainer>
              <IconButton onClick={handleToggleModal} className="iconBox">
                <Box className="iconBox">
                  <FilterAltIcon />
                  <ForumOutlinedIcon />
                  <ArrowUpwardOutlinedIcon />
                </Box>
              </IconButton>
            </StickyModalPropertyContainer>
          )}

          {open && (
            <Modal open={open} onClose={handleCloseModal}>
              <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <ModalContainer>
                  <IconButton
                    onClick={expanded ? handleCollapse : handleExpand}
                    className="iconBtn"
                  ></IconButton>

                  <Box>
                    {/* modal */}
                    <PropertyMobileModal />
                  </Box>
                </ModalContainer>
              </Slide>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default StickyModalProperty;
