import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Link to="/">
        <img
          src="https://cdn-icons.flaticon.com/png/512/5974/premium/5974636.png?token=exp=1648495412~hmac=d2010b62c503c40c9742795cfe872885"
          alt="Home"
          width="50px"
        />
      </Link>

      <div className="about-container">
        <h1 className="title-about">
          Completed three major projects. Worked in giant companies like:
          Facebook, Twitter, Instagram.
        </h1>
        <img
          src="https://technewsdaily.vn/zfiles/2021/08/instagram-personal-vs-business-profile.jpeg"
          alt=""
          width="800px"
          style={{ marginTop: "20px" }}
        />
        <img
          src="https://imag.malavida.com/mvimgbig/download-fs/twitter-12580-2.jpg"
          alt=""
          width="800px"
          style={{ marginTop: "20px" }}
        />
        <img
          src="https://thumb.tildacdn.com/tild6533-3461-4232-b133-356335653333/-/format/webp/fb_1.jpg"
          alt=""
          width="800px"
          style={{ marginTop: "20px" }}
        />
      </div>
      <p className="title-about">Write and I'll be happy to help.</p>
    </div>
  );
};

export default About;
