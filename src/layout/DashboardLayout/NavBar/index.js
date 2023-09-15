import React, { useEffect, useState, useContext } from "react";
import { FaHospitalUser, FaSquarespace, FaWallet } from "react-icons/fa";
import { AiFillHome, AiFillDashboard, AiFillWallet, AiOutlineTransaction } from "react-icons/ai";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import AppContext from "@/context/AppContext";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Drawer,
  Hidden,
  List,
  Button,
  ListSubheader,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  DialogTitle,
} from "@mui/material";
import NavItem from "./NavItem";
import { styled } from "@mui/system";
import CommonConfirmationModal from "@/components/CommonConfirmationModal";

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  width: 272,
  // background: "#fff",
  "& .MuiPaper-root": {
    // top: 111,
    borderRadius: "5px",
  },
}));

const DesktopDrawer = styled(Drawer)(({ theme }) => ({
  top: "76px",
  width: "250px",
  height: "calc(100% - 115px)",
  margin: "5px 10px 10px 15px",
  // background: "#fff",
  borderRadius: "20px",
  marginTop: "35px",
  position: "relative",
  marginLeft: "13px",
  "& .MuiPaper-root": {
    top: 111,
    borderRadius: "5px",
  },
}));

const LogoutButton = styled(Button)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  position: "absolute",
  bottom: "114px",
  left: "17px",
  background: "transparent",
  fontWeight: "400",
  fontSize: "13px",
  color: "#fff",
  textTransform: "capitalize",
});
const SideMenuBox = styled(Box)({
  "& .MuiCollapse-wrapperInner": {
    marginLeft: "45px",
  },
});
const DialogMainBox = styled("Box")(({ theme }) => ({
  "& h5": {
    fontSize: "20px",
    fontWeight: "600",
  },
}));

function renderNavItems({ items, pathname, depth = 0, state, setSelectedTab }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) =>
          reduceChildRoutes({
            acc,
            item,
            pathname,
            depth,
            state,
            setSelectedTab,
          }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth,
  state,
  setSelectedTab,
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
          state,
          setSelectedTab,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        tabview={item.tabview}
        key={key}
        title={item.title}
        setSelectedTab={(item) => setSelectedTab(item)}
      />
    );
  }
  return acc;
}

const sections = [
  {
    items: [
      {
        title: "Dashboard",
        icon: AiFillHome,
        href: "/dashboard",
      },
      {
        title: "User Management",
        icon: AiFillDashboard,
        href: "/user-management",
      },
      {
        title: "Influencer Management",
        icon: FaHospitalUser,
        href: "/dashboard/influencer-management",
      },
      {
        title: "Transaction Management",
        icon: AiOutlineTransaction,
        href: "/dashboard/transaction-management",
      },
    ],
  },
];
const sections1 = [
  {
    items: [
      {
        title: "Dashboard",
        icon: AiFillHome,
        href: "/sniper-dashboard",
        tabview: "Sniper",
      },
      {
        title: "Bot settings",
        icon: AiFillDashboard,
        href: "/bot-setting",
        tabview: "Sniper",
      },
      {
        title: "Transaction History",
        icon: FaSquarespace,
        href: "/sniper-transactions",
        tabview: "Sniper",
      },
    ],
  },
];

const NavBar = ({ onMobileClose, openMobile, tabView, setSelectedTab }) => {
  const router = useRouter();
  const [isLogout, setIsLogout] = useState(false);
  const renderedSections = tabView === "Arbitrage" ? sections : sections1;
  const appContext = useContext(AppContext);
  const handleLogout = () => {
    appContext?.userLogOut();
  };
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [router.pathname]);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box pt={2} pb={2}>
        <SideMenuBox>
          {renderedSections?.map((section, i) => (
            <List
              key={`menu${i}`}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                img: section.img,
                items: section.items,
                pathname: router.pathname,
                state: section.tabview,
                setSelectedTab,
              })}
            </List>
          ))}
        </SideMenuBox>
      </Box>

      <LogoutButton onClick={() => setIsLogout(true)}>
        <ExitToAppIcon style={{ marginRight: "16px" }} />
        &nbsp; Logout
      </LogoutButton>

      {isLogout && (
        <CommonConfirmationModal
          open={isLogout}
          close={() => setIsLogout(false)}
          onClick={handleLogout}
          disabled={false}
          btnName="Confirm"
          title="Logout!"
          description="Are you sure want to logout?"
        />
      )}
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <MobileDrawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <Box p={2}>{content}</Box>
        </MobileDrawer>
      </Hidden>
      <Hidden mdDown>
        <DesktopDrawer anchor="left" open variant="persistent">
          {content}
        </DesktopDrawer>
      </Hidden>
      ;
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
