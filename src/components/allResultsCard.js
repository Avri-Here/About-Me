import React, { useState } from "react";
import PropTypes from "prop-types";
import "./allResultsCard.css";

const Allprojects = ({ projects }) => {
  const [filteredResults] = useState(projects);
  function formatURL(u) {
    // Split a given url into its various parts
    let urltext = u;
    let url = new URL(urltext);
    let domain = url.origin;
    let pathname = url.pathname;
    let paths = pathname.split("/");
    paths = paths.filter(Boolean);
    return [domain, paths];
  }

  return (
    <div className="results-content">
      {filteredResults.map((item, index) => (
        <div className="result-card" key={index}>
          <a target="_blank" href={`${item.link}`}>
            <p>
              {`${formatURL(item.link)[0]}`}
              {formatURL(item.link)[1].map((path) => (
                <span key={path}>{` › ${path}`}</span>
              ))}
            </p>
            <h3>{`${item.name}`}</h3>
          </a>
          <p className="excerpt">{`${item.excerpt}`}</p>
        </div>
      ))}
    </div>
  );
};

Allprojects.propTypes = {
  results: PropTypes.array,
};

export default Allprojects;
