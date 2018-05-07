import React, { Component } from "react";
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import AdminEventsTable from "../../components/AdminEvents";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import { Col, Row } from "../../components/Grid";
import API from "../../utils/API";

class AdminEventsSchedule extends Component { 
 
  state = {
    events:[]
    
  };

  componentDidMount() {
    this.loadEvents()
  }

   
  loadEvents = () => {
    API.getEventsSchedule()
   .then(res => 
    {
      this.setState({ events: res.data});
      console.log(res.data);
    })
   .catch(err => console.log(err));
  };

  deleteRecord = id => {
    console.log("I'm clicked to delete explorer event",id);
    API.deleteTrainingEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

     
 
  render() {

    return (
      <div> 
        <AdminHeader/>
        <div className="col-md-8 offset-md-2 mb-5">
          <Row>
            <Col size="md-12">
                
                <Link to="/admin/trainingform"> 
                  <Button className="float-right redButton addButton Bborder-0">ADD MEETING/TRAINING</Button>
                </Link>

                <Table className = "adminTable">  
                  <thead>
                      <tr>
                        <th>DATE</th>
                        <th>DESCRIPTION</th>
                        <th className="text-center">MTG START</th>
                        <th className="text-center">OFC START</th>
                        <th className="text-center">TRNG START</th>
                        <th className="text-center">DRILL CODE</th>
                        <th className="text-center">STANDARD</th>
                        <th className="text-center">LUNCH COMMITTEE</th>                  
                        <th></th>
                      </tr>
                  </thead>
        
                  <tbody>
                    {this.state.events.map(event =>( 
                      
                      <AdminEventsTable
                      key={event._id} 
                      id={event._id} 
                      date= {event.date}
                      month= {event.month}
                      year= {event.year}
                      officerStartTime = {event.officer_start_time}
                      meetingStartTime ={event.meeting_start_time}
                     trainingStartTime = {event.training_start_time}
                      drillCode = {event.drill_code}
                      lunchCommittee = {event.lunch_committee}
                     standard = {event.standard}  
                      description = {event.description}  
                      onDelete={() => this.deleteRecord(event._id)}
                      >
                      </AdminEventsTable>  
                    
                    ))}
                  </tbody>
                </Table>
            </Col>
          </Row>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default AdminEventsSchedule;