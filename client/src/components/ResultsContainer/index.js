import React from 'react';
import './style.css';

function ResultsContainer({children}) {
    
    return(
        <div className="resultsContainer">
            {children}
            <h4 className="searchResultsTitle">Book Search Results</h4>
        </div>
    )
}

export default ResultsContainer;