import React from "react";
import { Container } from "../Grid";
import "./style.css";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark">
      <Container>
      <a className="navbar-brand" href="/">
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
          {!window.location.href.includes("saved") ? (
            ""
          ) : (
          <li className="nav-item" id="home">
            <a className="nav-link mr-4" href="/" id="btnSearch">
              Home
            </a>
          </li>
          )}
           {window.location.href.includes("/saved") ? (
            ""
          ) : (
          <li className="nav-item">
            <a className="nav-link" href="/saved" id="btnSaved">
              View Saved Books
            </a>
          </li>
          )}
        </ul>
      </div>
      </Container>
    </nav>
    
  );
}

export default Nav;
