import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className=""> {children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
