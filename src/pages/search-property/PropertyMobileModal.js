import React, { useContext, useState, useEffect } from "react";
import { Box, Typography, Divider, List, Slide } from "@mui/material";
import AccordionComponent from "../CityChat/AccordionComponent";
import PriceRangeComponent from "../../component/PriceRangeComponent";
import StateComponent from "../../component/StateComponent";
import { FaHospitalUser, FaSquarespace } from "react-icons/fa";
import { styled } from "@mui/system";

import {
  AiFillHome,
  AiFillDashboard,
  AiOutlineTransaction,
} from "react-icons/ai";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import NavItem from "../../layout/PropertyLayout/NavBar/NavItem";
import { AuthContext } from "../../context/Auth";

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

const PropertyMobileModal = ({
  onMobileClose,
  openMobile,
  tabView,
  setSelectedTab,
}) => {
  const ContainerStyle = styled("Box")({
    maxHeight: "calc(80vh - 100px)",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "0px",
    },

    "& h2": {
      textAlign: "center",
      fontSize: "500",
      fontSize: "20px",
    },
  });

  const router = useRouter();
  const auth = useContext(AuthContext);
  const [isLogout, setIsLogout] = useState(false);
  const renderedSections = tabView === "Arbitrage" ? sections : sections1;
  const { search } = router.query;

  const [selectedSubTypes, setSelectedSubTypes] = useState([]);

  const handleCheckboxChange = (parentId, subTypeId) => {
    setSelectedSubTypes((prevState) => {
      const isAlreadySelected = prevState.some(
        (item) => item.parentId === parentId && item.subTypeId === subTypeId
      );

      if (isAlreadySelected) {
        return prevState.filter(
          (item) =>
            !(item.parentId === parentId && item.subTypeId === subTypeId)
        );
      } else {
        return [...prevState, { parentId, subTypeId }];
      }
    });
  };

  useEffect(() => {
    const uniqueParentIds = [];
    const uniqueSubTypeIds = [];
    selectedSubTypes.forEach((item) => {
      if (!uniqueParentIds.includes(item.parentId)) {
        uniqueParentIds.push(item.parentId);
      }
      if (!uniqueSubTypeIds.includes(item.subTypeId)) {
        uniqueSubTypeIds.push(item.subTypeId);
      }
    });
    auth?.setPropertyType(uniqueParentIds);
    auth?.setPropertySubType(uniqueSubTypeIds);
  }, [selectedSubTypes]);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [router.pathname]);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const content = (
    <ContainerStyle>
      <Box mb={2}>
        <Typography variant="h2">Property category filter</Typography>
      </Box>

      {auth?._pro_with_subpro?.length > 0 &&
        auth?._pro_with_subpro?.map((data, index) => {
          return (
            <Box key={index}>
              <AccordionComponent
                data={data}
                index={index}
                imgURL="/images/Group 8163.png"
                handleCheckboxChange={handleCheckboxChange}
                selectedSubTypes={selectedSubTypes}
              />
              <Box m={"10px 0 0 0"}>
                <Divider className="devider" />
              </Box>
            </Box>
          );
        })}

      <Box>
        <PriceRangeComponent imgURL="/images/Group 8346.png" />
      </Box>
      <Box m={"10px 0 0 0"}>
        <Divider className="devider" />
      </Box>
      <Box>
        <StateComponent
          StattName={auth?.statesHome}
          // stateChange={auth?.setGetCityValue}
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
          StattName={auth?._citylist}
          // stateChange={auth?.setCitySelect}
          type="Select City"
          name="City"
          imgURL="/images/Group 8179.png"
        />
      </Box>
      <Box m={"10px 0 0 0"}>
        <Divider className="devider" />
      </Box>
    </ContainerStyle>
  );

  return content;
};

export default PropertyMobileModal;
