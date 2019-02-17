import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  button: {
    textTransform: 'none',
    color: '#ac1400'
  }
}

const NavBar = () => {
  return (
    <AppBar position={"fixed"} style={{ backgroundColor: "#ffc86a" }}>
      <ToolBar>
        <Button variant="outlined" href="#">
          <Typography variant={"h6"} style={styles.button}>
            Find Your Pie
          </Typography>
        </Button>
      </ToolBar>
    </AppBar>
  );
};
export default NavBar;
