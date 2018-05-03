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


class Schedule extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[5].id}
      src  = {heroImages[5].image}
      alt = {heroImages[5].name}
      />
      <Container className="pageContent">
            <Row className="justify-content-center">
              <Col sm={{ size: 12 }}>
                <Table className="eventSchedule border-0">  
                  <thead>
                      <td className="text-center border-0">DATE</td>
                      <td className="text-center border-0">DESCRIPTION</td>
                      <td className="text-center border-0">OFC START</td>
                      <td className="text-center border-0">MTG START</td>
                      <td className="text-center border-0">TRNG START</td>
                      <td className="text-center border-0">DRILL CODE*</td>
                      <td className="text-center border-0">LUNCH COMMITTEE</td>
                  </thead>
                
                  <tbody>
                    <tr className="month"> 
                      <td colSpan="3">JANUARY 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.January.map(event =>
                      <tr key={event._id}>
                        <td>{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td>{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">FEBRUARY 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.February.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}      */}

                    <tr className="month"> 
                      <td colSpan="3">MARCH 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.March.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">APRIL 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.April.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">MAY 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.May.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">JUNE 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.June.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">JULY 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.July.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">AUGUST 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.August.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">SEPTEMBER 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.September.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">OCTOBER 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.October.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">NOVEMBER 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.November.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                    <tr className="month"> 
                      <td colSpan="3">DECEMBER 
                        {/* {this.state.year} */}
                        </td>
                    </tr>
                    {/* {this.state.December.map(event =>
                      <tr key={event._id}>
                        <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                        <td>{event.description} </td>
                        <td className="text-center">{event.time}</td>
                      </tr>
                    )}  */}

                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default Schedule;
