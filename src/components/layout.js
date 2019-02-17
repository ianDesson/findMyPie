import React from "react";
import NavBar from "./navBar";
import Landing from "./landing";

const Layout = () => {
  return (
    <>
      <NavBar class="nav-wrapper" />
      <Landing style={{height: '100%'}}/>
    </>
  );
};
export default Layout;
