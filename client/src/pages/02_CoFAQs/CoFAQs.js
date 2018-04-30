import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class CoFAQs extends Component { 
   
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
          <h1>CARBON MONOXIDE FAQS</h1>  
        </div>
        <div className="pageContent media">
          <div className="media-body">
            <ol className="ml-0">
							<li className="mb-3"><span className="listTitle">What is Carbon Monoxide?</span><br />
							A colorless, odorless toxic gas that is flammable and can kill you</li>
							<li className="mb-3"><span className="listTitle">What are symptoms of CO poisoning?</span><br />
							Sleepiness, headaches, weakness, dizziness, blurred vision, nausea/vomiting, chest pains and flu-like symptoms</li>
							<li className="mb-3"><span className="listTitle">What are common sources of CO around my home?</span>
								<ul>
									<li>Furnaces and other gas appliances such as your gas clothes dryer and water heater</li>
									<li>Wood- or charcoal-burning stoves and grills</li>
									<li>Gas- or wood-burning fireplaces</li>
									<li>Vehicle exhaust and gas-powered engines (lawn mowers, snow blowers, etc.)</li>
									<li>Kerosene heaters, lanterns, and other appliances</li>
								</ul>
							</li>
							<li className="mb-3"><span className="listTitle">How do I prevent CO poisoning in my home?</span>
								<ul>
									<li>Install battery-operated, or battery back-up CO detectors in your home where it will be heard, such as outside of each bedroom and at least one on every level (consider buying detectors with a digital readout that tells you your current CO levels in your home)</li>
									<li>Replace the batteries in your alarms once a year, and replace the detectors every five years</li>
									<li>Have your gas and/or coal-burning appliances (furnace, dryer, water heater, etc.) are services by a qualified technician every year</li>
									<li>Do not use flameless, portable chemical heaters indoors</li>
									<li>Ensure your gas appliances are vented properly</li>
									<li>Have your chimney checked and cleaned every year</li>
									<li>Never patch a vent pipe with tape or gum</li>
									<li>Never use your gas range or oven to heat your home, cabin, or camper</li>
									<li>Never burn charcoal indoors</li>
									<li>Never use a portable gas camp stove indoors</li>
									<li>Never use a generator inside your home, basement, garage, or less than 20 feet from any window, door, or vent</li>
									<li>When using a generator, make sure you have a working battery-powered CO detector in your home, cabin, or camper</li>
								</ul>
							</li>
							<li className="mb-3"><span className="listTitle">What should I do when my CO detector goes off?</span>
								<ul>
									<li>Check to see if anyone is showing signs of CO poisoning; if they are, get the person outside immediately and call 9-1-1</li>
									<li>If there are no immediate health issues, call your utility company or an appliance repair service</li>
									<li>Open windows</li>
									<li>Check to see if your CO detector has failed (needs new batteries, etc.)</li>
								</ul>
							</li>
						</ol>
						<div className="m-5 text-center">
							<p className="small font-italic">Source: Center for Disease Control and Prevention [<a href="https://www.cdc.gov/co/faqs.htm" target="_blank"  rel="noopener noreferrer">https://www.cdc.gov/co/faqs.htm</a>]</p>
						</div>
          </div>
        </div>
      </Wrapper>
			<QuickLinks />
			<Footer />
		</div>
    )
  }
  
}

export default CoFAQs;