import React, { Component } from "react";
import { Table } from 'reactstrap';
// import OfficerRoster from "../../components/OfficerRoster";
// import Button from "../../components/Button";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class FrontEndRoster extends Component { 
 
  state = {
    fireFighters:[],
    firstName : "",
    lastName: "",
    fireNumber:"",
    memberSince: "",
    title:"",
    rank:"",
    station:"",
    company:""
  
  };

  componentDidMount() {
    this.loadRoster()
  }

  
  loadRoster = () => {
    console.log("I'm triggered")
    API.getFrontEndRoster()
   .then(res => this.setState({ fireFighters: res.data}))
   .catch(err => console.log(err));
  };

    render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-9">
              <Table>  
                <thead>
                    <tr>
                      <th>FIRE #</th>
                      <th>NAME</th>
                      <th>MEMBER SINCE</th>
                      {/* <th rowSpan = "3"> OFFICERS </th> */}
                    </tr>
                  </thead>
              
                <tbody>
                <tr > 
                    <td colSpan = "3" > OFFICERS</td>
                   </tr>
                {this.state.fireFighters.map(fireFighter =>( 
                   fireFighter.title ? (
                    
                    <tr key={fireFighter._id}>
                      
                       <td>{fireFighter.fire_number}</td>
                       <td>{fireFighter.first_name} {fireFighter.last_name} - {fireFighter.title} </td>
                       <td>{fireFighter.year_started}</td>
        
                    </tr>
                                        
                   ) :(null)
                ))} 
                  <tr > 
                    <td colSpan = "3" > FIRE FIGHTERS</td>
                   </tr>
                   {this.state.fireFighters.map(fireFighter =>( 
                   !fireFighter.title ? (
                    
                    <tr key={fireFighter._id}>
                      
                       <td>{fireFighter.fire_number}</td>
                       <td>{fireFighter.first_name} {fireFighter.last_name} {fireFighter.title} </td>
                       <td>{fireFighter.year_started}</td>
        
                    </tr>
                                        
                   ) :(null)
                ))} 
                </tbody>
              </Table>
           </Col>
        </Row>
      </Container>
    )
  }
}

export default FrontEndRoster;