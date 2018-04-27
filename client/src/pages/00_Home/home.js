import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
// import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json"



class Home extends Component { 
   
  render() {
    return(
			<div>
					<Header />
					<Nav />
					<Hero 
					id  = {heroImages[0].id}
					src  = {heroImages[0].image}
					alt = {heroImages[0].name}
					/>   
					<QuickLinks />
					<Footer />
			</div>
    )
}
}

export default Home;