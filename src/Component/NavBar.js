import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="h-32 md:px-20 md:flex pt-20 justify-between">
      <div className="flex justify-center md:justify-between mx-4">
        <p className="name">Ananya</p>
      </div>

      <div className="flex md:mr-[100px] justify-center mt-5">
        <Link to={"/home"}>
          <p className="routeText">Home</p>
        </Link>
        <Link to={"/education"}>
          <p className="routeText ">Education</p>
        </Link>
        <Link to={"/contact"}>
          <p className="routeText ">Contact Me</p>
        </Link>
      </div>
    </div>
  );
};
