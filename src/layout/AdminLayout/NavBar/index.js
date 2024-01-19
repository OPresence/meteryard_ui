import React, { useEffect, useState, useContext } from "react";
import { FaHospitalUser, FaSquarespace, FaWallet } from "react-icons/fa";
import {
  AiFillHome,
  AiFillDashboard,
  AiFillWallet,
  AiOutlineTransaction,
} from "react-icons/ai";
import { FaTableCells } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { FaWifi } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import {
  Box,
  Drawer,
  Hidden,
  List,
  Button,
  ListSubheader,
} from "@mui/material";
import NavItem from "./NavItem";
import { styled } from "@mui/system";
import { FaPerson } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

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
    top: 90,
    borderRadius: "10px",
    left: 30,
    width: "270px",
    height: "90vh",
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
    // marginLeft: "45px",
  },
  "& .MuiButtonBase-root-MuiButton-root": {
    background: "transparent !important",
  },
});
const sections = [
  {
    items: [
      {
        title: "Dashboard",
        icon: FaHospitalUser,
        href: "/Admin",
      },
      {
        title: "Admin",
        icon: AiFillDashboard,
        items: [
          {
            title: "Admin",
            icon: PanoramaFishEyeIcon,
            href: "/admin-list",
          },
          {
            title: "Department",
            icon: PanoramaFishEyeIcon,
            href: "/department-list",
          },
        ],
      },
      {
        title: "Users",
        icon: FaUsers,
        href: "/seller-list",
      },

      {
        title: "Masters",
        icon: FaTableCells,
        items: [
          {
            title: "Countries",
            icon: PanoramaFishEyeIcon,
            href: "/countries",
          },
          {
            title: "States",
            icon: PanoramaFishEyeIcon,
            href: "/state",
          },
          {
            title: "Cities",
            icon: PanoramaFishEyeIcon,
            href: "/cities",
          },
          {
            title: "Project Types",
            icon: PanoramaFishEyeIcon,
            href: "/project-type",
          },
          {
            title: "Project Furnishing",
            icon: PanoramaFishEyeIcon,
            href: "/project-finishing",
          },
          {
            title: "Amenities",
            icon: PanoramaFishEyeIcon,
            href: "/amenties",
          },
          {
            title: "Area Unites",
            icon: PanoramaFishEyeIcon,
            href: "/area-unites",
          },
          {
            title: "Property Availabilities",
            icon: PanoramaFishEyeIcon,
            href: "/property-availabilities",
          },
          {
            title: "Water Resources",
            icon: PanoramaFishEyeIcon,
            href: "/water-resources",
          },

          {
            title: "Overlooking",
            icon: PanoramaFishEyeIcon,
            href: "/overlooking",
          },
          {
            title: "Property Other Features",
            icon: PanoramaFishEyeIcon,
            href: "/property-other-features",
          },
          {
            title: "Property Facing",
            icon: PanoramaFishEyeIcon,
            href: "/property-facing",
          },
          {
            title: "Blog",
            icon: PanoramaFishEyeIcon,
            href: "/blog",
          },
          {
            title: "Testimonial",
            icon: PanoramaFishEyeIcon,
            href: "/testimonial",
          },
          {
            title: "Property Video",
            icon: PanoramaFishEyeIcon,
            href: "/property-videos",
          },
        ],
      },
      {
        title: "Enquirie's",
        icon: FaQuestionCircle,
        href: "/enquiries",
      },
      {
        title: "Property Enquirie's",
        icon: IoDocument,
        href: "/property-enquiries",
      },
      {
        title: "Property Posts",
        icon: FaBuilding,
        href: "/property-posts",
      },

      {
        title: "Properties",
        icon: MdOutlineSettingsSuggest,
        href: "/Properties",
      },
      {
        title: "CMS",
        icon: FaWifi,

        items: [
          {
            title: "About",
            icon: PanoramaFishEyeIcon,
            href: "/about",
          },
          {
            title: "Privacy Policy",
            icon: PanoramaFishEyeIcon,
            href: "/privacy-policy",
          },
          {
            title: "Term & Conditions",
            icon: PanoramaFishEyeIcon,
            href: "term-conditions",
          },
          {
            title: "Home Page Banner",
            icon: PanoramaFishEyeIcon,
            href: "/banner",
          },
        ],
      },
    ],
  },
];

function renderNavItems({
  items,
  pathname,
  depth = 0,
  state,
  setSelectedTab,
  router,
}) {
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
            router,
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
  router,
}) {
  const key = item.title + depth;

  if (item.items) {
    const { pathname } = router;
    console.log("pathname--->", pathname);
    const isMatch = /^\/your-pattern/.test(pathname);
    // const open = matchPath(pathname, {
    //   path: item.href,
    //   exact: false,
    // });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={isMatch}
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
      <>
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
      </>
    );
  }
  return acc;
}

const NavBar = ({ onMobileClose, openMobile, tabView, setSelectedTab }) => {
  const router = useRouter();
  const renderedSections = sections;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [router.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box pt={2} pb={2}>
        <SideMenuBox>
          {renderedSections?.map((section, i) => {
            return (
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
                  router: router,
                })}
              </List>
            );
          })}
        </SideMenuBox>
        {/* <LogoutButton onClick={() => setIsLogout(true)}>
          <ExitToAppIcon style={{ marginRight: "16px" }} />
          &nbsp; Logout
        </LogoutButton> */}
      </Box>

      {/* {isLogout && (
        <CommonConfirmationModal
          open={isLogout}
          close={() => setIsLogout(false)}
          onClick={handleLogout}
          disabled={false}
          btnName="Confirm"
          title="Logout!"
          description="Are you sure want to logout?"
        />
      )} */}
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
