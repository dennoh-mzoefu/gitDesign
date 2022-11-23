import React from "react";
import Svg from "./Svg";
import "./Style.css";
import LandingNav from "../LandingNav/LandingNav";

const LandingPage = () => {
  return (
    <div>
      <LandingNav />
      <div className="landing__page">
        <Svg />
      </div>
    </div>
  );
};

export default LandingPage;
