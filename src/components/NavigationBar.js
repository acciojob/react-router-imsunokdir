import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
    </div>
  );
};

export default NavigationBar;
