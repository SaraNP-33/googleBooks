import React from "react";
import Nav from "./components/Nav";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
 return(
  <Router>
    <Nav>
      <Switch>
      <Route exact path="/" component={Search}/>
      <Route exact path="/Search" component={Search}/>
      <Route exact path="/Saved" component={Saved}/>
      </Switch>
    </Nav>
    {/* <Search/> */}
  </Router>

)
}

export default App;
