//Main logic that assembles all components  
//=====================TO BE UPDATED

import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect
 } from "react-router-dom";
// import PropTypes from 'prop-types';

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
// import RegisterSuccess from "./components/Account/RegisterSuccess";

function AuthenticatedRoute({component:Component, isLoggedIn, ...rest}) {
  console.log("Authenticated function is being triggered");

  console.log("isLoggedin:",  isLoggedIn);
  return (
    <Route  {...rest}  render = {(props) => isLoggedIn === true
      ? <Component { ... props} isLoggedIn = {isLoggedIn} { ...rest } />
      : <Redirect to= '/admin/users/login' />} /> 
  )
}

class App extends Component {

  state = {
    currentUser: '',
    isLoggedIn:false,
    redirect:false
  };

  
  // pass to TopNav component
  handleLogin = (currentUser) => {
    console.log('in App.handleLogin, user is ', currentUser);
    // this.setState({
    //   currentUser:currentUser,
    //   isLoggedIn:true });
  

    if (!currentUser) {
      // console.log("line 63 in App", this.state.currentUser);
      this.setState({
          currentUser:null,
          isLoggedIn:false });
      // window.history.pushState({}, '', '/admin/users/login');
      // this.props.history.push('/admin/roster');
    } else {
      this.setState({
        currentUser:currentUser,
        isLoggedIn:true,
        redirect:true });
      console.log("Login successful", this.state.currentUser, this.state.isLoggedIn)
      // window.history.pushState({}, '', '/admin/roster');
      // this.props.history.push('/admin/roster');
    //  this.redirectOnLogin();
    }
    
  }

  redirectOnLogin() {
    console.log("Render");
     
    return (
        
        <Redirect to= '/admin/roster' /> 
           
    )
  }


  render() {
   
     
   
    return (
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

        {/*Contact Us */}
        <Route exact path="/ContactUs" component={ContactUs} />

        {/* Admin Pages */}
        <Route exact path="/admin/users/register" component={AdminRegister} />
       
        <Route path="/admin/users/login" render={() => <AdminLogin  onLogin={this.handleLogin} currentUser={this.state.currentUser} {...this.state} />} />

        {/* <AuthenticatedRoute  exact path="/admin/add"  isLoggedIn={this.state.isLoggedIn}  component={AdminForm } /> */}
        <AuthenticatedRoute  exact path="/admin/add"  isLoggedIn={this.state.isLoggedIn}  component={AdminForm } />
        <AuthenticatedRoute  exact path="/admin/roster"  isLoggedIn ={this.state.isLoggedIn}  component={AdminRoster} />
        
        <AuthenticatedRoute exact path="/admin/explorerschedule"    isLoggedIn ={this.state.isLoggedIn}  component={AdminExplorerSchedule} />
        <AuthenticatedRoute exact path="/admin/trainingform"     isLoggedIn ={this.state.isLoggedIn} component={AdminEventsForm} />
        <AuthenticatedRoute exact path="/admin/trainingschedule" isLoggedIn ={this.state.isLoggedIn} component={AdminEventsSchedule} />
        <AuthenticatedRoute  exact path="/admin/explorerform"  isLoggedIn ={this.state.isLoggedIn} component={AdminExplorerForm} />
       
                    
        {/* <Route exact path="/Account/RegisterSuccess" component={RegisterSuccess} /> */}
        
     
        
        {/* <Route component={NoMatch} /> */}

    </Switch>
    </div>
  </Router>
    );
  }
};




export default App;
