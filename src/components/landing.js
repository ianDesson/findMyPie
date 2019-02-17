import React from "react";
import Grid from "@material-ui/core/Grid";
import BackgroundImage from "../images/pizzaBackground.png";
import Logo from "../images/FindMyPieLogo.png";

const styles = {
  logo: {
    justifyContent: 'center',
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain'
  },
  backgroundImage: {
    background: `url(${BackgroundImage})`,
    height: "800px",
    backgroundAttachment: 'fixed',
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
};

const Landing = () => (
  <div style={styles.backgroundImage}>
    <Grid container>
      <Grid item xs={12} style={{textAlign:'center'}} justify="center">
        <img src={Logo} style={styles.logo}/>
      </Grid>
    </Grid>
  </div>
);
export default Landing;
