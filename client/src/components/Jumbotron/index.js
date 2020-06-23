import React from "react";
function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
      className="jumbotron"
    >
      {children}
      {/* <h1 className="display-1">See you at 8:25pm!</h1> */}
    </div>
  );
}
export default Jumbotron;
