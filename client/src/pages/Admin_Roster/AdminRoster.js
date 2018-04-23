import React, { Component } from "react";
import { Table } from 'reactstrap';
import RosterTable from "../../components/Roster";
import EditModal from "../../components/Modal";
// import Button from "../../components/Button";
import { Col, Row, Container } from "../../components/Grid";

import API from "../../utils/API";

class FireRoster extends Component { 
 
  state = {
    fireFighters:[],
    editing: false,
    currentFireFighter: null
  
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
    console.log(fireFighter)
    this.setState({
      editing: true,
      currentFireFighter: fireFighter
    })
  }
  modifyRecord = (e,id) =>{
    let buttonValue = e.target.value
    if (buttonValue ==="delete") {
      this.deleteRecord(id);
    } else {
      this.EditModal.toggle();//React can't access the child component's methods
    } 

  }
  
 
    render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-9">
          <EditModal
            isOpen= {this.state.editing} //Add an onSave method that will be passed to Modal's button to replace {this.toggle}
            //Ad an on Cancel to toggle the sate and close the modal
            //pass the folowong props: fire fighter object, isOpen, onSave,onCancel
          />

          <EditModal
            isOpen = {this.state.editing}
            onSave = {(newFireFighter) => {
              alert(newFireFighter.firstName)
              // API call here to save the data
            }}
            onCancel = {() => {
              this.setState({
                editing: false
              })
            }} />
      <Table>  
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
          
            <RosterTable
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
            </RosterTable>  
            
        
        ))}
        </tbody>
      </Table>
      </Col>
        </Row>
      </Container>
    )
  }
}

export default FireRoster;