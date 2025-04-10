import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <>
      <div className="fourohfour_section">
        <h1>
          404
        </h1>
        <p>page not found</p>
        <Link className="theme_btn" to="/">HOME</Link>
      </div>
    </>
  );
};

export default FourOhFour;
