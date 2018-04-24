import React, { Component } from "react";
import { Table } from 'reactstrap';
import OfficerRoster from "../../components/OfficerRoster";
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
    API.getRoster()
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
                  
                {this.state.fireFighters.map(fireFighter =>( 
                   fireFighter.title ? (
                    <OfficerRoster
                    key={fireFighter._id} 
                    firstName= {fireFighter.first_name}
                    lastName = {fireFighter.last_name}  
                    fireNumber={fireFighter.fire_number}   
                    year={fireFighter.year_started}  
                    title={fireFighter.title}  
                    >
                    </OfficerRoster> ) : (
                      <Table />
                    )
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