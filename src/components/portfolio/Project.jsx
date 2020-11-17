import React from "react";

const Project = ({ data }) => {
  return (
    <div className="project">
      <p className="project project__title">{data.title}</p>
      <p className="project project__description">{data.description}</p>
    </div>
  );
};

export default Project;
