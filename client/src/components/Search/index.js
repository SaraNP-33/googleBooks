import React from "react";
import "./style.css";

const Search = (props) => {
  return (
    <>
      <div className="searchContainer">
        {props.books.map((book) => {
          return (
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-sm-3">
                  <img 
                  key
                  src={book.image} 
                  alt={book.title} 
                  className="img-fluid card-image mt-3"
                  />
                </div>
                <div className="col-sm-9">
                  <div className="card-body">
                    <h3 className="card-title">{book.title}</h3>
                    <h4 className="card-text">Author: {book.author}</h4>
                    <h6 className="card-text">{book.description}</h6>
                  </div>
                </div>
                <button
                  className="saveBook btn btn-light ml-auto"
                  id={book.id}
                  onClick={(event) => props.handleSavedButton(event)}
                >
                  Save Book
                </button>

                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <button className="viewBook btn btn-light viewBtn ml-auto mr-3">
                    View Book
                  </button>
                </a>
              </div>
            </div>
            
          );
        })}
      </div>
    </>
  );
};
export default Search;

