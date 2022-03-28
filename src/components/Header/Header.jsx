import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5448/5448415.png"
          alt=""
          width="50px"
          height="50px"
        />
        <div>
          <h3 className="call">azeldenbaev@gmail.com</h3>
          <h2 className="call">+996708082173</h2>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
