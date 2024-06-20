import React, { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import HomeLayout from "../../layout/HomeLayout";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";

import { Container, styled } from "@mui/system";
const Root = styled(Box)(({ theme }) => ({
  "& .mainAboutSection": {
    padding: "30px 0px",
    marginTop: "100px",
    "& h2": {
      fontFamily: "Inter",
      fontSize: "45px",
      fontWeight: "600",
      lineHeight: "58.09px",
    },
    "& p": {
      fontSize: "18px",
      color: "#000",
      fontWeight: "500",
    },
  },
}));
const Terms = () => {
  const [_conditionypolict, setconditionyPolicy] = useState("");
  const ListconditionytUsContent = async (values) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllStaticContent,
        data: {
          search: "termsConditions",
        },
      });
      if (res) {
        console.log("dnkknsdknfn--->", res?.result?.docs);
        setconditionyPolicy(res?.result?.docs[0]);
      }
    } catch (error) {
      console.log("erorr", error);
    }
  };
  useEffect(() => {
    ListconditionytUsContent();
  }, []);
  return (
    <HomeLayout>
      <Root>
        <Container>
          <Box className="mainAboutSection">
            <div
              dangerouslySetInnerHTML={{
                __html: _conditionypolict?.description,
              }}
            ></div>
          </Box>
        </Container>
      </Root>
    </HomeLayout>
  );
};

export default Terms;
