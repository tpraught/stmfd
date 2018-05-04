import React, { Component } from "react";
import { 
  Row,
  Col,
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  Button 
} from 'reactstrap';
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";


class History extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[4].id}
      src  = {heroImages[4].image}
      alt = {heroImages[4].name}
      />
      <Wrapper>
        <div className="pageTitle">
          <h1>SMFD History</h1>  
        </div>
        <div className="pageContent">
          <span className="float-right pl-5">
              <img src="../../../assets/images/04_History/04_cityHall.png" alt="Firefighters 1953" width="425" />
              <p className="small font-italic text-center">Former creamery building converted to the city offices and fire station</p>
          </span>
					<p>In 1917, the St. Michael Fire Department was estabilished and purchased their first truck, a "combination fire engine." Prior to 1917, and the organization of the fire department, the village of St. Michael had a "hose house", which held the fire equipment and a wagon with an apparatus for pumping water. It was torn down around 1900 and the fire barn/village hall was built and used from about 1900 to 1971. At that time, the city purchased the large creamery from the St. Michael Cooperative Creamery due to shortage of space. Though the fire department no longer used the old fire barn, it stood in St. Michael until 2004.</p>
          <p>Still today, the St. Michael Fire Deparment owns one of their earliest fire trucks&mdash;a 1929 Chevrolet named "Suzy". The old Chevy is a combination ladder truck and side pumper, but didn't have the ability to carry any water. Suzy continues on and can be seen every once in awhile at one of the parades around town.</p>
          <div className="border border-secondary pt-3 pr-3 pl-3 pb-2 text-center">
            <p>For more history on the St. Michael Fire Department, and the city as a whole, check out <a href="http://www.saintmichaelbook.com/"  target="_blank" rel="noopener noreferrer">Faith, Family & Farming</a> by Bob Zahler.</p>
          </div>
          <Row className="mb-5">
            <Col sm="12" md="6" className="mt-5">
              <Card>
                <CardImg top width="100%" src="../../../assets/images/04_History/04_firefighters1953.png" alt="Card image cap" />
                <CardBody>
                  <CardText>Members of the fire department with their new 1952 International fire truck (1953) </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" className="mt-5">
              <Card>
                <CardImg top width="100%" src="../../../assets/images/04_History/04_apparatus.png" alt="Card image cap" />
                <CardBody>
                  <CardText>St. Michael Fire Department's fire apparatuses</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-4">
              <Card>
                <CardImg top width="100%" src="../../../assets/images/04_History/04_apparatus1953.png" alt="Card image cap" />
                <CardBody>
                  <CardText>St. Michael firefighters standing along side the fire trucks (1953).</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default History;
