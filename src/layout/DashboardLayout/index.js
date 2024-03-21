import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import NavBar from "./NavBar";
import TopBar from "../HomeLayout/Topbar";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
  position: "relative",
  // background: "#f3f5f7",
}));

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  position: "relative",
  // paddingTop: 70,
  minHeight: "calc(100vh - 75px)",
  backgroundColor: "#fff",
  marginTop: "83px",
  borderRadius: "5px",
  // [theme.breakpoints.up("lg")]: {
  //   paddingLeft: 256,
  // },
}));

const ContentContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const Content = styled("div")(({ theme }) => ({
  flex: "1 1 auto",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  padding: "23px 25px 25px",
  [theme.breakpoints.down("md")]: {
    padding: "23px 25px 25px",
  },
}));

const DashboardLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState("Arbitrage");

  return (
    <Root>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        setSelectedTab={(item) => setSelectedTab(item)}
        tabView={selectedTab}
      />
      <Wrapper>
        <ContentContainer>
          <Content id="main-scroll">{children}</Content>
        </ContentContainer>
      </Wrapper>
    </Root>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
