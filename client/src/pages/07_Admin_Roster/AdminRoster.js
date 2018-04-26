import React, { Component } from "react";
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import AdminRosterTable from "../../components/AdminRoster";
import AdminHeader from "../../components/AdminHeader";

import EditModal from "../../components/Modal";

// import Button from "../../components/Button";
import {  Col, Row, Container } from "../../components/Grid";

import API from "../../utils/API";

class FireRoster extends Component { 
 
  state = {
    fireFighters:[],
    editing: false,
    currentFireFighter: null, 
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

  saveRecord = (newFireFighter) => {
    //AI call for save
    //set this.state.editig = false
    //reload the page  this.loadRoster()
  }
  
  loadRoster = () => {
    console.log("I'm triggered")
    API.getRoster()
   .then(res => this.setState({ fireFighters: res.data}))
   .catch(err => console.log(err));
  };

  deleteRecord = id => {
    console.log("I'm clicked to delete",id);
    API.deleteRecord(id)
      .then(res => this.loadRoster())
      .catch(err => console.log(err));
  };

  editRecord = (fireFighter) => {
    console.log(fireFighter);
    
    this.setState({
      editing: true,
      currentFireFighter: fireFighter,
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
      <Container fluid>
        <Row>
          <Col size="md-9">

      
          <EditModal
            isOpen = {this.state.editing}
            onSave = {(newFireFighter) => {
              alert(newFireFighter.firstName)
              // API call here to save the data
            }}
           firstName = {this.state.firstName}
           lastName = {this.state.lastName}
           fireNumber = {this.state.fireNumber}
           memberSince = {this.state.memberSince}
           title = {this.state.title}
           rank = {this.state.rank}
           station = {this.state.station} //drop-down values are not populating the fields
           company = {this.state.company}
            onCancel = {() => {
              this.setState({
                editing: false
              })
            }} />
            <Row>
              <Col size="md-9"> 
              <Link to="/admin/add"> 
                <Button outline color="danger">ADD FIREFIGHTER 
                </Button>
               </Link>
               
               </Col> 
           </Row>

      <Table className = "rosterTable">  
       <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Fire #</th>
            <th>Year</th>
            <th>Title</th>
            <th>Rank</th>
            <th>Station</th>
            <th>Company</th>
            <th>Admin</th>
          </tr>
        </thead>
       
        <tbody>
        {this.state.fireFighters.map(fireFighter =>( 
          
            <AdminRosterTable
            key={fireFighter._id} 
            id={fireFighter._id} 
            firstName= {fireFighter.first_name}
            lastName = {fireFighter.last_name}  
            fireNumber={fireFighter.fire_number}   
            year={fireFighter.year_started}  
            title={fireFighter.title}  
            rank={fireFighter.rank}  
            station={fireFighter.station}  
            company={fireFighter.company}
            onEdit={() => this.editRecord(fireFighter)}
            onDelete={() => this.deleteRecord(fireFighter._id)}
            >
            </AdminRosterTable>  
            
        
        ))}
        </tbody>
      </Table>
      </Col>
        </Row>
      </Container>

      </div>
    )
  }
}

export default FireRoster;