import React from "react";
import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <React.Fragment>
      <h4>Full stack web developer</h4>
      <h1>I'm George Jingo, a Full Stack web developer</h1>
      <p>
        I am a fullstack web developer with 6 years experience in building well
        optimized user-centric and interactive solutions leveraging technical,
        analytical and problem solving skills.
      </p>
      <p>My primary tech stack is:</p>
      <ul>
        <li>PHP – Laravel</li>
        <li>JavaScript – React, Vue.js</li>
        <li>Node.js – Express.js</li>
      </ul>
      <SocialIcons />
    </React.Fragment>
  );
};

export default About;
