import { motion } from "framer-motion";
import React from "react";
// import avtar from "./EducationSection/avatar.png";
export const About = () => {
  return (
    <div className="text-center p-6 h-[400px] mt-32 mb-20 md:w-[700px] mx-auto ">
      <motion.div
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-7xl font-extrabold py-6 relative top-0 border-b-2 mb-6"
      >
        Hi I am Ananya,
      </motion.div>

      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="text-lg md:text-2xl subText py-4 relative right-0"
      >
        Welcome to my profile...
      </motion.div>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="text-base md:text-lg subText relative left-0"
      >
        I am an aspiring Full-Stack developer currently learning Back-End and
        polishing my Front-End skills. I have previously worked with React,
        Javascript, HTML and CSS. Currently learning to work with Node,
        Express.js
      </motion.div>
    </div>
  );
};
