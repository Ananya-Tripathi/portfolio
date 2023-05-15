import React from "react";
import Info from "./Info.js";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="subText">
      <button className="subHeading" onClick={handleClick}>
        Projects
      </button>

      {open && (
        <motion.div
          initial={{ top: -50, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative top-0"
        >
          <Info
            src="https://i0.wp.com/greenenterprise.group/wp-content/uploads/2022/10/GE_Rectangular_Black.png?fit=1024%2C399&ssl=1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea aliquid vero sed cum eligendi laboriosam provident recusandae animi eaque?"
          />
          <Info
            src="https://i0.wp.com/greenenterprise.group/wp-content/uploads/2022/10/GE_Rectangular_Black.png?fit=1024%2C399&ssl=1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea aliquid vero sed cum eligendi laboriosam provident recusandae animi eaque?"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
