import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class RecFires extends Component { 
   
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
          <h1>RECREATIONAL FIRES</h1>  
        </div>
        <div className="pageContent media">
            <div className="media-body">
                    <ul className="mb-3">
                      <li>ONLY natural cut wood no longer than 24 inches in length may be burned.</li>
                      <li>The following shall NOT be burned: leaves, brush, pine needles, processed lumber, varnished or painted materials, pallets, sawdust, wiring, furniture, carpeting or grass.</li>
                      <li>No burning of materials in a barrel (also known as“barrel burning”) is allowed.</li>
                      <li>Fires must be in a pit no wider than 36 inches in diameter and it is recommended that it have brick or concrete block on the outside of the ring. A specially made above-ground stand, also known as a portable outdoor fireplace, may be used.</li>
                      <li>The fire shall be attended at all times and extinguished completely when left unattended.</li>
                      <li>Maintain a minimum of 25 feet between the fire and any combustible surface or material, including but not limited to houses, fencing, trailers and vehicles.</li>
                      <li>A compatibly-sized means of extinguishment must be available at all times, e.g.,a garden hose connected to the house that reaches the edge of the fire.</li>
                      <li>Use extreme caution when weather conditions result in lack of rain for more than a week and/or high temperatures resulting in dry conditions.</li>
                      <li>Be observant to wind direction and smoke travel into neighboring homes. Extinguish fire if smoke is traveling into a neighboring home.</li>                    
                    </ul>     
            </div>
          <span className="media-right">
              <img src="../../../assets/images/01_RecFires.jpg" className="float-right" alt="Recreational Fire" height="300"/>
          </span>
        </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default RecFires;
