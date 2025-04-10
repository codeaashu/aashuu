import React from "react";
import PradipLoader from "../aashuu/aashuuicon.png";
import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="preloader">
      <img src={PradipLoader} alt="pradipLadva" />
    </div>
  );
};

export default Loading;
