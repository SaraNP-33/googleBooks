import React from "react";
import "./style.css";

const Saved = (props) => {
  return (
    <>
      <div className="searchContainer">
          {props.savedBooks.map((savedbook) => {
            return (
            <div className="card mb-3">
              <div className="row no-gutters" 
                   id={savedbook.title}
                  key={savedbook._id}>
                <div className="col-sm-3">
                <img 
                  key
                  src={savedbook.image} 
                  alt={savedbook.title} 
                  className="img-fluid card-image mt-3"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h3 className="card-title">{savedbook.title}</h3>
                    <h4 className="card-text">Author: {savedbook.author}</h4>
                    <h6 className="card-text">{savedbook.description}</h6>
                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                    More details...
                    </a>
                  </div>
                </div>

                <div className = "row btnRow">
                <a href="/">
                <button className="backToSearchBtn btn btn-light viewBtn ml-auto mr-2">
                    Back to Search Page
                  </button>
                </a>

                <button
                  className="saveBook btn btn-light mr-3"
                  id={savedbook._id}
                  onClick={() => props.handleDeleteButton(savedbook._id)}
                >
                  Delete Book
                </button>
                </div>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Saved;
