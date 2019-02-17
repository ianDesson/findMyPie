import React from "react";
import NavBar from "./navBar";
import Landing from "./landing";
import Application from "./application";
import Fab from "@material-ui/core/Fab";
import { Typography } from "@material-ui/core";

const styles = {
  button: {
    color: "#ffc86a",
    backgroundColor: "#ac1400"
  },
  startContainer: {
    textAlign: "center",
    backgroundColor: "white"
  }
};

const Layout = () => {
  return (
    <>
      <NavBar class="nav-wrapper" style={{ position: "fixed" }} />
      <Landing />
      <div style={styles.startContainer}>
        <Typography variant={"h5"}>
          Find My Pie allows you to find the cheapest pizza online possible.
        </Typography>
        <Fab
          style={styles.button}
          color={"#ffc86a"}
          size="large"
          variant="extended"
          align="center"
        >
          Let's Get Started!
        </Fab>
      </div>
      <Application />
    </>
  );
};
export default Layout;
