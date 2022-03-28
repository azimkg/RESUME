import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">
        Home
      </Link>
      <Link className="navbar-link" to="/about">
        Work
      </Link>
      <Link className="navbar-link" to="/skills">
        Skills
      </Link>
      <Link className="navbar-link" to="/work">
        About
      </Link>
    </div>
  );
};

export default Navbar;
