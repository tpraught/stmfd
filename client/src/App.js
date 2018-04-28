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
import CarSeat from "./pages/01_CarSeat";
import JoinSMFD from "./pages/01_JoinSMFD";
import Kids from "./pages/01_Kids";
import RecFires from "./pages/01_RecFires";
import SevereWeather from "./pages/01_SevereWeather";
import Burning from "./pages/02_Burning";
import CampfireSafety from "./pages/02_CampfireSafety";
import CoFAQs from "./pages/02_CoFAQs";
import HomeSafety from "./pages/02_HomeSafety";
import LinksResources from "./pages/02_LinksResources";
import SchoolSafety from "./pages/02_SchoolSafety";
import WinterSurvival from "./pages/02_WinterSurvival";
import Events from "./pages/03_Events";
import Apparatus from "./pages/04_Apparatus";
import History from "./pages/04_History";
import FrontEndRoster from "./pages/05_FDRoster";
import MedicalRoster from "./pages/05_MDRoster";
import Schedule from "./pages/05_Schedule";
import ExplorerAbout from "./pages/06_About";
import ExplorerEvents from "./pages/06_Events";
import JoinExplorers from "./pages/06_JoinExplorers";
import ExplorerRoster from "./pages/06_Roster";
import ExplorerSchedule from "./pages/06_Schedule";

// import AdminLogin from "./pages/07_Admin_Login";


const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/CarSeat" component={CarSeat} />
        <Route exact path="/JoinSMFD" component={JoinSMFD} />
        <Route exact path="/Kids" component={Kids} />
        <Route exact path="/RecFires" component={RecFires} />
        <Route exact path="/SevereWeather" component={SevereWeather} />
        <Route exact path="/Burning" component={Burning} />
        <Route exact path="/CampfireSafety" component={CampfireSafety} />
        <Route exact path="/CoFAQs" component={CoFAQs} />
        <Route exact path="/HomeSafety" component={HomeSafety} />
        <Route exact path="/LinksResources" component={LinksResources} />
        <Route exact path="/SchoolSafety" component={SchoolSafety} />
        <Route exact path="/WinterSurvival" component={WinterSurvival} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/Apparatus" component={Apparatus} />
        <Route exact path="/History" component={History} />
        <Route exact path="/roster" component={FrontEndRoster} />
<<<<<<< HEAD
=======
        {/* <Route exact path="/admin/login" component={AdminLogin} /> */}
        {/* <Route component={NoMatch} /> */}
>>>>>>> working on the homepage
        <Route exact path="/medicalroster" component={MedicalRoster} />
        <Route exact path="/Schedule" component={Schedule} />
        <Route exact path="/ExplorerAbout" component={ExplorerAbout} />
        <Route exact path="/ExplorerEvents" component={ExplorerEvents} />
        <Route exact path="/JoinExplorers" component={JoinExplorers} />
        <Route exact path="/ExplorerRoster" component={ExplorerRoster} />
        <Route exact path="/ExplorerSchedule" component={ExplorerSchedule} />
        <Route exact path="/admin/add" component={AdminForm} />
        <Route exact path="/admin/roster" component={AdminRoster} />

      </Switch>
    </div>
  </Router>
);

export default App;
