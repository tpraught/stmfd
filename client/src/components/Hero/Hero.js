import React from "react";
import { Jumbotron } from "reactstrap";
import "./Hero.css";

const Hero = (props) => (
  <div>
    <Jumbotron fluid className="p-0">
      <img className="img-fluid" id = {props.id} alt={props.name} src={props.src} />
    </Jumbotron>
  </div>
);

export default Hero;