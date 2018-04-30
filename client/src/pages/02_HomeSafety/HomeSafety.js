import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class HomeSafety extends Component { 
	constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
		});
	}
   
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
          <h1>FIRE SAFETY IN YOUR HOME</h1>  
        </div>
        <div className="pageContent media">
          <div className="media-body">
            <p>The St. Michael Fire Department wants to help you keep your home a safe and healthy haven. Below you will find tips and resources for you and your family. As a starting point, check out this <a href="https://www.usfa.fema.gov/downloads/pdf/home_safety_checklist.pdf" target="_blank" rel="noopener noreferrer">Home Safety Checklist</a> from the U.S. Fire Administration (FEMA).</p>
            <p>Fire Safety Tips</p>
						<ul>
							<li>-	Smoke alarms:
								<ul>
									<li>Ensure there is a working fire alarm on each level of your home, near or inside sleeping areas</li>
									<li>Test smoke alarms monthly and change batteries annually</li>
									<li>Replace alarms every 10 years</li>
								</ul>
							</li>
							<li>Install Carbon Monoxide detectors (<a href="/CoFAQs">find more information here &#187;</a>)</li>
							<li>Have a fire extinguisher on each level of your home and in the garage, mounted near the exit</li>
							<li>Plan and practice a home escape plan (<Button className="btnLink p-0" onClick={this.toggle}>see infographic</Button>)</li>
								{/* Infographic Modal */}
								<Modal isOpen={this.state.modal} toggle={this.toggle}>
									<ModalHeader>
										<button  onClick={this.toggle} type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</ModalHeader>
									<ModalBody>
										<img src="../../../assets/images/02_twoWaysOutInfographic.png" alt="Two Ways Out Infographic" />
									</ModalBody>
								</Modal>

							<li>STOP, DROP and ROLL if your clothing is on fire and crawl low under smoke</li>
							<li>Have your furnace and/or chimney cleaned and inspected annually</li>
							<li>Keep space heaters more than 3 feet away from anything that can burn; do not run for extended period of time; and do not run when you are not in the room or when you go to sleep</li>
							<li>During the winter months, keep snow and ice 3 feet away from fire hydrants</li>
							<li>Help us keep you safe in case of an emergency!</li>
						</ul>
          </div>
          <span className="media-right pl-5">
              <img src="../../../assets/images/01_CarSeat.jpg" alt="Car Seat" height="320"/>
          </span>
        </div>
				<hr />
				<div className="pageTitle">
					<h2>FIRE & HOME SAFETY RESOURCES</h2>  
				</div>
				<div className="pageContent media">
					<div className="media-body">
						<ul>
							<li><a href="http://www.minneapolismn.gov/fire/education/fire_fire_safetybrochures" target="_blank" rel="noopener noreferrer">Minneapolis Fire Department's Fire Safety Brochures</a></li>
							<li><a href="https://www.thisoldhouse.com/sites/default/files/toh-yearly-inspection-checklist.pdf" target="_blank" rel="noopener noreferrer">Yearly Home Inspection Checklist</a></li>
							<li><a href="https://www.usfa.fema.gov/prevention/outreach/severe_weather.html" target="_blank" rel="noopener noreferrer">Severe Weather Fire Safety</a></li>
							<li><a href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-preparedness" target="_blank" rel="noopener noreferrer">7 Ways to Prepare for a Home Fire</a></li>
							<li><a href="https://www.ready.gov/home-fires" target="_blank" rel="noopener noreferrer">Ready - Home Fires</a></li>
							<li><a href="http://firesprinklersmn.com/" target="_blank" rel="noopener noreferrer">Why you should install fire sprinklers in your new home</a></li>
						</ul>
          </div>
          <span className="media-right pl-5">
              <img src="../../../assets/images/01_CarSeat.jpg" alt="Car Seat" height="320"/>
          </span>
        </div>
      </Wrapper>
			<QuickLinks />
			<Footer />
		</div>
    )
  }
  
}

export default HomeSafety;