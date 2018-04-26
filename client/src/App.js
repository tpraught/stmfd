//Main logic that assembles all components  
//=====================TO BE UPDATED

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import MedicalRoster from "./pages/05_MDRoster";
import FrontEndRoster from "./pages/05_FDRoster";
import AdminForm from "./pages/07_Admin_Form";
import AdminRoster from "./pages/07_Admin_Roster";
import Home from "./pages/00_Home";
// import AdminLogin from "./pages/07_Admin_Login";


const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/add" component={AdminForm} />
        <Route exact path="/admin/roster" component={AdminRoster} />
        <Route exact path="/roster" component={FrontEndRoster} />

        <Route exact path="/medicalroster" component={MedicalRoster} />
       

   

        {/* <Route exact path="admin/login" component={AdminLogin} /> */}
     

        {/* <Route component={NoMatch} />  */}
      </Switch>
    </div>
  </Router>
);

export default App;
