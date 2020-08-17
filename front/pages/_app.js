import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Navbar from "../Components/Navbar";
import SubMenu from "../Components/SubMenu";
import "../styles.css";

const DarkEveryTime = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>어둠의에타</title>
      </Head>
      <Navbar />
      <SubMenu />
      <Component />
    </>
  );
};

DarkEveryTime.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default DarkEveryTime;
