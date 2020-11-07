import React, { useEffect, useState } from "react";
import { getSkills } from "../services/skills";

const Skills = () => {
  const [skillItem, setSkillItem] = useState([]);

  useEffect(() => setSkillItem(getSkills()), []);

  return (
    <React.Fragment>
      <h2 className="mb-3">Skills</h2>
      <ul className="skills skills__list">
        {skillItem &&
          skillItem.map((v, i) => {
            return (
              <li key={i} className="skills__item">
                {v}
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default Skills;
