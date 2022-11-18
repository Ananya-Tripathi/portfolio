import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";

export const Contact = () => {
  return (
    <div className="min-h-screen pt-20 w-[600px] mx-auto pl-6 md:pl-0">
      <div className="contactButton">
        <a href="mailto:ananyatrip0802@gmail.com">Gmail</a>
        <div className="icon">
          <SiGmail />
        </div>
      </div>
      <div className="contactButton">
        <a href="https://www.linkedin.com/in/tripathi-ananya/">LinkedIn</a>
        <div className="icon">
          <FaLinkedin />
        </div>
      </div>
      <div className="contactButton">
        <a href="https://github.com/Ananya-Tripathi">Github</a>
        <div className="icon">
          <SiGithub />
        </div>
      </div>
      <div className="contactButton">
        <a href="https://www.instagram.com/_yana_892/">Instagram</a>
        <div className="icon">
          <FiInstagram />
        </div>
      </div>
      <div className="contactButton">
        <a href="https://twitter.com/AnanyaT03134364">Twitter</a>
        <div className="icon">
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};
