import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import NavBar from "./NavBar";
import { useRouter } from "next/router";
import TopBar from "../Topbar";

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
  // backgroundColor: "#080031",
  marginTop: "90px",
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
  padding: "0 40px 25px",
  [theme.breakpoints.down("md")]: {
    padding: "0 40px 25px",
  },
}));

const DashboardLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState("Arbitrage");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const adminToken = window.sessionStorage.getItem("adminToken");

      if (!adminToken) {
        router.push("/admin-login");
      }
    }
  }, [router]);

  if (typeof window === undefined) {
    return null; // Return null during server-side rendering
  }

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
