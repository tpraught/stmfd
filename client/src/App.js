//Main logic that assembles all components  
//=====================TO BE UPDATED

import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/00_Home";

import CarSeat from "./pages/01_CarSeat";
import SevereWeather from "./pages/01_SevereWeather";
import RecFires from "./pages/01_RecFires";
import Kids from "./pages/01_Kids";
import JoinSMFD from "./pages/01_JoinSMFD";

import HomeSafety from "./pages/02_HomeSafety";
import SchoolSafety from "./pages/02_SchoolSafety";
import Burning from "./pages/02_Burning";
import CampfireSafety from "./pages/02_CampfireSafety";
import CoFAQs from "./pages/02_CoFAQs";
import WinterSurvival from "./pages/02_WinterSurvival";
import LinksResources from "./pages/02_LinksResources";

import Events from "./pages/03_Events";

import About from "./pages/04_About";
import History from "./pages/04_History";
import Apparatus from "./pages/04_Apparatus";

import FrontEndRoster from "./pages/05_FDRoster";
import MedicalRoster from "./pages/05_MDRoster";
import Schedule from "./pages/05_Schedule";

import ExplorerAbout from "./pages/06_AboutExplorers";
import ExplorerSchedule from "./pages/06_Schedule";
import ExplorerEvents from "./pages/06_Events";
import JoinExplorers from "./pages/06_JoinExplorers";

import AdminForm from "./pages/07_Admin_Form";
import AdminRoster from "./pages/07_Admin_Roster";
import AdminExplorerForm from "./pages/07_Admin_Explorer_Form";
import AdminExplorerSchedule from "./pages/07_Admin_Explorer_Schedule";
import AdminEventsForm from "./pages/07_Admin_Events_Form";
import AdminEventsSchedule from "./pages/07_Admin_Events_Schedule";

import ContactUs from "./pages/08_ContactUs";

import AdminLogin from "./pages/07_Admin_Login";
import AdminRegister from "./pages/07_Admin_Register";
import RegisterSuccess from "./components/Account/RegisterSuccess";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>

        {/* Hompage */}
        <Route exact path="/" component={Home} />

        {/* Community Pages */}
        <Route exact path="/CarSeatChecks" component={CarSeat} />
        <Route exact path="/SevereWeather" component={SevereWeather} />
        <Route exact path="/RecFires" component={RecFires} />
        <Route exact path="/Kids" component={Kids} />
        <Route exact path="/JoinSMFD" component={JoinSMFD} />

        {/* Fire Safety Pages */}
        <Route exact path="/HomeSafety" component={HomeSafety} />
        <Route exact path="/SchoolSafety" component={SchoolSafety} />
        <Route exact path="/Burning" component={Burning} />
        <Route exact path="/CampfireSafety" component={CampfireSafety} />
        <Route exact path="/CoFAQs" component={CoFAQs} />
        <Route exact path="/WinterSurvival" component={WinterSurvival} />
        <Route exact path="/LinksResources" component={LinksResources} />

        {/* News & Events Pages */}
        <Route exact path="/Events" component={Events} />

        {/* About Pages */}
        <Route exact path="/About" component={About} />
        <Route exact path="/History" component={History} />
        <Route exact path="/Apparatus" component={Apparatus} />

        {/* FF & EMT Pages */}
        <Route exact path="/Roster" component={FrontEndRoster} />
        <Route exact path="/MedicalRoster" component={MedicalRoster} />
        <Route exact path="/Schedule" component={Schedule} />

        {/* Explorers Pages */}
        <Route exact path="/ExplorerAbout" component={ExplorerAbout} />
        <Route exact path="/ExplorerSchedule" component={ExplorerSchedule} />
        <Route exact path="/ExplorerEvents" component={ExplorerEvents} />
        <Route exact path="/JoinExplorers" component={JoinExplorers} />

        {/* Admin Pages */}
        <Route exact path="/admin/add" component={AdminForm} />
        <Route exact path="/admin/roster" component={AdminRoster} />
        <Route exact path="/admin/explorerform" component={AdminExplorerForm} />
        <Route exact path="/admin/explorerschedule" component={AdminExplorerSchedule} />
        <Route exact path="/admin/trainingform" component={AdminEventsForm} />
        <Route exact path="/admin/trainingschedule" component={AdminEventsSchedule} />
        <Route exact path="/admin/users/login" component={AdminLogin} />
        <Route exact path="/admin/users/register" component={AdminRegister} />
        <Route exact path="/Account/RegisterSuccess" component={RegisterSuccess} />
        
        <Route exact path="/ContactUs" component={ContactUs} />
        
        {/* <Route component={NoMatch} /> */}

      </Switch>
    </div>
  </Router>
);

export default App;
