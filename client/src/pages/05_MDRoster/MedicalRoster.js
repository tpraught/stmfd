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
    station2:[],
    fireChief:{},
    assistantChief:{}

  };

  componentDidMount() {
    this.loadRoster()
  }

  sortRosterbyStation = (fireFighters) => {

    console.log("Let's sort some fire fighters");
    let companyARoster = [];
    let companyBRoster = [];
    let companyCRoster = [];
    let station2 = [];
    let chief = {};
    let assistantChief = {};

    fireFighters.forEach(fireFighter => {
    
      if (fireFighter.title === "Fire Chief"){
        chief = fireFighter;
      } else if (fireFighter.title === "Assistant Chief") {
        assistantChief = fireFighter; 
      } else if (fireFighter.company === "Company 'A'") {
          companyARoster.push(fireFighter);
      } else if (fireFighter.company === "Company 'B'"){
          companyBRoster.push(fireFighter);
      } else if (fireFighter.company === "Company 'C'"){
        companyCRoster.push(fireFighter);
     } else {
      station2.push(fireFighter);
    }
    })
   
    this.setState({
       companyA: companyARoster,
       companyB:companyBRoster,
       companyC:companyCRoster,
       station2:station2,
       fireChief:chief,
       assistantChief:assistantChief
      });

      console.log("Company A ", this.state.companyA)
      console.log("Company B ", this.state.companyB)
      console.log("Company C ", this.state.companyC)
      console.log("Station #2 ", this.state.station2)
      console.log("Fire Chief", this.state.fireChief)
      console.log("Assistant Chief", this.state.assistantChief)
  }

  loadRoster = () => {
    console.log("I'm triggered")
    API.getFrontEndRoster()
   .then(res => {
     this.setState({ fireFighters: res.data});
     this.sortRosterbyStation(this.state.fireFighters);
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
           </Col>
        </Row>
       
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
                  <td>{this.state.fireChief.first_name} {this.state.fireChief.last_name}</td>
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
                  <td>{this.state.assistantChief.first_name} {this.state.assistantChief.last_name}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

				<Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
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
               		 {this.state.companyA.map(fireFighter =>( 
                    <tr key={fireFighter._id}>
                       <td>{fireFighter.first_name} {fireFighter.last_name}   {fireFighter.title} </td>
                    </tr>
             		   ))} 

										{this.state.companyB.map(fireFighter =>( 
										<tr key={fireFighter._id}>
												<td>{fireFighter.first_name} {fireFighter.last_name}   {fireFighter.title} </td>
										</tr>
           				 ))} 

									{this.state.companyC.map(fireFighter =>( 
										<tr key={fireFighter._id}>
												<td>{fireFighter.first_name} {fireFighter.last_name}   {fireFighter.title} </td>
										</tr>
									))} 
                </tbody>
            </Table>
					</Col>
				</Row> 	

        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Table>  
              <thead>
                <tr>
                  <th>Station #2 </th>
                </tr>
              </thead>
             
						  <tbody>
								{this.state.station2.map(fireFighter =>( 
									<tr key={fireFighter._id}>
										<td>{fireFighter.first_name} {fireFighter.last_name}  {fireFighter.title} </td>
                  </tr>
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