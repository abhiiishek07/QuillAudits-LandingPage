import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";
// import favicon from "../../../public/favicon.png";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>QuillAudits</title>
        <meta name="description" content="Landing page" />
      </Head>
      <link rel="icon" href="/favicon.ico" />

      <Navbar />
      <main className="bg-white text-black"> {children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
