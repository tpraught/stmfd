import React, { Component } from "react";
import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather?id=5045258&units=imperial&APPID=43ae0f269ab5e7d4ac4efa288be62552"


class Weather extends Component { 

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
        <div>
          <p>Current Tempreture {this.state.temp} degrees</p>      
         </div>
      )
    }
  }

    export default Weather;
