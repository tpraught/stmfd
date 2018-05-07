import React, { Component } from "react";
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
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
      } else if (fireFighter.company === "Company A") {
          companyARoster.push(fireFighter);
      } else if (fireFighter.company === "Company B"){
          companyBRoster.push(fireFighter);
      } else if (fireFighter.company === "Company C"){
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
  };

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
      <div>
        <Header/>
        <Nav/>
        <Hero 
          id  = {heroImages[5].id}
          src  = {heroImages[5].image}
          alt = {heroImages[5].name}
          /> 

        <Wrapper>
          <div className="pageTitle">
            <h1>MEDICAL RESPONDER ROSTER</h1>  
          </div>
          <Container className="pageContent mb-5">
            <p className="small mb-2 text-center">* 10:00 p.m. - 5 a.m | Sunday Evenings to Friday Mornings</p>
            <p className="small mb-5 text-center">* If on vacation, it's the member's responsibility to find a replacement</p>

            <Col sm={{ size: 12 }}>
              <Row className="justify-content-center">
                <Col sm={{ size: 6 }} md={{ size: 4 }}>
                  <Table className="officerTable border-0">
                    <thead>
                      <tr>
                        <th className="text-center">CHIEF</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">{this.state.fireChief.first_name} {this.state.fireChief.last_name}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col sm={{ size: 6 }} md={{ size: 4 }}>
                  <Table className="officerTable">
                    <thead>
                      <tr>
                        <th className="text-center">ASSISTANT CHIEF</th>
                      </tr>
                    </thead>
              
                    <tbody>
                      <tr>
                        <td className="text-center">{this.state.assistantChief.first_name} {this.state.assistantChief.last_name}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>

            <Col sm={{ size: 12 }}>
              <Row className="justify-content-center mt-5">
                <Col sm={{ size: 12 }}>
                  <Table className="medRosterTable mb-0">  
                    <thead>
                      <tr className="station"> 
                        <td colSpan="3">STATION #1 </td>
                      </tr>
                    </thead>
                  </Table>
                </Col>
              </Row>
              <Row className="pl-3 pr-3">
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="medRosterTitle borderL p-3">
                  <div className="company">
                    <strong>COMPANY A</strong><br />
                    <span>January | April</span><br />
                    <span>July | October</span>
                  </div>
                </Col>
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="medRosterTitle borderM p-3">
                  <div className="company">
                    <strong>COMPANY B</strong><br />
                    <span>February | May</span><br />
                    <span>August | November</span>
                  </div>
                </Col>
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="medRosterTitle borderR p-3">
                  <div className="company">
                    <strong>COMPANY C</strong><br />
                    <span>March | June</span><br />
                    <span>September | December</span>
                  </div>
                </Col>
              </Row>
              <Row className="pl-3 pr-3">
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="medRoster borderL">
                    {this.state.companyA.map(fireFighter =>(
                    <Row key={fireFighter._id}>
                      {fireFighter.first_name} {fireFighter.last_name} <span className="text-muted small">{fireFighter.title}</span>
                    </Row>
                    ))}
                </Col>
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="medRoster borderM">
                  {this.state.companyB.map(fireFighter =>( 
                  <Row key={fireFighter._id}>
                    {fireFighter.first_name} {fireFighter.last_name} <span className="text-muted small">{fireFighter.title}</span>
                  </Row>
                  ))}
                </Col>
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="medRoster borderR">
                  {this.state.companyC.map(fireFighter =>( 
                  <Row key={fireFighter._id}>
                    {fireFighter.first_name} {fireFighter.last_name} <span className="text-muted small">{fireFighter.title}</span>
                  </Row>
                  ))}
                </Col>
              </Row>
            </Col>

            <Col sm={{ size: 12 }}>
              <Row className="justify-content-center mt-5">
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="p-0">
                  <Table className="medRosterTable mb-0">  
                    <thead>
                      <tr className="station"> 
                        <th>Station #2 </th>
                      </tr>
                    </thead>
                  </Table>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={{ size: 12 }} md={{ size: 4 }} className="medRoster borderR borderL">
                  {this.state.station2.map(fireFighter =>( 
                    <Row key={fireFighter._id}>
                      {fireFighter.first_name} {fireFighter.last_name} <span className="text-muted small">{fireFighter.title}</span>
                    </Row>
                  ))} 
                </Col>
              </Row>
            </Col>
          </Container>
        </Wrapper>
        <QuickLinks />
				<Footer />
      </div>
    )
  }
}

export default MedicalRoster;