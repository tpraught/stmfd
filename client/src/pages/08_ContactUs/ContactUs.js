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
		          	<h1>CONTACT SMFD</h1>  
			    </div>
			    <div className="pageContent">
			        <p>Thank you for contacting the St. Michael Fire Department. We will be in contact with you soon concerning the information you requested.</p>
			        <span className="float-right pl-5 pb-5">
			            <img src="../../../assets/images/08_fireHall.jpg" alt="Fire Hall" height="300"/>
			        </span>
                    <p><b>St. Michael Fire Department</b><br />
                    Central Fire Station<br />
                    216 Main Street South<br />
                    St. Michael, MN 55376</p>  
                    <p><b>PHONE</b> (763) 497-6054</p>
                    <p><b>FAX</b> (763) 497-6058</p>
                    <p ><b>EMAIL</b> <a href="mailto:firehall@ci.st-michael.mn.us">firehall@ci.st-michael.mn.us</a></p>
                    <hr />
                    <p><b>FIRE CHEIF ADMIN ASSISTANT</b><br />
                    Nanci Libor<br />
                    Available Monday, Tuesday & Wednesday from 8:00 am - 2:00 pm</p>
                    <hr />
                    <p className="small"><b>DISCLAIMER</b> Email correspondence to and from the City of St. Michael government offices is subject to the Minnesota Government Data Practices Act. This means email will be treated in the same way as written forms of communication and in many instances it will be considered public information available to the public upon request.</p>
		        </div>
	      	</Wrapper>
			<QuickLinks />
			<Footer />
		</div>
    )
  }
  
}

export default Burning;