import React from "react";
import Info from "./Info.js";
import { useState } from "react";
import { motion } from "framer-motion";
import weblog from "../assests/WeBlog.png";
import taskflex from "../assests/taskflex.png";
import campusPost from "../assests/campusPost.png";

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
          exit={{ top: -50 }}
          transition={{ duration: 0.4 }}
          className="relative top-0 flex flex-wrap w-[80%] h-[60%] mx-auto overflow-scroll "
        >
          <Info
            src={weblog}
            heading="WeBlog"
            l1="User authentication using JWT token"
            l2="Create, read, update and delete post"
          />

          <Info
            src={taskflex}
            heading="Task Flex"
            l1="JWT authentication, Email Verification"
            l2="Create teams, add and delete members"
            l3="Assign task to members"
          />
          <Info src={campusPost} heading="Campus Post" />
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
