import React from "react";

const Info = (props) => {
  return (
    <div className="container md:flex md:w-[800px] gap-x-10 mt-6">
      <div className="  p-2 md:border-r-4 border-white">
        <img
          src={props.src}
          alt="logo"
          className="mx-auto h-32 p-4 bg-slate-100 rounded-md "
        />
      </div>
      <p className="md:text-left px-4 py-2 w-3/4 mx-auto">
        {props.description}
      </p>
    </div>
  );
};

export default Info;
