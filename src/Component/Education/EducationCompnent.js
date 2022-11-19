import React from "react";

export const EducationCompnent = (props) => {
  return (
    <div className="education">
      <div className="md:flex justify-between mb-4">
        <p className="font-bold text-2xl ">{props.Institute}</p>
        <p className="pt-2">
          {props.start}-{props.end}
        </p>
      </div>
      <p>{props.degree}</p>
      <p>{props.subjects}</p>
    </div>
  );
};
