import React from "react";
import "./style.css";

function ResultsContainer({children}) {
  return (
    <div className="resultsContainer">
      <h4 className="searchResultsTitle">Book Search Results</h4>
      {children}
    </div>
  );
}

export default ResultsContainer;
