import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <img
        src="https://ik.imagekit.io/demo/img/tr:w-200,h-200,fo-face/https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg"
        alt=""
        className="image"
      />
      <h2 className="name">Azim Zheldenbaev</h2>
      <h3 className="job">Frontend Developer</h3>
      <div className="icon-div">
        <img
          className="icon"
          src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670125.png?token=exp=1648478138~hmac=190591e7de8b0d2dda115302d44c9092"
          alt=""
        />
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png"
          alt=""
        />
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
          alt=""
        />
        <img
          className="icon"
          src="https://cdn-icons.flaticon.com/png/512/720/premium/720277.png?token=exp=1648478177~hmac=4345a270156cf68386c29cc2fd74f547"
          alt=""
        />
      </div>
      <Link to="/send">
        <button className="btn">Write me</button>
      </Link>
    </div>
  );
};

export default Content;
