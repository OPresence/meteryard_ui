import React, { useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import {
  IconButton,
  Toolbar,
  AppBar,
  Hidden,
  Avatar,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
import Logo from "../../../component/Logo";
import Link from "next/link";
// import AppContext from "@/context/AppContext";
// import { generateUniqueAvatar } from "@/utils";
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  padding: "7px 30px 7px 30px",
  background: "rgba(56, 53, 125, 1)",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 20px 0px 20px",
  },
  boxShadow: "0px 4px 4px rgb(0 0 0 / 10%)",
}));

const MainHeader = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

const LeftBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "306px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "200px",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "150px",
  },
  "& img": {
    width: "100%",
    maxWidth: "120px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100px",
      paddingLeft: "0 !important",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
    "@media(max-width:483px)": {
      maxWidth: "100px",
    },
  },
}));

const AvatarMain = styled(Box)(({ theme }) => ({
  marginLeft: "16px",
  "@media(max-width:767px)": {
    marginLeft: "6px",
  },
}));

const TopBar = ({
  selectedTab,
  onTabChange,
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const router = useRouter();
  return (
    <StyledAppBar elevation={0} fonMobileNavOpencolor="inherit">
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            color="#0666EB"
            onClick={onMobileNavOpen}
            style={{ padding: "0px" }}
          >
            <MenuIcon style={{ color: "#0666EB", fontSize: "25px" }} />
          </IconButton>
        </Hidden>
        &nbsp; &nbsp;
        <MainHeader>
          <Grid container alignItems="center">
            <Grid item lg={3} md={3} sm={4} xs={6}>
              <LeftBox>
                <Link href="/" passHref>
                  <Logo />
                </Link>
              </LeftBox>
            </Grid>
            <Hidden xsDown>
              <Grid lg={4} md={6} sm={5}></Grid>
            </Hidden>
            <Grid lg={5} md={3} sm={3} xs={6}>
              <Box display="flex" justifyContent="flex-end">
                <AvatarMain
                  onClick={() => router.push("/profile")}
                  style={{ cursor: "pointer" }}
                >
                  <Avatar src={"/images/1567018939360.png"} alt="" />
                </AvatarMain>
              </Box>
            </Grid>
          </Grid>
        </MainHeader>
      </Toolbar>
    </StyledAppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default TopBar;

export function TopBarData() {
  const router = useRouter();

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Hidden xsDown>
          <Box>
            <Typography variant="h5">NFT Marketplace</Typography>
            <Typography variant="body1" style={{ color: "#ffffff9c" }}>
              example@gmail.com
            </Typography>
          </Box>
        </Hidden>
        &nbsp; &nbsp;
        <Avatar src="images/google.png" alt="" />
      </Box>
    </>
  );
}
