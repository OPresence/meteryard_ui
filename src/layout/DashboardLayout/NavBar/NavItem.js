import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "next/link";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, Collapse, ListItem, ListSubheader } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled } from "@mui/system"; // Import styled from @mui/system
import { useRouter } from "next/router";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "block",
  paddingTop: 0,
  paddingBottom: 0,
 
  [theme.breakpoints.up("md")]: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
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
  fontWeight: 400,
  "&:hover": {
    color: "#ffff",
    background: theme.palette.background.active,
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
    color: "#0D0D0D",
  },
  "& li": {
    "& $title": {
      marginLeft: "30px",
    },
  },
  "&:hover, &.active": {
    color: "#ffff",
    background: "rgba(56, 53, 125, 1)",
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
  color: theme.palette.primary.main,
}));

const StyledTitle = styled("span")({
  marginRight: "auto",
  color: "#fff",
});

const StyledCollapse = styled(Collapse)({
  marginLeft: "45px",
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
          <StyledTitle>{title}</StyledTitle>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledButton>
        <StyledCollapse in={open}>{children}</StyledCollapse>
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
        // component={RouterLink}
        // href={href}
        onClick={() => router.push(href)}
        exact
      >
        {Icon && <StyledIcon>{<Icon size="20" />}</StyledIcon>}
        <StyledTitle>{title}</StyledTitle>
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
