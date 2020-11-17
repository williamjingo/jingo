import React, { useEffect, useState } from "react";
import * as skillService from "../../services/skills";
import Skill from "./Skill";

const Skills = () => {
  const [skillItem, setSkillItem] = useState([]);

  useEffect(() => setSkillItem(skillService.getSkills()), []);

  return (
    <React.Fragment>
      <h2 className="mb-3">Skills</h2>
      <ul className="skills skills__list">
        {skillItem && skillItem.map((v) => <Skill key={v} data={v} />)}
      </ul>
    </React.Fragment>
  );
};

export default Skills;
