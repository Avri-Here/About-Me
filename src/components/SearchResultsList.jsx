import React, { useState } from "react";
import PropTypes from "prop-types";
import "./allResultsCard.css";

const SearchResultsList = ({ resultsContainer }) => {
  const [resultsState] = useState(resultsContainer);

  return (
    <div className="results-content">
      {resultsState.map((item, index) => (
        <div key={index.toString()} className="result-card">
          <a target="_blank" href={`${item.link}`}>
            <p>{item.link}</p>
            <h3>{`${item.title}`}</h3>
          </a>
          <p className="excerpt">{`${item.snippet}`}</p>
        </div>
      ))}
    </div>
  );
};


export default SearchResultsList;
