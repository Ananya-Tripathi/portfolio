import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="h-24 md:px-20 pt-14 md:flex grid justify-self-end">
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
  );
};
