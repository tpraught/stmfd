import React, { Component } from "react";
import "./Header.css";
import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather?id=5045258&units=imperial&APPID=43ae0f269ab5e7d4ac4efa288be62552"


class Header extends Component { 
	state = {
        weather:{},
        temp:""
    } 
      
    componentDidMount() {
       
        axios.get(URL)
        .then(res => {
            let currentTemp = Math.round(res.data.main.temp);
            console.log(currentTemp);
          this.setState({ temp: currentTemp })
        })  
        .catch(err => console.log(err));
    }
    
	render() {
        return (
			<header className="pb-0">
				<div id="smallNav" className="row justify-content-between p-2">
					<div className="col-3">
					St. Michael, MN {this.state.temp} &#8457;
					</div>
					<div className="col-3 text-right">
						JOIN SMFD | CONTACT
					</div>
				</div>
				<div id="brand" className="position-relative pt-4 pb-5">
					<h2 className="m-0">WELCOME TO THE </h2>
					<h1 className="m-0">ST. MICHAEL FIRE DEPARTMENT</h1>
					<div className="row justify-content-center">
						<div id="badge" className="position-absolute"><img src="assets/images/logo_badge.svg" width="200" alt="SMFD Badge" /></div>
					</div>
				</div>
			</header>
	 	)
    }
}

export default Header;
