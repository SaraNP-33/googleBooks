import React from "react";
import "./style.css";

function ResultsContainer(props) {
  return (
    <div className="resultsContainer">
      <h2 className="searchResultsTitle">Book Search Results</h2>
      <div className="card mb-3" style={{maxWidth: 540}}>
        <div className="row no-gutters">
          <div className="col-md-4"></div>
          <img
            alt={props.title}
            className="img-fluid card-image"
            src={props.src}
            style={{ margin: "0 auto"}}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">Title: {props.title}</h3>
            <h4 className="card-text">Author: {props.author}</h4>
            <h4 className="card-text">Description: {props.description}</h4>
            <h5 className="card-text">Link: {props.link}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsContainer;
