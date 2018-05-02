import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";


class JoinSMFD extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[1].id}
      src  = {heroImages[1].image}
      alt = {heroImages[1].name}
      />
      <Wrapper>
        <div className="pageTitle">
          <h1>HOW TO JOIN SMFD</h1>  
        </div>
        <div className="pageContent">
          <span className="float-right pl-5">
              <img src="../../../assets/images/01_CarSeat.jpg" alt="Car Seat" width="344" />
          </span>
					<p>The St. Michael Fire Department is currently seeking applicants for our reserve firefighter division. Duties would include fire, hazmat, rescue, medical, and other emergencies. Daytime responders are highly desired, but all applications are welcome.</p>
          <p>Individuals interested in becoming a Reserve Firefighter, please complete the <a href="../../../assets/docs/04_FirefighterApplication.pdf" target="_blank" rel="noopener noreferrer">Reserve Firefighter Application</a> and submit it to:</p>
          <p>St. Michael City Hall<br />11800 Town Center Drive NE<br />St. Michael, MN 55376</p>
          <p className="mt-5 small text-center">*If we are not seeking applicants, we will keep submitted applications on file until the hiring process begins.</p>
        </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default JoinSMFD;
