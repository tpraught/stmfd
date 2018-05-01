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
            <h1>SMFD FIREFIGHTER ROSTER</h1>  
          </div>
          <Container className="pageContent">
            <Row className="justify-content-center">
              <Col sm={{ size: 12 }} md={{ size: 8 }}>
                  <Table className="rosterTable border-0">  
                    <thead >
                        <tr>
                          <th className="text-center">FIRE #</th>
                          <th>NAME</th>
                          <th className="text-center">MEMBER SINCE</th>
                        </tr>
                    </thead>
                  
                    <tbody>
                      <tr > 
                        <td colSpan="3"><h4>OFFICERS</h4> </td>
                      </tr>

                      {this.state.fireFighters.map(fireFighter =>( 
                        fireFighter.title ? (
                        
                          <tr key={fireFighter._id}>
                            <td className="text-center">{fireFighter.fire_number}</td>
                            <td>{fireFighter.first_name} {fireFighter.last_name} - {fireFighter.title} </td>
                            <td className="text-center">{fireFighter.year_started}</td>
                          </tr>

                        ) :(null)
                      ))} 

                    <tr > 
                      <td colSpan = "3" ><h4>FIRE FIGHTERS</h4></td>
                    </tr>

                    {this.state.fireFighters.map(fireFighter =>( 
                      !fireFighter.title ? (
                        
                        <tr key={fireFighter._id}>
                          <td className="text-center">{fireFighter.fire_number}</td>
                          <td>{fireFighter.first_name} {fireFighter.last_name} {fireFighter.title} </td>
                          <td className="text-center">{fireFighter.year_started}</td>
                        </tr>
                                            
                      ) :(null)
                    ))} 

                    </tbody>
                  </Table>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <QuickLinks />
				<Footer />
			</div>
    )
  }
}

export default FrontEndRoster;