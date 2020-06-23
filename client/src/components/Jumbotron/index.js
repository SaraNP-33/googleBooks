import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, marginTop: "3vh", textAlign: "center", backgroundColor: "pink"}}
      className="jumbotron text-danger"
    >
      {children}
   
    </div>
  );
}

export default Jumbotron;
