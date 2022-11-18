import React from "react";

export const NavBar = () => {
  return (
    <div className="h-32 md:px-20 md:flex pt-20 justify-center md:justify-between">
      <p className="name">Ananya</p>
      <div className="flex md:mr-[100px]">
        <p className="routeText">Home</p>
        <p className="routeText ">Education</p>
        <p className="routeText ">Contact Me</p>
      </div>
    </div>
  );
};
