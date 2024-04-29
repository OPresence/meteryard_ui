import React from "react";
import PropertyPostIndex from "./PropertyPostIndex";
import HomeLayout from "../../layout/LoginLayout/LoginLayout";
// import useAuthGuard from "../../component/auth";

const index = () => {
  // useAuthGuard(); // Use the auth guard hook here
  console.log("0000000000---->");
  return (
    <HomeLayout>
      <PropertyPostIndex />
    </HomeLayout>
  );
};

export default index;
