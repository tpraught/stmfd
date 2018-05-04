import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class CampfireSafety extends Component { 
   
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
		          	<h1>CAMPFIRE SAFETY</h1>  
			    </div>
			    <div className="pageContent">
			        <span className="float-right pl-5">
			            <img src="../../../assets/images/02_CampfireSafety.jpg" alt="Camping" height="400"/>
			        </span>
			         <ul>
				        <li>Check that the site allows campfires and that there are no burn bans.</li>
				        <li>Make sure there are no burn bans and it's not too windy.</li>
				        <li>Dig a pit away from overhanging branches.</li>
				        <li>Circle the pit with rocks.</li>
				        <li>Clear a 10-foot area around the pit down to the dirt, removing anything that could catch on fire.</li>
				        <li>Stack extra wood upwind and away from fire.</li>
				        <li>After lighting, throw the match into the fire.</li>
				        <li>Never leave a campfire unattended; an adult should supervise the campfire at all times.</li>
				        <li>Keep a bucket of water and shovel nearby.</li>   
				        <li>Never put anything but wood into the fire.</li>   
				        <li>Do not pull sticks out of the fire.</li>   
				        <li>Do not sit on the fire ring or rocks around the campfire. They will heat up quickly and they'll stay hot for a long time.</li>   
				        <li>When it's time to put the fire out, dump lots of water on it, stir it with a shovel, then dump more water on it. Make sure it is COLD before leaving the campsite. If it's too hot to touch, it's too hot to leave!</li>                    
				    </ul>  
			        <p>For additional information, visit <a href="https://smokeybear.com/en" target="_blank" rel="noopener noreferrer">Smokey the Bear's Website</a>.</p>  
		        </div>
	      	</Wrapper>
			<QuickLinks />
			<Footer />
		</div>
    )
  }
  
}

export default CampfireSafety;