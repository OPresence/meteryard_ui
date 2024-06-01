// import Footer from "../PropertyLayout/Footer";
import React from "react";
import Topbar from "./Topbar";

import Footer from "../PropertyLayout/FooterV1";

export default function HomeLayout({ children }) {
  return (
    <React.Fragment>
      <Topbar />
      <div>{children}</div>

      <Footer />
    </React.Fragment>
  );
}
