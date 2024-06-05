import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#444444",
        color: "#FFFFFF",
        padding: "60px 0",
      }}
    >
      <Box
        width={"80%"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginInline="auto"
      >
        <Box width="100%" height="50px">
          <img src="/images/logo.png" width="130px" height="30px" />
        </Box>
        <Box width="100%">
          <Box
            width="100%"
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems="flex-start"
            gap={isMobile ? 2 : 0}
          >
            <Box width={isMobile ? "100%" : "42%"}>
              <Typography
                fontSize="14px"
                style={{ textWrap: "pretty" }}
                fontWeight={300}
              >
                Meteryard Helps Users With Multi-Purpose Information, Along With
                Best Real Estate Industry Filters And Useful Innovative
                Technology Keeping In Mind The Needs Of Buyers And Sellers In
                The Real Estate Market Along With Residential And Commercial
                Establishments And Rental Properties.
              </Typography>
            </Box>
            <Box
              width={isMobile ? "90%" : "100%"}
              display="flex"
              flexDirection={isMobile ? "column-reverse" : "row"}
              marginInline="auto"
              gap={2}
            >
              <Box
                width={isMobile ? "100%" : "75%"}
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                justifyContent="space-around"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={isMobile ? 1 : 2}
                >
                  <Typography fontSize="20px">NAVIGATION</Typography>
                  <Box display="flex" flexDirection="column" gap={0.2}>
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <Typography
                        fontSize="14px"
                        color="#ffffff"
                        fontWeight={300}
                      >
                        Home
                      </Typography>
                    </Link>
                    <Link href="/about-us" style={{ textDecoration: "none" }}>
                      <Typography
                        fontSize="14px"
                        color="#ffffff"
                        fontWeight={300}
                      >
                        About Us
                      </Typography>
                    </Link>
                    <Link
                      href="/terms-conditions"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        fontSize="14px"
                        color="#ffffff"
                        fontWeight={300}
                      >
                        Terms & Conditions
                      </Typography>
                    </Link>
                    <Link
                      href="/privacy-policy"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        fontSize="14px"
                        color="#ffffff"
                        fontWeight={300}
                      >
                        Privacy Policy
                      </Typography>
                    </Link>
                    <Link href="/blog" style={{ textDecoration: "none" }}>
                      <Typography
                        fontSize="14px"
                        color="#ffffff"
                        fontWeight={300}
                      >
                        Blog
                      </Typography>
                    </Link>
                    <Link
                      href="/property-posts"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        fontSize="14px"
                        color="#ffffff"
                        fontWeight={300}
                      >
                        Properties Listing
                      </Typography>
                    </Link>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={isMobile ? 1 : 2}
                  mt={isMobile ? 2 : 0}
                >
                  <Typography fontSize="20px">SUBSCRIBE</Typography>
                  <Box display="flex" flexDirection="column">
                    <Typography fontSize="14px" fontWeight={300}>
                      Sign Up for Our Newsletter to
                    </Typography>
                    <Typography fontSize="14px" fontWeight={300}>
                      get Latest Updates and Offers.
                    </Typography>
                    <Typography fontSize="14px" fontWeight={300}>
                      Subscribe to receive news in
                    </Typography>
                    <Typography fontSize="14px" fontWeight={300}>
                      your inbox. Lorem Ipsum been industry
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography fontSize="14px">CONTACT US</Typography>
                <Box display="flex" flexDirection="column" gap={0.2}>
                  <Link
                    href="mailto:info@meteryard.com"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography fontSize="12px" color="#ffffff">
                      Email: contact@meteryard.com
                    </Typography>
                  </Link>
                  <Link href="" style={{ textDecoration: "none" }}>
                    <Typography fontSize="12px" color="#ffffff">
                      Phone: 7060604604
                    </Typography>
                  </Link>
                  <Box mt={2}>
                    <Typography fontSize="14px">FOLLOW US</Typography>
                    <Box display="flex" gap={2} mt={1.5}>
                      <Link href="https://www.facebook.com/meteryard.india.3/">
                        <img
                          src="/images/meteryard/icons/facebook.svg"
                          alt="facebook icon"
                        />
                      </Link>
                      <Link href="https://www.instagram.com/meteryard/">
                        <img
                          src="/images/meteryard/icons/instagram.svg"
                          alt="instragram icon"
                        />
                      </Link>
                      <Link href="https://x.com/MeterYard">
                        <img
                          src="/images/meteryard/icons/twitter.svg"
                          alt="twitter icon"
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/meteryard-india-1385221b0/">
                        <img
                          src="/images/meteryard/icons/linkedin.svg"
                          alt="linkedin"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            width={isMobile ? "90%" : "100%"}
            mt={4}
            mb={5}
            display="flex"
            flexDirection="column"
            gap={1}
            marginInline="auto"
          >
            <Box>
              <Typography>OUR PRESENCE</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.3} flexWrap="wrap">
              <Typography fontSize="12px">Delhi NCR </Typography>|
              <Typography fontSize="12px">Bengaluru</Typography>|
              <Typography fontSize="12px">Kolkata</Typography>|
              <Typography fontSize="12px">Hyderabad</Typography>|
              <Typography fontSize="12px">Bhubaneswar</Typography>|
              <Typography fontSize="12px">Varanasi</Typography>|
              <Typography fontSize="12px">Lucknow</Typography>|
              <Typography fontSize="12px">Panchkula</Typography>|
              <Typography fontSize="12px">Srinagar</Typography>|
              <Typography fontSize="12px">Udhampur</Typography>|
              <Typography fontSize="12px">Bhatinda</Typography>|
              <Typography fontSize="12px">Guwahati</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <div
        style={{
          width: "90%",
          height: "2px",
          backgroundColor: "#A9D910",
          marginInline: "auto",
        }}
      ></div>
      <Box width="80%" marginInline="auto">
        <Box
          mt={5}
          width="100%"
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={isMobile ? "center" : "space-between"}
          gap={isMobile ? 1 : 0}
        >
          <Box>
            <Typography fontSize="12px" fontWeight={300} textAlign="center">
              © 2024 MeterYard. All Rights Reserved.
            </Typography>
          </Box>
          <Box display="flex" gap={0.5} justifyContent={isMobile && "center"}>
            <Link href="/privacy-policy" style={{ textDecoration: "none" }}>
              <Typography fontSize="12px" color="#ffffff" fontWeight={300}>
                Privacy Policy
              </Typography>
            </Link>
            |
            <Link href="/terms-conditions" style={{ textDecoration: "none" }}>
              <Typography fontSize="12px" color="#ffffff" fontWeight={300}>
                Terms and Conditions
              </Typography>
            </Link>
            |
            <Link href="/disclaimer" style={{ textDecoration: "none" }}>
              <Typography fontSize="12px" color="#ffffff">
                Disclaimer
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
