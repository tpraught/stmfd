import React from "react";
import { Jumbotron } from "reactstrap";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div>
    <Jumbotron fluid>
      <img className="img-fluid" alt={props.name} src={props.image} />
    </Jumbotron>
  </div>
);

export default Jumbotron;