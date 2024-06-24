import React from "react";
import PropertyPostIndex from "./PropertyPostIndex";
import HomeLayout from "../../layout/HomeLayout";
// import useAuthGuard from "../../component/auth";

const index = () => {
  // useAuthGuard(); // Use the auth guard hook here
  return (
    <HomeLayout>
      <PropertyPostIndex />
    </HomeLayout>
  );
};

export default index;
