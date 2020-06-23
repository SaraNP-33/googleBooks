import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Jumbotron />
        <Route exact path="/" component={Search} />
      </Router>
    );
  }
}

export default App;
