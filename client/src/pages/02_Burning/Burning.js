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
			        <span className="float-right pl-5">
			            <img src="../../../assets/images/02_Burning.jpg" alt="Fire" height="400"/>
			        </span>
			        <p>There are strict guidelines for burning permits. Wright County requires a permit and has burning restrictions. To find out more information and how to obtain a permit, please visit the <a href="https://www.dnr.state.mn.us/forestry/fire/questions.html" target="_blank" rel="noopener noreferrer">Department of Natural Resources</a>.
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