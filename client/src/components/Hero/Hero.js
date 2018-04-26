import React from "react";
import { Jumbotron } from "reactstrap";
import "./Hero.css";

const Hero = (props) => (
  <div>
    <Jumbotron fluid>
      <img className="img-fluid" id = {props.id} alt={props.name} src={props.src} />
    </Jumbotron>
  </div>
);

export default Hero;