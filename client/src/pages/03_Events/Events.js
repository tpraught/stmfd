import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class Events extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[3].id}
      src  = {heroImages[3].image}
      alt = {heroImages[3].name}
      />
      <Wrapper /> 
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default Events;
