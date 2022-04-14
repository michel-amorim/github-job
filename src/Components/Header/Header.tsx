import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <b>Github</b> Jobs
      </Link>
    </header>
  );
};

export default Header;
