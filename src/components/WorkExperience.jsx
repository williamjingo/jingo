import React, { useEffect, useState } from "react";
import { getWork } from "../services/workExperience";

const WorkExperience = () => {
  const [work, setWork] = useState([]);

  useEffect(() => setWork(getWork()), []);

  return (
    <React.Fragment>
      <h2 className="mb-3">Work Experience</h2>
      {work.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <h3 className="text-primary">{v.duration}</h3>
            <h3>{v.company}</h3>
            <p>{v.roles}</p>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default WorkExperience;
