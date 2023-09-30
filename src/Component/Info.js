import React, { useState } from "react";
import { motion } from "framer-motion";
const Info = (props) => {
  const [slide, setSlide] = useState(true);
  return (
    <>
      {!slide ? (
        <motion.div
          onMouseLeave={() => {
            setSlide(true);
          }}
          initial={{ top: -50, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          exit={{ top: -50, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="info p-4"
        >
          <h1 className="text-2xl font-bold underline p-2">{props.heading}</h1>
          <div className="text-left p-4 overflow-hidden">
            <ul className="list-disc">
              <li>{props.l1}</li>
              <li>{props.l2}</li>
              <li>{props.l3}</li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <div
          className="info"
          onMouseEnter={() => {
            setSlide(false);
          }}
        >
          <div className="h-[85%] w-full rounded-md overflow-hidden">
            <img
              src={props.src}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[15%] bg-black bg-opacity-50 text-white py-2 px-4">
            <p className="font-semibold text-xl text-ellipsis">
              {props.heading}
            </p>
            {/* <p className="mt-1">{props.description}</p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
