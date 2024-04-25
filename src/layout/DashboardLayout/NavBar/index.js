import React, { useEffect, useState, useContext } from "react";
import { FaHospitalUser, FaSquarespace, FaWallet } from "react-icons/fa";
import {
  AiFillHome,
  AiFillDashboard,
  AiOutlineTransaction,
} from "react-icons/ai";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import AccordionComponent from "../../../pages/CityChat/AccordionComponent";
import PriceRangeComponent from "src/component/PriceRangeComponent";
import StateComponent from "src/component/StateComponent";
import {
  Box,
  Drawer,
  Hidden,
  List,
  Button,
  Typography,
  Slide,
  Avatar,
  Divider,
} from "@mui/material";
import NavItem from "./NavItem";
import { styled } from "@mui/system";
const BuyerStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    background: theme.palette.background.default,
    // paddingBottom: "100px",
    "& .SellerBox": {
      padding: "20px",
      boxShadow: "0px 1px 13px #00000026",
    },
    "& .filterBox": {
      padding: "20px",
      // boxShadow: theme.shadows[3],
      boxShadow: "0px 1px 13px #00000026",
      "& .devider": {
        background: "#00000040",
        position: "relative",
        zIndex: 1,
      },
      "& h2": {
        fontWeight: "600",
      },
      "& .imgBox": {
        background: "#fff",
        borderRadius: "100px",
        maxWidth: 60,
        minHeight: 60,
        maxHeight: 60,
        boxShadow: theme.shadows[2],
        overflow: "hidden",
        "& img": {
          width: "70px",
          height: "70px",
        },
      },
    },

  },
  "& .UpperSection" :{
    "@media(max-width:615px)":{
      // display:'none'
    }
  }
}));
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
  width: "300px",
  height: "calc(100% - 115px)",
  margin: "5px 10px 10px 15px",
  borderRadius: "20px",
  marginTop: "35px",
  position: "relative",
  marginLeft: "13px",
  "& .MuiDrawer-paper": {
    width: "353px!important",
  },
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
// const UpperSection = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     display: "none",
//   },
// }));
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
  console.log("jhgjggh00-->");
  const router = useRouter();
  const [isLogout, setIsLogout] = useState(false);
  const renderedSections = tabView === "Arbitrage" ? sections : sections1;
  const { search } = router.query;

  const CheckBoxName = [
    {
      name: "Residential",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];
  const CheckBoxName1 = [
    {
      name: "Commercial",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];
  const CheckBoxName2 = [
    {
      name: "Agriculture",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];
  const State_name = [
    {
      name: "Uttar Pradesh",
    },
    {
      name: "Delhi",
    },
    {
      name: "Gujarat",
    },
  ];
  const City_name = [
    { name: "Agra" },
    { name: "Mumbai" },
    { name: "Delhi" },
    { name: "Bangalore" },
  ];
  const City_name_LocalArea = [
    { name: "Pashchim Puri" },
    { name: "Sikandra" },
    { name: "Bodla" },
    { name: "Fatehabad Road" },
    { name: "Kamla Nagar" },
  ];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [router.pathname]);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const content = (
    <BuyerStyle>
     
      <Box minHeight={"100vh"} className="mainBox" pb={"100px"}>
        <Box className="filterBox">
          <Box
            // display={{ xs: "none", md: "flex" }}
            // alignItems="center"
            // className="UpperSection"
          >
            {" "}
            <Avatar
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push({
                  pathname: "/seller-profile",
                })
              }
              src="/images/meteryard/Images/Image 23.png"
              width={"100%"}
            />
            &nbsp;&nbsp;&nbsp;
            <Typography variant="h6">Monu Rajput</Typography>
          </Box>

          <Box>
            <Box m={"10px 0"}>
              <Typography variant="h2">property category</Typography>
            </Box>
            {search == "Seller" && (
              <Box maxWidth={150}>
                <img
                  onClick={() =>
                    router.push({
                      pathname: "/Lead-Box",
                    })
                  }
                  src="/images/Group 8327.svg"
                  width={"100%"}
                  style={{ cursor: "pointer" }}
                />
              </Box>
            )}

            {CheckBoxName.map((data, index) => {
              return (
                <AccordionComponent
                  key={index}
                  data={data}
                  index={index}
                  imgURL="/images/Group 8163.png"
                />
              );
            })}
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            {CheckBoxName1.map((data, index) => {
              return (
                <AccordionComponent
                  key={index}
                  data={data}
                  index={index}
                  imgURL="/images/Group 8164.png"
                />
              );
            })}
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            {CheckBoxName2.map((data, index) => {
              return (
                <AccordionComponent
                  key={index}
                  data={data}
                  index={index}
                  imgURL="/images/Group 8165.png"
                />
              );
            })}
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>
            <Box>
              <PriceRangeComponent imgURL="/images/Group 8346.png" />
            </Box>
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>
            <Box>
              <StateComponent
                StattName={State_name}
                type="Select State"
                name="State"
                imgURL="/images/Group 8180.png"
              />
            </Box>
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>
            <Box>
              <StateComponent
                StattName={City_name}
                type="Select City"
                name="City"
                imgURL="/images/Group 8179.png"
              />
            </Box>
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>
            <Box>
              <StateComponent
                StattName={City_name_LocalArea}
                type="Select Local Area"
                imgURL="/images/Group 8180.png"
                name="Local Area"
              />
            </Box>
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>
          </Box>
        </Box>
      </Box>
    </BuyerStyle>
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
          <Box>{content}</Box>
        </MobileDrawer>
      </Hidden>
      <Hidden mdDown>
        <DesktopDrawer
          anchor="left"
          open
          variant="persistent"
          // style={{ width: 10 }}
        >
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
