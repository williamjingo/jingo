import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaravel,
  faReact,
  faVuejs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const TechStack = ({ stack }) => {
  if (stack === "react")
    return <FontAwesomeIcon icon={faReact} className="bg-info" />;

  if (stack === "laravel")
    return <FontAwesomeIcon icon={faLaravel} className="bg-primary" />;

  if (stack === "vuejs")
    return <FontAwesomeIcon icon={faVuejs} className="bg-success" />;

  if (stack === "nodejs")
    return <FontAwesomeIcon icon={faNodeJs} className="bg-success" />;

  return null;
};

TechStack.propTypes = {
  stack: PropTypes.string,
};

export default TechStack;
