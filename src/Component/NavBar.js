import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div className="h-32 md:px-20 md:flex pt-20 justify-center md:justify-between">
      <div className="flex justify-between mx-4">
        <p className="name">Ananya</p>
        <button
          className="text-white text-4xl "
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <HiMenu />
        </button>
      </div>

      <div className="md:flex md:mr-[100px]">
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
