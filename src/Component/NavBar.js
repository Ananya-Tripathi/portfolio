import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
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

      {menu && (
        <div className="flex md:mr-[100px]">
          <p className="routeText">Home</p>
          <p className="routeText ">Education</p>
          <p className="routeText ">Contact Me</p>
        </div>
      )}
    </div>
  );
};
