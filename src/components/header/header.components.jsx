import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="name" to="/">
        PRIYAM SAHAS
      </Link>
      <div className="options">
        <Link className="option" to="/portfolio">
          Portfolio
        </Link>
        <Link className="option" to="/about">
          About
        </Link>
        <Link className="option" to="/journey">
          Journey
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
