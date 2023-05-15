import React, { useState } from "react";
import Info from "./Info";
import { motion } from "framer-motion";
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
          transition={{ duration: 0.4 }}
          className="relative top-0"
        >
          <Info
            src="https://cdn.pixabay.com/photo/2017/05/10/15/05/himalayas-2301040_1280.jpg"
            heading="Front-End Developer, Green Enterprises"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil et quas molestiae voluptatem blanditiis est quisquam. Esse, saepe sit."
          />
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
