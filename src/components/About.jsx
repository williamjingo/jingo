import React from "react";
import Space from "./reusable/Space";
import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <React.Fragment>
      <Space size="sm" />
      <h4>Full Dtack Software Engineer</h4>
      <h1>I'm George Jingo, a Full Stack Software Engineer</h1>
      <p>
        I am a full stack software engineer with 6+ years experience in building well
        optimized user-centric and interactive solutions leveraging technical,
        analytical and problem solving skills.
      </p>
      <p>My primary tech stack is:</p>
      <ul>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>Python</li>
        <li>Golang</li>
      </ul>
      <SocialIcons />
    </React.Fragment>
  );
};

export default About;
