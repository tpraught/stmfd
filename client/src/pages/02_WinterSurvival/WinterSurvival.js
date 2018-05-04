import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";


class CampfireSafety extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[2].id}
      src  = {heroImages[2].image}
      alt = {heroImages[2].name}
      />
      <Wrapper>
        <div className="pageTitle">
          <h1>WINTER SURVIVAL KIT</h1>  
        </div>
        <div className="pageContent">
          <span className="float-right pl-5">
              <img src="../../../assets/images/01_CarSeat.jpg" alt="Car Seat" width="344" />
          </span>
					<p>Developed by the North Dakota State University Extension Service, the Winter Survival Kit app can be critical if you find yourself stuck or stranded in severe winter weather conditions. This free app will help you find your current location, call 9-1-1, notify your family and friends, and calculate how long you can run your engine to keep warm and safe from carbon monoxide poisoning.</p>
          <p>The app <isindex/> available for free on <a href="http://market.android.com/details?id=md.apps.Blizzard" target="_blank" rel="noopener noreferrer">Google Play</a> and <a href="http://itunes.apple.com/us/app/winter-survival-kit/id482127435" target="_blank" rel="noopener noreferrer">iTunes App Store</a>. For more information, visit <a href="http://www.ag.ndsu.edu/extension/apps/winter-survival-kit" target="_blank" rel="noopener noreferrer">Winter Survival Kit</a>.</p>
        </div>
      </Wrapper> 
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default CampfireSafety;
