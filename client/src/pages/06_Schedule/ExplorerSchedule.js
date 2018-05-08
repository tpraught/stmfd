import React, { Component } from "react";
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import ExplorerEventsTable from "../../components/ExplorerEvents";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import API from "../../utils/API";


class ExplorerSchedule extends Component { 
   
  state = {
    events:[],
    year: "",
    January:[],
    February:[],
    March:[],
    April:[],
    May:[],
    June:[],
    July:[],
    August:[],
    September:[],
    October:[],
    November:[],
    December:[],
  };

  sortExplorerEventsbyMonth = (events) => {
    let January = [];
    let February = [];
    let March = [];
    let April = [];
    let May = [];
    let June = [];
    let July = [];
    let August = [];
    let September = [];
    let October = [];
    let November = [];
    let December = [];
    let scheduleYear = events[0].year;

    events.forEach(event=> {
        if (event.month === "January") {
            January.push(event);
        } else if (event.month === "February"){
          February.push(event);
        } else if (event.month === "March"){
          March.push(event);
        } else if (event.month === "April"){
          April.push(event);
        } else if (event.month === "May"){
          May.push(event);
        } else if (event.month === "June"){
          June.push(event);
        } else if (event.month === "July"){
          July.push(event);
        }  else if (event.month === "August"){
          August.push(event);
        } else if (event.month === "September"){
          September.push(event);
        }  else if (event.month === "October"){
          October.push(event);
        }  else if (event.month === "November"){
          November.push(event);
        }else {
          December.push(event);
        }
    })
   
    this.setState({
       year: scheduleYear,
       January: January,
       February:February,
       March:March,
       April:April,
       May: May,
       June:June,
       July:July,
       August:August,
       September: September,
       October:October,
       November:November,
       December:December
      });
  }

  componentDidMount() {
    this.loadExplorerEvents()
  }
  
  loadExplorerEvents = () => {
    API.getExplorerFrontEndSchedule()
   .then(res => {
      this.setState({ events: res.data});
      this.sortExplorerEventsbyMonth(this.state.events);
    })
   .catch(err => console.log(err));
  };

  displayEvents = trainingEvent => {
    return(
       <ExplorerEventsTable
          key={trainingEvent._id}
          day_of_week = {trainingEvent.day_of_week}
          month = {trainingEvent.month}
          date = {trainingEvent.date}
          description = {trainingEvent.description}
          eventType = {trainingEvent.event_type}
          time = {trainingEvent.time}
      />               
    )
  }

  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <Hero 
					id  = {heroImages[6].id}
					src  = {heroImages[6].image}
					alt = {heroImages[6].name}
					/> 

        <Wrapper>
        <div className="pageTitle">
            <h1>EXPLORER POST 3172 TRAINING SCHEDULE</h1>  
          </div>
          <Container className="pageContent">
            <Row className="justify-content-center">
              <Col sm={{ size: 12 }}>
                <Table className="eventSchedule border-0">  
                  <thead>
                    <tr>
                      <td width="25%" className="text-center border-0">DATE</td>
                      <td width="40%" className="text-left border-0">DESCRIPTION</td>
                      <td width="15%" className="text-center border-0">EVENT TYPE</td>
                      <td width="20%" className="text-center border-0">TIME</td>
                      </tr>
                  </thead>
                
                  <tbody>
                    <tr className="month text-center"> 
                      <td colSpan="4">JANUARY {this.state.year}</td>
                    </tr>
                    {this.state.January.map(event =>
                      this.displayEvents(event)
                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">FEBRUARY {this.state.year}</td>
                    </tr>
                    {this.state.February.map(event =>
                      this.displayEvents(event)

                    )}     

                    <tr className="month text-center"> 
                      <td colSpan="4">MARCH {this.state.year}</td>
                    </tr>
                    {this.state.March.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">APRIL {this.state.year}</td>
                    </tr>
                    {this.state.April.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">MAY {this.state.year}</td>
                    </tr>
                    {this.state.May.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">JUNE {this.state.year}</td>
                    </tr>
                    {this.state.June.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">JULY {this.state.year}</td>
                    </tr>
                    {this.state.July.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">AUGUST {this.state.year}</td>
                    </tr>
                    {this.state.August.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">SEPTEMBER {this.state.year}</td>
                    </tr>
                    {this.state.September.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">OCTOBER {this.state.year}</td>
                    </tr>
                    {this.state.October.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">NOVEMBER {this.state.year}</td>
                    </tr>
                    {this.state.November.map(event =>
                      this.displayEvents(event)

                    )} 

                    <tr className="month text-center"> 
                      <td colSpan="4">DECEMBER {this.state.year}</td>
                    </tr>
                    {this.state.December.map(event =>
                      this.displayEvents(event)

                    )} 

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

export default ExplorerSchedule;

