import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar bg-primary">

      <Link className="navbar-brand text-white" to="/">
        GOOGLE BOOKS
      </Link>
      
      <Link className="navSearch text-white" to="/Search">Search</Link>
      <Link className="navSaved text-white" to="/saved">Saved</Link>
    </nav>
  );
}
export default Nav;