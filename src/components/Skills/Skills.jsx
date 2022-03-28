import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <Link to="/">
        <button className="class">Home</button>
      </Link>
      <div className="skills-container">
        <h2 className="skills-title">
          Skills
          <img
            src="https://cdn-icons-png.flaticon.com/512/4727/4727496.png"
            alt=""
            width="30px"
            style={{ marginLeft: "50px" }}
          />
        </h2>
        <h3 className="skills-title">Languages:</h3>
        <h3 className="skills-title">
          JavaScript
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="JS"
            width="30px"
            style={{ marginLeft: "50px" }}
          />
        </h3>
        <h3 className="skills-title">
          HTML, CSS
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
            alt="HTML"
            width="30px"
            style={{ marginLeft: "50px" }}
          />
        </h3>
        <h3 className="skills-title">
          JQuery
          <img
            src="https://cdn-icons.flaticon.com/png/512/2340/premium/2340047.png?token=exp=1648497287~hmac=c84a9168bdf3076b7a15085dbde876fe"
            alt="JQuery"
            width="30px"
            style={{ marginLeft: "50px" }}
          />
        </h3>
        <h3 className="skills-title">
          React
          <img
            src="https://cdn-icons.flaticon.com/png/512/1183/premium/1183672.png?token=exp=1648497325~hmac=5b81098f69326b67bbf9c5ffde7204d0"
            alt=""
            width="30px"
            style={{ marginLeft: "50px" }}
          />
        </h3>
      </div>
      <h2 className="h2">My Hobby</h2>
      <div className="containers">
        <Image
          style={{ width: "200px", height: "200px", marginLeft: "50px" }}
          src="data:image/jpeg;base64,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"
        />
        <Image
          style={{ width: "200px", height: "200px", marginLeft: "50px" }}
          src="https://images.squarespace-cdn.com/content/v1/530554f0e4b0658094bf0c36/1499308435557-KKUGGFO1GFFVRV49SN43/image-asset.png"
        />
        <Image
          style={{ width: "200px", height: "200px", marginLeft: "50px" }}
          src="https://animatorisland.b-cdn.net/wp-content/uploads/2012/02/Generation1.jpg"
        />
        <Image
          style={{ width: "200px", height: "200px", marginLeft: "50px" }}
          src="https://thumbs.dreamstime.com/b/handsome-young-guy-dancer-suit-barefoot-dancing-expressive-dance-dance-school-poster-body-tattoo-handsome-young-guy-194142423.jpg"
        />
        <Image
          style={{ width: "200px", height: "200px", marginLeft: "50px" }}
          src="https://img.freepik.com/free-photo/bodybuilder-posing-fitness-muscled-man-on-dark-scene_136403-4206.jpg"
        />
        <Image
          style={{ width: "200px", height: "200px", marginLeft: "50px" }}
          src="https://www.30daysinger.com/images/welcome2/30-Day-Singer---Hero-Man.png"
        />
      </div>
    </div>
  );
};

export default Skills;
