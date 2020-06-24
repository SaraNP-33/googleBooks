import React from "react";

// using css to size thumbnail imgs
import "./style.css"

function Thumbnail({ src }) {
  return (
    <div
    className="thumbnail"
      role="img"
      aria-label="Recipe Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

export default Thumbnail;