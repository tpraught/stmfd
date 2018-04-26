//Main logic that assembles all components  
//=====================TO BE UPDATED

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import AdminForm from "./pages/07_Admin_Form";
import AdminRoster from "./pages/07_Admin_Roster";
import Home from "./pages/00_Home";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/add" component={AdminForm} />
        <Route exact path="/admin/roster" component={AdminRoster} />
        {/* KUMARI, below is the path for the login */}
        {/* <Route exact path="admin/login" component={Books} />z
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
