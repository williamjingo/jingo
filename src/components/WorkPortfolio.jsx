import React, { useEffect, useState } from "react";
import { getPortfolio } from "../services/portfolio";

const WorkPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => setPortfolio(getPortfolio()), []);

  return (
    <React.Fragment>
      <h2 className="mb-3">My Portfolio</h2>
      <div className="portfolio">
        {portfolio &&
          portfolio.map((p, i) => {
            return (
              <img
                key={i}
                src={p}
                alt={i}
                height="150"
                className="portfolio__img"
              />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default WorkPortfolio;
