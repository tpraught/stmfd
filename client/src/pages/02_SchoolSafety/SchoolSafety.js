import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class SchoolSafety extends Component { 
   
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
          <h1>FIRE SAFETY IN OUR SCHOOLS</h1>  
        </div>
        <div className="pageContent media">
        	<div className="media-body">
						<p>The St. Michael Fire Department visits the schools in the city of St. Michael the first Friday in October to kick off Fire Prevention Week. The firefighters will do a timed fire drill to ensure all staff and students know the “drill”&mdash;what to do and where to go if the situation arises that they need to exit the building.</p>
						<p>The fire department also makes visits to daycares at times to show the kids one of the department’s trucks and what the fire gear looks like. The firefighter(s) also talk to the kids about fire safety and prevention, and answer any of their questions.</p>
					</div>
          <span className="media-right pl-5">
              <img src="../../../assets/images/02_SchoolSafety.jpg" alt="Classroom Group" height="320"/>
          </span>
				</div>
			</Wrapper> 
			<QuickLinks />
			<Footer />
		</div>
    )
  }
  
}

export default SchoolSafety;