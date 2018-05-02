import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";


class JoinExplorers extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[6].id}
      src  = {heroImages[6].image}
      alt = {heroImages[6].name}
      />
      <Wrapper>
        <div className="pageTitle">
          <h1>HOW TO JOIN THE SMFD FIRE EXPLORERS</h1>  
        </div>
        <div className="pageContent">
          <span className="float-right pl-5">
              <img src="../../../assets/images/01_CarSeat.jpg" alt="Car Seat" width="344" />
          </span>
					<p>If you are interested in becoming a member of the Explorer program at the St. Michael Fire Department, please fill out the <a href="../../../assets/docs/06_ExplorerApplication.pdf" target="_blank" rel="noopener noreferrer">Explorer Application</a> and submit it to:</p>
          <p>St. Michael Fire Department Explorer Post 3172<br />216 Main Street S, P.O. Box 85<br />St. Michael, MN 55376</p>
          <p>For questions, or more information on the SMFD Explorer Program, or to obtain a paper copy of the application contact Joy at 763-497-2041.</p>
				</div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default JoinExplorers;
