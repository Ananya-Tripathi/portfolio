import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaDatabase,
  FaLanguage,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="subText">
      <div className="subHeading" onClick={handleClick}>
        Skills
      </div>

      {open && (
        <motion.div
          initial={{ top: -50, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          exit={{ top: -50 }}
          transition={{ duration: 0.4 }}
          className="relative top-0 flex flex-wrap w-[80%] h-[60%] mx-auto overflow-scroll "
        >
          <div className="flex w-[80%]">
            <div className="w-[20%]">Frontend development</div>
            <div className="w-[80%] flex flex-row"></div>
          </div>
          <div className="flex w-[80%]">
            <div className="w-[20%]">Backend development</div>
            <div className="w-[80%] flex flex-row"></div>
          </div>
          <div className="flex w-[80%]">
            <div className="w-[20%]"></div>
            <div className="w-[80%] flex flex-row"></div>
          </div>
          <div className="flex w-[80%]">
            <div className="w-[20%]"></div>
            <div className="w-[80%] flex flex-row"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
