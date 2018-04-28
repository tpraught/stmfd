import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class CarSeat extends Component { 
   
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
          <h1>CAR SEAT CHECKS</h1>  
        </div>
        <div className="pageContent">
        <p>test -</p>
        </div>
    </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default CarSeat;
