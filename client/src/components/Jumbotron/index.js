import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1 className="text-white pt-5 jumboTitle">Google Books</h1>
      <h3 className="text-white pt-5 jumboText">Find and Save Books of Interest</h3>
    </div>
  );
}

export default Jumbotron;