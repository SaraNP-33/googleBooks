import React from "react";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
 return(
  <Router>
    <Nav></Nav>
      <Switch>
      <Route exact path="/" component={Search}/>
      <Route exact path="/Search" component={Search}/>
      <Route exact path="/Saved" component={Saved}/>
      </Switch>
  </Router>

)
}

export default App;
