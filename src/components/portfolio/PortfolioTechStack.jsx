import React from "react";
import TechStack from "./TechStack";

const PortfolioTechStack = ({ stack }) => {
  return (
    <div className="portfolio__stack">
      {stack.map((i) => {
        return <TechStack key={i} stack={i} />;
      })}
    </div>
  );
};

export default PortfolioTechStack;
