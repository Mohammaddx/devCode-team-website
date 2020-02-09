import React from "react";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          <span>DevCode Team</span> &copy; 2020 . All Right Reserved,Designed By{" "}
          <span>DevCode Team</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
