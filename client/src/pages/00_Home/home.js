import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Feed from "../../components/Feed";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json"
import { Jumbotron, Col, Row } from "reactstrap";

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

			{/* start of page content */}
			<div>
				{/* Mission Statement */}
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 card border-0">
							<div className="card-body">
								<h3>OUR MISSION</h3>
								<p>The St. Michael Fire Department pledges to protect all people, home, and businesses in the city. The SMFD works closely with the Wright County Sheriff's Office, Allina Ambulance, and the fire departments of surrounding communities to respond to your service calls quickly.</p>
							</div>
							<img className="card-img-bottom" src="assets/images/00_smfdTeam.png" alt="St. Michael Fire Department Team " />
						</div>
					</div>
				</div>

				{/* Word from the Chief */}
				<Col className="mt-5 mb-5">
					<Row className="justify-content-center">
						<Col sm="12" md="10">
							<Row>
								<Col sm="12" md="3" className="float-left">
									<img src="assets/images/00_chief.jpg" alt="Chief of St. Michael Fire Department" className="img-fluid" />
								</Col>
								<Col sm="12" md="9" className="float-right">
									<h4>A WORD FROM YOUR CHEIF</h4>
									<p>I have had the honor of serving as Chief of the St. Michael Fire Department since 2007. The volunteer firefighters on SMFD are a dedicated, highly-skilled force and are there to make sure the City of St. Michael is protected to the best of our ability. As we help keep our city safe, you can help, too! When having a <a href="/RecFires">bonfire in your backyard</a>, have a way to extinguish the fire on hand in case your fire becomes uncontrolable. Every year take time to perform a <a href="/HomeSafety">home safety check</a> and make sure you have fresh batteries in your smoke and <a href="CoFAQs">Carbon Monoxide</a> alarms. If you ever have any questions or concerns, please <a href="/ContactUs">contact us</a> at any time. Let's work together to keep our city a safe and enjoyable place to live!</p>
									<p className="font-italic">- Chief Steve Hosch</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>

				{/* Fire Safety */}
				<div className="row bg-ltGray">
					<div className="container p-0">
						<div className="row justify-content-center">
							<div className="col-12 p-0">
								<div className="row">
									<div className="col-3 float-left mt-5 mb-5">
										<img src="assets/images/00_fire.png" alt="Fire Graphic" />
									</div>
									<div className="col-9 float-right mt-auto mb-auto pr-0 pl-5">
										<h3>FIRE SAFETY</h3>
										<p>The St. Michael Fire Department wants you to enjoy your backyard recreational bonfire safely. General guidelines for recreational fires within the St. Michael city limits are:</p>
										<ul className="mb-3">
											<li>A permit is NOT required*</li>
											<li>Fires must be constantly attended</li>
											<li>Be no more than 3 feet in diameter and 3 feet high</li>
										</ul>									
										<p>For more information and helpful links, including the current fire danger rating and buring permit information, <a href="/RecFires">click here &#187;</a></p>
										<p className="small">*Open burning, not involving a recreational fire, is not allowed within the city limites without a permit.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Stay Connected */}
				<div className="row bg-navy">
					<Jumbotron fluid className="p-0 mb-0">
						<img className="img-fluid" src="assets/images/header_homepage.png" alt="SMFD Homepage Stay Connected" />
					</Jumbotron>
					<div className="container p-0 mt-5 mb-5">
						<div className="row justify-content-center">
							<div className="col-12 p-0">
								<h3 className="text-white text-center">STAY CONNECTED</h3>
								<Feed /> 
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end of page content */}
			<div className="border-top border-light"></div>
			<QuickLinks />
			<Footer />
		</div>
    )
  }
  
}

export default Home;