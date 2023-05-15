import React, { useState } from "react";

const Certifications = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="subText ">
      <button className="subHeading" onClick={handleClick}>
        Certifications
      </button>
    </div>
  );
};

export default Certifications;
