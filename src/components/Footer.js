import React from "react";
import logo from "../aashuu/aashuuicon.png";
import { Link, NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = (props) => {
  return (
    <section className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/" className="footer_logo">
            {/* <h3>aashuu.</h3> */}
            <img src={logo} alt="" />
          </Link>
          <ul className="footer_menu">
            <li className="menu_item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/works">Works</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <p className="copyright">
            &copy; {new Date().getFullYear()} <span>aashuu</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
