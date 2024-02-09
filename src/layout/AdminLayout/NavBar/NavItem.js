import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "next/link";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, Collapse, ListItem, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled } from "@mui/system"; // Import styled from @mui/system
import { useRouter } from "next/router";
const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "block",
  paddingTop: 0,
  paddingBottom: 0,
  "& .MuiButtonBase-root-MuiButton-root": {
    background: "red !important",
  },
  "&:hover": {
    // background: "#000",
  },
  [theme.breakpoints.up("md")]: {
    display: "initial !important",
    paddingTop: 0,
    paddingBottom: 0,
    // background: "red",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: "13px 20px",
  justifyContent: "flex-start",
  textTransform: "none",
  marginBottom: "8px",
  letterSpacing: 0,
  width: "100%",
  // background: "red !important",
  fontWeight: 400,
  "&:hover": {
    color: "#ffff",
    borderRadius: "0px",
    "& $icon": {
      color: "#ffff",
    },
  },
}));

const StyledButtonLeaf = styled(Button)(({ theme }) => ({
  color: "#0D0D0D",
  padding: "13px 20px",
  justifyContent: "flex-start",
  textTransform: "none",
  letterSpacing: 0,
  width: "100%",
  marginBottom: "5px",
  borderRadius: 0,
  opacity: 1,
  borderRadius: "0px",
  fontWeight: 400,
  fontSize: "13px",
  "& $icon": {
    color: "#000",
  },
  "& li": {
    "& $title": {
      marginLeft: "30px",
    },
  },
  "&:hover, &.active": {
    color: "#ffff",
    // background: "rgba(56, 53, 125, 1)",
    borderRadius: "0px",
    "& $icon": {
      color: "#ffff",
    },
  },
  "&.depth-0": {
    "& $title": {
      fontWeight: 400,
      fontSize: "12px",
      whiteSpace: "pre",
    },
  },
}));

const StyledIcon = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(1),
  color: "#000",
}));

const StyledTitle = styled("span")({
  marginRight: "auto",
  color: "#000",
  fontSize: "16px",
  fontWeight: "600",
});
const StyledTitle1 = styled("span")({
  marginRight: "auto",
  color: "#000",
  fontSize: "16px",
  fontWeight: "600",
});

const StyledCollapse = styled(Collapse)({
  // marginLeft: "45px",
});

const NavItem = ({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  tabview,
  setSelectedTab,
  ...rest
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(openProp);

  useEffect(() => {
    if (tabview === "Sniper") {
      setSelectedTab(tabview);
    }
  }, [tabview]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };
  const isActive = router.asPath === href;

  if (children) {
    return (
      <StyledListItem
        className={clsx(className)}
        disableGutters
        key={title}
        {...rest}
      >
        <StyledButton onClick={handleToggle}>
          {Icon && <StyledIcon>{<Icon size="20" />}</StyledIcon>}
          {title == "Admin" || title == "CMS" ? (
            <StyledTitle1>
              <span>{title}</span>
            </StyledTitle1>
          ) : (
            <StyledTitle>
              {" "}
              <span>{title}</span>
            </StyledTitle>
          )}
          {open ? (
            <ExpandLessIcon style={{ color: "#000" }} />
          ) : (
            <ExpandMoreIcon style={{ color: "#000" }} />
          )}
        </StyledButton>
        <StyledCollapse in={open}>
          <Box style={{ background: "#434343", color: "#fff" }}>{children}</Box>
        </StyledCollapse>
      </StyledListItem>
    );
  }

  return (
    <StyledListItem
      className={clsx(className)}
      disableGutters
      key={title}
      {...rest}
    >
      <StyledButtonLeaf
        className={clsx(`depth-${depth}`, isActive && "active")}
        onClick={() => router.push(href)}
        exact
      >
        {Icon && (
          <StyledIcon>
            {
              <Icon
                size="20"
                style={
                  title == "Admin" ||
                  title == "Department" ||
                  title == "Countries" ||
                  title == "States" ||
                  title == "Cities" ||
                  title == "Project Types" ||
                  title == "Project Furnishing" ||
                  title == "Amenities" ||
                  title == "Area Unites" ||
                  title == "Property Availabilities" ||
                  title == "Water Resources" ||
                  title == "Overlooking" ||
                  title == "Property Other Features" ||
                  title == "Property Facing" ||
                  title == "Blog" ||
                  title == "Testimonial" ||
                  title == "Property Video" ||
                  title == "About" ||
                  title == "Project Sub-Type" ||
                  title == "Privacy Policy" ||
                  title == "Term & Conditions" ||
                  title == "Home Page Banner"
                    ? { color: "#fff", textAlign: "start  " }
                    : {}
                }
              />
            }
          </StyledIcon>
        )}
        {console.log("title-0->", open)}
        <StyledTitle
          style={
            title == "Admin" ||
            title == "Department" ||
            title == "Countries" ||
            title == "States" ||
            title == "Cities" ||
            title == "Project Types" ||
            title == "Project Furnishing" ||
            title == "Amenities" ||
            title == "Area Unites" ||
            title == "Property Availabilities" ||
            title == "Water Resources" ||
            title == "Overlooking" ||
            title == "Property Other Features" ||
            title == "Property Facing" ||
            title == "Blog" ||
            title == "Project Sub-Type" ||
            title == "Testimonial" ||
            title == "Property Video" ||
            title == "About" ||
            title == "Privacy Policy" ||
            title == "Term & Conditions" ||
            title == "Home Page Banner"
              ? { color: "#fff", textAlign: "start  " }
              : {}
          }
        >
          {title}
        </StyledTitle>
        {Info && <Info />}
      </StyledButtonLeaf>
    </StyledListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};

export default NavItem;
