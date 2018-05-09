import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class SevereWeather extends Component { 
   
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
          <h1>SEVERE WEATHER</h1>  
        </div>
        <div className="pageContent media">
            <div className="media-body">
              <p>Severe weather can happen anytime and has the potential to cause significant damage. In Minnesota the most common types are tornadoes, high winds, hail, lightning and large amounts of precipitation.</p>
              <p>There are a three steps you can take to keep your family safe: </p>
              <ol className="ml-0">
                <li><a href="https://www.ready.gov/make-a-plan" target="_blank" rel="noopener noreferrer">Make a Plan</a></li>
                <li><a href="http://www.youtube.com/watch?v=cLOTtopDl5w" target="_blank" rel="noopener noreferrer">Build an Emergency Kit</a></li>
                <li><a href="http://www.nws.noaa.gov/nwr/" target="_blank" rel="noopener noreferrer">Stay Informed</a></li>
              </ol>  
              <p>For additional information, visit the <a href="https://dps.mn.gov/divisions/hsem/weather-awareness-preparedness/Pages/severe-weather.aspx" target="_blank" rel="noopener noreferrer">Minnesota Department of Safety's page</a> or <a href="https://www.ready.gov" target="_blank" rel="noopener noreferrer"> Ready.gov</a>.</p>         
            </div>
          <span className="media-right pl-5">
              <img src="../../../assets/images/01_SevereWeather.jpg" alt="Thunderstorm" height="300"/>
          </span>
        </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default SevereWeather;
