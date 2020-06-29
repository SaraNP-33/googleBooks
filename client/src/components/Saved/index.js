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
                  </div>
                </div>

                <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                  <button className="viewBook btn btn-light">
                    View Book
                  </button>
                </a>

                <button
                  className="deleteBook btn btn-light ml-auto"
                  id={savedbook._id}
                  onClick={() => props.handleDeleteButton(savedbook._id)}
                >
                  Delete Book
                </button>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Saved;
