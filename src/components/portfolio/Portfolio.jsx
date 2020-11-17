import React from "react";
import PropTypes from "prop-types";
import PortfolioTechStack from "./PortfolioTechStack";
import Project from "./Project";

const Portfolio = ({ data, selected, onSelect }) => {
  const { id, img, stack } = data;

  const portfolioClasses =
    selected === id
      ? "portfolio__item portfolio__item--selected"
      : "portfolio__item";

  return (
    <div className={portfolioClasses} key={id} onClick={(e) => onSelect(id)}>
      <img src={img} alt={`portfolio ${id}`} className="portfolio__img" />
      <PortfolioTechStack stack={stack} />
      <Project data={data} />
    </div>
  );
};

Portfolio.propTypes = {
  data: PropTypes.object,
  selected: PropTypes.number,
  onSelect: PropTypes.func,
};

export default Portfolio;
