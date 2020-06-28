import React from "react";
import "./style.css";

const Form = (props) => {
  return (
    <form>
      <div className="form-group row">
        <label className="BookSearchLabel">
          <h2 className="ml-3">Book Search</h2>
        </label>
      </div>
      <div className="form-group row">
        <input
          className="form-control mx-auto input"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="EX: Harry Potter"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group row col-sm-12 justify-content-end">
        <button
          type="submit"
          className="btn btn-light submitBtn mb-3"
          onClick={props.handleFormSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
