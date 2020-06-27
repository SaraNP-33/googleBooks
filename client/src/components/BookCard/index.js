import React from "react";
import "./style.css";

function BookCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-sm-3">
          <img
            alt={props.title}
            className="img-fluid card-image mt-3"
            key
            src={props.src}
          />
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <h5 className="card-text">Written by {props.author}</h5>
            <h6 className="card-text">{props.description}</h6>
            <div className="link"><a className="card-link" href={props.link} target="_blank">
              Click to learn more!
            </a>
            <button
              style={{ float: "right", marginBottom: 10 }}
              className="btn btn-primary saveBtn"
              onClick= {props.saveBtn}
            >
              Save
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
