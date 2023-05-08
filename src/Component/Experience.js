import React, { useState } from "react";
import Info from "../Info/InfoLeft.js";

const Experience = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="subText menu ">
      <button className="subHeading" onClick={handleClick}>
        Experience
      </button>
      {open && (
        <Info
          src="https://i0.wp.com/greenenterprise.group/wp-content/uploads/2022/10/GE_Rectangular_Black.png?fit=1024%2C399&ssl=1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil et quas molestiae voluptatem blanditiis est quisquam. Esse, saepe sit."
        />
      )}
    </div>
  );
};

export default Experience;
