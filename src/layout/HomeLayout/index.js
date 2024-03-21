import Footer from "./Footer";
import React from "react";
import Topbar from "./Topbar";

export default function HomeLayout({ children }) {
  return (
    <React.Fragment>
      <Topbar />
      <div>{children}</div>

      <Footer />
    </React.Fragment>
  );
}
