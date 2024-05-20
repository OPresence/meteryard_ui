import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { Container, styled } from "@mui/system";
import { PostApiFunction } from "../../utils";
const Root = styled("Box")(({ theme }) => ({
  "& .mainAboutSection": {
    padding: "30px 0px",
  },
}));
const Aboutus = () => {
  const [_privacypolict, setPrivacyPolicy] = useState("");
  const ListPrivacytUsContent = async (values) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllStaticContent,
        data: {
          search: "privacyPolicy",
        },
      });
      if (res) {
        console.log("dnkknsdknfn--->", res?.result?.docs);
        setPrivacyPolicy(res?.result?.docs[0]);
      }
    } catch (error) {
      console.log("erorr", error);
    }
  };
  useEffect(() => {
    ListPrivacytUsContent();
  }, []);
  return (
    <>
      <Root>
        <Container>
          <Box className="mainAboutSection">
            <div
              dangerouslySetInnerHTML={{ __html: _privacypolict?.description }}
            ></div>
          </Box>
        </Container>
      </Root>
    </>
  );
};

export default Aboutus;
