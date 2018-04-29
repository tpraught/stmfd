import React, { Component } from "react";
import "./Header.css";
import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather?id=5045258&units=imperial&APPID=43ae0f269ab5e7d4ac4efa288be62552";


class Header extends Component { 
	state = {
        weather:{},
		temperature:"",
		weatherIconId:""
    } 
      
    componentDidMount() {
		//API call to get temperature and weather icon ID
        axios.get(URL)
        .then(res => {
			console.log(res.data);
			let currentTemp = Math.round(res.data.main.temp);
			let weatherIcon = res.data.weather[0].id;
				
			this.setState({
				temp: currentTemp,
				weatherIconId:weatherIcon})
			})
        .catch(err => console.log(err));
    }
    
	render() {
        return (
			<header className="pb-0">
				<div id="smallNav" className="row justify-content-between p-2">
					<div className="col-3">
					St. Michael, MN <i className= {"owf owf-" + this.state.weatherIconId}></i> {this.state.temp}&#176;
					</div>
					<div className="col-3 text-right">
						<a href="/JoinSMFD">JOIN SMFD</a> | <a href="/ContactUs">CONTACT</a>
					</div>
				</div>
				<div id="brand" className="position-relative pt-4 pb-5">
					<a className="homeLink" href="/"><h2 className="m-0">WELCOME TO THE </h2>
					<h1 className="m-0">ST. MICHAEL FIRE DEPARTMENT</h1></a>
					<div className="row justify-content-center">
						<div id="badge" className="position-absolute"><a href="/"><img src="assets/images/logo_badge.svg" width="200" alt="SMFD Badge" /></a></div>
					</div>
				</div>
			</header>
	 	)
    }
}

export default Header;
