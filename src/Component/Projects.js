import React from "react";
import InfoRight from "../Info/InfoRight.js";
import Info from "../Info/InfoLeft.js";
import { useState } from "react";
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
        <>
          <InfoRight
            src="https://i0.wp.com/greenenterprise.group/wp-content/uploads/2022/10/GE_Rectangular_Black.png?fit=1024%2C399&ssl=1"
            description="WeBlog, React, Node.js, Express, MongoDB, Javascript, HTML5, CSS
•Created a recpie blogging website, with integrated user-authentication system using tokens.
•It also allows user to edit their post"
          />
          <Info
            src="https://i0.wp.com/greenenterprise.group/wp-content/uploads/2022/10/GE_Rectangular_Black.png?fit=1024%2C399&ssl=1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea aliquid vero sed cum eligendi laboriosam provident recusandae animi eaque?"
          />
        </>
      )}
    </div>
  );
};

export default Projects;
