import React from "react";

const InfoRight = (props) => {
  return (
    <div className="container flex w-[800px] gap-x-10 mt-6">
      <p className="text-left px-4 py-2 w-3/4">{props.description}</p>
      <div className="  p-2  border-l-4 border-white">
        <img
          src={props.src}
          alt="logo"
          className="  h-32 p-4 bg-slate-100 rounded-md "
        />
      </div>
    </div>
  );
};

export default InfoRight;
