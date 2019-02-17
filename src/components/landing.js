import React from "react";
import Grid from "@material-ui/core/Grid";
import BackgroundImage from "../images/pizzaBackground.png";
import Logo from "../images/FindMyPieLogo.png";
import Fab from "@material-ui/core/Fab";

const styles = {
  logo: {
    justifyContent: 'center'
  },
  backgroundImage: {
    background: `url(${BackgroundImage})`,
    height: "800px",
    backgroundSize: "cover"
  },
  button: {
    color:'#ffc86a',
    backgroundColor: '#ac1400'
  }
};

const Landing = () => (
  <div style={styles.backgroundImage}>
    <Grid container>
      <Grid item xs={12} style={{textAlign:'center'}} justify="center">
        <img src={Logo} style={styles.logo}/>
        <Fab style={styles.button} 
          size="large" variant="extended" align="center">
          Start
        </Fab>
      </Grid>
    </Grid>
  </div>
);
export default Landing;
