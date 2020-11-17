import React from "react";
import PropTypes from "prop-types";

const Work = ({ data }) => {
  const { duration, company, roles } = data;
  return (
    <React.Fragment>
      <h3 className="text-primary">{duration}</h3>
      <h3>{company}</h3>
      <p>{roles}</p>
    </React.Fragment>
  );
};

Work.propTypes = {
  data: PropTypes.object,
};

export default Work;
