import React from "react";
import PostIndex from "./PostIndex";
import StickyModal from "../StickyModal";
import { Divider } from "@mui/material";

const index = () => {
  return (
    <div>
      <PostIndex />
      <Divider component="li" />
      <StickyModal />
    </div>
  );
};

export default index;
