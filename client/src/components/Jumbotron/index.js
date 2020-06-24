import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, marginTop: "3vh", textAlign: "center", backgroundColor: "white", border: "1px solid black", borderRadius: "0"}}
      className="jumbotron"
    >
      {children}
   
    </div>
  );
}

export default Jumbotron;
