import React from "react";
import PropTypes from "prop-types";

const Skill = ({ data }) => <li className="skills__item">{data}</li>;

Skill.propTypes = {
  data: PropTypes.string,
};

export default Skill;
