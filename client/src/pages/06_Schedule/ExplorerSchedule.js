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
    console.log(scheduleYear);

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

      console.log("year ", this.state.year)
      console.log("March", this.state.March)
      // console.log("Company C ", this.state.companyC)
      // console.log("Station #2 ", this.state.station2)
      // console.log("Fire Chief", this.state.fireChief)
      // console.log("Assistant Chief", this.state.assistantChief)


  }

  componentDidMount() {
    this.loadExplorerEvents()
  }
  
  loadExplorerEvents = () => {
    console.log("Loading Explorer Events")
    API.getExplorerFrontEndSchedule()
   .then(res => {
      this.setState({ events: res.data});
      this.sortExplorerEventsbyMonth(this.state.events);
    })

   .catch(err => console.log(err));
  };

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
              <Col sm={{ size: 12 }} md={{ size: 8 }}>
                  <Table className="rosterTable border-0">  
                    <thead >
                       
                    </thead>
                  
                    <tbody>
                      <tr > 
                        <td colSpan="3"><h4>JANUARY {this.state.year}</h4> </td>
                      </tr>

                      {this.state.January.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                     <tr > 
                        <td colSpan="3"><h4>FEBRUARY {this.state.year}</h4> </td>
                      </tr>

                      {this.state.February.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )}     

                       <tr > 
                        <td colSpan="3"><h4>MARCH {this.state.year}</h4> </td>
                      </tr>

                      {this.state.March.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>APRIL {this.state.year}</h4> </td>
                      </tr>

                      {this.state.April.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>MAY {this.state.year}</h4> </td>
                      </tr>

                      {this.state.May.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>JUNE {this.state.year}</h4> </td>
                      </tr>

                      {this.state.June.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>JULY {this.state.year}</h4> </td>
                      </tr>

                      {this.state.July.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>AUGUST {this.state.year}</h4> </td>
                      </tr>

                      {this.state.August.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>SEPTEMBER {this.state.year}</h4> </td>
                      </tr>

                      {this.state.September.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>OCTOBER {this.state.year}</h4> </td>
                      </tr>

                      {this.state.October.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>NOVEMBER {this.state.year}</h4> </td>
                      </tr>

                      {this.state.November.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
                      )} 

                       <tr > 
                        <td colSpan="3"><h4>DECEMBER {this.state.year}</h4> </td>
                      </tr>

                      {this.state.December.map(event =>
                        
                          <tr key={event._id}>
                            <td className="text-center">{event.day_of_week} {event.month}, {event.date}</td>
                            <td>{event.description} </td>
                            <td className="text-center">{event.time}</td>
                          </tr>
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

