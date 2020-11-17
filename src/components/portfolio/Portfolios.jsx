import React, { useEffect, useState } from "react";
import { getPortfolios } from "../../services/portfolioService";
import Portfolio from "./Portfolio";

const Portfolios = () => {
  const [data, setData] = useState([]);

  useEffect(() => setData(getPortfolios()), []);

  const [selected, setSelected] = useState(0);

  const handleSelect = (i) => {
    if (selected === 0) return setSelected(i);

    if (selected === i) return setSelected(0);

    return setSelected(i);
  };

  return (
    <React.Fragment>
      <h2 className="mb-3">My Portfolio</h2>

      <div className="portfolio">
        {data &&
          data.map((p) => {
            return (
              <Portfolio
                key={p.id}
                data={p}
                selected={selected}
                onSelect={handleSelect}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Portfolios;
