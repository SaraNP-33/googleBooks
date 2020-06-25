import React from "react";
import './style.css';

export function Input(props) {
  return (
    <div className="form-group text-left">
      <label className="label">Book Title:</label>
      <input className="form-control userInput" {...props} />
    </div>
  );
}
export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      
      className="btn btn-primary searchBtn"
    >
      {props.children}
      Search
    </button>
  );
}

export default Input;
