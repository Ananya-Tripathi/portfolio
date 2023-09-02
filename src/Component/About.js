import { motion } from "framer-motion";
import React from "react";
// import avtar from "./EducationSection/avatar.png";
export const About = () => {
  return (
    <div className="text-center p-6 h-[300px] mt-32 mb-20 md:w-[700px] mx-auto ">
      <motion.div
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-6xl font-extrabold py-6 relative top-0 border-b-2 mb-6 "
      >
        ANANYA TRIPATHI
      </motion.div>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="text-base md:text-base subText relative left-0"
      >
      
    Experienced full-stack developer with a passion for building innovative web applications.
    Proficient in React.js, Node.js, Express, MongoDB, MySQL, Python, Java, and C++.
    Highly skilled problem-solver and team player.

      </motion.div>
    </div>
  );
};
