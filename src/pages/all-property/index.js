import React from "react";
import AllPropertyIndex from "./AllPropertyIndex";
import StickyModal from "../CityChat/StickyModal";
import StickyModalProperty from "./StickyModalProperty";
const index = (props) => {
  return (
    <div>
      <AllPropertyIndex />
      <StickyModalProperty />
    </div>
  );
};

export default index;
