import React, { Component } from "react";
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import heroImages from "../../HeroImages.json";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import EventsTable from "../../components/Events";
import API from "../../utils/API";


class Schedule extends Component { 

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

  sortEventsbyMonth = (events) => {
    console.log("Let's sort some events ", events);
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

    
      // console.log("Company C ", this.state.companyC)
      // console.log("Station #2 ", this.state.station2)
      // console.log("Fire Chief", this.state.fireChief)
      // console.log("Assistant Chief", this.state.assistantChief)

  }

  componentDidMount() {
    this.loadEvents()
  }
  
  loadEvents = () => {
    console.log("Loading Events")
    API.getFrontEndSchedule()
   .then(res => {
      this.setState({ events: res.data});
      this.sortEventsbyMonth(this.state.events);
    })

   .catch(err => console.log(err));
  };
   
  displayEvents = trainingEvent => {

  }
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
                    <tr>
                      <td className="text-center border-0">DATE</td>
                      <td className="text-center border-0">DESCRIPTION</td>
                      <td className="text-center border-0">OFC START</td>
                      <td className="text-center border-0">MTG START</td>
                      <td className="text-center border-0">TRNG START</td>
                      <td className="text-center border-0">DRILL CODE</td>
                      <td className="text-center border-0">LUNCH COMMITTEE</td>
                      </tr>
                  </thead>
                
                  <tbody>
                    <tr className="month"> 
                      <td colSpan="12" className="text-center">JANUARY {this.state.year}
                        </td>
                    </tr>
                    {this.state.January.map(event =>
                        <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">FEBRUARY {this.state.year}
                        </td>
                    </tr>
                    {this.state.February.map(event =>
                        <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">MARCH {this.state.year}
                        </td>
                    </tr>
                    {this.state.March.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 
                    <tr className="month"> 
                      <td colSpan="12" className="text-center">APRIL {this.state.year}
                        </td>
                    </tr>
                    {this.state.April.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">MAY {this.state.year}
                        </td>
                    </tr>
                    {this.state.May.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">JUNE {this.state.year}
                        </td>
                    </tr>
                    {this.state.June.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">JULY {this.state.year}
                        </td>
                    </tr>
                    {this.state.July.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">AUGUST {this.state.year}
                        </td>
                    </tr>
                    {this.state.August.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">SEPTEMBER {this.state.year}
                        </td>
                    </tr>
                    {this.state.September.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">OCTOBER {this.state.year}
                        </td>
                    </tr>
                    {this.state.October.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">NOVEMBER {this.state.year}
                        </td>
                    </tr>
                    {this.state.November.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

                    <tr className="month"> 
                      <td colSpan="12" className="text-center">DECEMBER {this.state.year}
                        </td>
                    </tr>
                    {this.state.December.map(event =>
                      <EventsTable
                          key={event._id}
                          date = {event.date}
                          description = {event.description}
                          officerStartTime = {event.officer_start_time}
                          meetingStartTime = {event.meeting_start_time}
                          trainingStartTime = {event.training_start_time}
                          drillCode = {event.drill_code}
                          lunchCommittee = {event.lunch_committee}
                        />
                    )} 

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
