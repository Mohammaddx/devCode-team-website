import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo.png";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen ? $(".links").css("left", "0") : $(".links").css("left", "-100%");
  });

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo pic" />
        </div>

        <div className="links">
          <ul>
            <li>
              <NavLink to="/home" className="link">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="link">
                about us
              </NavLink>
            </li>
            <li>
              <NavLink to="services" className="link">
                services
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio" className="link">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="link">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-logo">
          <MenuSharpIcon
            fontSize="large"
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
