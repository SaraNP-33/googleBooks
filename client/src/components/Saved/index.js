import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const Saved = (props) => {
  return props.savedBooks.length === 0 ? (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h2 id="results">Saved Books</h2>
        </div>
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h2>Saved Books</h2>
          {props.savedBooks.map((savedbook) => {
            return (
              <>
                <li className="saved-list list-group-item mb-4">
                  <Row
                    className="SearchResult"
                    id={savedbook.title + "Card"}
                    key={savedbook._id}
                  >
                    {/* col-3 show image of the book */}

                    <Col size="2" className="bookImage">
                      <img src={savedbook.image} alt={savedbook.title} />
                    </Col>

                    <Col size="1" className="emptyCol" />
                    {/* col-9 show information of the book */}
                    <Col size="9" className="bookInfo">
                      <Row>
                        <h3 className="bookTitle">{savedbook.title}</h3>
                      </Row>

                      <Row>
                        <h3 className="bookAuthor">{savedbook.authors}</h3>
                      </Row>

                      <Row>
                        <p className="bookDescription text-truncate">
                          {savedbook.description}
                        </p>
                      </Row>
                    </Col>
                  </Row>
                  <br></br>
                  <Row className="buttonDiv">
                    <button
                      href={savedbook.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="viewBook btn ml-auto"
                    >
                      View Book
                    </button>

                    <button
                      className="deleteBook btn mr-3"
                      id={savedbook._id}
                      onClick={() => props.handleDeleteButton(savedbook._id)}
                    >
                      Delete Book
                    </button>
                  </Row>
                </li>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Saved;
