import React from "react";

const Info = (props) => {
  return (
    <div className="container md:w-[35vw] md:h-[45vh] relative mx-auto my-6">
      <div className="h-[85%] w-full rounded-md overflow-hidden">
        <img
          src={props.src}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[15%] bg-black bg-opacity-50 text-white py-2 px-4">
        <p className="font-semibold text-xl text-ellipsis">{props.heading}</p>
        {/* <p className="mt-1">{props.description}</p> */}
      </div>
    </div>
  );
};

export default Info;
