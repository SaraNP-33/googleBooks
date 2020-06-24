import React from "react";
import './style.css';

function SearchContainer({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 20, marginTop: "3vh", textAlign: "left", backgroundColor: "white", border: "1px solid black", borderRadius: "0"}}
      className="searchContainerTitle"
    >
      <h4 className="bookSearchTitle">Book Search</h4>
      {children}
    </div>
  );
}

export default SearchContainer;