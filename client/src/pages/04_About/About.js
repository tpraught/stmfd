import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";


class About extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[4].id}
      src  = {heroImages[4].image}
      alt = {heroImages[4].name}
      />
      <Wrapper>
        <div className="pageTitle">
          <h1>ST. MICHAEL FIRE DEPARTMENT</h1>  
        </div>
        <div className="pageContent">
          <span className="float-right pl-5">
              <img src="../../../assets/images/01_CarSeat.jpg" alt="Car Seat" width="344" />
          </span>
					<p>The St. Michael Fire Department is a paid-on-call fire department. They pledge to protect all people, homes, and businesses with in the city of St. Michael. The fire department responds quickly and with highly trained personnel to fire and medical emergencies. The city maintains two fire stations, and works cooperatively with adjacent communities, as needed, to provide the highest quality and most timely response possible.</p>
        </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
}

export default About;