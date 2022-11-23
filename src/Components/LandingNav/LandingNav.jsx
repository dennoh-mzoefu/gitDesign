import React from "react";
import "./style.css";
import Svg from "../DesignLogo/Git-design-logo.jsx";
import { Link } from "react-router-dom";
function LandingNav() {
  return (
    <div className="landing__nav">
      <div className="landing__nav__logo landing__logo">
        <Svg />
        {/* <img className="landing__logo" src={Logo} /> */}
        {/* <img className="landing__logo" src={logo1} /> */}
      </div>
      <div className="landing__auth">
        <Link to="/login">
          <div className="landing__login">
            <h2>Login</h2>
          </div>
        </Link>

        <Link to="/register">
          <div className="landing__login">
            <h2>Sign up</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingNav;
