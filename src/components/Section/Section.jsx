import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <div className="section-about">
        <h1 className="section-title">About</h1>
        <p className="description">
          A programmer is one of the highest paid professions in the modern
          world. Invitations for an interview are received only by those
          candidates whose resume is compiled in accordance with all the
          requirements of business style and established standards. If you are
          looking for a job as a programmer, use the resume templates presented
          on our resource. This will save you time and increase your chances of
          getting the job you want.
        </p>
      </div>
      <div className="section-info">
        <h1 className="section-title">Basic information</h1>
        <h3>Address: Bishkek, Pishpek, str. Termecikova 101 </h3>
        <h3>Date of Birth: 29 december </h3>
        <h3>Language: Russian, English, Kyrgyz</h3>
        <h3>Gender: Male</h3>
      </div>
    </div>
  );
};

export default Section;
