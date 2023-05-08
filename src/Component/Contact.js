import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";

export const Contact = () => {
  return (
    <div className="subText mx-auto  p-10 mt-32">
      <h1 className="subHeading">Let's Connect</h1>
      <div className="text-xl h-20 flex space-x-4 justify-center p-4">
        <a href="mailto:ananyatrip0802@gmail.com">
          <SiGmail  />
        </a>
        <a href="https://www.linkedin.com/in/tripathi-ananya/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ananya-Tripathi">
          <SiGithub />
        </a>
        <a href="https://www.instagram.com/_yana_892/">
          <FiInstagram />
        </a>
      </div>
    </div>
  );
};
