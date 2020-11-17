import React, { useEffect, useState } from "react";
import * as workService from "../../services/workService";
import Work from "./Work";

const WorkExperience = () => {
  const [data, setData] = useState([]);

  useEffect(() => setData(workService.getWork()), []);

  return (
    <React.Fragment>
      <h2 className="mb-3">Work Experience</h2>
      {data.map((v) => (
        <Work key={`work-${v.id}`} data={v} />
      ))}
    </React.Fragment>
  );
};

export default WorkExperience;
