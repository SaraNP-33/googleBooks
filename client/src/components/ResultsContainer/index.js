import React from "react";
import "./style.css";

function ResultsContainer({children}) {
  return (
    <div className="resultsContainer">
      <h2 className="searchResultsTitle">Book Search Results</h2>
      {children}
    </div>
  );
}

export default ResultsContainer;
