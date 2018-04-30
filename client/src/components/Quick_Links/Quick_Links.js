import React from "react";
import "./Quick_Links.css";

const Quick_Links = () => (

  <div className="row bg-navy">
		<div id="quickLinks" className="container p-0">
			<div className="row justify-content-center">
				<div className="col-12 p-0 mt-5 mb-5">
					<h3 className="text-white text-center mb-5">QUICK LINKS</h3>
					<div className="row">
						<div className="d-flex flex-column pr-4 pl-4">
							<h5 className="text-white">COMMUNITY</h5>
							<h6><a className="quick-link" href="/CarSeatChecks">Car Seat Checks</a></h6>
							<h6><a className="quick-link" href="/SevereWeather">Severe Weather</a></h6>
							<h6><a className="quick-link" href="/RecFires">Recreational Fires</a></h6>
							<h6><a className="quick-link" href="/Kids">For the Kids</a></h6>
							<h6><a className="quick-link" href="/JoinSMFD">Joining the SMFD</a></h6>
						</div>
						<div className="d-flex flex-column pr-4 pl-4">
							<h5 className="text-white">FIRE SAFETY</h5>
							<h6><a className="quick-link" href="/HomeSafety">Fire Safety in Your Home</a></h6>
							<h6><a className="quick-link" href="/SchoolSafety">Fire Safety in Our Schools</a></h6>
							<h6><a className="quick-link" href="/Burning">Buring Permits & Restrictions</a></h6>
							<h6><a className="quick-link" href="/CampfireSafety">Campfire Safety</a></h6>
							<h6><a className="quick-link" href="/CoFAQs">Carbon Monoxide FAQs</a></h6>
							<h6><a className="quick-link" href="/LinksResources">Links & Resources</a></h6>
						</div>
						<div className="d-flex flex-column pr-4 pl-4">
							<h5 className="text-white">NEWS & EVENTS</h5>
							<h6><a className="quick-link" href="https://www.facebook.com/stmichaelfire/" target="_blank" rel="noopener noreferrer">SMFD on Facebook</a></h6>
							<h6><a className="quick-link" href="/Events">Events</a></h6>
							<h6><a className="quick-link" href="http://www.stmdazeandknightsfestival.com/" target="_blank" rel="noopener noreferrer">St. Michael Daze & Knights</a></h6>
						</div>
						<div className="d-flex flex-column pr-4 pl-4">
							<h5 className="text-white">ABOUT</h5>
							<h6><a className="quick-link" href="/About">About SMFD</a></h6>
							<h6><a className="quick-link" href="/History">History</a></h6>
							<h6><a className="quick-link" href="/Apparatus">Apparatus</a></h6>
							{/* <h6><a className="quick-link" href="/">Retired Firefighters</a></h6> */}
						</div>
						<div className="d-flex flex-column pr-4 pl-4">
							<h5 className="text-white">FIREFIGHTERS & EMTS</h5>
							{/* <h6><a className="quick-link" href="/">Meet Your Officers</a></h6> */}
							<h6><a className="quick-link" href="/Roster">Firefighter Roster</a></h6>
							<h6><a className="quick-link" href="/MedicalRoster">Medical Responder Roster</a></h6>
							<h6><a className="quick-link" href="/Schedule">Meeting & Training Schedule</a></h6>
						</div>
						<div className="d-flex flex-column pr-4 pl-4">
							<h5 className="text-white">EXPLORERS</h5>
							<h6><a className="quick-link" href="/ExplorerAbout">About the Explorers</a></h6>
							<h6><a className="quick-link" href="/ExplorerRoster">Explorer Roster</a></h6>
							<h6><a className="quick-link" href="/ExplorerSchedule">Training Schedule</a></h6>
							<h6><a className="quick-link" href="/ExplorerEvents">Events</a></h6>
							<h6><a className="quick-link" href="/JoinExplorers">How to Join</a></h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Quick_Links;