import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class Burning extends Component { 
   
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
		          	<h1>BURNING PERMITS & RESTRICTIONS</h1>  
			    </div>
			    <div className="pageContent">
			        <span className="float-right pl-5 pb-5">
			            <img src="../../../assets/images/02_Burning.jpg" alt="Fire" height="350"/>
			        </span>
			        <p>There are strict guidelines for burning permits. Wright County and the city of St. Michael requires a permit and has burning restrictions.</p>
							<p><b>Where do I obtain a permit?</b> When burning permits can be issued, they can be purchased at the St. Michael City Hall or Hardware Hank. They are also available at any <a href="https://www.dnr.state.mn.us/contact/locator.html" target="_blank" rel="noopener noreferrer">DNR Forestry Office</a>, or <a href="https://webapps8.dnr.state.mn.us/burning_permits/" target="_blank" rel="noopener noregerrer">online</a>.</p> 
							<p><b>When do I need to obtain a burning permit?</b> When the fire is larger than 3 feet high and 3 feet around, the ground is not covered by more than 3 inches of show, and/or when the fire is not containerd within an approved burner or a cooking/heating device (e.g. charcoal grill or camp stove).</p>		
							<p>To find out more information and how to obtain a permit, please visit the <a href="https://www.dnr.state.mn.us/forestry/fire/questions.html" target="_blank" rel="noopener noreferrer">Department of Natural Resources</a>.
			        </p>  

		        </div>
	      	</Wrapper>
			<QuickLinks />
			<Footer />
		</div>
    )
  }
  
}

export default Burning;