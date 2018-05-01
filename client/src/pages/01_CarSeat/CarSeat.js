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
        <div className="pageContent media">
          <div className="media-body">
            <p>Car seats greatly reduce injuries and deaths, so it’s important to ensure your car seat(s) are properly installed. As a volunteer fire department, we do not conduct car seat inspections, but you can find an area location by visiting the state’s <a href="https://dps.mn.gov/divisions/ots/child-passenger-safety/Pages/car-seat-checks.aspx">Car Seat Checks Map</a>. To find a location to recyle your car seat, visit <a href="http://recycleyourcarseat.org/where-do-i-recycle-my-seat/"> Recycle Your Car Seat</a>.</p>

            <p>Check out the state’s  <a href="https://dps.mn.gov/divisions/ots/child-passenger-safety/Pages/default.aspx">Child Passenger Safety Page</a> for restraint steps, free car seat distribution centers, and frequently asked questions.</p>
          </div>
          <span className="float-right pl-5">
              <img src="../../../assets/images/01_CarSeat.jpg" alt="Car Seat" height="320"/>
          </span>
        </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default CarSeat;
