import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiGithub,
  SiVisualstudiocode,
  SiMongodb,
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
          className=" top-0 w-[80%] h-[210px] mx-auto overflow-hidden gap-x-4 flex flex-wrap justify-center items-center p-6"
        >
          <div className="icon">
            <SiHtml5 className="iconn" /> HTML5
          </div>
          <div className="icon">
            <SiCss3 className="iconn" /> CSS
          </div>

          <div className="icon">
            <SiTailwindcss className="iconn" /> TailwindCss
          </div>
          <div className="icon">
            <SiJavascript className="iconn" /> JavaScript
          </div>
          <div className="icon">
            <SiTypescript className="iconn" /> TypeScript
          </div>
          <div className="icon">
            <SiReact className="iconn" /> React
          </div>
          <div className="icon">
            <SiMongodb className="iconn" /> MongoDB
          </div>
          <div className="icon">
            <FaDatabase className="iconn" /> MySQL
          </div>
          <div className="icon">
            <SiGithub className="iconn" /> GitHub
          </div>
          <div className="icon">
            <SiVisualstudiocode className="iconn" /> VSCode
          </div>
          <div className="icon">
            <FaPython className="iconn" /> Python
          </div>
          <div className="icon">
            <FaJava className="iconn" /> Java
          </div>
          <div className="icon">
            <FaNodeJs className="iconn" /> NodeJs
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
