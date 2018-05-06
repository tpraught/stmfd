import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Feed from "../../components/Feed";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json"
import { Jumbotron } from "reactstrap";

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
								<p>The St. Michael Fire Department pledges to protect all people, home, and businesses in the city. The SMFD works closely with the Wright County Sheriff's Office, Allina Ambulance, and the Fire Departments of surrounding communities to respond to your service calls quickly.</p>
							</div>
							<img className="card-img-bottom" src="assets/images/img_smfdTeam.png" alt="St. Michael Fire Department Team " />
						</div>
					</div>
				</div>

				{/* Word from the Chief */}
				<div className="container mt-5 mb-5">
					<div className="row justify-content-center">
						<div className="col-12">
							<div className="row">
								<div className="col-2 float-left">
									<img src="assets/images/img_chief.png" alt="St. Michael Fire Department Team" />
								</div>
								<div className="col-10 float-right">
									<h4>A WORD FROM YOUR CHEIF</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Fire Safety */}
				<div className="row bg-ltGray">
					<div className="container p-0">
						<div className="row justify-content-center">
							<div className="col-12 p-0">
								<div className="row">
									<div className="col-3 float-left mt-5 mb-5">
										<img src="assets/images/img_fire.png" alt="Fire Graphic" />
									</div>
									<div className="col-9 float-right mt-auto mb-auto pr-0 pl-5">
										<h3>FIRE SAFETY</h3>
										<p>The St. Michael Fire Department wants you to enjoy your backyard recreational bonfire safely. General guidelines for recreational fires within the St. Michael city limits are:</p>
										<ul className="mb-3">
											<li>A permit is NOT required</li>
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