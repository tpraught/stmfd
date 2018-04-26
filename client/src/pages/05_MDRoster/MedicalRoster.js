import React, { Component } from "react";
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";

class MedicalRoster extends Component { 
 
  state = {
    fireFighters:[],
    companyA:[],
    companyB:[],
    companyC:[],
    station2:[]
  };

  componentDidMount() {
    this.loadRoster()
  }

  // sortRosterbyStation = (firefighters) => {

  //   console.log("Let's sort some fire fighters");
    
  //   firefighters.map(fireFighter => {
    
  //     if (fireFighter.company === "Company A") {
  //       let AcompanyRoster = [];
  //         AcompanyRoster.push(fireFighter);
  //       this.setState({ companyA: AcompanyRoster});
  //       console.log(this.state.companyA);
  //     } else if (fireFighter.company === "Company B"){
  //         console.log("Company B")
  //     } else if (fireFighter.company === "Company C"){
  //       console.log("Company C")
  //   } else {

  //   }
  //   })

  // }

  loadRoster = () => {
    console.log("I'm triggered")
    API.getFrontEndRoster()
   .then(res => {
     this.setState({ fireFighters: res.data});
    //  this.sortRosterbyStation(this.state.fireFighters);
    })
   .catch(err => console.log(err));
  };

    render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-9">
            <h1>SMFD MEDICAL RESPONDER ROSTER</h1>
            <hr/>
            <p>* 10:00 p.m. - 5 a.m | Sunday Evenings to Friday Mornings</p>
        <Row>

          <Col sm={{ size: 'auto', offset: 1 }}>
            <Table>
              <thead>
                <tr>
                  <th>CHIEF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Steve Hosch</td>
                </tr>
              </tbody>
            </Table>
            </Col>
            <Col sm={{ size: 'auto', offset: 1 }}>
            <Table>
              <thead>
                <tr>
                  <th>ASSISTANT CHIEF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gordy Dehmer</td>
                </tr>
              </tbody>

            </Table>
            </Col>

            </Row>

              <Table>  
                <thead>
                <tr > 
                    <td colSpan = "3" >STATION #1 </td>
                   </tr>
                    <tr>
                      <th>COMPANY A
                        <tr>January | April</tr>
                        <tr>July | October</tr>
                      </th>
                      <th>COMPANY B
                        <tr>February | May</tr>
                        <tr>August | November</tr>
                      </th>
                      <th>COMPANY C
                        <tr>March | June</tr>
                        <tr>September | December</tr>
                      </th>
                    </tr>
                  </thead>
              
                <tbody>
            
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

export default MedicalRoster;