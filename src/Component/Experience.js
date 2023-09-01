import React, { useState } from "react";
import Info from "./Info";
import { motion } from "framer-motion";
import opus from "../assests/Opus.png";
const Experience = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="subText menu ">
      <button className="subHeading " onClick={handleClick}>
        Experience
      </button>
      {open && (
        <motion.div
          initial={{ top: -50, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          exit={{ top: -50 }}
          transition={{ duration: 0.7 }}
          className="relative top-0 flex flex-wrap w-[80%] h-[60%] mx-auto overflow-scroll"
        >
          <Info
            src={opus}
            heading="Front-End Developer"
            description="Green Enterprises"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
