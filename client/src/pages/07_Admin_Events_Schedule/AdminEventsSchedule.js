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
    console.log("I'm loading the scehdule")
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
    API.deleteExplorerEvent(id)
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
                  <Button className="float-right redButton addButton Bborder-0">ADD A TRAINING EVENT</Button>
                </Link>

                <Table className = "adminTable">  
                  <thead>
                      <tr>
                        <th>DATE</th>
                        <th>MONTH</th>
                       <th>YEAR</th>
                       <th>MEETING START TIME</th>
                       <th>OFFICER START TIME</th>
                        <th>TRAINING START TIME</th>
                        <th>DRILL CODE</th>
                        <th>LUNCH COMMITTEE</th>
                        <th>DESCRIPTION</th>
                       
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