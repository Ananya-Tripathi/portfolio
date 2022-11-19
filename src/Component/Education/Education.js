import React from "react";
import { EducationCompnent } from "./EducationCompnent";

export const Education = () => {
  return (
    <div className="min-h-screen">
      <EducationCompnent
        Institute="Noida Institute Of Engineering And Technology"
        start="2020"
        end="2024"
        degree="B.Tech"
        subjects="Computer Science"
      />
      <EducationCompnent
        Institute="St. Joseph's Gorakhnath, Gorakhpur"
        start="2012"
        end="2020"
        degree="Senior Secondary High School  ||  High School"
        subjects="Science Math Computer"
      />
    </div>
  );
};
