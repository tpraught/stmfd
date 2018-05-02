import React, { Component } from "react";
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import AdminExplorerTable from "../../components/AdminExplorer";
import AdminHeader from "../../components/AdminHeader";
import EditModal from "../../components/Modal";
import Footer from "../../components/Footer";

import { Col, Row } from "../../components/Grid";

import API from "../../utils/API";

class AdminExplorerSchedule extends Component { 
 
  state = {
    events:[],
    editing: false,
    currenEvent: null, 
    id: "",
    date : "",
    weekDay: "",
    description:"",
    time: "",
  };

  componentDidMount() {
    this.loadEvents()
  }

  saveRecord = (newFireFighter) => {
  //  console.log("I'm a new firefighter - 38", newFireFighter);
      this.setState({
        editing: false,
      })

    API.editRecord({
      id: newFireFighter.id,
      first_name: newFireFighter.firstName,
      last_name: newFireFighter.lastName,
      fire_number: newFireFighter.fireNumber,
      year_started: newFireFighter.memberSince,
      title: newFireFighter.title,
      rank: newFireFighter.rank,
      station: newFireFighter.station,
      company: newFireFighter.company
    })
   
    this.loadEvents();
  }
  
  loadEvents = () => {
    console.log("I'm triggered")
    API.getExplorerEvents()
   .then(res => this.setState({ events: res.data}))
   .catch(err => console.log(err));
  };

  deleteRecord = id => {
    console.log("I'm clicked to delete explorer event",id);
    API.deleteExplorerEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  editRecord = (fireFighter) => {
    console.log(fireFighter);
    
    this.setState({
      editing: true,
      currentFireFighter: fireFighter,
      id: fireFighter._id,
      firstName:fireFighter.first_name,
      lastName:fireFighter.last_name,
      fireNumber:fireFighter.fire_number,
      memberSince:fireFighter.year_started,
      title:fireFighter.title,
      rank:fireFighter.rank,
      station:fireFighter.station,
      company:fireFighter.company
    })
  }
   
 
  render() {

    return (
      <div> 
        <AdminHeader/>
        <div className="col-md-8 offset-md-2 mb-5">
          <Row>
            <Col size="md-12">

              <EditModal
                currentFireFighter = {this.state.currentFireFighter}
                isOpen = {this.state.editing}
                onSave = { (newFireFighter) => { this.saveRecord(newFireFighter); } }
                id = {this.state.id}
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                fireNumber = {this.state.fireNumber}
                memberSince = {this.state.memberSince}
                title = {this.state.title}
                rank = {this.state.rank}
                station = {this.state.station} 
                company = {this.state.company}
                onCancel = {() => {
                  this.setState({
                    editing: false
                  })
                }} />
                
                <Link to="/admin/explorerform"> 
                  <Button className="float-right redButton addButton Bborder-0">ADD EXPLORER EVENT</Button>
                </Link>

                <Table className = "adminTable">  
                  <thead>
                      <tr>
                        <th>DATE</th>
                        <th>MONTH</th>
                        <th>WEEK DAY</th>
                        <th>DESCRIPTION</th>
                        <th>TIME</th>
                        <th></th>
                      </tr>
                  </thead>
        
                  <tbody>
                    {this.state.events.map(events =>( 
                      
                      <AdminExplorerTable
                      key={events._id} 
                      id={events._id} 
                      date= {events.date}
                      month= {events.month}
                      weekDay = {events.day_of_week}  
                      description = {events.description}  
                      time={events.time}   
                     onEdit={() => this.editRecord(events)}
                      onDelete={() => this.deleteRecord(events._id)}
                      >
                      </AdminExplorerTable>  
                    
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

export default AdminExplorerSchedule;