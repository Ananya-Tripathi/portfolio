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
            src="https://cdn.pixabay.com/photo/2017/05/10/15/05/himalayas-2301040_1280.jpg"
            heading="WeBlog (React, Node.js, Express, MongoDB, Javascript, HTML5, CSS)"
            description="A recipe blogging website, with integrated user-authentication,user can create and edit post from their id."
          />
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
