import React from "react";
// import avtar from "./EducationSection/avatar.png";
export const About = () => {
  return (
    <div className="min-h-screen">
      <div className="about">
        <p className="text-6xl font-bold">Hi I am Ananya,</p>
        <p className="text-2xl">Welcome to my profile...</p>
        <p className="subText">
          I am an aspiring Full-Stack developer currently learning Back-End and
          polishing my Front-End skills.
        </p>
        <p className="subText">
          I have previously worked with React, Javascript, HTML and CSS.
          Currently learning to work with Node, Express.js
        </p>
      </div>
      {/* <div>
        <img src={avtar} alt="avatar" />
      </div> */}
    </div>
  );
};
