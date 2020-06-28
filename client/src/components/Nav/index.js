import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand ml-5" href="/">
        GOOGLE BOOKS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav d-flex  ml-auto mt-2 mt-lg-0">
          <li className="nav-item" id="home">
            <a className="nav-link" href="/" id="btnSearch">
              Search
            </a>
          </li>

          <li className="nav-item mr-5" id="report">
            <a className="nav-link" href="/saved" id="btnSaved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
