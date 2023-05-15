import React, { useState } from "react";
import InfoLeft from "./Info";
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
          <InfoLeft
            src="https://i0.wp.com/greenenterprise.group/wp-content/uploads/2022/10/GE_Rectangular_Black.png?fit=1024%2C399&ssl=1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil et quas molestiae voluptatem blanditiis est quisquam. Esse, saepe sit."
          />
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
