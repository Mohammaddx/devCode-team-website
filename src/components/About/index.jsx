import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "../../images/about.svg";
import { useStyle } from "./style.jsx";
import Footer from "../footer/index";

const AboutComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>about us</h1>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.childGrid}>
          <p className={classes.p}>
            <strong>DevCode Team</strong> is a custom software development
            company. We have more than 4 years of experience in Web Applications
            and Mobile Applications and Ux Ui Design , We are a 14 people from
            all over the Arab World, We build this compony to make easy to
            anyone to make a connection with us
          </p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.childGrid}>
          <img src={Image} alt="About" className={classes.image} />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default AboutComponent;
