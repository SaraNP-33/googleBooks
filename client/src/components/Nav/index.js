import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        GOOGLE BOOKS
      </a>

      <div id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item" id="home">
                    <a className="nav-link" href="/"><button type="button" className="btn btn-light" id="btnSearch">Search</button></a>
                </li>

                <li className="nav-item" id="report">
                    <a className="nav-link" href="/saved"><button type="button" className="btn btn-light" id="btnSaved">Saved</button></a>
                </li>
            </ul>
        </div>
            
    </nav>
  );
}

export default Nav;