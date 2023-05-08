import React, { useState } from "react";
import { EmblaCarousel } from "./EmblaCarousel";

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
      {open && <EmblaCarousel />}
    </div>
  );
};

export default Certifications;
